// resources/js/Pages/Users/Index.jsx
import React, { useState } from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from '@/Layouts/Layout';
import { Head } from '@inertiajs/react';
import Pagination from '@/Components/Pagination';
import WorkOrderNotification from '@/Components/WorkOrderNotification';

const Index = ({ users, notifications, user }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleEdit = (user) => {
      setSelectedUser(user);
      setIsModalOpen(true);
  };

  const handleSave = (updatedUser) => {
      Inertia.put(`/users/${selectedUser.id}`, updatedUser);
  };

  const getRoleClass = (role) => {
    switch (role) {
      case 'admin':
        return 'bg-green-100';
      case 'technician':
        return 'bg-yellow-100';
      default:
        return 'self-center';
    }
  };

  const deleteUser = (userId) => {
    toast.warn(
      <>
        <div>Are you sure you want to delete this user?</div>
        <div className="mt-2">
          <button
            onClick={() => {
              Inertia.delete(route('users.destroy', userId));
              toast.dismiss();
            }}
            className="bg-red-500 text-white py-1 px-3 rounded mr-2"
          >
            Yes
          </button>
          <button
            onClick={() => toast.dismiss()}
            className="bg-gray-500 text-white py-1 px-3 rounded"
          >
            No
          </button>
        </div>
      </>,
      {
        autoClose: false,
        closeButton: false,
      }
    );
  };

  return (
    <>
      <Head title='Users'/>
      <Layout notifications={notifications} user={user}>
        <div className="container mx-auto p-4 dark:bg-gray-900 dark:text-white">
          <ToastContainer />
          {/* <WorkOrderNotification userId={user.id} /> */}
          <header className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">Users</h1>
          </header>
          <InertiaLink
            href="/users/create"
            className="bg-blue-500 text-white px-4 py-2 rounded mb-4 inline-block dark:bg-blue-700"
          >
            Create User
          </InertiaLink>
          
          <table className="table-auto w-full self-center">
            <thead>
              <tr>
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Roles</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.data.map((user) => (
                <tr key={user.id} className={getRoleClass(user.roles)} >
                  <td className="border px-4 py-2">{user.id}</td>
                  <td className="border px-4 py-2">{user.name}</td>
                  <td className="border px-4 py-2">{user.email}</td>
                  <td className="border px-4 py-2">{user.roles.join(', ')}</td>
                  <td className="border px-4 py-2 w-auto">
                    <InertiaLink
                      href={`/users/${user.id}/edit`}
                      className=" float-end my-1 bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded mr-2 dark:bg-green-700"
                    >
                      Edit
                    </InertiaLink>
                    <button
                      onClick={() => deleteUser(user.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded dark:bg-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
          <Pagination links={users.links} />
          {selectedUser && (
            <EditUserModal
              isOpen={isModalOpen}
              onRequestClose={() => setIsModalOpen(false)}
              user={selectedUser}
              onSave={handleSave}
            />
          )}
          
        </div>
      </Layout>
    </>
  );
};

export default Index;
