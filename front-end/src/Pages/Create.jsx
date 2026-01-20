import React, { useState } from 'react';
import axios from 'axios';
import API_URL from '../config.js';

function Create({ onAdd }) {
    const [task, setTask] = useState('');

    const handleAdd = () => {
        if (!task.trim()) return; // Prevent empty tasks
        
        axios.post(`${API_URL}/add`, { task: task })
            .then(res => {
                if (onAdd) {
                    onAdd(res.data); // Update parent state
                }
                setTask(''); // Clear input
            })
            .catch(err => console.log(err));
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleAdd();
        }
    }
    
    return(
        <div className="create-form">
            <input 
                type="text" 
                placeholder='✨ Enter your task...' 
                value={task}
                onChange={(e) => setTask(e.target.value)}
                onKeyPress={handleKeyPress}
            />
            <button type="button" onClick={handleAdd}>
                Add Task
            </button>
        </div>
    )
}

export default Create;