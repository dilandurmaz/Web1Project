<template>
<div class="body">

    <div class="ust" >
            <div>
            <img  src="../assets/kargo.png" alt="Kargo Arabası Simge">
            </div>
            <div >
                <p>
                    <strong>
                       
                            75 T L   V E   Ü Z E R İ   S İ P A R İ Ş L E R D E   K A R G O   B E D A V A!
                       
                    </strong> 
                </p>
            </div>
    </div>

    <div>     
              <div class="alisverisedon">
                   <button @click="geriDon" style="border:none; background-color: white; outline:none; " >
                   <img src="../assets/alisverisedon.png" >
                   </button>
              </div>
               



               <div class="logo">
                        <a href="https://www.kahvedunyasi.com">
                            <!--Logonun üerine tıklandığında ana sayyafa yönlendirir-->
                            <img class="logo" src="./assets/logo.png">
                        </a>
               </div>
               
               <div>
                   <a>
                   <img class="guvenli"  src="./assets/guvenliodeme.png" >
                   </a>
              </div>

    </div>

    <div class="sepet">
      
         <div class="yazı">
           <h5><strong> Sepet </strong> </h5>
           <p> En sevdiğiniz tada ulaşmanıza <strong> 2 adım kaldı.</strong> </p>
          
        </div>

        <div class="beyaz">
            
            <ul v-for="(item,index) in urun" :key="item.id">
              <li>
                <b-container>
                  <b-row>
                    <b-col class="col-md-1" style="border: 1px solid gray; height: 110px; width:100px; background-color: gray;">
                      <img width="100%;" >
                    </b-col>
                    <b-col class="col-md-5" style="border: 1px solid gray; height: 110px;">
                      <p style="font-size: 12px;">
                      {{item.ad}}</p>
                      <p style="font-size: 8px;">
                        {{item.adet}} Adet x {{item.fiyat}} TL
                      
                      </p>
                    </b-col>
                    <b-col class="col-md-3" style="border: 1px solid gray; height: 110px;">
                      <b-row>
                        <b-col class="col-md-8">
                          <div>{{item.adet}}</div>
                          <div>adet</div>
                        </b-col>
                        <b-col class="col-md-4"  style="border: 1px solid gray; height: 110px;">
                          <b-row   style="border: 1px solid gray; height: 55px;" >
                            <button @click="arttir(index)" style="background: none; border:none;"> + </button>
                          </b-row>
                          <b-row   style="border: 1px solid gray; height: 55px;">
                            <button @click="azalt(index)" style="background: none; border:none;">-</button>
                          </b-row>
                        </b-col>
                      </b-row>
                    </b-col>
                    <b-col class="col-md-3" style="border: 1px solid gray; height: 110px;"></b-col>
                  </b-row>
                </b-container>
              </li>
            </ul>


        </div>
        

         <div class="beyazınaltı">
               
                   <a>
                   <img   src="../assets/kargosepet.png" >
                   </a>
                   <div class="yazı1">
                   <p ><strong> En geç <span style="color:#00CCC2;">Yarın</span> kargoya verilir.</strong> </p>
                   </div>
                   <a>
                   <img class="motor"  src="../assets/motor.png" >
                   </a>
                   <div class="yazı2">
                   <p><strong> İstanbul içi saat 12:00'ye kadar <br>
                   aynı gün teslimat</strong> </p>
                   </div>
        </div>

        <div >
       <b-card  class="menuyeni">
              <b-tabs   >
                    
                        <b-tab  title="Çok Satanlar" >
                               <div class="container1">
                               <img class="img1" src="../assets/img1.png"  >
                               <div class="overlay">S E P E T E E K L E</div>
                               </div>
                               <div class="container2">
                               <img class="img2"  src="../assets/img2.png"  >
                                <div class="overlay">S E P E T E E K L E</div>
                               </div>
                               <div class="container3">
                               <img class="img3"  src="../assets/img3.png" >
                                <div class="overlay">S E P E T E E K L E</div>
                               </div>
                               <div class="container4">
                               <img class="img4"  src="../assets/img4.png"  >
                               <div class="overlay">S E P E T E E K L E</div>
                               </div>
                                
                        </b-tab>
                   
                                          
                    <b-tab title="Yanında İyi Gider" >
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
                       
                    <b-tab   title="Yeni  Ürünler" >
                      
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
     


     </div>
   


