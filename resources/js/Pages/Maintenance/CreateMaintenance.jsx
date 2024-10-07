import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import Layout from '@/Layouts/Layout';
import { toast } from 'react-toastify';

const CreateMaintenance = ({ equipments, errors, notifications }) => {
    const [data, setData] = useState({
        title: '',
        description: '',
        equipment_id: '',
        procedures: null,
        frequency: 'daily',
        start_date: '',
        parts: [],
        tools: []
    });

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredParts, setFilteredParts] = useState(equipments.filter(e => e.category && e.category.name.toUpperCase() === 'PARTS'));
    const [filteredTools, setFilteredTools] = useState(equipments.filter(e => e.category && e.category.name.toUpperCase() === 'TOOLS'));

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.keys(data).forEach(key => {
            if (Array.isArray(data[key])) {
                data[key].forEach((item, index) => {
                    formData.append(`${key}[${index}]`, item);
                });
            } else {
                formData.append(key, data[key]);
            }
        });
        if (data.procedures) {
            formData.append('procedures', data.procedures);
        }

        Inertia.post(route('maintenance.store'), formData, {
            onSuccess: () => toast.success('Maintenance created successfully!'),
            onError: () => toast.error('There was an error creating the maintenance.'),
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        });
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setFilteredParts(equipments.filter(e => e.category && e.category.name.toUpperCase() === 'PARTS' && e.name.toLowerCase().includes(e.target.value.toLowerCase())));
        setFilteredTools(equipments.filter(e => e.category && e.category.name.toUpperCase() === 'TOOLS' && e.name.toLowerCase().includes(e.target.value.toLowerCase())));
    };

    const handleSelectChange = (type, id) => {
        const selected = new Set(data[type]);
        if (selected.has(id)) {
            selected.delete(id);
        } else {
            selected.add(id);
        }
        setData({ ...data, [type]: Array.from(selected) });
    };

    const handleGoBack = () => {
        Inertia.get(route('maintenance.index'));
    };

    const filteredEquipments = equipments.filter(e => e.category && e.category.name.toUpperCase() === 'EQUIPMENT');
    const handleErrors = (field) => {
        return errors && errors[field] ? <span className="text-red-600 text-sm">{errors[field]}</span> : null;
    };

    return (
        
        
            <div className="max-w-3xl mx-auto p-4 sm:p-6 lg:p-8 bg-white shadow-md rounded-md">
                <div className="mb-4 flex justify-between items-center">
                    <h2 className="text-xl font-semibold">Create Maintenance</h2>
                    <button
                        onClick={handleGoBack}
                        className="px-4 py-2 bg-gray-500 text-white font-semibold rounded-md shadow-sm hover:bg-gray-600"
                    >
                        Go Back
                    </button>
                </div>
                {handleErrors('title')}
                {handleErrors('description')}
                {handleErrors('equipment_id')}
                {handleErrors('procedures')}
                {handleErrors('frequency')}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Title</label>
                        <input
                            type="text"
                            value={data.title}
                            onChange={(e) => setData({ ...data, title: e.target.value })}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Description</label>
                        <textarea
                            value={data.description}
                            onChange={(e) => setData({ ...data, description: e.target.value })}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Equipment</label>
                        <select
                            value={data.equipment_id}
                            onChange={(e) => setData({ ...data, equipment_id: e.target.value })}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                        >
                            <option value="">Select Equipment</option>
                            {filteredEquipments.map((equipment) => (
                                <option key={equipment.id} value={equipment.id}>
                                    {equipment.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Procedures</label>
                        <input
                            type="file"
                            onChange={(e) => setData({ ...data, procedures: e.target.files[0] })}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Frequency</label>
                        <select
                            value={data.frequency}
                            onChange={(e) => setData({ ...data, frequency: e.target.value })}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                        >
                            <option value="daily">Daily</option>
                            <option value="weekly">Weekly</option>
                            <option value="monthly">Monthly</option>
                            <option value="yearly">Yearly</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Start Date</label>
                        <input
                            type="date"
                            value={data.start_date || ''} // Ensure it's not null
                            onChange={(e) => setData({ ...data, start_date: e.target.value })}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Search Parts/Tools</label>
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={handleSearchChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                            placeholder="Search parts or tools"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Parts</label>
                        <div className="mt-1 grid grid-cols-2 gap-4">
                            {filteredParts.map((part) => (
                                <div key={part.id} className="flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={data.parts.includes(part.id)}
                                        onChange={() => handleSelectChange('parts', part.id)}
                                        className="mr-2"
                                    />
                                    <span>{part.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Tools</label>
                        <div className="mt-1 grid grid-cols-2 gap-4">
                            {filteredTools.map((tool) => (
                                <div key={tool.id} className="flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={data.tools.includes(tool.id)}
                                        onChange={() => handleSelectChange('tools', tool.id)}
                                        className="mr-2"
                                    />
                                    <span>{tool.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mt-6">
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-600"
                        >
                            Create
                        </button>
                    </div>
                </form>
            </div>
        
    );
};

export default CreateMaintenance;
