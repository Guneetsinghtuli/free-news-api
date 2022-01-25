const express = require('express')

const newsRouter = require('./Router/news')

const app = express()

const port = process.env.PORT || 3000

app.use(express.json())
app.use("/api/v1/news",newsRouter)



app.listen(port,()=>{
    console.log(`Server is listening on Port ${port}`)
})
