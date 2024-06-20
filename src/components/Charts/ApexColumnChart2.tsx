"use client"
import { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

interface Series {
    name: string;
    data: number[];
}

const ApexColumnChart2: React.FC = () => {
    const [series] = useState<Series[]>([
        {
            name: 'A',
            data: [44, 55, 41, 67, 22, 43, 21]
          }
    ]);

    const [options] = useState<ApexOptions>({

        chart: {
            type: 'bar',
            height: 350,
            stacked: true,
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false,
            },
        },
        plotOptions: {
            bar: {
                borderRadius: 10,
                columnWidth: '20%',
            }
        },
        colors : ['#4318FF', '#4318FF'],
        dataLabels: {
            enabled: false
        },

        stroke: {
            width: 0
        },
        grid: {
            show: false,
        },
        xaxis: {
            labels: {
                rotate: -45
            },
            categories: [25, 67, 76, 67, 67, 64, 68, 98, 23, 54,34, 18,56],
            tickPlacement: 'on',
            axisBorder: {
                show: false
            }
        },
        yaxis: {
            title: {
                text: 'Servings',
            },
            show: false,
        },
        fill: {
            type: 'gradient',
            gradient: {
              type: "vertical",
              shadeIntensity: 0.25,
              gradientToColors: undefined,
              inverseColors: true,
              opacityFrom: 1,
              opacityTo: 0.65,
              stops: [0, 50, 100] 
            },
          }
    });

    return (
        <div>
            <div id="chart">
                <ReactApexChart options={options} series={series} type="bar" height={350} />
            </div>
            <div id="html-dist"></div>
        </div>
    );
};

export default ApexColumnChart2;
