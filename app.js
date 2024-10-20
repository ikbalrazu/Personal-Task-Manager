const express = require('express');
const cors = require("cors");
const TaskRoutes = require("./Routes/TaskRoutes");
const CategoriesRoutes = require("./Routes/CategoriesRoutes"); 
const errorMiddleware = require('./Middleware/errorMiddleware');

const app = express();

app.use(cors());
app.use(express.urlencoded({extended:true}))
app.use(express.json());

//routes
app.use("/tasks",TaskRoutes);
app.use("/tasks",CategoriesRoutes);

//error middleware
app.use(errorMiddleware);

module.exports = app;
