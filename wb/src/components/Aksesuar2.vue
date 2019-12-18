
<template>
<div>
    <div>
       <img class='kahvekonum' src="../assets/aksesuar.png" alt="Kahve resmi anasayfa">
    </div>
    <router-link  to="/aksesuar-sayfasi">
    <div>
       <img style="position:relative;left:-600px;top:210px;width:4%;" src="../assets/tek.png" >
    </div>
    </router-link>
    <div>
       <router-link  to="/aksesuar2-sayfasi"> <img  style="position:relative;left:-500px;top:150px;width:55px;;"  src="../assets/çok.png" ></router-link>
    </div>

         
         
    <div class="row" style="position:relative;top:140px;"> 
                     <!-- %100 -->
                     
                       <div class="col-3"  v-for="(kahve,index) in Aksesuarlar" :key="index">
                            <!-- %25 -->
                            <a v-bind:href="kahve.url" >
                                <br> <br> <br> <br> <br>  
                             <img  v-bind:src="kahve.image" />     
                            </a>
                             <p><strong> {{kahve.acıklama}} </strong> </p>
                             <p style="color:red;"><strong> {{kahve.fiyat}} </strong> </p>
                         
                          
                        </div>
                        
    
     </div> 




                        <footer class="py-2 "> <!--Footer başlangıç-->
              <div class="konum1" >

                    <!--footer1 kısmı-->

                    <div class="container text-white">
                        <div class="row">

                            <div class="col-md-2">
                                <ul class="list-unstyled">
                                    <strong>
                                        <li class="text-white">KAHVE</li>
                                    </strong>

                                    <li>Türk Kahvesi</li>
                                    <li>Filtre Kahve</li>
                                    <li>Yöresel Kahve</li>
                                    <li>Espresso</li>
                                    <li>Hazır Kahveler</li>
                                    <li>Salep ve Sıcak Çikolata</li>
                                    <li>Şuruplar</li>
                                </ul>
                            </div>
                            <div class="col-md-2">
                                <ul class="list-unstyled">
                                    <strong>
                                        <li class="text-white">ÇİKOLATA</li>

                                    </strong>
                                    <li>Pasta</li>
                                    <li>Makaron</li>
                                    <li>Kutu Çikolata</li>
                                    <li>Atıştırmlık Çikolata</li>
                                    <li>Çikolata Kaplılar</li>
                                    <li>Draje</li>
                                    <li>Pastacılık Çikolataları</li>
                                    <strong>
                                        <li class="text-white">AKSESUAR</li>
                                        <li class="text-white">FİT LEZZETLER</li>
                                        <li class="text-white">PASTA/MAKARON</li>
                                    </strong>

                                </ul>

                            </div>
                            <div class="col-md-2">
                                <ul class="list-unstyled">
                                    <strong>
                                        <li class="text-white">KAMPANYALAR</li>
                                        <li class="text-white">HAKKIMIZDA</li>
                                    </strong>

                                    <li>Hikayemiz</li>
                                    <li>Üretim</li>
                                    <li>Kurumsal Çözümler</li>
                                    <li>Kariyer</li>
                                    <li>Atölye</li>
                                    <li>Tüm Mağazalar</li>
                                        <li>Blog</li>
                                        <li>Etik Kurallarımız</li>
                                </ul>
                            </div>
                            <div class="col-md-2">
                                <ul class="list-unstyled">
                                    <strong>
                                        <li class="text-white">YARDIM</li>
                                    </strong>
                                    <li>Üyelik</li>
                                    <li>Sipariş İşlemleri</li>
                                    <li>Ödeme İşlemleri</li>
                                    <li>Teslimat Süreci</li>
                                    <li>İade İşlemleri</li>
                                    <li>Ürün Gamı</li>
                                    <li>Teknik Konular</li>
                                    <li>veri Güvenliği</li>
                                    <li>İletişim</li>
                                    <li>İletişim Formu</li>
                                    <li>Bilgi Toplumu Hizmetleri</li>
                                </ul>
                            </div>
                            <div class="footerfoto">
                                <div class="col-md-2">
                                    <img src="../assets/footerfoto.png" >
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--CLEARFIX:boydan boya olan satırı kesip aşağı atar-->


                </div>

                <div class="yazıkonum">
                    <p> Özel Tasarım Aksesuar Çeşitleri ve Hediye Kutuları Kahve Dünyası'nda! <br><br>
                    
                    Kahve hazırlama araçlarından hediye kutusu çeşitlerine, kahve makinesinden fondü setine kadar aradığınız birçok aksesuar Kahve Dünyası'nda! Kahvenizi hazırlarken <br>
                    kaliteden vazgeçmeyin diye özel tasarım filtre kahve bardağı, espresso fincanı, Türk kahvesi fincanı ve uygun fiyatlı Türk kahvesi makinesi ile elektrikli  <br>
                    cezveyi sizlerin beğenisine sunuyoruz. Kaliteli malzemeden üretilen, uygun fiyatlı ve kullanışlı french press ile kolayca filtre kahvenizi hazırlayabilirsiniz.  <br>
                    Özel tasarım termos matara çeşitleri ile kahvenizi her an her yerde içebilmek için sıcak tutabilirsiniz. Fondü setiyle sıcak çikolata ve meyvenin eşsiz uyumunu evinizde <br>
                     yaşayabilirsiniz. Farklı konseptlere göre hazırlanmış hediye kutularından birini seçerek içini dilediğinizce doldurabilir ve sevdiklerinizi mutlu edebilirsiniz.
                   
                    </p>

                </div>



