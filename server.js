const express = require("express");
// const http = require("http");
const path = require("path");

// const port = process.env.PORT || 5000;
// const app = express();
// const publicPath = path.join(__dirname, "dist");
// var server = http.createServer(app);


const port = process.env.PORT || 8080;
const app = express();
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'public')));


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => {
    console.log("Server Running!", port);
});