// resources/js/Pages/MaintenanceLogs/Edit.jsx
import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

const Edit = ({ maintenanceLog, assets }) => {
    const [assetId, setAssetId] = useState(maintenanceLog.asset_id);
    const [downtime, setDowntime] = useState(maintenanceLog.downtime);
    const [description, setDescription] = useState(maintenanceLog.description);

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.put(`/maintenance-logs/${maintenanceLog.id}`, { asset_id: assetId, downtime, description });
    };

    return (
        <div>
            <h1>Edit Maintenance Log</h1>
            <form onSubmit={handleSubmit}>
                <select value={assetId} onChange={(e) => setAssetId(e.target.value)}>
                    <option value="">Select Asset</option>
                    {assets.map(asset => (
                        <option key={asset.id} value={asset.id}>{asset.name}</option>
                    ))}
                </select>
                <input type="text" placeholder="Downtime" value={downtime} onChange={(e) => setDowntime(e.target.value)} />
                <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                <button type="submit">Update Maintenance Log</button>
            </form>
        </div>
    );
};

export default Edit;
