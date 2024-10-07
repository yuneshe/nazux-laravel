import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

const InventoryCreate = () => {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [assetId, setAssetId] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Ensure assetId, name, and quantity are valid before submitting
        if (name && assetId && quantity >= 0) {
            Inertia.post('/inventory', { name, quantity, asset_id: assetId });
        } else {
            alert('Please fill in all fields with valid values.');
        }
    };

    return (
        <div className="container mx-auto p-6 bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-bold mb-4">Create Inventory</h1>
            <form onSubmit={handleSubmit}>
                {/* Name Input */}
                <input 
                    type="text" 
                    value={name || ''} // Ensure no null value
                    onChange={(e) => setName(e.target.value)} 
                    placeholder="Name" 
                    className="mb-2 p-2 border border-gray-300 rounded" 
                    required
                />

                {/* Quantity Input */}
                <input 
                    type="number" 
                    value={quantity || 0} // Ensure no null value
                    onChange={(e) => setQuantity(Number(e.target.value))} 
                    placeholder="Quantity" 
                    className="mb-2 p-2 border border-gray-300 rounded" 
                    min="0"
                    required
                />

                {/* Asset Select */}
                <select 
                    value={assetId || ''} // Ensure no null value
                    onChange={(e) => setAssetId(e.target.value)} 
                    className="mb-2 p-2 border border-gray-300 rounded" 
                    required
                >
                    <option value="" disabled>Select an asset</option>
                    {/* Add options dynamically */}
                    <option value="asset1">Asset 1</option>
                    <option value="asset2">Asset 2</option>
                    <option value="asset3">Asset 3</option>
                </select>

                {/* Submit Button */}
                <button 
                    type="submit" 
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                    Save
                </button>
            </form>
        </div>
    );
};

export default InventoryCreate;
