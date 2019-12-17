var express = require('express')
var fs = require("fs")
var uye = express.Router()

uye.get('/', function (req, res) {
    
    res.send(uye)

})

uye.post('/degistir', function (req, res) {
    //dosya okundu
    
    user = req.body.user
    
    fs.writeFileSync("Uyeler.json",user);

    //json formatında olduğu için objeye çevrildi
  
    //res.send(coffee.kahveler) direk kahveleri döndürebilirsin
   
    //okunan dosya bilgileri döndürüldü.
     
    res.send(uye)
})



module.exports = uye