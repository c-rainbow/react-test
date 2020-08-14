import React from "react";
import { useRepositoryStore } from "../states/repository";
import CollapsableBigCard from "./CollapsableBigCard";
import { Bar } from "react-chartjs-2";
import { getTimeDisplayString } from "../util/timeUtil";



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
              autoSkip: false,
              callback: function(value, index, values) {
                if(value % 1800 === 0) {
                  return getTimeDisplayString(value);
                }
                return "";
              }
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
          title: null,  // To be filled later
          label: function(tooltipItem, chart) {
              return tooltipItem.yLabel + "개";
          }
      }
  },
};


function getTimeRange(timeSize) {
  return function(tooltipItems) {
    const relativeSecond = tooltipItems[0].xLabel;
    const startTimeDisplay = getTimeDisplayString(relativeSecond);
    const endTimeDisplay = getTimeDisplayString(relativeSecond + timeSize - 1);
    return `${startTimeDisplay}-${endTimeDisplay}`;
  }
}


function getTimeLabels(chatCounts, timeSize) {
  return chatCounts.map((_, index) => index * timeSize); //getTimeDisplayString(index * timeSize));
}


function getChatCountByTime(repository, timeSize) {
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
    const timeSize = 60;  // Count every minute
    const data = Object.assign({}, chartData);
    const [xLabels, yValues] = getChatCountByTime(currentRepo, timeSize);
    data.labels = xLabels;
    data.datasets[0].data = yValues;
    const options = Object.assign({}, chartOptions);
    options.tooltips.callbacks.title = getTimeRange(timeSize);

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