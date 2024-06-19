"use client"
import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import ApexCharts, { ApexOptions } from 'apexcharts';

// Define types for the data points
interface DataPoint {
  x: number;
  y: number;
}

// Mock data and functions
let lastDate: number = new Date().getTime();
const XAXISRANGE: number = 777600000; // 9 days in milliseconds

let data1: DataPoint[] = Array.from({ length: 10 }, (_, i) => ({
  x: lastDate - XAXISRANGE + i * 86400000, // 1 day in milliseconds
  y: Math.floor(Math.random() * (90 - 10 + 1)) + 10,
}));

let data2: DataPoint[] = Array.from({ length: 10 }, (_, i) => ({
  x: lastDate - XAXISRANGE + i * 86400000, // 1 day in milliseconds
  y: Math.floor(Math.random() * (90 - 10 + 1)) + 10,
}));

const getNewSeries = (
  baseval: number,
  yrange: { min: number; max: number }
) => {
  const newDate = baseval + 86400000; // 1 day in milliseconds
  const newData1 = {
    x: newDate,
    y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min,
  };
  const newData2 = {
    x: newDate,
    y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min,
  };

  // Push new data points
  data1.push(newData1);
  data2.push(newData2);

  // Filter data points to ensure data within the defined range
  data1 = data1.filter((d) => d.x >= baseval - XAXISRANGE);
  data2 = data2.filter((d) => d.x >= baseval - XAXISRANGE);

  lastDate = newDate;
};

const ApexLineChart: React.FC = () => {
  const [series, setSeries] = useState<{ data: DataPoint[] }[]>([
    { data: data1.slice() },
    { data: data2.slice() },
  ]);

  const [options, setOptions] = useState<ApexOptions>({
    chart: {
      id: 'realtime',
      height: 350,
      type: 'line' as const,
      animations: {
        enabled: true,
        easing: 'linear' as const,
        dynamicAnimation: {
          speed: 1000,
        },
      },
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth' as const,
    },
    markers: {
      size: 0,
    },
    grid: {
        show: false,
    },
    xaxis: {
      type: 'datetime' as const,
      range: XAXISRANGE,
      axisBorder: {
        show: false
    }
    },
    yaxis: {
      max: 100,
      show: false,
    },
    legend: {
      show: false,
    },
  });

  useEffect(() => {
    const interval = window.setInterval(() => {
      getNewSeries(lastDate, {
        min: 10,
        max: 90,
      });

      setSeries([
        { data: data1.slice() },
        { data: data2.slice() },
      ]); // Update state to trigger re-render

      setOptions((prevOptions) => ({
        ...prevOptions,
        xaxis: {
          ...prevOptions.xaxis,
          min: data1[0]?.x,
          max: data1[data1.length - 1]?.x,
        },
      }));

      ApexCharts.exec('realtime', 'updateSeries', [
        { data: data1 },
        { data: data2 },
      ]);
    }, 1000);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <div id="chart">
        <ReactApexChart options={options} series={series} type="line" width={"100%"} height={350} />
      </div>
    </div>
  );
};

export default ApexLineChart;
