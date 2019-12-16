<template>
  <div v-title="title" class="home">
    <Header />
    <Menu/>
    <FiltreKahve/>
  </div>
</template>
<script>
// @ is an alias to /src

import Header from '@/components/Header.vue'
import Menu from '@/components/Menu.vue'
import FiltreKahve from '@/components/FiltreKahve.vue'





export default {
  name: 'magaza-sayfasi',
  components: {
    Header,
    Menu,
    FiltreKahve
    
  },
  data(){
    return {
      title: 'Filtre Kahve |Turk Kahvesi | Kahve Dünyası '
    }
  }
}
</script>
