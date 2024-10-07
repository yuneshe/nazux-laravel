import React from 'react';
import { Inertia } from '@inertiajs/inertia';
import Layout from '@/Layouts/Layout';
import { toast } from 'react-toastify';

const MaintenanceIndex = ({ maintenances, notifications, user }) => {
    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this maintenance record?')) {
            Inertia.delete(route('maintenances.destroy', id), {
                onSuccess: () => toast.success('Maintenance deleted successfully!'),
                onError: () => toast.error('There was an error deleting the maintenance.'),
            });
        }
    };

    const handleEdit = (id) => {
        Inertia.get(route('maintenance.edit', id));
    };

    const handleCreate = () => {
        Inertia.get(route('maintenance.create'));
    };

    return (
        <Layout notifications={notifications} user={user}>
            <div className="max-w-full mx-auto p-4 sm:p-6 lg:p-8 bg-white shadow-md rounded-md">
                <h2 className="text-xl font-semibold mb-6">Maintenance List</h2>
                <div className="mb-4">
                    <button
                        onClick={handleCreate}
                        className="px-4 py-2 bg-green-500 text-white font-semibold rounded-md shadow-sm hover:bg-green-600"
                    >
                        Create Maintenance
                    </button>
                </div>
                <table className="w-full">
                    <thead>
                        <tr>
                            <th className="text-left py-2 border-b-2">ID</th>
                            <th className="text-left py-2 border-b-2">Title</th>
                            <th className="text-left py-2 border-b-2">Description</th>
                            <th className="text-left py-2 border-b-2">Equipment</th>
                            <th className="text-left py-2 border-b-2">Frequency</th>
                            <th className="text-left py-2 border-b-2">Parts</th>
                            <th className="text-left py-2 border-b-2">Tools</th>
                            <th className="text-left py-2 border-b-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {maintenances.map((maintenance) => (
                            <tr key={maintenance.id}>
                                <td className="border-b py-2 text-center border-double border-white hover:border-blue-700">{maintenance.id}</td>
                                <td className="border-b py-2 text-center border-double border-white hover:border-blue-700">{maintenance.title}</td>
                                <td className="border-b py-2 text-center border-double border-white hover:border-blue-700">{maintenance.description}</td>
                                <td className="border-b py-2 text-center border-double border-white hover:border-blue-700">{maintenance.equipment.name}</td>
                                <td className="border-b py-2 text-center border-double border-white hover:border-blue-700">{maintenance.frequency}</td>
                                <td className="border-b py-2 px-2 text-center border-double border-white hover:border-blue-700 capitalize">
                                    <ol>
                                        {maintenance.parts.map((part, index) => (
                                            <li key={index} className="list-decimal list-inside">{part.name}</li>
                                        ))}
                                    </ol>
                                </td>
                                <td className="border-b py-2 px-2 text-center border-double border-white hover:border-blue-700 capitalize">
                                    <ol>
                                        {maintenance.tools.map((tool, index) => (
                                            <li key={index} className="list-decimal list-inside">{tool.name}</li>
                                        ))}
                                    </ol>
                                </td>
                                <td className="border-b py-2 text-center border-double border-white hover:border-blue-700">
                                <div className="flex space-x-2">
                                    <button
                                        onClick={() => handleEdit(maintenance.id)}
                                        className="px-2 py-1 bg-yellow-500 text-white font-semibold rounded-md shadow-sm hover:bg-yellow-600 mr-2"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(maintenance.id)}
                                        className="px-2 py-1 bg-red-500 text-white font-semibold rounded-md shadow-sm hover:bg-red-600"
                                    >
                                        Delete
                                    </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Layout>
    );
};

export default MaintenanceIndex;
