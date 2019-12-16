
<template>
  <div v-title="title" class="home">
    <Header />
    <Menu/>
    <Cikolata/>
    
    
    

  </div>
</template>
<script>
// @ is an alias to /src

import Header from '@/components/Header.vue'
import Menu from '@/components/Menu.vue'
import Cikolata from '@/components/Cikolata.vue'




export default {
  name: 'kahve-sayfasi',
  components: {
    Header,
    Menu,
    Cikolata 
  },
   data(){
    return {
      title: 'Çikolata Çeşitleri | Kahve Dünyası | Kahve Dünyası'
    }
  }
}
</script>

<style scoped>

</style>

