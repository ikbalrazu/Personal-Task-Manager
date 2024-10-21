"use client"
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import React, {useState} from 'react'

const TaskItem = ({task}) => {
    const [isCompleted, setIsCompleted] = useState(task.status === 'completed');
    console.log(task);
  return (
    // <div className={`p-4 border rounded-md  ${isCompleted ? 'bg-green-100' : 'bg-red-100'}`}>
    //   <h3 className="text-lg text-black font-semibold">{task.title}</h3>
    //   <p className='text-black'>{task.description}</p>
    //   <p className='text-black'>Due Date: {task.due_date}</p>
    //   <p className='text-black'>Priority: {task.priority}</p>
    //   <button
    //     onClick={() => setIsCompleted(!isCompleted)}
    //     className={`mt-2 px-4 py-2 text-white ${isCompleted ? 'bg-green-500' : 'bg-gray-500'}`}
    //   >
    //     {isCompleted ? 'Completed' : 'Pending'}
    //   </button>
    //   <button>Delete</button>
    // </div>
    <Card>
    <CardHeader>
        <CardTitle>{task.title}</CardTitle>
        <CardDescription>{task.description}</CardDescription>
    </CardHeader>
    <CardFooter className="flex justify-between">
    <Button variant="outline">{isCompleted ? 'Completed' : 'Pending'}</Button>
    <Button variant="destructive">Delete</Button>
    </CardFooter>
    </Card>
  )
}

export default TaskItem