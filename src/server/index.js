const express = require('express');

const app = express();
const http = require("http").Server(app)
const io = require("socket.io")(http)

//Useful utility function for detecting if we are in production or not
//const isDev = process.env.NODE_ENV !== "production"

//serve the actual React frontend...
app.use(express.static('dist'));

//api example
//app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));

io.on("connection", socket => {
    //setting up socket.on and other socket-related functions here

    socket.on("disconnect", reason => {
        //what to do when the socket has been disconnected
    })
})

http.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));