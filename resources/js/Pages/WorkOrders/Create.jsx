// resources/js/Pages/WorkOrders/Create.jsx
import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { useForm } from '@inertiajs/inertia-react';

const WorkOrdersCreate = ({ equipmentOptions }) => {
    
    const { data, setData, post, errors } = useForm({
        title: '',
        description: '',
        scheduled_date: '',
        equipment_id: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/work-orders');
    };

    return (
        <div className="container mx-auto p-6 bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-bold mb-4">Create Work Order</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700">Title</label>
                    <input
                        type="text"
                        value={data.title}
                        onChange={(e) => setData('title', e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg"
                        required
                    />
                    {errors.title && <span className="text-red-500 text-sm">{errors.title}</span>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Description</label>
                    <textarea
                        value={data.description}
                        onChange={(e) => setData('description', e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg"
                    />
                    {errors.description && <span className="text-red-500 text-sm">{errors.description}</span>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Scheduled Date</label>
                    <input
                        type="date"
                        value={data.scheduled_date}
                        onChange={(e) => setData('scheduled_date', e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg"
                    />
                    {errors.scheduled_date && <span className="text-red-500 text-sm">{errors.scheduled_date}</span>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Equipment</label>
                    <select
                        value={data.equipment_id}
                        onChange={(e) => setData('equipment_id', e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg"
                        required
                    >
                        <option value="">Select Equipment</option>
                        {equipmentOptions.map((equipment) => (
                            <option key={equipment.id} value={equipment.id}>{equipment.name}</option>
                        ))}
                    </select>
                    {errors.equipment_id && <span className="text-red-500 text-sm">{errors.equipment_id}</span>}
                </div>
                <div>
                    <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Create Work Order</button>
                </div>
            </form>
        </div>
    );
};

export default WorkOrdersCreate;
