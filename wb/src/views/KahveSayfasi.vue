
<template>
  <div v-title="title" class="home">
    <Header />
    <Menu/>
    <Kahve/>
    
  </div>
</template>
<script>
// @ is an alias to /src

import Header from '@/components/Header.vue'
import Menu from '@/components/Menu.vue'
import Kahve from '@/components/Kahve.vue'




export default {
  name: 'kahve-sayfasi',
  components: {
    Header,
    Menu,
    Kahve
  
   
  },
  data(){
    return {
      title: 'Kahve Çeşitleri | Kahve Dünyası | Kahve Dünyası'
    }
  }
}
</script>
