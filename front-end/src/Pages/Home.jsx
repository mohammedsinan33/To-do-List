import React, { useEffect, useState } from 'react';
import Create from './Create.jsx';
import axios from 'axios';
import { BsCircleFill, BsFillCheckCircleFill, BsFillTrashFill } from 'react-icons/bs';
import API_URL from '../config.js';

function Home(){
    const [todos, setTodos] = useState([]) 

    const handleEdit = (id) => {
        axios.put(`${API_URL}/update/${id}`)
        .then(result => {
            // Update state instead of reloading for smoother UX
            setTodos(todos.map(todo => 
                todo._id === id ? { ...todo, done: !todo.done } : todo
            ));
        })
        .catch(err => console.log(err))
    }

    const handleDelete = (id) => {
        axios.delete(`${API_URL}/delete/${id}`)
        .then(result => {
            // Update state instead of reloading for smoother UX
            setTodos(todos.filter(todo => todo._id !== id));
        })
        .catch(err => console.log(err))
    }
    
    const addTodo = (newTodo) => {
        setTodos([...todos, newTodo]);
    }

    useEffect(() => {
        axios.get(`${API_URL}/get`)
        .then(result => setTodos(result.data))
        .catch(err => console.log(err))
    },[])

    return(
        <div className='home'>
            <h2>To-Do List</h2>
            <Create onAdd={addTodo} />
            <div className='tasks-container'>
                {
                    todos.length === 0 ?
                    <div className='no-record'>
                        <h2>📝 No tasks yet!</h2>
                        <p style={{color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', marginTop: '10px'}}>
                            Add your first task to get started
                        </p>
                    </div>
                    :
                    todos.map((todo, index) => (
                    <div 
                        key={todo._id || todo.task} 
                        className='task'
                        style={{animationDelay: `${index * 0.1}s`}}
                    >
                        <div className='checkbox' onClick={() => handleEdit(todo._id)}>
                            {todo.done ? 
                                <BsFillCheckCircleFill className='icon' style={{color: '#4facfe'}}/> 
                                :
                                <BsCircleFill className='icon'/>
                            }
                            <p className={todo.done ? "line_through" : ""}>{todo.task}</p>
                        </div>
                        <div>
                            <span>
                                <BsFillTrashFill 
                                    className='icon' 
                                    onClick={() => handleDelete(todo._id)}
                                />
                            </span>
                        </div>
                    </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Home;