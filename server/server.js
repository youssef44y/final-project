const express = require('express')
const app = express()
const dotenv = require("dotenv")
dotenv.config()
const port =process.env.PORT || 8081
const cors = require('cors')

app.use(cors())
app.use(express.json())

//connect database
const connectDB = require ("./config/connectDB")
connectDB()


// routes
app.use("/api", require("./routes/userRoutes"))
app.use('/api/task',require('./routes/taskRoutes'))
// create server
app.listen(port, (err) => err? console.log(err):
console.log("server is running on port: ", port))