import React from 'react';
import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';

const Dashboard = ({ assets, workOrders, preventiveMaintenance, inventoryLevels }) => {
    console.log(assets);
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <Head title="Dashboard" />

      <div className="container mx-auto">
        <motion.div
          className="text-4xl font-bold text-gray-800 dark:text-white mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Welcome to Your Dashboard
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <motion.div
            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold">Asset Management Overview</h3>
            <ul className="mt-4">
              {assets.map((asset, index) => (
                <li key={index} className="py-2">
                  {asset.name} - {asset.status}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold">Work Orders</h3>
            <ul className="mt-4">
              {workOrders.map((workOrder, index) => (
                <li key={index} className="py-2">
                  {workOrder.title} - {workOrder.status}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <h3 className="text-2xl font-semibold">Preventive Maintenance</h3>
            <ul className="mt-4">
              {preventiveMaintenance.map((task, index) => (
                <li key={index} className="py-2">
                  {task.task} - Due: {task.due_date}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <h3 className="text-2xl font-semibold">Inventory Levels</h3>
            <ul className="mt-4">
              {inventoryLevels.map((item, index) => (
                <li key={index} className="py-2">
                  {item.item} - Stock: {item.stock}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
