// resources/js/Pages/Reports/StockLevel.jsx
import React from 'react';

const StockLevel = ({ reportData }) => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Stock Level Report</h1>
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">Item</th>
                        <th className="py-2 px-4 border-b">Stock Level</th>
                    </tr>
                </thead>
                <tbody>
                    {reportData.map((data, index) => (
                        <tr key={index} className="hover:bg-gray-100">
                            <td className="py-2 px-4 border-b">{data.item_name}</td>
                            <td className="py-2 px-4 border-b">{data.stock_level}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StockLevel;
