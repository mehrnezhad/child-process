const {exec} = require("child_process")

exec("cd new&&touch index.html",(err,stdout,stderr)=>{
    if(err){
        console.log(err.message)
    }
    else if(stderr){
        console.log(stderr.message)
    }else{
        console.log(stdout)
    }
})
