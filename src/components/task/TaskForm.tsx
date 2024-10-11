import React, { useState } from 'react';
import Input from '../input';
import Button from '../button';

interface TaskFormProps {
    onAddTask: (name: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
    const [taskName, setTaskName] = useState('');

    const handleSubmit = () => {
        if (taskName) {
            onAddTask(taskName);
            setTaskName('');
        }
    };

    return (
        <div className="mb-4">
            <Input value={taskName} onChange={(e) => setTaskName(e.target.value)} placeholder="New task" />
            <Button onClick={handleSubmit}>Add Task</Button>
        </div>
    );
};

export default TaskForm;
