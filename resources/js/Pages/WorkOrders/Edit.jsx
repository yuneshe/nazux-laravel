import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

const Edit = ({ workOrder }) => {
    const [id] = useState(workOrder.id);
    const [title, setTitle] = useState(workOrder.title);
    const [description, setDescription] = useState(workOrder.description);
    const [scheduledDate, setScheduledDate] = useState(workOrder.scheduled_date);
    const [status, setStatus] = useState(workOrder.status);

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.put(`/work-orders/${workOrder.id}`, { id,title, description, scheduled_date: scheduledDate, status });
    };

    return (
        <div className="container mx-auto p-6 bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-bold mb-4">Edit Work Order</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="block w-full p-2 border border-gray-300 rounded-md"
                />
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="block w-full p-2 border border-gray-300 rounded-md"
                ></textarea>
                <input
                    type="date"
                    placeholder="Scheduled Date"
                    value={scheduledDate}
                    onChange={(e) => setScheduledDate(e.target.value)}
                    className="block w-full p-2 border border-gray-300 rounded-md"
                />
                <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="block w-full p-2 border border-gray-300 rounded-md"
                >
                    <option value="pending">Pending</option>
                    <option value="in_progress">In Progress</option>
                    <option value="completed">Completed</option>
                </select>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
                >
                    Save Changes
                </button>
            </form>
        </div>
    );
};

export default Edit;
