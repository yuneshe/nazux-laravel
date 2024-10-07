// resources/js/Pages/MaintenanceLogs/Create.jsx
import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

const Create = ({ assets }) => {
    const [assetId, setAssetId] = useState('');
    const [downtime, setDowntime] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.post('/maintenance-logs', { asset_id: assetId, downtime, description });
    };

    return (
        <div>
            <h1>Add Maintenance Log</h1>
            <form onSubmit={handleSubmit}>
                <select value={assetId} onChange={(e) => setAssetId(e.target.value)}>
                    <option value="">Select Asset</option>
                    {assets.map(asset => (
                        <option key={asset.id} value={asset.id}>{asset.name}</option>
                    ))}
                </select>
                <input type="text" placeholder="Downtime" value={downtime} onChange={(e) => setDowntime(e.target.value)} />
                <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                <button type="submit">Add Maintenance Log</button>
            </form>
        </div>
    );
};

export default Create;
