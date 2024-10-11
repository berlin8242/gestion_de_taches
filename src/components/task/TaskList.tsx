import React from 'react';
import TaskCard from './TaskCard';

interface TaskListProps {
    tasks: { id: string; name: string }[];
    onDelete: (id: string) => void;
    onUpdate: (id: string, newName: string) => void; // Ajout de la fonction pour mettre à jour
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onDelete, onUpdate }) => {
    return (
        <div>
            {tasks.map((task) => (
                <TaskCard
                    key={task.id}
                    task={task}
                    onDelete={onDelete}
                    onUpdate={onUpdate} // Passer la fonction pour mettre à jour
                />
            ))}
        </div>
    );
};

export default TaskList;
