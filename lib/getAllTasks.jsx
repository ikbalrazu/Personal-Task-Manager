import axios from "axios";

export default async function getAllTasks() {
    const tasks = await axios.get("http://localhost:5000/tasks");
    return tasks.data.alltasks;
}