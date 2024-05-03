const express = require('express')
const app = express()

app.get("/", (req, res) => {
    return res.send("home")
})

app.get("/hello", (req, res) => {
    return res.send("hello")
})

app.listen(7000, () => {
    console.log("Server running on 7000")
})