<div class="enalt" >
    <img src="../assets/favorilerim.png" alt="favorilerim footer" style=" position:absolute;left:500px;bottom:30px;">
    <a style="color:white;font-family: Arial, Helvetica, sans-serif; font-size:12px; position:absolute;left:550px; bottom:35px;"> 
        <strong>
            FAVORİLERİM
        </strong>
    </a>
  

    <img src="../assets/magazalar2.png" alt="magazalar footer" style=" position:absolute;left:870px;bottom:27px;">
    <a style="color:white;font-family: Arial, Helvetica, sans-serif; font-size:12px; position:absolute;left:920px; bottom:35px;"> 
        <strong>
           MAĞAZALAR
        </strong>
    </a>

    <img src="../assets/favorilerim.png" alt="favorilerim footer" style=" position:absolute;left:1200px;bottom:30px;">
    <a style="color:white;font-family: Arial, Helvetica, sans-serif; font-size:12px; position:absolute;left:1250px; bottom:35px;"> 
        <strong>
            FAVORİLERİM
        </strong>
    </a>
</div>
<div class="enalt2">
    <strong>
            <a style="color:rgb(143, 138, 138);font-family: Arial, Helvetica, sans-serif; font-size:15px; position:absolute;left:350px; bottom:35px;">Güvenli Ödeme Noktası</a>
            <img src="../assets/kredikartı.png" style=" position:absolute;left:520px;bottom:30px;">
    </strong>

    <strong>
            <a style="color:rgb(143, 138, 138);font-family: Arial, Helvetica, sans-serif; font-size:15px; position:absolute;left:700px; bottom:30px;">Müşteri Hizmetleri: </a>
            <a style="color:black;position:absolute;left:838px; bottom:30px;">0(850) 393 7070</a>
            <img src="../assets/kredikartı.png" style=" position:absolute;left:520px;bottom:30px;">
    </strong>
  
    
    <strong>
            <a style="color:rgb(143, 138, 138);font-family: Arial, Helvetica, sans-serif; font-size:15px; position:absolute;left:1000px; bottom:30px;">Bizi Takip Edin </a>         
            <img src="../assets/social.png" style=" position:absolute;left:1110px;bottom:20px;">
    </strong>

