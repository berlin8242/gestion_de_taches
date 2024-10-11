"use client"; // Marque cette page comme Client Component

import React from 'react';
import TaskList from '../../components/task/TaskList';
import { useTasks } from '../../hooks/useTasks';

const TasksPage: React.FC = () => {
    const { tasks, deleteTask, updateTask } = useTasks();

    return (
        <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
            <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-3xl font-bold text-center mb-6">All Tasks</h1>
                <TaskList tasks={tasks} onDelete={deleteTask} onUpdate={updateTask} />
            </div>
        </div>
    );
};

export default TasksPage;