</div>
    
</template>


<script>

export default {
    data(){
      return{
        urun: [],
        adet: 0,
        urunler: [
          { id: 0, ad: 'Kahve Dünyası Türk Kahvesi ve Fincan Seti', img:'', fiyat: 16, adet: 1},
          { id: 1, ad: 'Kahve Dünyası Kupa Bardak,10lu Salep ve Sıcak Çiklata ', img:'', fiyat: 25, adet: 1  },
          { id: 2, ad: 'El Yapımı Fındık Kreması 380g', img:'', fiyat: 22, adet: 1  },
          { id: 3, ad: 'Madlen Sütlü-Bitter Çikolata 358 gr. ', img:'', fiyat: 43, adet: 1  },
          { id: 4, ad: 'Kahve Dünyası Yeşil Termos', img:'', fiyat: 110, adet: 1  },
          { id: 5, ad: 'Arçelik TKM 9961 S Telve Türk Kahvesi Makinesi + 4 Adet 100g Orta Kavrulmuş Türk Kahvesi', img:'', fiyat: 1250, adet: 0  },
          { id: 6, ad: 'Arçelik TKM 9961 B Telve Türk Kahvesi Makinesi + 4 Adet 100g Orta Kavrulmuş Türk Kahvesi', img:'', fiyat: 1250, adet: 0  },
          { id: 7, ad: 'Kahve Dünyası Türk Kahvesi ve Fincan Seti', img:'', fiyat: 16, adet: 0  },
          { id: 8, ad: 'Filtre Kahve Keyif Seti', img:'', fiyat: 75, adet: 0  }          
        ],
        isExist:false
      }
    },
    methods:{
      arttir(id){
        this.urun[id].adet++;
      },
      azalt(id){
        if(this.urun[id].adet > 1)
           this.urun[id].adet--;
      },

      geriDon(){
        eBus2.$emit('geriDonme','mainpage')
      }
    },

    created(){
      eventBus.$on('urunEkle',(data) => {
        for(let i = 0; i< this.urun.length; i++){
                if(this.urun[i].id==data){
                    this.urun[i].adet +=1
                    this.isExist = true
                }
            }
        if(this.isExist!=true){
                this.urun.push(this.urunler[data])
                this.urun[this.urun.length-1].adet = 1
            }
        this.isExist = false
      })
    }
}
</script>


<style scoped>

.menuyeni {
  position: relative;
  top:140px;
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
.body {
    height: 100%;
    width: 100%;
}
.yazı1{
    position: relative;
    left:70px;
    top:-35px;
}
.motor {
    position: relative;
    left:300px;
    top:-80px;

}
.yazı2 {
    position: relative;
    left:380px;
    top:-130px;

}
.beyazınaltı {
 

position: relative;
left:50px;
top:150px;

}

.beyaz {

background-color:white;
height:auto;
width:700px;
position: relative;
left:50px;
top:100px;
}

.sepet {

background-color:#f7f8f9;
height:620px;
width:1340px;
position: relative;
left:60px;
top:-100px;

}
.yazı {
  position:relative;
  top:100px;
  left:48px;
  
}

.ust
{   
   
    background-color:#f7f8f9;
    font-size:14px;
    font-family: Arial, Helvetica, sans-serif;
    width:100%;
    color:#005e5c;
    text-align: center;
    margin-top: 0%;
    height:50%;
}
.alisverisedon {

 position: relative;
 left:10px;
 top:30px;

}
.guvenli {
 
 position: relative;
 left:1200px;
 top:-110px;
 height:120px;
}
.kargo {
    margin-left: 1%;
    width:5%;
   
}

.logo {


width: 25%;
margin-left: 37%;
margin-top:-20px;

}



.b-col{
  border: 1px solid gray;
}

.b-row{
  border: 1px solid gray;
}


</style>