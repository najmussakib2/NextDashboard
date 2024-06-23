"use client"

import React from "react";
import Chart from "react-apexcharts";

interface DataItem {
  name: string;
  quantity: number;
}

const ApexPieChart: React.FC = () => {
  const data: DataItem[] = [
    {
      name: "",
      quantity: 30,
    },
    {
      name: "",
      quantity: 8,

    },
    {
      name: "",
      quantity: 10,
    },
  ];

  let names: string[] = [];
  let quantities: number[] = [];
  data.forEach(function (n: DataItem) {
    names.push(n.name);
    quantities.push(n.quantity);
  });

  return (
    <Chart
      type="pie"
      series={quantities}
      options={{
        labels: names,
        legend: {
          show: false,
          position: "bottom"
        },
        colors: [ "#826AF9","#6ad2ff","#eff4fb"]
      }}
    />
  );
}

export default ApexPieChart;
