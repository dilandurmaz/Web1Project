
<template>
  <div>

    <div >
                  <a href="https://www.kahvedunyasi.com/blog/siparisini-magazalarimizdan-hazir-al-66">
                        <img  class="bilgi"  src="../assets/bilgi.png" alt=" bilgi resmi" >
                  </a>

                 </div>

               
    <b-carousel
      id="carousel-1"
      class="slaytkonum"
      v-model="slide"
      :interval="4000"
      
      controls
      indicators
      background="#ababab"
     
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide>
            <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            src="../assets/kasık.png"
             width="1300"
            height="900"
            alt="image slot"
          >
        </template>

      </b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide >
         <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="1300"
            height="900"
            src="../assets/fıstık.png"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide >
           <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
           width="1300"
            height="900"
            src="../assets/ekvador.png"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
           width="1300"
            height="900"
            src="../assets/bonte.png"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide >
            <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
           width="1300"
            height="900"
            src="../assets/kutu.png"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
    </b-carousel>



  <div >
       <b-card  class="menuyeni">
              <b-tabs >
               
                        <b-tab title="Yeni Ürünler" style="color: yellow !important;"  >
                               <div class="container1">
                                  <router-link    to="/urunbilgi-sayfasi"> 
                               <img class="img1" src="../assets/img1.png"  >
                                  </router-link>
                               <div @click="tikla(0)" class="overlay">S E P E T E E K L E</div>
                               
                               </div>
                               <div class="container2">
                               <img class="img2"  src="../assets/img2.png"  >
                                <div @click="tikla(1)" class="overlay">S E P E T E E K L E</div>
                               </div>
                               <div class="container3">
                               <img class="img3"  src="../assets/img3.png" >
                                <div @click="tikla(2)" class="overlay">S E P E T E E K L E</div>
                               </div>
                               <div class="container4">
                               <img class="img4"  src="../assets/img4.png"  >
                               <div @click="tikla(3)" class="overlay">S E P E T E E K L E</div>
                               </div>
                                
                        </b-tab>
                  
                                          
                    <b-tab title="Çok Satanlar" >
                        <div class="container1">
                               <img class="img1" src="../assets/img5.png"  >
                               <div class="overlay">S E P E T E E K L E</div>
                               </div>
                               <div class="container2">
                               <img class="img2"  src="../assets/img6.png"  >
                                <div class="overlay">S E P E T E E K L E</div>
                               </div>
                               <div class="container3">
                               <img class="img3"  src="../assets/img7.png" >
                                <div class="overlay">S E P E T E E K L E</div>
                               </div>
                               <div class="container4">
                               <img class="img4"  src="../assets/img8.png"  >
                               <div class="overlay">S E P E T E E K L E</div>
                               </div>                                                 
                          </b-tab>
                       
                    <b-tab   title="İndirimli Ürünler" >
                      
                    <div class="container1">
                               <img class="img1" src="../assets/img9,.png"  >
                               <div class="overlay">S E P E T E E K L E</div>
                               </div>
                               <div class="container2">
                               <img class="img2"  src="../assets/img10.png"  >
                                <div class="overlay">S E P E T E E K L E</div>
                               </div>
                               <div class="container3">
                               <img class="img3"  src="../assets/img11.png" >
                                <div class="overlay">S E P E T E E K L E</div>
                               </div>
                               <div class="container4">
                               <img class="img4"  src="../assets/img12.png"  >
                               <div class="overlay">S E P E T E E K L E</div>
                               </div>                                            
                    </b-tab>
                                               
               </b-tabs>
          </b-card>
   </div>
  
  <div>

        <div class="konum1">
        <a href= "https://www.kahvedunyasi.com/hediye-gonder">
        <img  
         height="350"
         width="650"
         src="../assets/hediye.png"
        ></a>
         
        </div>

        <div class="konum2">
        <a href= "https://www.kahvedunyasi.com/sosyal-sorumluluk-cl-108">
        <img  
         height="350"
         width="650"
         src="../assets/cocuk.png"
        ></a>
         
        </div>   

  </div>


  <div>
  <a href="https://www.kahvedunyasi.com/blog/">
  <h1 class="blog">Blog</h1></a>
  </div>

  <div class="sonslaytkonum">



    <md-card>
    <md-card-actions>
      <div class="md-subhead">
        
        
      </div>
      <md-button class="md-icon-button"
                 target="_blank"
                 href="https://github.com/surmon-china/vue-awesome-swiper/blob/master/examples/11-slides-per-view.vue">
        
      </md-button>
    </md-card-actions>
    <md-card-media>
      <!-- swiper -->
      <swiper :options="swiperOption" >
        <swiper-slide><img  src="../assets/son1.png" style="width:400px;height:400px" ></swiper-slide>
        <swiper-slide><img  src="../assets/son2.png" style="width:400px;height:400px" ></swiper-slide>
        <swiper-slide><img  src="../assets/son3.png" style="width:400px;height:400px"></swiper-slide>
        <swiper-slide><img  src="../assets/son4.png" style="width:400px;height:400px"></swiper-slide>
        <swiper-slide><img  src="../assets/son5.png" style="width:400px;height:400px" ></swiper-slide>
        
        
        <div class="swiper-pagination"  slot="pagination" style="position:relative;top:2080;"> </div>
      </swiper>
    </md-card-media>
  </md-card>


  </div>

  <!---sedanın card kısmı--> 
   <div class="cardsgenel">
                <div class="container" style="max-width: 1165px;">
                    <div class="row">
                        <div class="col-md-3 col-sm-6">
                            <div class="card" style="width: 15rem; border-color:white ;">
                                <img src="../assets/f1.png" class="cards" >
                                <div class="card-text1">
                                    <h5 ><strong> Daima</strong> <br> <strong>Taze</strong></h5>
                                    <p >Ürünlerimiz direkt fabrikadan gönderilir, tedarik süreci
                                        olmadan taze taze hazırlanır.</p>
                                </div>
                            </div>
                        </div>
                    
                        <div class="col-md-3 col-sm-6">
                            <div class="card" style="width: 15rem; border-color:white ;">
                                <img src="../assets/f2.png" class="cards" >
                                <div class="card-text2">
                                    <h5 ><strong> Hızlı</strong> <br> <strong>Teslimat</strong></h5>
                                    <p >İstanbul içi belirli bölgelere aynı gün ve ertesi gün teslimat
                                        seçenekleri.</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-3 col-sm-6">
                            <div class="card" style="width: 15rem; border-color:white ;">
                                <img src="../assets/f3.png" class="cards" >
                                <div class="card-text3" >
                                    <h5 ><strong> Güvenli</strong> <br> <strong>Taşıma</strong></h5>
                                    <p c>Darbeye ve ısı değişimine karşı tam korunma sağlayan özel
                                        paketler ile gönderilir</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-3 col-sm-6">
                            <div class="card" style="width: 15rem; border-color:white ;">
                                <img src="../assets/f4.png" class="cards" >
                                <div class="card-text4" >
                                    <h5 ><strong> Çekirdek</strong> <br> <strong>Puan</strong></h5>
                                    <p >Her siparişinizde %3 Çekirdek kazanın, mağazalarımızda
                                        dilediğiniz gibi harcayın.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            
                <div class="en_yakin_magaza_div" style="padding:10px 200px 10px 10px">
                        <a href="https://www.kahvedunyasi.com/kesfet/magazalar"></a>
                            <img src="../assets/f5.png" alt="en yakın mağaza fotoğrafı" class="en_yakin_magaza_img">
               </div>
         
       

    <div>
        <div>
                <div class="mobil_uygulama_indir">
                        <strong>
                              <a> Mobil uygulamamızı indirin</a>
                        </strong>   
                  </div>
                  
                  <div class="mobil_uygulama_indir_altyazı">
                      <p> Mobil uygulamamıza özel kampanyalardan yararlanabilmek   <br>için uygulamamızı indirin </p>  
                  </div>
                  
        </div>

    </div>

    <div class="playstore">
            <div>
                    <div>
                        <a href="https://apps.apple.com/us/app/kahve-d%C3%BCnyas%C4%B1/id1364478029">
                        <img style="position:absolute; margin-top:840px; left:600px; " src="../assets/googleplay.png" alt="google play icon" >
                        </a>
                    </div>
                    <div>
                    <div>      
                        <a href="https://apps.apple.com/us/app/kahve-d%C3%BCnyas%C4%B1/id1364478029">
                        <img style="position:absolute; margin-top:920px; left:596px; cursor:pointer;" src="../assets/appstore.png" alt="appstore icon" >
                        </a>
                    </div>
                    
                    <div>           
                         <img style="position:absolute; margin-top:850px; left:870px; cursor:pointer;" src="../assets/QRcode.png" alt="appstore icon" >
                    </div>
                    
                     <div>
                        <a style="position:absolute; margin-top:870px; left:1000px; cursor:pointer; color:rgb(143, 138, 138);"> Uygulamamızı QR kod ile <br> hemen indirin. </a>
                    </div>
                    </div>
           </div>
            
   </div>

   <div>
        <div class="bultene_aboneol">
                <img src="../assets/bültenimizeaboneol.png" style="align-items: center; margin-top:100px;width:1700px;">
            </div>
            <div >
                <a href="https://www.kahvedunyasi.com/"></a>
                <img  src="../assets/mektup.png" style=" position:absolute; left:470px; top:4120px; width:70px; height:70px;  cursor: pointer;">
            </div>
            <div >
                    <a href="https://www.kahvedunyasi.com/"></a>
                    <img  src="../assets/aboneol.png" style=" position:absolute; left:820px; top:4120px; width:110px; height:50px;  cursor: pointer;">
                </div>
            
