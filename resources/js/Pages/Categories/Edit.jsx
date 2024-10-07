// resources/js/Pages/Categories/Edit.jsx
import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

const Edit = ({ category }) => {
    const [name, setName] = useState(category.name);

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.put(`/categories/${category.id}`, { name });
    };

    return (
        <div>
            <h1>Edit Category</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <button type="submit">Update Category</button>
            </form>
        </div>
    );
};

export default Edit;
