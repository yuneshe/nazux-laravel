import React from 'react';
import { Link } from '@inertiajs/inertia-react';

const InventoryIndex = ({ inventories }) => {
    return (
        <div className="container mx-auto p-6 bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-bold mb-4">Inventory</h1>
            <Link href="/inventory/create" className="mb-4 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                Create Inventory
            </Link>
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">Name</th>
                        <th className="py-2 px-4 border-b">Quantity</th>
                        <th className="py-2 px-4 border-b">Asset</th>
                        <th className="py-2 px-4 border-b">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {inventories.map((inventory) => (
                        <tr key={inventory.id} className="hover:bg-gray-100">
                            <td className="py-2 px-4 border-b">{inventory.name}</td>
                            <td className="py-2 px-4 border-b">{inventory.quantity}</td>
                            <td className="py-2 px-4 border-b">{inventory.asset.name}</td>
                            <td className="py-2 px-4 border-b space-x-2">
                                <Link href={`/inventory/${inventory.id}/edit`} className="text-blue-500 hover:underline">Edit</Link>
                                <form action={`/inventory/${inventory.id}`} method="post">
                                    <input type="hidden" name="_method" value="delete" />
                                    <button type="submit" className="text-red-500 hover:underline">Delete</button>
                                </form>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default InventoryIndex;
