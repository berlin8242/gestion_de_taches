import React from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded shadow-md">
                {children}
                <button onClick={onClose} className="mt-4 bg-red-500 text-white p-2 rounded">
                    Close
                </button>
            </div>
        </div>
    );
};

export default Modal;
