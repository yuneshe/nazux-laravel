import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

const Create = ({ categories, errors }) => {
    const [currentStep, setCurrentStep] = useState(1);
    const [name, setName] = useState('');
    const [value, setValue] = useState(null);
    const [categoryId, setCategoryId] = useState('');
    const [description, setDescription] = useState('');
    const [attachment, setAttachment] = useState(null);
    const [photo, setPhoto] = useState(null);
    const [manufacturer, setManufacturer] = useState('');

    const nextStep = () => setCurrentStep(currentStep + 1);
    const prevStep = () => setCurrentStep(currentStep - 1);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('category_id', categoryId);
        formData.append('value', value);
        formData.append('description', description);
        if (attachment) {
            formData.append('attachment', attachment);
        }
        if (photo) {
            formData.append('photo', photo);
        }
        formData.append('manufacturer', manufacturer);

        Inertia.post('/assets', formData, {
            onError: (error) => {
                console.error("Form submission error:", error);
            }
        });
    };

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return (
                    <div className="max-w-md mx-auto p-4">
                        <h1 className="text-2xl font-bold mb-4">Add Asset - Step 1</h1>
                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="border rounded p-2 mb-2 w-full"
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                        <input
                            type="number"
                            placeholder="Value in XAF"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            className="border rounded p-2 mb-2 w-full"
                        />
                        {errors.value && <p className="text-red-500 text-xs mt-1">{errors.value}</p>}
                        <select
                            value={categoryId}
                            onChange={(e) => setCategoryId(e.target.value)}
                            className="border rounded p-2 mb-2 w-full"
                        >
                            <option value="" disabled>Select Category</option>
                            {categories.map((category) => (
                                <option key={category.id} value={category.id}>{category.name}</option>
                            ))}
                        </select>
                        {errors.category_id && <p className="text-red-500 text-xs mt-1">{errors.category_id}</p>}
                        <button onClick={nextStep} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Next</button>
                    </div>
                );
            case 2:
                return (
                    <div className="max-w-md mx-auto p-4">
                        <h1 className="text-2xl font-bold mb-4">Add Asset - Step 2</h1>
                        <textarea
                            placeholder="Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="border rounded p-2 mb-2 w-full"
                        ></textarea>
                        {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description}</p>}
                        <input
                            type="file"
                            onChange={(e) => setAttachment(e.target.files[0])}
                            className="border rounded p-2 mb-2 w-full"
                        />
                        {errors.attachment && <p className="text-red-500 text-xs mt-1">{errors.attachment}</p>}
                        <button onClick={prevStep} className="mr-2 bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400">Back</button>
                        <button onClick={nextStep} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Next</button>
                    </div>
                );
            case 3:
                return (
                    <div className="max-w-md mx-auto p-4">
                        <h1 className="text-2xl font-bold mb-4">Add Asset - Step 3</h1>
                        <input
                            type="file"
                            onChange={(e) => setPhoto(e.target.files[0])}
                            className="border rounded p-2 mb-2 w-full"
                        />
                        {errors.photo && <p className="text-red-500 text-xs mt-1">{errors.photo}</p>}
                        <input
                            type="text"
                            placeholder="Manufacturer"
                            value={manufacturer}
                            onChange={(e) => setManufacturer(e.target.value)}
                            className="border rounded p-2 mb-2 w-full"
                        />
                        {errors.manufacturer && <p className="text-red-500 text-xs mt-1">{errors.manufacturer}</p>}
                        <button onClick={prevStep} className="mr-2 bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400">Back</button>
                        <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit</button>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white shadow-md rounded p-8 transition-transform transform-gpu">
                {renderStep()}
            </div>
        </div>
    );
};

export default Create;
