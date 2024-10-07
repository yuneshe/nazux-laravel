import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { FaBell, FaCheckCircle, FaUser, FaTimes } from 'react-icons/fa';
import { Link } from '@inertiajs/inertia-react';

const NotificationList = ({ notifications }) => {
    const markAsRead = (id) => {
        Inertia.post('/notifications/read', { id });
    };

    return (
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 mb-4 z-50 absolute right-0 top-2 max-h-[80vh]">
            <h2 className="text-xl font-bold mb-4">Notifications</h2>
            {notifications.length > 0 ? (
                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                    {notifications.map((notification, index) => (
                        <div
                            key={index}
                            className="flex items-center p-4 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer"
                            onClick={() => markAsRead(notification.id)}
                        >
                            <div className="flex-1">
                                <Link href={`/maintenance/${notification.maintenance_id}`} className="text-blue-500 dark:text-blue-300">
                                    <p className="text-sm text-gray-700 dark:text-gray-300">{notification.message}</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">{new Date(notification.created_at).toLocaleString()}</p>
                                </Link>
                            </div>
                            <div className="ml-2 flex items-center">
                                <FaCheckCircle className="text-green-500 dark:text-green-300" />
                                <button
                                    onClick={() => markAsRead(notification.id)}
                                    className="text-xs text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors ml-1"
                                >
                                    Mark as read
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-500 dark:text-gray-400">No notifications</p>
            )}
        </div>
    );
};

const NotificationIcon = ({ notifications, user }) => {
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    const toggleNotifications = () => {
        setIsNotificationOpen(!isNotificationOpen);
        if (isProfileOpen) setIsProfileOpen(false); // Close profile dropdown if open
    };

    const toggleProfile = () => {
        setIsProfileOpen(!isProfileOpen);
        if (isNotificationOpen) setIsNotificationOpen(false); // Close notifications if open
    };

    return (
        <div className="fixed top-4 right-4 z-50 flex items-center space-x-4">
            <button
                onClick={toggleNotifications}
                className={`relative text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors ${
                    notifications.length > 0 ? 'text-orange-500 dark:text-orange-400' : ''
                }`}
            >
                <FaBell className="w-6 h-6" />
                {notifications.length > 0 && (
                    <span className="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white dark:ring-gray-800 bg-orange-500"></span>
                )}
            </button>
            {isNotificationOpen && (
                <div className="absolute right-0 mt-2 w-80 z-50">
                    <NotificationList notifications={notifications} />
                </div>
            )}

            <div className="relative">
                <button
                    onClick={toggleProfile}
                    className="relative text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                >
                    <FaUser className="w-6 h-6 text-blue-500" />
                    {user.isActive && (
                        <span className="absolute top-0 right-0 inline-flex items-center justify-center h-2 w-2 rounded-full ring-2 ring-white dark:ring-gray-800 bg-green-500"></span>
                    )}
                </button>
                {isProfileOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 z-50">
                        <button
                            onClick={toggleProfile}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                        >
                            <FaTimes />
                        </button>
                        <div className="text-gray-800 dark:text-gray-200">
                            <p className="font-bold">{user.name}</p>
                            <p className="text-sm">{user.email}</p>
                            <Link
                                href="/profile"
                                className="block mt-2 text-blue-500 dark:text-blue-300 hover:underline"
                            >
                                View Profile
                            </Link>
                            <Link
                                href="/logout"
                                method="post"
                                className="block mt-2 text-red-500 dark:text-red-300 hover:underline"
                            >
                                Logout
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NotificationIcon;
