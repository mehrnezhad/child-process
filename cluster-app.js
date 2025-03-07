import cluster from "cluster";
import express from "express"
const app = express();

app.get("/", (req, res) => {
    let sum = 0;
    for (let index = 0; index < 1e9; index++) {
        sum += index
    }
    
cluster.worker.kill()
    res.send(`the end request on process ID[${process.pid}]`)
})
app.listen(3400, () => {
    console.log("server ready on : http://localhost:3400");
})