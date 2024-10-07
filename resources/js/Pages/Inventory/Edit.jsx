import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

const InventoryEdit = ({ inventory }) => {
    const [name, setName] = useState(inventory.name);
    const [quantity, setQuantity] = useState(inventory.quantity);
    const [assetId, setAssetId] = useState(inventory.asset_id);

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.put(`/inventory/${inventory.id}`, { name, quantity, asset_id: assetId });
    };

    return (
        <div className="container mx-auto p-6 bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-bold mb-4">Edit Inventory</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="mb-2 p-2 border border-gray-300 rounded" />
                <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="Quantity" className="mb-2 p-2 border border-gray-300 rounded" />
                <select value={assetId} onChange={(e) => setAssetId(e.target.value)} className="mb-2 p-2 border border-gray-300 rounded">
                    {/* Populate with assets */}
                </select>
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Save</button>
            </form>
        </div>
    );
};

export default InventoryEdit;
