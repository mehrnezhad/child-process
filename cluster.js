import cluster from "cluster";
import os from "os"
if(cluster.isPrimary){
    
    for (let index = 0; index < os.cpus().length; index++) {
     cluster.fork()
    }
    cluster.on("exit",(worker,code,signal)=>{
        cluster.fork()
    })

}else{
    import("./cluster-app.js")
}