// resources/js/Pages/Assets/Edit.jsx
import React, { useState, useEffect } from 'react';
import { Inertia } from '@inertiajs/inertia';

const Edit = ({ asset, categories }) => {
    const [name, setName] = useState(asset.name);
    const [categoryId, setCategoryId] = useState(asset.category_id);
    const [description, setDescription] = useState(asset.description);

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.put(`/assets/${asset.id}`, { name, category_id: categoryId, description });
    };

    return (
        <div>
            <h1>Edit Asset</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <select value={categoryId} onChange={(e) => setCategoryId(e.target.value)}>
                    {categories.map(category => (
                        <option key={category.id} value={category.id}>{category.name}</option>
                    ))}
                </select>
                <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                <button type="submit">Update Asset</button>
            </form>
        </div>
    );
};

export default Edit;
