import React from 'react';

const InventoryShow = ({ inventory }) => {
    return (
        <div className="container mx-auto p-6 bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-bold mb-4">Inventory Item Details</h1>
            <div className="mb-4">
                <strong>Name:</strong> {inventory.name}
            </div>
            <div className="mb-4">
                <strong>Description:</strong> {inventory.description}
            </div>
            <div>
                <strong>Quantity:</strong> {inventory.quantity}
            </div>
        </div>
    );
};

export default InventoryShow;
