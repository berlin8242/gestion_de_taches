'use client';
import React from 'react';
import TaskForm from '../components/task/TaskForm';
import TaskList from '../components/task/TaskList';
import { useTasks } from '../hooks/useTasks';

const HomePage: React.FC = () => {
    const { tasks, addTask, deleteTask, updateTask } = useTasks();

    return (
        <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
            <div className="w-full max-w-xl bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-3xl font-bold text-center mb-6">Task Manager</h1>
                <TaskForm onAddTask={addTask} />
                <div className="mt-6">
                    <TaskList
                        tasks={tasks}
                        onDelete={deleteTask}
                        onUpdate={updateTask} // Passer la fonction pour mettre à jour
                    />
                </div>
            </div>
        </div>
    );
};

export default HomePage;
