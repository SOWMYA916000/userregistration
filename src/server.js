const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.json());
app.use(express.static("public"));

app.post("/register", (req, res) => {
    const { name, email, phone, event, gender } = req.body;

    // Basic validation
    if (!name || !email || !phone || !event || !gender) {
        return res.status(400).json({
            message: "All fields are required"
        });
    }

    // Store data in text file
    const data =
        `Name: ${name}, Email: ${email}, Phone: ${phone}, Event: ${event}, Gender: ${gender}\n`;

    fs.appendFile("users.txt", data, (err) => {
        if (err) {
            return res.status(500).json({
                message: "Error saving data"
            });
        }

        res.json({
            message: "Registration successful!"
        });
    });
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});