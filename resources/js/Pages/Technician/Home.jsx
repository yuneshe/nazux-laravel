import React from 'react';
import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';
import { FaTools, FaBoxOpen, FaCheckCircle } from 'react-icons/fa';
import Layout from '@/Layouts/TechnicianLayout';

const backgroundVariants = {
    animate: {
        backgroundPosition: ["0% 50%", "100% 50%"],
        transition: {
            duration: 20,
            repeat: Infinity,
            ease: "linear"
        }
    }
};

const getInspirationalQuote = () => {
    const quotes = [
        "The best way to predict the future is to create it.",
        "Success is not the key to happiness. Happiness is the key to success.",
        "The only limit to our realization of tomorrow is our doubts of today.",
        "Don't watch the clock; do what it does. Keep going.",
        "The harder you work for something, the greater you'll feel when you achieve it."
    ];
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
};

const TechnicianHomePage = ({ workOrders, assets, notifications, user }) => {
    const notificationVariants = {
        animate: {
            x: ["100%", "0%", "-100%"],
            transition: {
                x: {
                    duration: 15,
                    repeat: Infinity,
                    repeatDelay: 2, // Adds a delay when the animation completes a full cycle
                    ease: "linear",
                    times: [0, 0.5, 1]
                }
            }
        }
    };

    return (
        <Layout notifications={notifications} user={user} userId={user}>
        <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-6">Technician Dashboard</h1>

            {/* Work Orders Section */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Assigned Work Orders</h2>
                <motion.div
                    variants={backgroundVariants}
                    animate="animate"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300"
                    style={{ backgroundSize: "200% 100%" }}
                >
                    {workOrders.length > 0 ? (
                        workOrders.map((order) => (
                            <motion.div
                                key={order.id}
                                whileHover={{ scale: 1.05 }}
                                className="p-4 bg-white shadow-md rounded-lg transition-transform"
                            >
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
                            </motion.div>
                        ))
                    ) : (
                        <div className="p-4 bg-white shadow-md rounded-lg">
                            <p className="text-xl font-bold">No work orders assigned.</p>
                            <p className="text-gray-700 mt-2">{getInspirationalQuote()}</p>
                        </div>
                    )}
                </motion.div>
            </section>

            {/* Latest Assets Section */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Latest Assets</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {assets.map((asset) => (
                        <motion.div
                            key={asset.id}
                            whileHover={{ scale: 1.05 }}
                            className="p-4 bg-white shadow-md rounded-lg transition-transform"
                        >
                            <div className="flex items-center mb-2">
                                <FaBoxOpen className="text-blue-500 mr-2" />
                                <h3 className="text-xl font-bold">{asset.name}</h3>
                            </div>
                            <p className="text-gray-700">Quantity: {asset.quantity}</p>
                            <Link 
                                href={`/assets/${asset.id}`} 
                                className="mt-2 inline-block px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
                            >
                                View Details
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Notifications Section */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Notifications</h2>
                <div className="relative overflow-hidden whitespace-nowrap">
                    <motion.div
                        variants={notificationVariants}
                        animate="animate"
                        className="flex space-x-6"
                    >
                        {notifications.map((notification) => (
                            <div
                                key={notification.id}
                                className="flex items-center p-2 bg-white shadow-md rounded-lg transition-transform"
                            >
                                <FaCheckCircle 
                                    className={`mr-2 ${notification.read ? 'text-yellow-500' : 'text-green-500'}`} 
                                />
                                <div>
                                    <h3 className="text-lg font-bold">{notification.title}</h3>
                                    <p className="text-gray-700">{notification.message}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
        </Layout>
    );
};

export default TechnicianHomePage;
