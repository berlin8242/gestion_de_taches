"use client"; // Marquer ce hook comme un Client Component

import { useState } from 'react';

interface Task {
    id: string;
    name: string;
}

export const useTasks = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

    const addTask = (name: string) => {
        const newTask = { id: Math.random().toString(), name };
        setTasks([...tasks, newTask]);
    };

    const deleteTask = (id: string) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const updateTask = (id: string, newName: string) => {
        setTasks(tasks.map((task) => (task.id === id ? { ...task, name: newName } : task)));
    };

    return {
        tasks,
        addTask,
        deleteTask,
        updateTask, // Exposer la fonction pour mettre à jour
    };
};
