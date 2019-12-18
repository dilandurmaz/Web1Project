var express = require('express')
var fs = require("fs")
var uye = express.Router()


uye.get('/', function (req, res) {
  //dosya okundu
  let data = fs.readFileSync("Uyeler.json");
  //json formatında olduğu için objeye çevrildi
  let kontrol = JSON.parse(data);
  //res.send(coffee.kahveler) direk kahveleri döndürebilirsin
 
  //okunan dosya bilgileri döndürüldü.
  res.send(kontrol)

})

uye.post('/kaydet', function (req, res) {

  let arr = []
  //gelen isteği aldık
  let newUser = req.body
  //tum uyelerimizi okuduk
  let data = fs.readFileSync("Uyeler.json");
  uyeler = JSON.parse(data)
  //önceki üyelere yeni üyeyi ekledik
  arr.push(...uyeler, newUser)
  //tüm üyeleri formatlı olarak dosyaya yazdık format: (iç içe objelerde 2 boşluk bırakarak) 
  fs.writeFileSync("Uyeler.json", JSON.stringify(arr, undefined, 2))

  res.send({err:false})
})



module.exports = uye