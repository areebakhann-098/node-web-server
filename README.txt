==============================================
      Node.js Web Server Project 
==============================================

This project has TWO parts:
1. HTTP Module Server
2. Express.js Server

I created both to understand the difference between using 
Node.js built-in HTTP module and Express.js framework.

----------------------------------------------
PART 1: HTTP MODULE SERVER
----------------------------------------------

 Folder: http-server

➡ File: server.js
➡ Port: 8000

In this part, I used Node.js core modules:
- http
- fs
- path

What I did:
1. I created a basic server using the 'http' module.
2. I manually handled file requests using the 'fs.readFile()' method.
3. I created a 'public' folder that contains:
   index.html
   about.html
   contact.html
   style.css
   script.js
   images (local pictures)
4. I checked file extensions like .html, .css, .js, .jpg, .png 
   and sent proper Content-Type headers.
5. I displayed 404 messages when files were not found.

How it works:
- When I open http://localhost:8000 → it shows index.html (Home page).
- When I go to /about or /contact → it loads those pages.
- CSS, JS, and images are served using fs.readFile().

This part helped me understand how Node.js handles requests and responses internally.

----------------------------------------------
PART 2: EXPRESS.JS SERVER
----------------------------------------------

 Folder: express-server

 File: server.js
 Port: 3000

In this part, I used the Express framework.

What I did:
1. I installed Express using:  npm install express
2. I imported express and path using ES modules.
3. I created a server using:
   import express from "express";
4. I used express.static() to serve the "public" folder automatically.
5. I created routes for:
   - Home page ("/")
   - About page ("/about")
   - Contact page ("/contact")
6. I sent HTML files using res.sendFile() for each route.

How it works:
- When I run node server.js, the server starts at http://localhost:3000
- Express automatically serves all static files (HTML, CSS, JS, Images)
  from the public folder.
- Routing became very easy with app.get().

----------------------------------------------
DIFFERENCES I OBSERVED
----------------------------------------------

| Feature | HTTP Module | Express.js |
|----------|--------------|-------------|
| Setup | Manual | Automatic |
| Routing | Written manually using if/else | Done easily with app.get() |
| File Handling | Using fs.readFile() | express.static() does it automatically |
| Code Length | Long | Short and clean |
| Error Handling | Manual | Built-in |
| Speed of Development | Slow | Fast |

----------------------------------------------
MY EXPERIENCE & LEARNING
----------------------------------------------

By building both servers, I learned how Node.js works behind the scenes 
and how Express makes development much easier.

- The HTTP server was good for understanding basics like 
  how to send responses and handle files manually.
- The Express server was much simpler, cleaner, and required 
  less code for the same task.
- Express also makes routing and static file serving very easy.

If I make any real-world project, I will prefer Express.js
because it is fast, easy, and professional.

----------------------------------------------
Created By: Areeba Khalid
Date: November 2025
----------------------------------------------
