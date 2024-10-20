const app = require("./app");
const server = require('http').createServer(app);
require('dotenv').config();

const PORT = process.env.PORT || 4000;

server.listen(PORT,()=>{
    console.log("Server success",PORT);
})