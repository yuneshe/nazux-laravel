// resources/js/Pages/Categories/Index.jsx
import React from 'react';
import { Inertia } from '@inertiajs/inertia';

const Index = ({ categories }) => {
    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this category?')) {
            Inertia.delete(`/categories/${id}`);
        }
    };

    return (
        <div>
            <h1>Categories</h1>
            <a href="/categories/create">Add New Category</a>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map(category => (
                        <tr key={category.id}>
                            <td>{category.name}</td>
                            <td>
                                <a href={`/categories/${category.id}/edit`}>Edit</a>
                                <button onClick={() => handleDelete(category.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Index;
