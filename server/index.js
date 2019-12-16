var express = require('express')
var app = express()
var home = require("./routers/home")
var turk = require("./routers/turk")
var cors = require("cors")
//hangi uzantılar için hangi route objesinin kullanacağı belirtildi.
app.use(cors())
app.use("/home", home)
app.use("/turk", turk)
app.listen(7000, () => console.log("Server hazır port 7000 dinleniyor."));


