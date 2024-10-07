// resources/js/Components/ConfirmToast.jsx
import React from 'react';
import { toast } from 'react-toastify';

const ConfirmToast = ({ message, onConfirm, onCancel }) => {
    return (
        <div>
            <p>{message}</p>
            <div className="flex justify-end mt-2">
                <button
                    className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 mr-2"
                    onClick={() => {
                        onConfirm();
                        toast.dismiss();
                    }}
                >
                    Confirm
                </button>
                <button
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                    onClick={() => {
                        onCancel();
                        toast.dismiss();
                    }}
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default ConfirmToast;
