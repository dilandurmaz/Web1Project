var express = require('express')
var fs = require("fs")
var filtre = express.Router()

filtre.get('/', function (req, res) {
    //dosya okundu
    let data = fs.readFileSync("filtrekahve.json");
    //json formatında olduğu için objeye çevrildi
    let filtrekahve = JSON.parse(data);
    //res.send(coffee.kahveler) direk kahveleri döndürebilirsin
   
    //okunan dosya bilgileri döndürüldü.
    res.send(filtrekahve)

})

filtre.post('/degistir', function (req, res) {
    res.send('POST - DEGİSTİR')
})

module.exports = filtre