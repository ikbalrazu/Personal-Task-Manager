const pool = require("../config/pgconnect");
const ErrorHandler = require("../Utils/ErrorHandler");

exports.CreateTask = async(req,res,next) => {
    try {

        const {title,description,priority,status,due_date,category_id} = req.body;

        if(!title || !description){
            res.status(400).json({message:"Fill the required field"});
        }

        const data = await pool.query("INSERT INTO tasks (title,description,priority,status,due_date,category_id) values ($1,$2,$3,$4,$5,$6) RETURNING *",[title,description,priority,status,due_date,category_id]);
        console.log(data);
        if(!data){
            console.log("Task not created");
        }
        res.status(200).json({
            success: true,
            message:"New Task Created",
            task: data.rows[0]
        })

    } catch (error) {
        // res.status(500).json({message:"Internal Server Error"});
        return next(new ErrorHandler("Internal Server Error",500));
    }
}

exports.GetAllTasks = async(req,res,next)=>{
    try {
        const alltasks = await pool.query("SELECT * FROM tasks ORDER BY due_date ASC");
        if(alltasks.rowCount === 0){
            next(new ErrorHandler("No task available right now!",404));
        }
        return res.status(200).json({
            success:true,
            rowCount: alltasks.rowCount,
            alltasks:alltasks.rows
        });
    } catch (error) {
        return next(new ErrorHandler("Internal Server Error",500));
    }
}

exports.GetTaskById = async(req,res,next)=>{
    try {
        const {id} = req.params;
        const task = await pool.query("SELECT * FROM tasks where id = $1",[id]);
        if(task.rowCount === 0){
            next(new ErrorHandler("Task not found",404));
        }else{
            res.status(200).json({
                success:true,
                data:task.rows
            });
        }
        
    } catch (error) {
        next(new ErrorHandler(error.message,500));
    }
}

exports.UpdateTaskById = async(req,res,next)=>{
    try {
        const {id} = req.params;
        const {title,description,priority,status,due_date,category_id} = req.body;

        //check if the task exists
        const checkTask = await pool.query("SELECT * FROM tasks WHERE id=$1",[id]);

        if(checkTask.rowCount === 0){
            return next(new ErrorHandler("Task not found",404));
        }

        const upate_task = await pool.query(
            "UPDATE tasks SET title=$1, description=$2, priority = $3, status = $4, due_date = $5, category_id = $6 where id = $7",
            [title,description,priority,status,due_date,category_id,id]
        );
        
        res.status(200).json({
            success:true,
            message:"Task Updated",
            task:upate_task.rows
        });
        
    } catch (error) {
        next(new ErrorHandler(error.message,500));
    }
}

exports.DeleteTaskById = async(req,res,next)=>{
    try {
        const {id} = req.params;

        //check if the task exists
        const checkTask = await pool.query("SELECT * FROM tasks WHERE id=$1",[id]);

        if(checkTask.rowCount === 0){
            return next(new ErrorHandler("Task not found",404));
        }

        const delete_task = await pool.query(
            "DELETE FROM tasks WHERE id=$1",
            [id]
        );
        
        res.status(200).json({
            success:true,
            message:"Task Deleted",
            task:delete_task.rows
        });
        
    } catch (error) {
        next(new ErrorHandler(error.message,500));
    }
}