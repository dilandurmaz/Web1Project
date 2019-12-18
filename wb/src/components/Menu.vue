
<template>
<div>
     
    
                    <div id="menu">
                                <ul class="hmenu">
                                
                                    <a>  
                                      <img  class="ko"   src="../assets/h.png" alt=" hediye resmi" >
                                    </a>

                                     <li>
                                          <a style="color:#E9255D;">  <strong> H E D İ Y E  G Ö N D E R</strong>  </a>
                                    </li>
                                
                                  
                                    <li>  

                                        <router-link    to="/kahve-sayfasi"> 
                                       <b-button style="position:relative;top:-15px;background-color:white;border:none;outline:none;color:black" @click="openModal" >K A H V E</b-button>

                                       <b-modal id="modal-1" hide-footer="true" hide-header="true" size="sm" body-bg-variant="light" title="BootstrapVue">
                                       <p class="my-4"> <sweetalert-icon icon="loading" /> </p>
                                       </b-modal>
                                          
                                          
                                          </router-link>

                                          <div>
  
</div>

                                   
                                           
                                            <ul style="position:absolute;left:0;" >
                                                 <div class="turkkonum">
                                                 <li>
                                                    <img  src="../assets/turkkahvesi.png" >
                                                    <a  style="color:white;" href="#">TÜRK KAHVESİ</a>
                                                </li>
                                                </div>                                                
                                                <li>
                                                   
                                                   <div class="filtrekonum">
                                                    <img src="../assets/filtrekahve.png"> 
                                                     <a style="color:white;" href="#">FİLTRE KAHVE</a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="yoreselkonum">
                                                    <img src="../assets/yoreselkahve.png">
                                                    <a style="color:white;" href="#">YÖRESEL KAHVE</a>
                                                    </div>
                                                </li>
                                                <li >
                                                    <div class="espressokonum">
                                                    <img src="../assets/espresso.png">
                                                    <a style="color:white;" href="#">ESPRESSO</a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="hazırkonum">
                                                    <img src="../assets/hazırkahveler.png">
                                                    <a style="color:white;" href="#">HAZIR KAHVELER</a>
                                                    </div>
                                                </li>
                                                 <li >
                                                     <div class="cikolatakonum">
                                                     <img src="../assets/salepvesıcakcikolata.png">
                                                     <a style="color:white;" href="#">SALEP VE SICAK ÇİKOLATA</a>
                                                     </div>
                                                </li>
                                                 <li >
                                                     <div class="surupkonum">
                                                     <img src="../assets/suruplar.png">
                                                     <a style="color:white;" href="#">ŞURUPLAR</a>
                                                     </div>
                                                </li>
                                            </ul> 
                                    </li>

                                    <li>
                                          <router-link to="/cikolata-sayfasi" > 
                                           <b-button style="position:relative;top:-15px;background-color:white;border:none;outline:none;color:black" @click="openModal" >Ç İ K O L A T A</b-button>
                                           <b-modal id="modal-1" hide-footer="true" hide-header="true" size="sm" body-bg-variant="light" title="BootstrapVue">
                                       <p class="my-4"> <sweetalert-icon icon="loading" /> </p>
                                       </b-modal>
                                          
                                           </router-link>
                                           
                                            <ul style="position:absolute;left:0;" >
                                                 <div class="turkkonum">
                                                 <li>
                                                    <img  src="../assets/kutucikolata.png" >
                                                    <router-link to="/cikolata/kutu-cikolata"> 
                                                    <a style="color:white;" href="#">KUTU ÇİKOLATA</a>
                                                    </router-link>
                                                    <ul>
                                                         <li><a href="#">Spesiyal</a></li>
                                                         <li><a href="#">Trüf</a></li>
                                                        <li><a href="#">Roche</a></li>
                                                         <li><a href="#">Madlen</a></li>
                                                         <li><a href="#">Çikolata Kaplı Lokum</a></li>
                                                        <li><a href="#">Çilolata Kaplı Badem Ezmesi</a></li>
                                                         <li><a href="#">Lavi</a></li>
                                                         <li><a href="#">Bebek Çikolatası</a></li>
                                                        <li><a href="#">Sosyal Sorumluluk</a></li>

                                                    
                                                    </ul>
                                                
                                                </li>
                                                </div>
                                                
                                                <li>
                                                   
                                                   <div class="filtrekonum">
                                                    <img src="../assets/atistirmalikcikolata.png"> 
                                                     <a  style="color:white;" href="#">ATIŞTIRMALIK ÇİKOLATA</a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="yoreselkonum">
                                                    <img src="../assets/cikolatakaplilar.png">
                                                    <a style="color:white;" href="#">ÇİKOLATA KAPLILAR</a>
                                                    </div>
                                                </li>
                                                <li >
                                                    <div class="espressokonum">
                                                    <img src="../assets/draje.png">
                                                    <a style="color:white;" href="#">DRAJE</a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="hazırkonum">
                                                    <img src="../assets/pastacilikcikolatalari.png">
                                                    <a style="color:white;" href="#">PASTACILIK ÇİKOLATALARI</a>
                                                    </div>
                                                </li>
                                                 
                                            </ul> 
                                    </li>
                              
                              
                                     
                                   
                                   <li>
                                          <router-link to="/aksesuar-sayfasi"> 
                                          <b-button style="position:relative;top:-15px;background-color:white;border:none;outline:none;color:black" @click="openModal" >A K S E S U A R</b-button>

                                       <b-modal id="modal-1" hide-footer="true" hide-header="true" size="sm" body-bg-variant="light" title="BootstrapVue">
                                       <p class="my-4"> <sweetalert-icon icon="loading" /> </p>
                                       </b-modal>
                                          
                                          
                                          
                                          </router-link>
                                           
                                
                                    </li>
                                  <li><a><strong> F İ T  L E Z Z E T L E R</strong></a></li>

                                  <li><a><strong>P A S T A  /  M A K A R O N </strong> </a>
                                  <ul style="position:absolute;left:0;">
                                                 <li><a href="#">PASTA</a></li>
                                                <li><a href="#">MAKARON </a></li>
                                 </ul>
                                 </li>

                                  <li><a ><strong>A Y I N  Ü R Ü N Ü</strong> </a></li>
                                  <li><a href="#" style="color:#005E5C;" >
                                       <router-link to="/hakkimizda-sayfasi"> 
                                      <b-button style="position:relative;top:-32px;background-color:white;border:none;outline:none;color:black" @click="openModal" >H A K K I M I Z D A</b-button>

                                       <b-modal id="modal-1" hide-footer="true" hide-header="true" size="sm" body-bg-variant="light" title="BootstrapVue">
                                       <p class="my-4"> <sweetalert-icon icon="loading" /> </p>
                                       </b-modal>
                                          
                                        </router-link></a>
                                   <ul style="position:absolute;left:0;">
                                      <li><a href="#">Alt Menü 1</a></li>
                                      <li><a href="#">Alt Menü 2</a></li>
                                      <li><a href="#">Alt Menü 3</a></li>
                                   </ul>
                                  </li>
                             </ul>
                 </div>

                 
                 

                </div>
