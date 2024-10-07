// resources/js/Pages/Reports/EquipmentStats.jsx
import React from 'react';

const EquipmentStats = ({ reportData }) => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Equipment Stats Report</h1>
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">Asset</th>
                        <th className="py-2 px-4 border-b">Maintenance Frequency</th>
                        <th className="py-2 px-4 border-b">Total Downtime (hours)</th>
                    </tr>
                </thead>
                <tbody>
                    {reportData.map((data, index) => (
                        <tr key={index} className="hover:bg-gray-100">
                            <td className="py-2 px-4 border-b">{data.asset_name}</td>
                            <td className="py-2 px-4 border-b">{data.maintenance_frequency}</td>
                            <td className="py-2 px-4 border-b">{data.total_downtime}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EquipmentStats;
