"use client"
import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

const ChartCompo = () => {
    const [options] = useState({
        chart: {
            id: 'realtime',
            height: 350,
            type: 'line',
            animations: {
              enabled: true,
              easing: 'linear',
              dynamicAnimation: {
                speed: 5000
              }
            },
            toolbar: {
              show: false
            },
            zoom: {
              enabled: true
            },
          },
          stroke: {
            curve: 'smooth',
          },
          grid: {
            show: false
        },
          markers: {
            size: 0
          },
          xaxis: {
            categories: ["jan","feb","mar", "apr","may","jun", "jul","aug","sept","oct","nov","dec"],
            axisBorder: {
                show: false
            }
          },
          yaxis: {
            max: 100,
            show: false
          },
          legend: {
            show: false
          },
    });

    const [series, setSeries] = useState([
        {
            name: "series-1",
            data: [30, 35, 40, 45, 40, 35]
        }
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            const newData = generateNewData();
            setSeries([{ name: "series-1", data: newData }]);
        }, 2000);

        return () => clearInterval(interval);
    }, []);



    const generateNewData = () => {
        // Example: Generate random data points
        const newData = Array.from({ length: 6 }, () => Math.floor(Math.random() * 0));
        return newData;
    };

    return (
        <div className="app">
            <div className="row">
                <div className="mixed-chart">
                    <Chart
                        options={options}
                        series={series}
                        id="realtime"
                        type="line"
                        width="500"
                    />
                </div>
            </div>
        </div>
    );
};

export default ChartCompo;









