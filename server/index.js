var express = require('express')
var app = express()
var home = require("./routers/home")
var turk = require("./routers/turk")
var filtre = require("./routers/filtre")
var aksesuar = require("./routers/aksesuar")
var uye = require("./routers/uye")
var cors = require("cors")
var bodyParser = require("body-parser")


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
//hangi uzantılar için hangi route objesinin kullanacağı belirtildi.
app.use(cors())
app.use("/home", home)
app.use("/turk", turk)
app.use("/filtre", filtre)
app.use("/aksesuar", aksesuar)
app.use("/uye", uye)
app.listen(7000, () => console.log("Server hazır port 7000 dinleniyor."));


