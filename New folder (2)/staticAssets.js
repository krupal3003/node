const express = require('express')
const exp = express()

const port = process.env.PORT || 3000
exp.use('/public',express.static,("public"))

exp.get('/',(req,res)=>{
    res.sendFile('public/htmlFile.html')
})
// exp.get('/',(req,res)=>{
//     const expUse = exp.use('/static',express.static,(path.join(__dirname,'public')))
//     res.sendFile(expUse)
// })
exp.listen(port,()=>{
    console.log("Server is running ${port}");
})