</div>
<div class="enalt3">
        <a style="color:black;font-family: Arial, Helvetica, sans-serif; font-size:13px; position:absolute;left:200px; bottom:30px;">© 2010-2017 Altınkılıçlar Kahve Kakao Ürünleri Tic. ve San. A.Ş. Tüm Hakları Saklıdır. </a>
        <a style="color:black;font-family: Arial, Helvetica, sans-serif; font-size:13px; position:absolute;left:1100px; bottom:30px;">Design & Development</a>
        <a>
        <img src="../assets/positive.png" href="https://medium.com/positive-a-digital-approach" alt="positive sitesi logo" style=" position:absolute; left:1240px; bottom:20px;">
        </a>
    </div>




    
</footer>  <!--Footer Bitiş-->

</div>



    
</template>

<script>
const API_URL="http://localhost:7000/aksesuar"
export default {

    data:() =>({
       
       Aksesuarlar:[]
   
    }),

    mounted() {

        fetch(API_URL)
        .then(response=>response.json())
        .then(result=> {
            this.Aksesuarlar=result.Kahve;
            console.log(this.Aksesuarlar)
        } )
        
    }
    
}
</script>

<style scoped>
.kahvekonum {
    position: relative;
    top:200px;
    width: 100%;
    height:3%;
    left: 20px;
}

.konum {
    position:absolute;
    top:280px;
}
.iki {
    position:absolute;
    top:400px;
}

/* Container needed to position the overlay. Adjust the width as needed */
.container1 {
  position: absolute;
  top:100px;
  left:500px;
  width: 200px;;
   height: 25px;
   color:gray;
}
.container2 {
  position: absolute;
  top:100px;
  left:750px;
  width: 200px;
   height: 25px;
   color:gray;
}
.container3 {
  position: absolute;
  top:100px;
   left:950px;
  width: 200px;
   height: 25px;
   color:gray;
}
.container4 {
  position: absolute;
  top:100px;
  left:1200px;
  width: 200px;
  height: 25px;
  color:gray;   
}
/* Make the image to responsive */
.k1 {
  position: absolute;
  left:-220px;
  top:200px;
  display:block;
   width: 210px;
  height:300px;
}
.k2 {
  position: absolute;
  left:-180px;
  top:200px; 
  display:block;
   width: 210px;
   height:300px;
}
.k3 {
  position:absolute;
  left:-140px;
  top:200px;
  display:block;
  width: 210px;
   height:300px;
}
.k4 {
  position:absolute;
  left:-120px;
   top:200px;
  display:block;
   width: 210px;
  height:300px;
}


.overlay {
  position: relative;
  top:550px;
  left:-200px;
  background: rgba(0, 0, 0, 0.5); /* Black see-through */
  
  width: 250px;
  height:50px;
  transition: .5s ease;
  opacity:0;
  color: white;
  font-size: 20px;
  padding: 20px;
  text-align: center;
}

/* When you mouse over the container, fade in the overlay title */
.container1:hover .overlay {
  opacity: 1;
}
.container2:hover .overlay {
  opacity: 1;
}
.container3:hover .overlay {
  opacity: 1;
}
.container4:hover .overlay {
  opacity: 1;
}



.yazıkonum {
 position:relative;
  top:-200px;
  
 

}


 .konum1 {
  position:relative;
  top:400px;
  background-color:#6c0c33;
  border-radius: 0px;
  width:100%;
 }
  .footerfoto
 {
   position:absolute;
   right:200px;
   bottom:50px;
 }




.enalt
{
  background-color: #630d30;
  left:-100px;
  position: relative;

  height:80px;
  text-align:center;
  top:200px; 
  width:1630px;
  height: 70px;
   cursor: pointer;
    border-radius: 0px;
}
.enalt2
{
  border-radius: 0px;
  position: relative;
  background-color: white;
   top:240px; 
  left:-100px;
  width:100%;
  height:80px;
}
.enalt3
{
  border-radius: 0px;
  position: relative;
  background-color: #e7e3e3;
   top:280px; 
  left:5px;
  width:100%;
  height:80px;
}
.list-unstyled  :hover
{
color:yellow;
}



</style>