</template>



<script>
export default {
    methods:{
        openModal(){
           
            this.$bvModal.show('modal-1')
            var v = this;
            setTimeout(function(){
                v.$bvModal.hide('modal-1')
            },1000)
        }
    }
   
}
</script>

<style scoped>


.turkkonum {
    position:relative;
    left:10px;
    top:35px;
    height:20px;
    

}


a:hover {
    color: yellow;
    text-decoration: none;
}
.filtrekonum {
    position:relative;
    left:150px;
    top:16px;
    height:20px;
}
.yoreselkonum {
     position:relative;
    left:290px;
    top:-20px;
    height:20px;
}
.espressokonum {

     position:relative;
    left:430px;
   top:-40px;
   height:20px;

}
.hazırkonum {

    position:relative;
    left:540px;
    top:-70px;
    height:20px;

}
.cikolatakonum {
    position:relative;
    left:650px;
    top:-90px;
    height:20px;


}
.surupkonum{

position:relative;
left:820px;
top:-130px;
height:20px;


}
.k1{


    height:20px;
    width:100px;
}

#menu {
    position: absolute;
    left:120px;
    top:200px;
    width:1510px;
	padding:0px;
	background-color: white;

}
.hmenu {
    position:absolute;
    left:50px;
    top:1px;
	padding:17px 8px 15px;;
	margin:0px;
	font-size: 15px;
	border-left-width: 0px;
    border-left-style: solid;
    font: 10px sans-serif;
    
}


ul.hmenu>li {
	float:left;
	
	display:block;
	color: #FFF;
	border-right-width:1px;
	border-right-style: solid;
	border-right-color: #FFFFFF;
	padding-right: 10px;
	padding-left: 10px;
	padding-bottom:3px;
	padding-top:3px;
    height:20px;
 
}
ul.hmenu li:hover  {
     
    color:#E9255D;
    
}
ul.hmenu li a {
	color:black;
   
    display:block;
    padding:21px 9px;
}

ul.hmenu ul {
	position:absolute;
	list-style:none;
	display:none;
    width: 1000px;
    height: 60px;
    margin:0px;
    padding: 0px;      
}
ul.hmenu ul li {
	background-color: #6C0C33;
    
    padding:3px;
   
}

ul.hmenu  li:hover>ul {
	position:absolute;
	display:block;
    
    z-index: 999;
  
}


.ko {


    position: absolute;
    top:28px;
    left:-10px;
    width:35px;
    height:35px;
}



body {
    font-family: 'Helvetica Neue', Arial, sans-serif;
    font-size: 12px;
    color: #393939;
    
  }


  .hak {

 position: absolute;
 top:315px;
 left:1350px;
 width:35px;
 height:30px;
  }
  .dizayn {
    background-color: #6C0C33;
    position:relative;
    width: 1400px;
    height:800px;

 }

</style>