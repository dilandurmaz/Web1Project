var express = require('express')
var fs = require("fs")
var aksesuar = express.Router()

aksesuar.get('/', function (req, res) {
    //dosya okundu
    let data = fs.readFileSync("aksesuarlar.json");
    //json formatında olduğu için objeye çevrildi
    let aksesuar = JSON.parse(data);
    //res.send(coffee.kahveler) direk kahveleri döndürebilirsin
   
    //okunan dosya bilgileri döndürüldü.
    res.send(aksesuar )

})

aksesuar.post('/degistir', function (req, res) {
    res.send('POST - DEGİSTİR')
})

module.exports = aksesuar