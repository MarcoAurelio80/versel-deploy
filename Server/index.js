const express = require ('express');
const app = express();

app.use('/', (req, res)=>{
    res.send("SERVER IS RUNNING")
}
)

app.listen(5000, console.log("Server has Initiated on port 5000"))