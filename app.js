const express = require('express')
const app = express()

app.get("/", (req, res) => {
    return res.send("hello")
})

app.listen(() => {
    console.log("Server running on 7000")
}, 7000)
