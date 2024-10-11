import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useTasks } from '../../../hooks/useTasks';

const TaskDetailPage: React.FC = () => {
    const { id } = useParams(); // Utiliser useParams pour obtenir l'id de la tâche
    const { tasks } = useTasks();
    const router = useRouter();

    const task = tasks.find((t) => t.id === id);

    if (!task) return <div>Task not found</div>;

    return (
        <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
            <div className="w-full max-w-xl bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-2xl font-bold text-center mb-4">Task Details</h1>
                <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
                    <h2 className="text-xl font-semibold mb-2">{task.name}</h2>
                    <p className="text-gray-600">Status: <span className="text-green-500">Not Completed</span></p>
                </div>
            </div>
        </div>
    );
};

export default TaskDetailPage;
