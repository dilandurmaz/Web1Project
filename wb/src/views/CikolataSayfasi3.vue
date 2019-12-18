
<template>
  <div v-title="title" class="home">
    <Header />
    <Menu/>
    <Cikolata3/>
    
  </div>
</template>
<script>
// @ is an alias to /src

import Header from '@/components/Header.vue'
import Menu from '@/components/Menu.vue'
import Cikolata3 from '@/components/Cikolata3.vue'




export default {
  name: 'kahve-sayfasi',
  components: {
    Header,
    Menu,
    Cikolata3
  
   
  },
  data(){
    return {
      title: 'Çikolata Çeşitleri | Kahve Dünyası | Kahve Dünyası'
    }
  }
}
</script>
