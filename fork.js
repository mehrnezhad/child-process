import express from "express"
import { fork } from "child_process"
const app = express()
app.use(express.json())


app.get("/", (req, res) => {

    const child = fork("longTask.js")
    child.send("start")

    child.on("message", (sum) => {

        res.send(sum.toString())
    })
})

app.listen("3001", () => {
    console.log("Server is running on port 3001")
})