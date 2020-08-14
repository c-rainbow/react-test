import React from "react";
import { useRepositoryStore } from "../states/repository";
import { Bar } from 'react-chartjs-2';
import CollapsableBigCard from "./CollapsableBigCard";


const chartData = {
  labels: [],
  datasets: [{
    label: "",
    backgroundColor: "#4e73df",
    hoverBackgroundColor: "#2e59d9",
    borderColor: "#4e73df",
    data: [],
  }],
};


const chartOptions = {
  maintainAspectRatio: false,
  layout: {
    padding: {
      left: 10,
      right: 25,
      top: 20,
      bottom: 10
    }
  },
  scales: {
    xAxes: [{
      gridLines: {
        display: false,
        drawBorder: false
      },
      ticks: {
        maxTicksLimit: 6,
        autoSkip: false,
      },
    }],
    yAxes: [{
      ticks: {
        min: 0, 
        //max: maxCount,
        maxTicksLimit: 5,
        padding: 10,
        callback: function(value, index, values) {
          return value + "개";
        }
      },
      gridLines: {
        color: "rgb(234, 236, 244)",
        zeroLineColor: "rgb(234, 236, 244)",
        drawBorder: false,
        borderDash: [2],
        zeroLineBorderDash: [2]
      }
    }],
  },
  legend: {
    display: false
  },
  tooltips: {
    titleMarginBottom: 10,
    titleFontColor: '#6e707e',
    titleFontSize: 14,
    backgroundColor: "rgb(255,255,255)",
    bodyFontColor: "#858796",
    borderColor: '#dddfeb',
    borderWidth: 1,
    xPadding: 15,
    yPadding: 15,
    displayColors: false,
    caretPadding: 10,
    callbacks: {
      title: null,  // To be filled by getTooltipTitleCallback()
      label: function(tooltipItem, chart) {
        return tooltipItem.yLabel + "개";
      }
    }
  },
};


function getTooltipTitleCallback(emoteNames) {
  return function(tooltipItems, chart) {
    const tooltipItem = tooltipItems[0];
    return emoteNames[tooltipItem.index];
  };
}

function getEmoteLabelPlugins(imageUrls) {
  return [{
    afterDraw: chart => {      
      const ctx = chart.chart.ctx; 
      const xAxis = chart.scales['x-axis-0'];
      const yAxis = chart.scales['y-axis-0'];
      xAxis.ticks.forEach((_, index) => {  
        const x = xAxis.getPixelForTick(index);      
        const image = new Image();
        image.src = imageUrls[index];
        ctx.drawImage(image, x - 12, yAxis.bottom + 5);
      });      
    }
  }]
}


function getEmotesData(repository) {
  const topEmotes = repository.getTopEmotes(20);
  const counts = topEmotes.map((ec) => ec.count);
  const urls = topEmotes.map(ec => ec.emote.getImageUrl());
  const plugins = getEmoteLabelPlugins(urls);
  
  const options = Object.assign({}, chartOptions);
  const names = topEmotes.map(ec => ec.emote.name);
  options.tooltips.callbacks.title = getTooltipTitleCallback(names);

  const xLabels = new Array(names.length).fill("");

  return [xLabels, counts, options, plugins];
}


export default function TopEmotesChartCard(props) {
  const currentRepo = useRepositoryStore(state => state.repository);
  let chartComponent = null;
  if(currentRepo !== null) {
    const data = Object.assign({}, chartData);
    const [xLabels, yValues, options, plugins] = getEmotesData(currentRepo);
    data.labels = xLabels;
    data.datasets[0].data = yValues;
    chartComponent = <Bar data={data} options={options} plugins={plugins} redraw={true} />
  }
  return (
    <CollapsableBigCard title={props.title} columnSizes="col-12" collapsableBodyId="top-emotes-chart-id">
      <div className="chart-area">
        {chartComponent}
      </div>
    </CollapsableBigCard>
  )
}