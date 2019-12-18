<template>

<div class="main">
<div class="form_container">
    <!------------------------GOOGLE VE FACEBOOK BUTONLARI--------------------------------------->
<div>
  <button class="btn btn-lg btn-google btn-block text-uppercase" type="button"  >
  <a class="google_ile_giris_yap" href="https://www.youtube.com/watch?v=O7Odv-tQUP0"  ><strong>Google ile <br>giriş yap.  </strong> </a>
  <img src="../assets/google.png" class="google_resim">
 </button>
</div>

<div>
 <button class="btn btn-lg btn-facebook btn-block text-uppercase" type="button"  > 
<a class="facebook_ile_giris_yap" href="https://www.youtube.com/watch?v=O7Odv-tQUP0" ><strong>Facebook ile <br> giriş yap.  </strong> </a>
<img src="../assets/facebook.png" class="facebook_resim">
 </button>
</div>
<div>
     <p style="position:absolute;top:130px;left:220px; font-size:13px;"> VEYA</p>
</div>

<!-------------------EN ALT KISIMDAKİ KAYIT OL ŞARTLARI VS.---------------------------->
<div class="kayit_ol_sartlari">
<p>
Kayıt Ol diyerek
<a href="#" class="link" style="color:rgb(53, 150, 181;">
    Kahve Dünyası'nın Üyelik Koşulları</a>
    ve
    <a href="#" class="link" style="color:rgb(53, 150, 181;">
        Gizlilik Şartlarını
         'nı kabul etmiş oluyorsunuz
    </a>
</p>
</div>


<!----------------------En alttaki hesabınız var mı link?----------------->
<div class="hesabin_var_mi"> 
<p> Zaten Hesabınız var mı?
    <a href ="/uye.girisi" class="link"  style="color:rgb(53, 150, 181;">Giris Yapın </a>
</p>
</div>




<form style="position:relative;top:200px;" >

      <div>
       <input v-model="AdSoyad" 
       type="AdSoyad"
       required
       name="AdSoyad"
       class="inputs"
       placeholder="Ad Soyad giriniz">
      </div>
       <br>
       <div>
       <input v-model="Eposta" 
       type="Eposta"
       required
       name="Eposta"
       class="inputs"
       placeholder="Eposta giriniz">
       </div>
         <br>
       <div>
       <input v-model="CepTelefonu" 
       type="CepTelefonu"
       required
       name="CepTelefonu"
       class="inputs"
       placeholder="Cep Telefonu giriniz">
       </div>
         <br>
       <div>
       <input v-model="Parola" 
       type="email"
       required
       name="email"
       class="inputs"
       placeholder="Parola giriniz">
       </div>
</form>

<!-------------------------------KAYIT OL BUTONU------------------------->
 <div class="kayitol_btn_container">
   <button @click="userEkle"  type="submit" class="kayitol_btn">KAYIT OL</button>
   
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
                                </div>.
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




    
</footer>  <!--Footer Bitiş-->
</div> 
</template>

<script>
import axios from "axios";
const baseURL ="http://localhost:7000/uye/kaydet"
export default {
    data(){
      return{
        user : [] ,
        AdSoyad: '',
        Eposta: '',
        CepTelefonu:'',
        Parola: ''
      }
    },
    
     methods: {
       async userEkle() {
         try{
         const res = await axios.post(baseURL,{
       
        AdSoyad:this.AdSoyad,
        Eposta:this.Eposta,
        CepTelefonu:this.CepTelefonu,
        Parola:this.Parola
       
          
         });
          if(res.err === true) throw new Error()
          else console.log("başarılı")
       } catch {
         console.log("hata")
       }

       },

     }
}


</script>



<style scoped>
.main{
  background-image: url("../assets/kayit_ol_arka_plan.png");
  width: 1910px;
  height: 800px;
  top:200px;
  position:relative;
}

.body
{
    margin:0;
    padding:0;
    font-family: 'Courier New', Courier, monospace;
}

/*FACEBOOK VE GOOGLE BUTONLARI  */
.google_ile_giris_yap
{
  text-decoration: none;
  color:black;
}
.google_resim
{
  position:absolute;
  top:15px;
  left:0px;
}
.facebook_ile_giris_yap
{
  text-decoration: none;
  color:white;
}
.facebook_resim
{  position:absolute;
  top:15px;
  left:0px; 
}

