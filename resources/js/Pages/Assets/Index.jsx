// resources/js/Pages/Assets/Index.jsx
import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import Layout from '@/Layouts/Layout';
import Pagination from '@/Components/Pagination';
import CreateAssetModal from '@/Components/CreateAssetModal ';
import EditAssetModal from '@/Components/EditAssetModal';
import ConfirmToast from '@/Components/CustomToast';
import { Link } from '@inertiajs/inertia-react';
import { Head } from '@inertiajs/react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotificationList from '@/Components/NotificationList';

const Index = ({ assets, activeCategory, categories, notifications, user }) => {
    const [currentCategory, setCurrentCategory] = useState(activeCategory);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedAsset, setSelectedAsset] = useState(null);
    console.log(notifications);

    const handleDelete = (id) => {
        toast(
            <ConfirmToast
                message="Are you sure you want to delete this asset?"
                onConfirm={() => {
                    Inertia.delete(`/assets/${id}`, {
                        onSuccess: () => toast.success('Asset deleted successfully!'),
                        onError: () => toast.error('Failed to delete asset.'),
                    });
                }}
                onCancel={() => toast.info('Delete action canceled.')}
            />,
            {
                position: "top-center",
                autoClose: false,
                closeOnClick: false,
                draggable: false,
                closeButton: false,
            }
        );
    };

    const handleEdit = (asset) => {
        setSelectedAsset(asset);
        setIsEditModalOpen(true);
    };

    const handleCategoryChange = (category) => {
        setCurrentCategory(category);
        Inertia.get('/assets', { category });
    };

    const getCategoryDisplayName = (category) => {
        return category === 'all' ? 'All Assets' : category.charAt(0).toUpperCase() + category.slice(1);
    };

    const filteredAssets = assets.data;

    return (
        <>
            <Head title="Assets" />
            <Layout notifications={notifications} user={user}>
                <div className="container mx-auto p-4">

                    <div className="sticky top-0 bg-white z-10 shadow-md p-2 mb-4">
                        <div className="flex justify-between items-center mb-4">
                            <button onClick={() => setIsCreateModalOpen(true)} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                Create + Asset
                            </button>
                            <div className="flex space-x-4">
                                {['all', 'equipment', 'parts', 'tools'].map(category => (
                                    <button
                                        key={category}
                                        onClick={() => handleCategoryChange(category)}
                                        className={`px-4 py-2 rounded ${currentCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
                                    >
                                        {category.charAt(0).toUpperCase() + category.slice(1)}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <h6 className="text-xl text-gray-500 font-light font-serif mb-4">
                            Assets /<code className="text-sm font-bold text-gray-700 font-serif">{getCategoryDisplayName(currentCategory)}</code>
                        </h6>
                    </div>

                    {filteredAssets.length === 0 ? (
                        <div className="flex items-center justify-center h-64">
                            <p className="text-6xl font-bold shadow-lg animate-pulse text-green-500">There Are no {getCategoryDisplayName(currentCategory)} in the system</p>
                        </div>
                    ) : (
                        <>
                            <div className="overflow-x-auto">
                                <table className="table-auto min-w-full bg-white shadow-md rounded mb-2">
                                    <thead>
                                        <tr>
                                            <th className="py-2">Photo</th>
                                            <th className="py-2 px-4 bg-gray-100 border-b text-left">Name</th>
                                            <th className="py-2 px-4 bg-gray-100 border-b text-left">Category</th>
                                            <th className="py-2 px-4 bg-gray-100 border-b text-left">Description</th>
                                            <th className="py-2 px-4 bg-gray-100 border-b text-left">Price</th>
                                            <th className="py-2 px-4 bg-gray-100 border-b text-left">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredAssets.map((asset) => (
                                            <tr key={asset.id}>
                                                <td className="border px-4 py-2 w-16">
                                                    {asset.photo && (
                                                        <img
                                                            src={`/storage/${asset.photo.file_path}`}
                                                            alt={asset.name}
                                                            className="w-auto h-auto rounded-md object-cover"
                                                        />
                                                    )}
                                                </td>
                                                <td className="py-2 px-4 border-b">
                                                    <Link href={`/assets/${asset.id}`} className="text-blue-500 hover:underline">
                                                        {asset.name}
                                                    </Link>
                                                </td>
                                                <td className="py-2 px-4 border-b">
                                                    {asset.category?.name || 'N/A'} 
                                                </td>
                                                <td className="py-2 px-4 border-b">{asset.description || 'No description available'}</td>
                                                <td className="py-2 px-4 border-b">
                                                    <span>{asset.value ? asset.value.toLocaleString() : 'N/A'}</span> Fcfa 
                                                </td>
                                                <td className="py-2 px-4 border-b flex-initial">
                                                    <button
                                                        onClick={() => handleEdit(asset)}
                                                        className="bg-green-500 text-white px-4 py-1 rounded mr-2 dark:bg-green-700"
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(asset.id)}
                                                        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <Pagination links={assets.links} />
                        </>
                    )}

                    <CreateAssetModal
                        isOpen={isCreateModalOpen}
                        onClose={() => setIsCreateModalOpen(false)}
                        categories={categories}
                    />
                    <EditAssetModal
                        isOpen={isEditModalOpen}
                        onClose={() => setIsEditModalOpen(false)}
                        asset={selectedAsset}
                        categories={categories}
                    />
                </div>
            </Layout>
        </>
    );
};

export default Index;
