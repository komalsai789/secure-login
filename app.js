const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send(`
        <form method="POST" action="/login">
            <input type="text" name="username" placeholder="Enter username" required />
            <input type="password" name="password" placeholder="Enter password" required />
            <button type="submit">Login</button>
        </form>
    `);
});

app.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (username === "admin" && password === "1234") {
        res.send("Login Successful");
    } else {
        res.send("Invalid Credentials");
    }
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});