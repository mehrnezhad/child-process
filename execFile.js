const {execFile , exec} = require("child_process")


exec("chmod +x index.bash",(err,stdout,stderr)=>{
    if(err){
        console.log(err.message)
    }
    else if(stderr){
        console.log(stderr.message)
    }else{
        console.log(stdout)
    }
})

execFile("./index.bash",(err,stdout,stderr)=>{
    if(err){
        console.log(err.message)
    }
    else if(stderr){
        console.log(stderr.message)
    }else{
        console.log(stdout)
    }
})
