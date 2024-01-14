const http = require("http");
const fs=require("fs");
const PORT=2000;
const hostname="localhost";

console.log("console is woohoo on"+__dirname);
const home=fs.readFileSync("./index.html","utf-8");
const server = http.createServer((req, res) => {
    console.log(req.url);
    if(req.url=="/about"){
        return res.end("<h1>about</h1>");
    }else if(req.url=="/"){
       return res.end(home);
    }
    else return res.end("<h1>working</h1>");
});

server.listen(PORT, hostname, () => {
    console.log(`Server is working on http://${hostname}:${PORT}`); // Corrected the typo and added a colon after "http"
});
