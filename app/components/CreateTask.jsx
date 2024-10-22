"use client";
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import axios from 'axios';
import { useRouter } from 'next/router';

const CreateTask = () => {
    const [due_date, setDate] = useState();
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [priority, setPriority] = useState("Medium");
    const [status, setStatus] = useState("Pending");

    const CreateTaskHandler = async() => {
        console.log(due_date, title, description, priority, status)
        const addtask = await axios.post("http://localhost:5000/tasks",{title,description,priority,status,due_date});
        if(addtask.data.message === "New Task Created"){
            console.log("New task created");
            window.location.reload()
        }else{
            console.log("something went wrong!");
        }
        
    }

  return (
    <Dialog>
            <DialogTrigger asChild>
            <Button className="text-black" variant="outline">Add New Task</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
            <DialogTitle className="text-black">Create a Task</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4 text-black">
                <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="title" className="text-top">
                    Title
                </Label>
                <Input
                    id="title"
                    // defaultValue="Pedro Duarte"
                    placeholder="Enter Title"
                    className="col-span-4"
                    onChange = {(e)=>setTitle(e.target.value)}
                />
                </div>
                <div>
                <Label htmlFor="name" className="text-top">
                    Description
                </Label>
                <Textarea 
                placeholder="Type your message here."
                onChange={(e)=>setDescription(e.target.value)} 
                />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                    Due Date
                </Label>
        <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !due_date && "text-muted-foreground"
          )}
        >
          <CalendarIcon />
          {due_date ? format(due_date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={due_date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
    </div>
   <div>
   <Label htmlFor="name" className="text-top">Priority</Label>
   <Select
   value={priority}
   onValueChange={(value) => {
    setPriority(value);
   }}
   >
      <SelectTrigger className="w-[180px]">
        <SelectValue defaultValue={priority}/>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="Medium">Medium</SelectItem>
          <SelectItem value="High">High</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
   </div>
   <div>
   <Label htmlFor="name" className="text-top">Status</Label>
   <Select
    value={status}
    onValueChange={(value) => {
     setStatus(value);
    }}
   >
      <SelectTrigger className="w-[180px]">
        <SelectValue defaultValue="Pending" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="Pending">Pending</SelectItem>
          <SelectItem value="Completed">Completed</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
   </div>
            </div>
            <DialogFooter>
            <DialogClose asChild>
                <Button onClick={CreateTaskHandler}  type="submit">Submit</Button>
            </DialogClose>
            </DialogFooter>
            </DialogContent>
        </Dialog>
  )
}

export default CreateTask