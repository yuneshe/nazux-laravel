// resources/js/Pages/WorkOrders/Index.jsx
import React from 'react';
import { Link } from '@inertiajs/inertia-react';

const WorkOrdersIndex = ({ workOrders }) => {
    return (
        <div className="container mx-auto p-6 bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-bold mb-4">Work Orders</h1>
            <Link
                href="/work-orders/create"
                className="mb-4 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
                Create Work Order
            </Link>
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr className=' bg-slate-500'>
                        <th className="py-2 px-4 border-b">Title</th>
                        <th className="py-2 px-4 border-b">Description</th>
                        <th className="py-2 px-4 border-b">Assigned To</th>
                        <th className="py-2 px-4 border-b">Scheduled Date</th>
                        <th className="py-2 px-4 border-b">Status</th>
                        <th className="py-2 px-4 border-b">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {workOrders.map((workOrder) => (
                        <tr key={workOrder.id} className="hover:bg-gray-100">
                            <td className="py-2 px-4 border-b">{workOrder.title}</td>
                            <td className="py-2 px-4 border-b">{workOrder.description}</td>
                            <td className="py-2 px-4 border-b">{workOrder.created_by}</td>
                            <td className="py-2 px-4 border-b">{workOrder.scheduled_date}</td>
                            <td className="py-2 px-4 border-b">{workOrder.status}</td>
                            <td className="py-2 px-4 border-b space-x-2">
                                <Link href={`/work-orders/${workOrder.id}`} className="text-blue-500 hover:underline">
                                    View
                                </Link>
                                <Link href={`/work-orders/${workOrder.id}/edit`} className="text-yellow-500 hover:underline">
                                    Edit
                                </Link>
                                <Link
                                    href={`/work-orders/${workOrder.id}/delete`}
                                    method="delete"
                                    className="text-red-500 hover:underline"
                                >
                                    Delete
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default WorkOrdersIndex;
