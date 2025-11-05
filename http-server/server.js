const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8000;
 const PUBLIC_DIR = path.join(__dirname, "public");

 function serveFile(res, filePath, contentType){
    fs.readFile(filePath, (err, data) =>{
        if(err){
            res.writeHead(404,{ "content-Type": "text/plain"});
            res.end("404 file not found");
        } else{
            res.writeHead(200, {"content-type": contentType});
res.end(data);
        }

    });
 }
 const server= http.createServer((req, res)=>{
    console.log("request for:", req.url);

    let filePath = req.url === "/"? "/index.html" : req.url;

    filePath = path.join(PUBLIC_DIR, filePath);

    const ext = path.extname(filePath);
    let contentType = "text/html";


if (ext=== ".css") contentType="text/css";
else if (ext === ".js") contentType="appllication/javascript";
else if (ext===".png") contentType="image/png";
  else if (ext === ".jpg" || ext === ".jpeg") contentType = "image/jpeg";


    switch(ext){
        case ".css":
            contentType = "text/css";
            break;

            case ".js":
            contentType = "application/javascript";
            break;

            case ".png":
                contentType = "image/png";
                break;
                case ".jpg":
                    case ".jpeg":
                        contentType = "image/jpeg";
                        break;
                    }
  serveFile(res, filePath, contentType);

 });
 server.listen(PORT, ()=>{
    console.log(`server running at http://localhost:${PORT}`);
 });