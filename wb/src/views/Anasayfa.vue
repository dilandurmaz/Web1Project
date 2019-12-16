<template>
  
  <div v-title="title"   class="home">
 
    
    <Header />
    <Menu/>
    <Slider />
    
        
         <Footer/>
     
   
    
  
    
  </div>
  
</template>
<script>
// @ is an alias to /src

import Header from '@/components/Header.vue'
import Menu from '@/components/Menu.vue'
import Slider from '@/components/Slider.vue'
import Footer from '@/components/Footer.vue'


export default {
  name: 'anasayfa',
  components: {
    Header,
    Menu,
    Slider,
    Footer
    
    
  },
   data(){
    return {
      title: 'Kahve Dünyası',
     
    }
  }
  
 
  
}
</script>
<style scoped>



</style>
