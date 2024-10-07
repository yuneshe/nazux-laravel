import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { usePage } from '@inertiajs/react';
import { FaTimes } from 'react-icons/fa';
import './modal.css'

const CreateAssetModal = ({ isOpen, onClose, categories }) => {
    const { errors } = usePage().props;
    const [currentStep, setCurrentStep] = useState(1);
    const [name, setName] = useState('');
    const [value, setValue] = useState(null);
    const [categoryId, setCategoryId] = useState('');
    const [description, setDescription] = useState('');
    const [attachment, setAttachment] = useState(null);
    const [photo, setPhoto] = useState(null);
    const [manufacturer, setManufacturer] = useState('');
    const [location, setLocation] = useState('');

    const nextStep = () => setCurrentStep(currentStep + 1);
    const prevStep = () => setCurrentStep(currentStep - 1);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('category_id', categoryId);
        formData.append('value', value);
        formData.append('description', description);
        formData.append('location', location);
        formData.append('attachment', attachment);
        formData.append('photo', photo);
        formData.append('manufacturer', manufacturer);
        Inertia.post('/assets', formData, {
            onSuccess: () => {
                onClose();
            }
        });
    };

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return (
                    <>
                    <div>
                        <h1 className="text-2xl font-bold mb-4">Add Asset - Step 1</h1>
                        <div className="mb-4">
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Name</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="border rounded p-2 w-full"
                            />
                            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Category</label>
                            <select
                                value={categoryId}
                                onChange={(e) => setCategoryId(e.target.value)}
                                className="border rounded p-2 w-full"
                            >
                                <option value="" disabled>Select Category</option>
                                {categories.map(category => (
                                    <option key={category.id} value={category.id}>{category.name}</option>
                                ))}
                            </select>
                            {errors.category_id && <p className="text-red-500 text-xs mt-1">{errors.category_id}</p>}
                        </div>
                        </div>
                            <div className="mb-4">
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Price (Fcfa)</label>
                            <input
                                type="number"
                                value={value}
                                placeholder='5700'
                                onChange={(e) => setValue(e.target.value)}
                                className="border rounded p-2 w-full"
                            />
                            {errors.value && <p className="text-red-500 text-xs mt-1">{errors.value}</p>}
                            <span>Fcfa</span>
                        </div>
                        <button onClick={nextStep} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Next</button>

                                        </>
                );
            case 2:
                return (
                    <div>
                        <h1 className="text-2xl font-bold mb-4">Add Asset - Step 2</h1>
                        <div className="mb-4">
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Description</label>
                            <textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="border rounded p-2 w-full"
                            ></textarea>
                            {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description}</p>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Attachment</label>
                            <input
                                type="file"
                                onChange={(e) => setAttachment(e.target.files[0])}
                                className="border rounded p-2 w-full"
                            />
                            {errors.attachment && <p className="text-red-500 text-xs mt-1">{errors.attachment}</p>}
                        </div>
                        <button onClick={prevStep} className="mr-2 bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400">Back</button>
                        <button onClick={nextStep} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Next</button>
                    </div>
                );
            case 3:
                return (
                    <div>
                        <h1 className="text-2xl font-bold mb-4">Add Asset - Step 3</h1>
                        <div className="mb-4">
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Photo</label>
                            <input
                                type="file"
                                onChange={(e) => setPhoto(e.target.files[0])}
                                className="border rounded p-2 w-full"
                            />
                            {errors.photo && <p className="text-red-500 text-xs mt-1">{errors.photo}</p>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Manufacturer</label>
                            <input
                                type="text"
                                value={manufacturer}
                                onChange={(e) => setManufacturer(e.target.value)}
                                className="border rounded p-2 w-full"
                            />
                            {errors.manufacturer && <p className="text-red-500 text-xs mt-1">{errors.manufacturer}</p>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Location</label>
                            <input
                                type="text"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                className="border rounded p-2 w-full"
                            />
                            {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location}</p>}
                        </div>
                        <button onClick={prevStep} className="mr-2 bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400">Back</button>
                        <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit</button>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white rounded shadow-lg p-6 w-full max-w-lg mx-auto relative">
                        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
                            <FaTimes size={20} />
                        </button>
                        {renderStep()}
                    </div>
                </div>
            )}
        </>
    );
};

export default CreateAssetModal;
