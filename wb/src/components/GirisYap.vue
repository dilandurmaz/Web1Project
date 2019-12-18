
<template>
<div class="main">
 

  <div class="form-container">
    <form  >
    <!--------------------------------------------------------------------------------------------------------------------------------------------------------->
    <!--Bu kısımda google ve facebook butonları ile giriş ekranlarına gidilebilmesi için butonlra uygun linkler verildi.-->

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
    <!--------------------------------------------------------------------------------------------------------------------------------------------------------->
    <p style="position:absolute;top:120px;left:200px; font-size:13px;"> VEYA</p>
    <!--------------------------------------------------------------------------------------------------------------------------------------------------------->
    
   
   <div style="position:relative;top:200px;">  
   <div>
   <input 
   v-model="input.username"
   type="text"
   id="email"
   name="email"
   required
   autofocus="autofocus"
   class="inputs"
   placeholder="Eposta Adresinizi Giriniz"
   />
   </div>
   <div style="position:relative;top:20px;">
    <input 
   v-model="input.password"
   type="text"
   id="password"
   name="password"
   required  
   class="inputs"
   placeholder="Parola Giriniz"
   />
   </div>
    
   </div>
    <!--------------------------------------------------------------------------------------------------------------------------------------------------------->
    <a  href="https://www.kahvedunyasi.com/sifremi-unuttum"  style="position:absolute;bottom:170px; float:left;text-decoration:underline;left:73px;">Parolanızı mı unuttunuz?</a>

      <div class="girisyap_btn_container">
      <button v-on:click="login()"  type="submit" class="girisyap_btn">GİRİŞ YAP</button>
      </div>
    <!--------------------------------------------------------------------------------------------------------------------------------------------------------->
      <div class="hesabınız_yok_mu">
            <p>
                Hesabınız yok mu ?
              <router-link class="link" style="text-decoration:underline;" to="/kayit-ol">Kayıt Ol</router-link>
              </p>
      </div>
    <!--------------------------------------------------------------------------------------------------------------------------------------------------------->
    </form>
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
import axios from 'axios'
export default {
  
    data(){
      return{
        input: {
          username:"",
          password:""
        },
        Uyeler: [],
        hatali:false
        
      };
    },
    async created () {
     
     try {
       const res = await axios.get("http://localhost:7000/uye");
       this.Uyeler = res.data;
     }catch (e) {
       console.error(e);
     }
    },
    methods: {
      login(){
        for (let i=0;i<this.Uyeler.length;i++){
          if(this.input.username!= "" && this.input.password !=""){
            if (
               this.input.username == this.Uyeler[i].Eposta &&
               this.input.password == this.Uyeler[i].Parola

            ){
              alert("Giriş Başarılı Anasayfaya Yönlendiriliyorsunuz");
              this.$emit("authendicated",true);
              this.$router.replace({path:"/"});
              this.hatali =true ;
            }
          }
        }
      }
    }
  
      

     
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

.main{
  background-image: url("../assets/kahve_cekirdegi.png");
  width:1600;
  height: 800px;
  position: relative;
  top:320px;
}

body
{
margin:0;
padding:0;
font-family:sans-serif;
}
.google_ile_giris_yap
{
  text-decoration: none;
  color:black;
  font-size:10px;
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
   font-size:10px;
   border-radius:0px;
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
  right:40px;
  top:20px;
  box-shadow: 0 0px 1px black;
}
/*facebook butonu style özellikleri */
.btn-facebook {
   color: black;
  background-color:rgb(47, 47, 122);
  width:150px;
  height:80px;
  left:70px;
  position:absolute;
  top:20px;
  box-shadow: 0 0px 1px black;
}
/*-----------------------------------------------------------------------------------------------------------------------------*/
.form-container /*girişyap kısmının genel olarak içine alındığı class*/
{
  position:absolute;
  top:335px;
  left:950px;
  transform:translate(-50%,-40%); /*html elemanlarını döndürmek,boyutlandırmak,eğmek için kullanılır*/ 
 /* 50px aşağıya 40px sağa öteler*/ 
  width:450px;
  height:560px;
  background:white;
box-sizing: border-box;


}
/*-----------------------------------------------------------------------------------------------------------------------------*/
.inputlara_ait_container
{
 position:absolute;
 left:100px;
top:180px;
 border:1px solid white;
 width:270px;
 height:200px;

}

/*-----------------------------------------------------------------------------------------------------------------------------*/
.form-container .inputBox /*eposta veparolanın'un konumunu ayarlar*/ 
{
  position:relative;
 
  
}
/*-----------------------------------------------------------------------------------------------------------------------------*/
.form-container .inputBox input
{
width:100%;
height:25px;
font-size:16px;
padding:20px 0;
margin-bottom: 30px;
border:none;
background:white;
outline:none;
}
/*-----------------------------------------------------------------------------------------------------------------------------*/
.form-container  .inputBox label
{
  position:absolute;
  text-align:initial; /* parola ve e posta yazılarını başlangıç kısmına sabitle*/ 
  top:0;
  left:0;
 padding: 20px; /*e posta ve parola inputu için alan genişletme*/ 
  width:230px;
  font-size:16px;
  color:rgb(168, 168, 168);
  pointer-events:none;
  transition: .5s;
  border:1px solid rgb(168, 168, 168);
 
}
/*-----------------------------------------------------------------------------------------------------------------------------*/
/* focus özelliği:fare ile nesne üzerine gelindiğinde özellik değiştirir fakat fare çekildiğinde tekrar eski haline gelir*/ 
.form-container .inputBox input:focus ~ label,
.form-container .inputBox:valid ~ label /*valid :kullanıcının girdileri ile eposta ve parola yazılarının üst üste gelmesini engeller.Kaldırıldığında yazılar üst üste gelir*/ 
{

  left:0;
  color: rgb(168, 168, 168);
  font-size:12px;

}
/*-----------------------------------------------------------------------------------------------------------------------------*/
.girisyap_btn
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
}
/*-----------------------------------------------------------------------------------------------------------------------------*/
.girisyap_btn_container
{
  position:absolute;
  bottom:85px;
  left:80px;
}
.girisyap_btn:hover
{
  background-color:#096361;
  outline:none;
}
/*-----------------------------------------------------------------------------------------------------------------------------*/
.parolanızımı_unuttunuz_container
{
  position:absolute;
  left:0px;
}
/*-----------------------------------------------------------------------------------------------------------------------------*/
.girisyap_btn:hover
{
  background-color:#096361;
  outline:none;
}
/*-----------------------------------------------------------------------------------------------------------------------------*/
.hesabınız_yok_mu
{
  position:absolute;
  bottom:9px;
 left:130px;

}

 .konum1 {
  position:relative;
  top:790px;
  background-color:#6c0c33;
  border-radius: 0px;
  width:100%;
 }
 .footerfoto
 {
   position:absolute;
   right:200px;
   bottom:35px;
 }





.enalt
{
  background-color: #630d30;
  left:-100px;
  position: absolute;

  height:80px;
  text-align:center;
  top:1120px; 
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
  top:1220px;
  left:-100px;
  width:100%;
  height:80px;
}
.enalt3
{
  border-radius: 0px;
  position: absolute;
  background-color: #e7e3e3;
  top:1335px;
  left:5px;
  width:100%;
  height:80px;
}
.list-unstyled  :hover
{
color:yellow;
}





</style>

