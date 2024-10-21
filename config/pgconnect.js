const {Pool} = require('pg');
require('dotenv').config();

// const pool = new Pool({
//     host:"localhost",
//     user:"postgres",
//     port:5432,
//     password:"12345",
//     database:"taskmanager"
// })

// const pool = new Pool({
//     host:"dpg-csalged6l47c73f1n3fg-a",
//     user:"personaltaskmanager_02cz_user",
//     port:5432,
//     password:"2UDq3yFhED9NXylFWy8ublXrReJheZ83",
//     database:"personaltaskmanager_02cz",
//     ssl: { rejectUnauthorized: false },
// })

const pool = new Pool({
    connectionString: process.env.DBConnLink,
    // connectionString:conn,
    ssl: {
        rejectUnauthorized:false
    }
})

module.exports = pool;