</div>



<div>

  <b-modal id="bv-modal-example" hide-footer hide-header>
    <div style="background-color:#F7F8F9" class="d-block text-center">
      <img src="../assets/tik.png" >
      <h3>Ürün Sepete Eklendi!</h3>
      <b-row>
        <b-col>
        <b-button style="width:40;background-color:#6c0c33;" class="mt-3" block @click="$bvModal.hide('bv-modal-example')">ALIŞVERİŞE DEVAM</b-button>

        </b-col>
        <b-col>
        <b-button style="width:40;background-color:#005e5c;" class="mt-3" block @click="sepeteGit('sepetim')">SEPETE GİT</b-button>
        </b-col>
      </b-row>
    </div>
    
  </b-modal>
</div>







</div>
 
</template>




<script>

export default {
    data() {
      return {
        swiperOption: {
          slidesPerView: 3,
          spaceBetween: 30,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        }
      }
    }
    
  }




</script>


<style scoped>
.bilgi {
    position: relative;
    top:200px;
    left:40px;
    
    
    width:1270px;
    height:170px; 
}


.list-unstyled  :hover
{
color:yellow;
}

.cardsgenel {

    position:absolute;
    top:2800px;
    left:250px;
}

.cards
{
  width:90px;
  height:90px;
}
.card-text1 {
position:absolute;
top:100px;
left:-100px;
width:270px;
height:60px;
}
.card-text2 {
position:absolute;
top:105px;
left:-70px;
width:250px;
height:20px;
}
.card-text3 {
position:absolute;
top:105px;
left:-60px;
width:250px;
height:20px;
    
}
.card-text4 {
position:absolute;
top:105px;
left:-70px;
width:250px;
height:20px;
    
}
.en_yakin_magaza_div
{ 
 
    width: 400px;
    height: 100px;

}
.en_yakin_magaza_img
{
  
  width:1200px;
  height:500px;
  position:absolute;
  left:115px;
  top:3100px;
}


