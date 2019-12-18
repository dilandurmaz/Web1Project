
<template>
<div>
<!--Form Kısımları-->
<div>
    <img class="kahvekonum" src="../assets/magaza_back.png" >
</div>

<div style="position:relative;top:200px;left:35px;"> 
<!--Ülke-->
  <div class="row" >
  <b-form-group id="input-group-1"  label-for="input-1">
        <b-form-select
          id="input-1"
          v-model="form.ulke"
          :options="ulkeler"
          required
           placeholder="E-mail"
          style="width:330px;height:70px;left:15px;"
        ></b-form-select>
        </b-form-group>       
  </div>
  <!--Magaza-->
<div class="row">
  <b-form-group id="input-group-1"  label-for="input-1">
        <b-form-select
          id="input-1"
          v-model="form.magaza"
          :options="magazalar"

          required
          style="width:330px;height:70px;float:left;font-weight:5px;"
        ></b-form-select>
        </b-form-group>
     
  </div>
<div>
  <img class="Filtre"  src="../assets/filtericon.png"> 
  <p style="position:absolute;left:55px;">Filtrele</p>
</div>
<!--adres seçenekleri-->
<div class="adres_secenek">
<p  style="font-size:15px;">Kahve Dünyası Algötür-Beykoz </p>
<p   style="color:red;font-size:15px">Sarıyer</p>
<p  style="font-size:15px;"> Köybaşı Cad. Kapalı Bakkal Sok. No:170</p>
<hr/>
<p  style="font-size:15px;">Kahve Dünyası Algötür-Medipol </p>
<p  style="color:red;font-size:15px">Beykoz</p>
<p  style="font-size:15px;"> Anadolu Hisarı Mah. Kavacık Kavşağı No:19 D2 Blok 1. Bodrum Kat</p>
<hr/>
<p style="font-size:15px;">Kahve Dünyası-Kartal istMarina AVM</p>
<p style="color:red;font-size:15px">KARTAL</p>
<p style="font-size:15px;"> Çavuşoğlu Mah. Ankara Cad. No:147/6</p>
<hr/>

</div>
</div>

<!--HARİTA-->

<div class="container-fluid">
    <div class="map-responsive">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6350079.820572257!2d30.676576849389274!3d39.00105610447196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b0155c964f2671%3A0x40d9dbd42a625f2a!2zVMO8cmtpeWU!5e0!3m2!1str!2str!4v1574035859895!5m2!1str!2str" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe></div>
</div>

  <div > <!--Footer başlangıç-->
             
                            <div class="konum1" >


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
                                    <router-link to="/atolye-sayfasi"> 
                                    <li  style="color:white;">Atölye</li>
                                    </router-link>
                                     <router-link to="/magaza-sayfasi">
                                    <li  style="color:white;" >Tüm Mağazalar</li>
                                    </router-link>
                                      <router-link to="/blog-sayfasi">
                                    <li  style="color:white;">Blog</li>
                                     </router-link>
                                    <li>Etik Kurallarımız</li>
                                </ul>
                            </div>
                            <div class="col-md-2">
                                <ul class="list-unstyled">
                                    <strong>
                                        <li class="text-white">YARDIM</li>
                                    </strong>
                                     <router-link to="/uyelik-sayfasi">
                                    <li style="color:white;">Üyelik</li>
                                      </router-link>
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

     
 <!--Footer Bitiş-->
              
</div>   


</div>
</template>


<script>
  export default {
    data() {
      return {
        form: {
          
          ulke: null,
          magaza:null,
          checked: [],
            
        },
  
        
        ulkeler: [{ text: 'Ülkeler', value: null }, 'Türkiye', 'Romanya', 'Kuveyt' ,'Suudi Arabistan','İngiltere'],
        magazalar: [{ text: 'Mağaza ara/Bölge seç', value: null }, 'Adana', 'Antalya', 'Ankara' ,'İzmir'],
        show: true
      }
    },
      }
</script>
<style scoped>
.Filtre
{
  float:left;
  width:50px;
  height: 50px;
 
}
.kahvekonum {
    position: relative;
    top:100px;
    width: 90%;
    height: 200px;
    left: 20px;
}
.adres_secenek{
  margin-left: 0px; /* Same as the width of the sidenav */
  font-size: 28px; /* Increased text to enable scrolling */
  position:relative;
  top:60px;
  width:250px;
  height:5px;
 
}
.map-responsive{
    overflow:hidden;
    padding-bottom:50%;
    position:relative;
    height:0;
}
.map-responsive iframe{
    left:200px;
    top:10px;
    height:700px;
    width:1200px;
    position:relative;
}


 .konum1 {
  position:relative;
  top:200px;
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
   top:220px; 
  left:-100px;
  width:100%;
  height:80px;
}
.enalt3
{
  border-radius: 0px;
  position: relative;
  background-color: #e7e3e3;
   top:240px; 
  left:5px;
  width:100%;
  height:80px;
}
.list-unstyled  :hover
{
color:yellow;
}


</style>