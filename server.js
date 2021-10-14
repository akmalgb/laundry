const express = require("express");
const app = express();

//call member's router
const member = require("./routers/member");

app.use("/member", member)
//call member's router

app.listen(8000, () => {
    console.log('Server berlari kencang di port 8000');
})