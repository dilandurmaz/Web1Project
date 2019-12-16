var express = require('express')
var fs = require("fs")
var turk = express.Router()

turk.get('/', function (req, res) {
    //dosya okundu
    let data = fs.readFileSync("turkkahvesi.json");
    //json formatında olduğu için objeye çevrildi
    let turkkahve = JSON.parse(data);
    //res.send(coffee.kahveler) direk kahveleri döndürebilirsin
   
    //okunan dosya bilgileri döndürüldü.
    res.send(turkkahve)

})

turk.post('/degistir', function (req, res) {
    res.send('POST - DEGİSTİR')
})

module.exports = turk