.mobil_uygulama_indir
{
  font-size:38px;
  color:black;
  position: absolute;
  top:3650px;
  left:450px;
  font-family: Arial, Helvetica, sans-serif;
}
.mobil_uygulama_indir_altyazı
{
  font-family: Arial, Helvetica, sans-serif;
  position: relative;
  top:2800px;
  left:-70px;
  
 
 
  color:rgb(143, 138, 138);

}


.playstore {


    position:absolute;
    left:-150px;
    top:3000px;
}
.bultene_aboneol
{
    position:absolute;
    left:-150px;
    top:4000px;
    width:100px;
    height:100px;        
}


#a {
    color: grey;
    text-decoration: none;
    background-color: transparent;
}

.slaytkonum {
position:absolute;
top:520px;
left:150px;
width:1300px;
height:400px;



}
.konum1 {
   
   position: absolute;
   top:1600px;
   left:50px;
   width:650px; 
}
.konum2 {
   
   position:absolute;
   top:1600px;
   left:750px;
}
.blog {
  font-size:48px;
  font-family:Arial, Helvetica, sans-serif;
  color:#000000;
  height:60px;
  width: 111px;
  font-weight:900;
  position:absolute;
  left:670px;
  top:2100px;
  


}

.menuyeni {
  position: relative;
  top:500px;
  left:300px;
  width:1000px;
  height:400px;
  border-color:white;
  color:gray;
  
}


* {box-sizing: border-box}

/* Container needed to position the overlay. Adjust the width as needed */
.container1 {
  position: absolute;
  top:100px;
  left:200px;
  width: 200px;;
   height: 25px;
   color:gray;
}
.container2 {
  position: absolute;
  top:100px;
  left:400px;
  width: 200px;
   height: 25px;
   color:gray;
}
.container3 {
  position: absolute;
  top:100px;
   left:600px;
  width: 200px;
   height: 25px;
   color:gray;
}
.container4 {
  position: absolute;
  top:100px;
  left:800px;
  width: 200px;
  height: 25px;
  color:gray;
    
}

/* Make the image to responsive */
.img1 {
  position: absolute;
  left:-220px;
  top:40px;
  display:block;
   width: 210px;
  height:300px;
}
.img2 {
  position: absolute;
  left:-180px;
  top:47px; 
  display:block;
   width: 210px;
   height:300px;
}
.img3 {
  position:absolute;
  left:-140px;
  top:53px;
  display:block;
  width: 210px;
   height:300px;
}
.img4 {
  position:absolute;
  left:-120px;
   top:50px;
  display:block;
   width: 210px;
  height:300px;
}

.sonslaytkonum {

 position:absolute;
  left:10px;
  top:2250px;
  height:60px;
  width:1500px;
}

/* The overlay effect - lays on top of the container and over the image */
.overlay {
  position: relative;
  top:400px;
  left:-200px;
  background-color: white ; /* Black see-through */
  border-style: solid ;
  width: 250px;
  height:50px;
  transition: .5s ease;
  opacity:0;
   color:#005e5c;
  font-size: 20px;
  padding: 20px;
  text-align: center;
}

/* When you mouse over the container, fade in the overlay title */
.container1:hover .overlay {
  opacity: 1;
  color:white;
  background-color: #005e5c;
}
.container2:hover .overlay {
  opacity: 1;
  color:white;
  background-color: #005e5c;
}
.container3:hover .overlay {
  opacity: 1;
  color:white;
  background-color: #005e5c;
}
.container4:hover .overlay {
  opacity: 1;
  color:white;
  background-color: #005e5c;
}

</style>