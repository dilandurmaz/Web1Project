<template>
  <div v-title="title" class="home">
    <Header />
    <Menu/>
     <Aksesuar2/>
                     
     
    
  </div>
</template>
<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Menu from '@/components/Menu.vue'
import Aksesuar2 from '@/components/Aksesuar2.vue'

export default {
   
  name: 'kahve-sayfasi',
  components: {
    Header,
    Menu,
    Aksesuar2
  
  
   
  },
  data(){
    return {
      title: 'Aksesuar Çeşitleri | Kahve Dünyası | Kahve Dünyası',
       
    }
  }
   

}
</script>
