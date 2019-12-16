<template>
<div>


        <div class="header_ilk_kısım">
            <img class="kargo" src="../assets/kargo.png" alt="Kargo Arabası Simge">
            <div>
                <p>
                    <strong>
                        <span>
                            75 TL VE ÜZERİ SİPARİŞLERDE KARGO BEDAVA!
                        </span>
                    </strong>
                </p>
            </div>
        </div>

        <div class="header_ikinci_kısım">


            <!--LOGO İÇİN AYRI DİV TANIMLANACAK!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!-->
            <div class="headercontainer">
                <div class="topnav">

                    <div class="search-container">
                       
                            
                            <b-button style="width:300px;border: 2px solid #F4F4F4	"  @click="modalShow = !modalShow"  type="submit" >
                                Arama Yap 
                               
                                </b-button>                             
                                 <img class="arama"    src="../assets/a.png">
                                <b-modal hide-footer="true"  size="xl" v-model="modalShow"  >
                                      <div class="modal-content">
                        
                             <div class="search-container" style="border:none;">
                            <input  type="text" placeholder="FİLTRE KAHVE" name="search" style="outline:none;width:1100px;height:150px;border:none">
                        </div>
                           </div>
                                  </b-modal>
                               
                    
                    </div>
                </div>
                     

            
                



                <div class="logo_div">
                    <div>
                        <router-link to="/"><!--Logonun üerine tıklandığında ana sayyafa yönlendirir-->
                            <img class="logo" src="../assets/logo.png"> 
                        </router-link>
                            
                        
                    </div>
                </div>

                <!--SON KISIMDAKİ ÜÇ BUTON-->
                <div class="msg_div">
                    <ul >

                        <a class="magaza">
                            <img src="../assets/magazalar.png">
                            <router-link to="/magaza-sayfasi" >
                            <span style="color:#6c0c33;" >MAĞAZALAR</span>
                              </router-link>
                        </a>


                        <a class="giris" @click="giris" href="#" >
                            <img src="../assets/giris.png">
                           
                            <router-link to="/giris-yap"  > 
                            <b-button style="position:relative;top:-15px;background-color:white;border:none;outline:none;color:black" @click="openModal" >G İ R İ Ş</b-button>

                            <b-modal id="modal-1" hide-footer="true" hide-header="true" size="sm" body-bg-variant="light" title="BootstrapVue">
                            <p class="my-4"> <sweetalert-icon icon="loading" /> </p>
                            </b-modal>
                            </router-link>
                          
                        </a>



                        <a class="sepet" href="https://www.google.com/">
                            <img src="../assets/sepet.png">
                            <div class="dropdown">
                            <span >SEPET</span>
                            <div class="dropdown-content">
                             <p>Alışveriş Sepetiniz Boş</p>
                            </div>
                          </div>
                         </a>   
                         
                        
                       
                         
                        

                    </ul>
                </div>
            </div>
        </div>
</div>
</template>

<script>
export default {
    data(){
        return{
            
        modalShow: false,
       
        }
    },
    methods:{
       
        openModal(){
           
            this.$bvModal.show('modal-1')
            var v = this;
            setTimeout(function(){
                v.$bvModal.hide('modal-1')
            },1000)
        }
    }
    
   
};
    
</script>

<style scoped>

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  left:-100px;
  background-color: #f9f9f9;
  min-width: 220px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 12px 16px;
  color:black;
  z-index: 1;
}

.dropdown:hover .dropdown-content {
  display: block;
}
.magaza {
    position:absolute;
    left:20px;
    top:-150px;
    width:140px;
    color:#6c0c33;
    height: 15px;
    
}
.magaza :hover{
text-decoration:none;
color:#6c0c33;
}
.giris {
    position:absolute;
    left:160px;
    top:-160px;
     width:100px;
     color:#6c0c33;
      height: 15px;



}
.sepet {
    position:absolute;
    left:250px;
    top:-150px;
     width:100px;
     color:#6c0c33;
    height: 15px;


}
.main-content 
{  
    text-decoration:none;
    width: 100%;
    height:100vh;
    background-color:white;
    margin:0px 0px;
}

.header_ilk_kısım
{   
   
    background-color:#f7f8f9;
    color:#005e5c;
    font-size:12px;
    text-decoration:none;
    font-family: Arial, Helvetica, sans-serif;
    
    cursor:pointer; /*üzerine gelindiğinde fare imleci el işareti olur*/
    position:absolute;
    top:1px;
    border-radius:0px;
    width:100%;
    height:50px;
    text-align :center;

}
   
.headercontainer
{
    position:absolute;
  height:100px;
  width:100%;
}
.arama {
    position: relative;
    left:115px;
    top:-35px;
    height:32px;
    width:40px;
}
.kargo /*kargo fotoğrafı için*/
{
    width: 50px;
    height:50px;
    position:absolute;
    left:550px;
    top:0px;
    text-decoration:none;
}

.header_ikinci_kısım
{
    max-width: 1750px;
    margin: auto;
    position:relative;
     top:120px;
    text-decoration:none;
}
    /*.logo_div
    {   float:left;
        position:relative;
        min-height: 1px;
        padding:10px;
    }*/
    .logo
    { 
        text-decoration:none;
        width: 100px;
        height:100px;
        position:absolute;
        left:690px;
        top:-120px;
    }
.msg_div
{ 
  position:absolute;
  top:40px;
  left:1100px;
  padding: 50px 0px 100px 10px;
  float:right;
  text-decoration: none;
}





*
{box-sizing: border-box;
    border-radius:15px;
}
    
 
.topnav
{
      position:absolute;
      overflow: hidden;
      
      top:-150px;
      left:50px;
      color:gainsboro; /*border radius'un çerçeve rengi*/
     
    }
    .topnav .search-container
     {
      float: left;
      

    }
    .topnav input[type=text]  /*input yapılacak kısım*/
    {
      padding: 6px;
      margin-top: 60px;
      font-size: 15px;
      border: none;
      border-style:solid;
      border-width:1px;
    }
    
    .topnav .search-container button /*arama butonu imgesi için*/
    {
      float: right;
      padding: 6px 10px;
      margin-top: 8px;
      
      margin-left:10px;
      background: white;
      font-size: 17px;
      border: none;
      cursor: pointer;
      border-style:none;
      color:#6c0c33;
    }
  
    .topnav .search-container button:hover 
    {
      background: white; /*buton arka planı*/
    }
    
    @media screen and (max-width: 1400px) 
    {
      .topnav .search-container
       {
        float: none;   
      }
       .topnav input[type=text], .topnav .search-container button
        {   
        float: none;
        display: block;
        text-align: left;
        width: 100%;
        margin: 0;
        padding: 14px;
       }
      .topnav input[type=text] 
      {
        border: 1px solid #ccc;  
        
      }
    }

 .konum1 {
  position:relative;
  background-color:#6c0c33;
  border-radius: 0px;
  width: 0x;
 }
 .footerfoto
 {
   position:absolute;
   right:200px;
   bottom:35px;
 }


</style>