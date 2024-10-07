import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const UptimeVsDowntimeReport = ({ data }) => {
    const chartData = {
        labels: data.labels,
        datasets: [
            {
                label: 'Uptime (hours)',
                data: data.uptime,
                fill: false,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
            },
            {
                label: 'Downtime (hours)',
                data: data.downtime,
                fill: false,
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
                borderColor: 'rgba(255, 99, 132, 1)',
            },
        ],
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Uptime vs Downtime Report</h1>
            <div className="bg-white shadow-md rounded p-4">
                <Line data={chartData} />
            </div>
        </div>
    );
};

export default UptimeVsDowntimeReport;
