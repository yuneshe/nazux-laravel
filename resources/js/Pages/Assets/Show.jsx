import React from 'react';
import { Head } from '@inertiajs/react';
import Layout from '@/Layouts/Layout';
import { PhotographIcon } from '@heroicons/react/outline';
import { DocumentTextIcon, MusicNoteIcon, PhotographIcon as ImageIcon, VideoCameraIcon } from '@heroicons/react/solid';

const getFileIcon = (fileName) => {
    const ext = fileName.split('.').pop().toLowerCase();
    switch (ext) {
        case 'pdf':
            return <DocumentTextIcon className="w-8 h-8 text-gray-400 mr-2" />;
        case 'mp3':
        case 'wav':
            return <MusicNoteIcon className="w-8 h-8 text-gray-400 mr-2" />;
        case 'jpg':
        case 'jpeg':
        case 'png':
            return <ImageIcon className="w-8 h-8 text-gray-400 mr-2" />;
        case 'mp4':
        case 'mov':
            return <VideoCameraIcon className="w-8 h-8 text-gray-400 mr-2" />;
        default:
            return <DocumentTextIcon className="w-8 h-8 text-gray-400 mr-2" />;
    }
};

const Show = ({ asset }) => {
    return (
        <>
            <Head title={`Asset Details - ${asset.name}`} />
        
                <div className="container mx-auto p-4">
                    <h1 className="text-3xl font-bold mb-4">Asset Details</h1>
                    <div className="bg-white p-6 rounded shadow-md">
                        <div className="mb-4 flex justify-center">
                            {asset.photo ? (
                                <img
                                    src={`/storage/${asset.photo.file_path}`}
                                    alt={asset.name}
                                    className="w-32 h-32 rounded-full object-cover"
                                />
                            ) : (
                                <PhotographIcon className="w-32 h-32 text-gray-400" />
                            )}
                        </div>
                        <div className="mb-4">
                            <h2 className="text-xl font-semibold text-gray-700">Name</h2>
                            <p className="text-lg font-medium">{asset.name}</p>
                        </div>
                        <div className="mb-4">
                            <h2 className="text-xl font-semibold text-gray-700">Category</h2>
                            <p className="text-lg font-medium">{asset.category.name}</p>
                        </div>
                        <div className="mb-4">
                            <h2 className="text-xl font-semibold text-gray-700">Description</h2>
                            <p className="text-lg font-medium">{asset.description}</p>
                        </div>
                        <div className="mb-4">
                            <h2 className="text-xl font-semibold text-gray-700">Manufacturer</h2>
                            <p className="text-lg font-medium">{asset.manufacturer}</p>
                        </div>
                        <div className="mb-4">
                            <h2 className="text-xl font-semibold text-gray-700">Location</h2>
                            <p className="text-lg font-medium">{asset.location}</p>
                        </div>
                        <div className="mb-4">
                            <h2 className="text-xl font-semibold text-gray-700">Attachments</h2>
                            <ul className="text-lg font-medium">
                                {asset.attachments.map((attachment, index) => (
                                    <li key={index} className="flex items-center space-x-2">
                                        {getFileIcon(attachment.file_path)}
                                        <a
                                            href={`/storage/${attachment.file_path}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-500 hover:underline"
                                        >
                                            {attachment.file_name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
        
        </>
    );
};

export default Show;
