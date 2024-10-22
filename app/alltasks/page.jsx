import CreateTask from '../components/CreateTask';
import TaskItem from '../components/TaskItem';
import getAllTasks from '@/lib/getAllTasks';

const page = async() => {
    const tasks = await getAllTasks();
  return (
    <div className="grid grid-col-2 gap-4">
        {tasks?.map((task)=>(
            <TaskItem key={task.id} task={task}/>
        ))}
        <CreateTask/>
    </div>
  )
}

export default page