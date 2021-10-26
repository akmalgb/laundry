const express = require("express");
const app = express();

//call routers
const member = require("./routers/member");
const package = require("./routers/package");
const user = require("./routers/user");

//call member's router
app.use("/member", member)

//call package's router
app.use("/package", package)

//call user's router
app.use("/user", user)

app.listen(8000, () => {
    console.log('Server berlari kencang di port 8000');
})