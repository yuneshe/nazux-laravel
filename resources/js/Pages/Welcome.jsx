import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
import { motion } from 'framer-motion';

const HomePage = ({ auth }) => {
  return (
    <div>

      
      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-screen bg-gradient-to-r from-slate-800 to-indigo-900 animate-gradient-x">
        <div className="text-center">
          <motion.h1
            className="text-6xl font-bold text-white"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Welcome to Nazux CMMS
          </motion.h1>
          <motion.p
            className="mt-4 text-lg text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Optimize your maintenance operations with ease.
          </motion.p>
        </div>
        <motion.div
          className="absolute bottom-10 w-full flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <a href="#features" className="text-white text-2xl animate-bounce">
            ↓ Explore Features ↓
          </a>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Features
          </motion.h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Asset Management", desc: "Track and manage all your assets in one place." },
              { title: "Work Orders", desc: "Create, assign, and track work orders efficiently." },
              { title: "Preventive Maintenance", desc: "Schedule and perform preventive maintenance with ease." },
              { title: "Inventory Management", desc: "Keep track of your inventory and stock levels." },
              { title: "Reporting & Analytics", desc: "Gain insights with comprehensive reports and analytics." },
              { title: "Vendor Management", desc: "Manage vendors and their information effectively." }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-2xl font-semibold">{feature.title}</h3>
                <p className="mt-4">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-900 to-slate-800 text-white">
        <div className="container mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            About Nazux
          </motion.h2>
          <motion.p
            className="text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Nazux is a comprehensive CMMS solution designed to help you manage your maintenance operations efficiently. Our platform provides powerful tools to track assets, schedule maintenance, manage work orders, and gain valuable insights through detailed reporting.
          </motion.p>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Meet Our Team
          </motion.h2>
          <motion.div
            className="flex justify-center flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {[
              { name: "Engr. Afongang Ernest", title: "CEO", img: "/storage/arm.png" },
              { name: "Engr. Nzuatu Marius", title: "CTO", img: "/storage/ee.jpg" },
              { name: "Yuneshe Anselme", title: "COO", img: "/storage/boy.png" }
            ].map((member, index) => (
              <div key={index} className="w-1/3 p-4">
                <div className="p-6 bg-white rounded-lg shadow-lg">
                  <img
                    className="w-32 h-32 mx-auto rounded-full"
                    src={member.img}
                    alt={member.name}
                  />
                  <h3 className="mt-4 text-2xl font-semibold">{member.name}</h3>
                  <p className="mt-2">{member.title}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Register and Login Section */}
      <div className="fixed top-4 right-4 z-50 flex space-x-4">
                      
      {auth.user ? (

          <InertiaLink
            href="/assets"
            className="px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700"
          >
            Dashboard
          </InertiaLink>

            ) : (
                <>
            
          <InertiaLink
            href="/login"
            className="px-4 py-2 bg-orange-600 text-white rounded-full hover:bg-orange-700"
          >
            Login
          </InertiaLink>


          <InertiaLink
            href="/register"
            className="px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700"
          >
            Register
          </InertiaLink>

          </>
            )}
      </div>

      {/* Footer */}
      <footer className="py-8 bg-gray-800 text-white">
        <div className="container mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            &copy; 2024 Nazux. All rights reserved.
          </motion.p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
