
<template>
  <div v-title="title" class="home">
    <Header />
    <Menu/>
    <Atolye/>
    
  </div>
</template>
<script>
// @ is an alias to /src

import Header from '@/components/Header.vue'
import Menu from '@/components/Menu.vue'
import Atolye from '@/components/Atolye.vue'




export default {
  name: 'kahve-sayfasi',
  components: {
    Header,
    Menu,
    Atolye   
  },
  data(){
    return {
      title: 'Atolye | Keşfet | Kahve Dünyası'
    }
  }
}
</script>

