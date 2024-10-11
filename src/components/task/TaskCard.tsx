import React, { useState } from 'react';
import Modal from '../modal'; // Assurez-vous d'importer le composant Modal

interface TaskCardProps {
    task: { id: string; name: string };
    onDelete: (id: string) => void;
    onUpdate: (id: string, newName: string) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onDelete, onUpdate }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newTaskName, setNewTaskName] = useState(task.name);

    const handleDelete = () => {
        const confirmDelete = window.confirm("Are you sure you want to delete this task?");
        if (confirmDelete) {
            onDelete(task.id);
        }
    };

    const handleUpdate = () => {
        onUpdate(task.id, newTaskName);
        setIsModalOpen(false);
    };

    return (
        <div className="border p-4 rounded shadow-md flex justify-between items-center">
            <span>{task.name}</span>
            <div>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-yellow-500 text-white p-1 rounded mr-2"
                >
                    Edit
                </button>
                <button
                    onClick={handleDelete} // Utiliser la nouvelle fonction de suppression
                    className="bg-red-500 text-white p-1 rounded"
                >
                    Delete
                </button>
            </div>

            {/* Modal pour modifier la tâche */}
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <h2 className="text-lg font-bold">Edit Task</h2>
                <input
                    type="text"
                    value={newTaskName}
                    onChange={(e) => setNewTaskName(e.target.value)}
                    className="border rounded p-2 w-full mb-4"
                />
                <button
                    onClick={handleUpdate}
                    className="bg-blue-500 text-white p-2 rounded"
                >
                    Save
                </button>
            </Modal>
        </div>
    );
};

export default TaskCard;
