
<template>
  <div v-title="title" class="home">
    <Header />
    <Menu/>
    <Magazalar/>
    
  </div>
</template>
<script>
// @ is an alias to /src

import Header from '@/components/Header.vue'
import Menu from '@/components/Menu.vue'
import Magazalar from '@/components/Magazalar.vue'




export default {
  name: 'magaza-sayfasi',
  components: {
    Header,
    Menu,
    Magazalar
  },
  data(){
    return {
      title: 'Mağazalar | Keşfet | Kahve Dünyası '
    }
  }
}
</script>
