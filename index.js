const express= require('express');
const app= express();
const port= process.env.PORT ||8000;

app.get('/',(req,res)=>{
    return res.json({message:"i m from docker"})
})

app.listen(port,()=>console.log(`server is running on port:${port}`))