"use client"
import { ApexOptions } from "apexcharts";
import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

interface Series {
    name: string;
    data: number[];
}

const ApexColumnChart: React.FC = () => {
    const [series] = useState<Series[]>([
        {
            name: 'A',
            data: [44, 55, 41, 67, 22, 43, 21, 49]
          }, {
            name: 'B',
            data: [13, 23, 20, 8, 13, 27, 33, 12]
          }, {
            name: 'C',
            data: [11, 17, 15, 15, 21, 14, 15, 13]
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
        colors : ['#775ffc', '#84d9fd', '#e6edf9'],
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

export default ApexColumnChart;
