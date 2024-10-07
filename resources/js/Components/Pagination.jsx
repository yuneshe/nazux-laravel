// resources/js/Components/Pagination.jsx
import React from 'react';
import { Inertia } from '@inertiajs/inertia';

const Pagination = ({ links }) => {
    const handlePageChange = (url) => {
        Inertia.get(url);
    };

    return (
        <div className="flex justify-center mt-2">
            <ul className="flex list-none p-0 m-0">
                {links.map((link, index) => (
                    <li key={index} className="mx-1">
                        <button
                            onClick={() => handlePageChange(link.url)}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                            className={`px-2 py-1 rounded ${link.active ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
                            disabled={!link.url}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Pagination;
