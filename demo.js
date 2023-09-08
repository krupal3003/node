const http = requier("http");
const server = http.createServer((req,res)=>{
  res.end("Hello World");
});

server.listen(3000,()=>{
  console.log("Hello World");
});