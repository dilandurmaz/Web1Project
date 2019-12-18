
<template>
  
  <div v-title="title"   class="home">
 
      <Header />
      <Menu/>
      <Blog/>
   
  

    
  </div>
  
</template>
<script>
// @ is an alias to /src

import Header from '@/components/Header.vue'
import Menu from '@/components/Menu.vue'
import Blog from '@/components/Blog.vue'




export default {
  name: 'anasayfa',
  components: {
    Header,
    Menu,
    Blog   
    
  },
   data(){
    return {
      title: 'Blog Sayfası | Kahve Dünyası',
     
    }
  }
  
 
  
}
</script>
<style scoped>



</style>

