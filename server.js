const express = require("express");

const app = express();
const PORT = 3000;

// Serve index.html and other static files
app.use(express.static(__dirname));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Movie Booking App running on port ${PORT}`);
});
