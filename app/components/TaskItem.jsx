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
import { formatDate } from "./formatDate";

const TaskItem = ({task}) => {
    const [isCompleted, setIsCompleted] = useState(task.status === 'Completed');
  return (
    <Card>
    <CardHeader>
        <CardTitle>{task.title}</CardTitle>
        <CardDescription>{task.description}</CardDescription>
    </CardHeader>
    <CardFooter className="flex justify-between">
     <p>{formatDate(task.due_date)}</p> 
    <Button variant="default" className={isCompleted ? 'bg-green-500' : 'bg-gray-500'}>{isCompleted ? 'Completed' : 'Pending'}</Button>
    <div className="flex gap-2">
    <Button variant="secondary">Edit</Button>
    <Button variant="destructive">Delete</Button>
    </div>
    </CardFooter>
    </Card>
  )
}

export default TaskItem