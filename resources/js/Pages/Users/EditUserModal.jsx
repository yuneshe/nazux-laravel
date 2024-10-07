// EditUserModal.jsx
import React, { useState } from 'react';
import Modal from 'react-modal';
import { toast } from 'react-toastify';


const customStyles = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '90%',
        maxWidth: '500px',
        padding: '20px',
        borderRadius: '8px',
        backgroundColor: '#fff',
    },
};

const EditUserModal = ({ isOpen, onRequestClose, user, onSave }) => {
    const [formData, setFormData] = useState({
        name: user.name,
        email: user.email,
        role: user.role,
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
        toast.success('User updated successfully!');
        onRequestClose();
    };

    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
            <form onSubmit={handleSubmit} className=' max-w-20'>
                <h2 className="text-lg font-semibold mb-4">Edit User</h2>
                <label className="block mb-2">
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="block w-full mt-1 border rounded"
                    />
                </label>
                <label className="block mb-2">
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="block w-full mt-1 border rounded"
                    />
                </label>
                <label className="block mb-2">
                    Role:
                    <input
                        type="text"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="block w-full mt-1 border rounded"
                    />
                </label>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Save</button>
            </form>
        </Modal>
    );
};

export default EditUserModal;