.btn-google {
  color: black;
  background-color:white;
  width:150px;
  height:80px;
  position:absolute;
  right:50px;
  top:40px;
  box-shadow: 0 0px px ;
}
/*facebook butonu style özellikleri */
.btn-facebook {
   color: black;
  background-color:rgb(52, 52, 126);
  width:150px;
  height:80px;
  left:80px;
  position:absolute;
  top:40px;
  box-shadow: 0 0px 0px;
}
.btn-facebook :hover
{
    background-color:rgb(50, 50, 117);
}
/***********CHECKBOX TANIMI*************************************************** */ 

/*********************************************************************************************************************************/
.form_container /*girişyap kısmının genel olarak içine alındığı class*/
{
position:absolute;
top:50%;
left:50%;
transform: translate(-50% ,-50%);/*html elemanlarını döndürmek,boyutlandırmak,eğmek için kullanılır*/
 /* 50px aşağıya 40px sağa öteler*/ 
  width:470px;
  height:750px;
  background:white;
box-sizing: border-box;
box-shadow: 0px 0px 1px black;/*Kutulara gölge verebilmek için box-shadow kullanılır */
border-radius:0px;
}
.inputlara_ait_container
{
 position:absolute;
 left:100px;
top:180px;
 border:1px solid white;
 width:270px;
 height:200px;
}
.form_container.inputbox
{
    position:relative;
}

.form_container .inputBox input /*girdi alacak kısımlar için */
{
    width:100%;
    padding:15px;
    font-size:15px;
    color:black;
    outline:none; /*kenardaki mavi çizgilerin silinmesini sağladı */
    margin-bottom:40px; /*input kutuları arası boşluk bıraktı */
    border:2px solid  rgb(185, 185, 185); /*ilk baştaki px değeri border kalınlığını belirledi.*/
    background:transparent;
    
   
}

.form_container .inputBox label
{
  position: absolute;
padding:0px 0px;
left:2px;
margin-top:-75px;

}
/* focus özelliği:fare ile nesne üzerine gelindiğinde özellik değiştirir fakat fare çekildiğinde tekrar eski haline gelir*/ 
.form_container .inputBox input:focus ~ label,
.form-container .inputBox:valid ~ label
{
  left:0;
  color: rgb(168, 168, 168);
  font-size:12px;
}
/*------------------------------------------*/ 
.kayit_ol_sartlari
{
    position:absolute;
    bottom:120px;
    font-size: 14px;
}
.kayit_ol_sartlari  :hover
{
    text-decoration:none;
}
/*KAYIT OL BUTONU İÇİN CSS*/
.kayitol_btn
{
  font-size: 13px;
  font-family: sans-serif;
  padding: 20px ;
  width: 280px;
  border-radius: 0;
  text-align: center;
  cursor: pointer;
  background-color:#005e5c;
  outline:none;
  border-color:#005e5c; /*borderın kenarlarının renk değişikliği*/
  box-shadow: 0px 0px 0px #096361;
  color:white;
}
/*-----------------------------------------------------------------------------------------------------------------------------*/
.kayitol_btn_container
{
  position:absolute;
  bottom:45px;
  left:80px;
}
.kayitol_btn:hover
{
  background-color:#096361;
  outline:none;
}
.hesabin_var_mi /*giriş yapın linki */
{
    position:absolute;
    bottom:0;
    left:120px;
     font-size: 13px;
}
.hesabin_var_mi :hover
{
     text-decoration:none;
}

 .konum1 {
  position:relative;
  top:780px;
  background-color:#6c0c33;
  border-radius: 0px;
  width:100%;
 }
 .footerfoto
 {
   position:absolute;
   right:350px;
   bottom:0px;
 }





.enalt
{
  background-color: #630d30;
  left:-100px;
  position: absolute;

  height:80px;
  text-align:center;
  top:1000px; 
  width:1630px;
  height: 70px;
   cursor: pointer;
    border-radius: 0px;
}
.enalt2
{
  border-radius: 0px;
  position: absolute;
  background-color: white;
  top:1100px;
  left:-100px;
  width:100%;
  height:80px;
}
.enalt3
{
  border-radius: 0px;
  position: absolute;
  background-color: #e7e3e3;
  top:1000px;
  left:5px;
  width:100%;
  height:80px;
}
.list-unstyled  :hover
{
color:yellow;
}




</style>