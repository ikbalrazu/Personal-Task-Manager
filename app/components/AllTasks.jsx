"use client"
import React, { useEffect, useState } from 'react'
import TaskItem from './TaskItem';
import CreateTask from './CreateTask';
import apiClient from '../config/apiClient';
import axios from 'axios';

const AllTasks = () => {
    const [tasks, setTasks] = useState();

    const alltasks = async() => {
        const tasks = await axios.get("http://localhost:5000/tasks");
        console.log(tasks.data.alltasks);
        if(tasks.data.rowCount === 0){
            console.log("No task found!")
        }else{
            setTasks(tasks.data.alltasks);
        }
    }
    useEffect(()=>{
        alltasks();
    },[]);
  return (
    <div className="grid grid-col-2 gap-4">
        {tasks?.map((task)=>(
            <TaskItem key={task.id} task={task}/>
        ))}
        <CreateTask/>
    </div>
  )
}

export default AllTasks