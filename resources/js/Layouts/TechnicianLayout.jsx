import React, { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { ToastContainer } from 'react-toastify';
import NotificationList from '@/Components/NotificationList';
import { HomeIcon, UserIcon, CogIcon, ClipboardCheckIcon, ClipboardIcon, ClipboardListIcon,ChatIcon } from '@heroicons/react/outline';
import WorkOrderNotification from '@/Components/WorkOrderNotification';


const Layout = ({ children, notifications, user, userId}) => {
    
    const { url } = usePage();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { props: { auth } } = usePage();

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className="flex h-screen bg-gray-100">
            
            {/* Mobile Menu Toggle Button */}
            <div className="fixed z-20 flex items-center justify-between w-full bg-gray-800 md:hidden">
                <button
                    className="p-4 text-white focus:outline-none focus:bg-gray-700"
                    onClick={toggleSidebar}
                >
                    {sidebarOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
                </button>
                <span className="text-xl font-semibold text-blue-500 animate-pulse">Dashboard</span>
            </div>

            {/* Sidebar */}
            <div
                className={`fixed z-10 inset-y-0 left-0 w-64 bg-gray-800 text-white transition-transform transform ${
                    sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                } md:translate-x-0 md:relative`}
            >
                <div className="flex items-center justify-center h-16 bg-gray-900">
                <h1 className='font-serif'>nx</h1>
                <span className="text-xl font-black font-serif text-blue-500 animate-pulse">Technician</span>
                </div>
                <nav className="flex-1 p-2">
                    <div >
                        <h3 className="px-2 text-sm text-blue-500 animate-bounce font-black uppercase">Operations</h3>
                        <Link href="home" className={` flex px-4 py-2 mt-2 text-sm ${url === '/home' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}><HomeIcon className="w-5 h-5 mr-2" />Home</Link>
                        <Link href="/users" className={`flex px-4 py-2 mt-2 text-sm ${url === '/users' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}><UserIcon className='w5 h-5 mr-2'/>profile</Link>
                        <Link href="/assets" className={`flex px-4 py-2 mt-2 text-sm ${url === '/assets' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}><CogIcon className='w5 h-5 mr-2'/>Assets</Link>
                        <Link href="/maintenance" className={`flex px-4 py-2 mt-2 text-sm ${url === '/maintenance' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}><ClipboardCheckIcon className='w5 h-5 mr-2'/>Maintenance</Link>
                    </div>
                    <div className="mt-4">
                        <h3 className="px-2 text-sm font-black uppercase text-green-500 animate-bounce">Statistics</h3>
                        <Link href="/uptime-vs-downtime" className={`flex px-4 py-2 mt-2 text-sm ${url === '/uptime-vs-downtime' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}><ClipboardIcon className="w-5 h-5 mr-2" />Uptime vs Downtime</Link>
                        <Link href="/stock-levels" className={`flex px-4 py-2 mt-2 text-sm ${url === '/stock-levels' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}><ChatIcon className="w-5 h-5 mr-2" />Stock Levels</Link>
                        <Link href="/equipment-stats" className={`flex px-4 py-2 mt-2 text-sm ${url === '/equipment-stats' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}><ClipboardListIcon className="w-5 h-5 mr-2" />Equipment Stats</Link>
                    </div>
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex flex-col flex-1 overflow-hidden">

                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
                    <div className="container mx-auto px-6 py-8">
                    <ToastContainer/>
                    <NotificationList notifications={notifications} user={user}/>
                    <WorkOrderNotification userId={userId.id}/>
                        {children}
                    </div>
                </main>

            </div>
                        {/* Task bar */}
            <div className=" z-50 bg-gray-600 border-solid border-white border-4 text-white p-4 fixed bottom-0 left-0 right-0">
                <div className="container mx-2 my-0">
                    {/* Task bar content */}
                    <div className="flex justify-between h-2">
 
                        <div>
                            {/* Task bar controls or actions */}
                            {auth.user && (
                                <button onClick={() => alert('Perform some action')}>
                                    Action
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Layout;
