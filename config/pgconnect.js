const {Pool} = require('pg');
require('dotenv').config();

// const pool = new Pool({
//     host:"localhost",
//     user:"postgres",
//     port:5432,
//     password:"12345",
//     database:"taskmanager"
// })
// const conn = "postgresql://personaltaskmanager_02cz_user:2UDq3yFhED9NXylFWy8ublXrReJheZ83@dpg-csalged6l47c73f1n3fg-a/personaltaskmanager_02cz"
const pool = new Pool({
    connectionString: process.env.DBConnLink,
    // connectionString:conn,
    // ssl: {
    //     rejectUnauthorized:false
    // }
})

module.exports = pool;