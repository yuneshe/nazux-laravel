import React from 'react';
import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';
import { FaTools, FaBoxOpen } from 'react-icons/fa';

const ManagerDashboard = ({ technicians, assets, maintenances, workOrders }) => {
    return (
        <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-6">Manager Dashboard</h1>

            {/* Technicians Section */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Technicians</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {technicians.map((technician) => (
                        <div key={technician.id} className="p-4 bg-white shadow-md rounded-lg">
                            <h3 className="text-xl font-bold">{technician.name}</h3>
                            <p className="text-gray-700">{technician.email}</p>
                            {/* Add more technician details as needed */}
                        </div>
                    ))}
                </div>
            </section>

            {/* Assets Section */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Assets</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {assets.map((asset) => (
                        <div key={asset.id} className="p-4 bg-white shadow-md rounded-lg">
                            <div className="flex items-center mb-2">
                                <FaBoxOpen className="text-blue-500 mr-2" />
                                <h3 className="text-xl font-bold">{asset.name}</h3>
                            </div>
                            <p className="text-gray-700">Quantity: {asset.quantity}</p>
                            {/* Add more asset details as needed */}
                        </div>
                    ))}
                </div>
            </section>

            {/* Maintenances Section */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Maintenances</h2>
                <div className="overflow-hidden">
                    <motion.div
                        initial={{ y: '100%' }}
                        animate={{ y: 0 }}
                        transition={{ duration: 10, delay: 2, repeat: Infinity }}
                        className="p-4 bg-white shadow-md rounded-lg"
                    >
                        <p>{maintenances}</p>
                        {/* Add more maintenance details as needed */}
                    </motion.div>
                </div>
            </section>

            {/* Work Orders Section */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Work Orders</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {workOrders.map((order) => (
                        <div key={order.id} className="p-4 bg-white shadow-md rounded-lg">
                            <h3 className="text-xl font-bold">{order.title}</h3>
                            <p className="text-gray-700">{order.description}</p>
                            <p className="text-gray-600">{order.scheduled_date}</p>
                            <p className={`text-sm font-semibold ${
                                order.status === 'pending' ? 'text-yellow-500' : 
                                order.status === 'in_progress' ? 'text-blue-500' : 
                                'text-green-500'}`}>
                                {order.status.replace('_', ' ')}
                            </p>
                            <Link 
                                href={`/work-orders/${order.id}`} 
                                className="mt-2 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                            >
                                View Details
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ManagerDashboard;
