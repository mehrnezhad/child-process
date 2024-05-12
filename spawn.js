const {spawn} = require("child_process")

// const child = spawn("ls",["-lh"])

// child.stdout.on("data",data=>{
//     console.log("stdout:" , data.toString())
// })

// child.stderr.on("error", error=>{
//     console.log("stderr" , error.toString())
// })

for (let index = 0; index < 3; index++) {

const child = spawn("node",["help.js",process.pid])

child.stdout.on("data",data=>{
    console.log("stdout:" , data.toString())
})

child.stderr.on("error", error=>{
    console.log("stderr" , error.toString())
})

}