import React from "react";
import { useRepositoryStore } from "../states/repository";
import CollapsableBigCard from "./CollapsableBigCard";
import { Bar } from "react-chartjs-2";



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
          top: 25,
          bottom: 0
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
              autoSkip: true,
          },
      }],
      yAxes: [{
          ticks: {
              min: 0, 
              //max: maxCount,
              maxTicksLimit: 5,
              padding: 10,
              // Include a dollar sign in the ticks
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
          label: function(tooltipItem, chart) {
              return tooltipItem.yLabel + "개";
          }
      }
  },
};


function getTimeLabels(chatCounts, timeSize) {
  return chatCounts.map((_, index) => index);
}


function getChatCountByTime(repository) {
  const timeSize = 60;  // Count in every minute
  const chatCounts = repository.getCountsByRelativeTime(timeSize);
  const timeLabels = getTimeLabels(chatCounts, timeSize);
  //console.log("counts:" + counts);
  //const maxCount = counts.reduce((prev, curr) => Math.max(prev, curr));
  return [timeLabels, chatCounts];
}


export default function ChatCountTimeSeriesCard(props) {
  const currentRepo = useRepositoryStore(state => state.repository);
  let chartComponent = null;
  if(currentRepo !== null) {
    const data = Object.assign({}, chartData);
    const [xLabels, yValues] = getChatCountByTime(currentRepo);
    data.labels = xLabels;
    data.datasets[0].data = yValues;

    chartComponent = <Bar data={data} options={chartOptions} />
  }
  return (
    <CollapsableBigCard title={props.title} columnSizes="col-12" collapsableBodyId="chat-time-series-id">
      <div className="chart-area">
        {chartComponent}
      </div>
    </CollapsableBigCard>
  )
}