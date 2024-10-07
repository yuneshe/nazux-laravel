// resources/js/Pages/MaintenanceLogs/Index.jsx
import React from 'react';
import { Inertia } from '@inertiajs/inertia';

const Index = ({ maintenanceLogs }) => {
    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this maintenance log?')) {
            Inertia.delete(`/maintenance-logs/${id}`);
        }
    };

    return (
        <div>
            <h1>Maintenance Logs</h1>
            <a href="/maintenance-logs/create">Add New Maintenance Log</a>
            <table>
                <thead>
                    <tr>
                        <th>Asset</th>
                        <th>Downtime</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {maintenanceLogs.map(log => (
                        <tr key={log.id}>
                            <td>{log.asset.name}</td>
                            <td>{log.downtime}</td>
                            <td>{log.description}</td>
                            <td>
                                <a href={`/maintenance-logs/${log.id}/edit`}>Edit</a>
                                <button onClick={() => handleDelete(log.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Index;
