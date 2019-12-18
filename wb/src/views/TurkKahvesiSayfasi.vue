<template>
  <div v-title="title" class="home">
    <Header />
    <Menu/>
    <Turkkahvesi/>
  </div>
</template>
<script>
// @ is an alias to /src

import Header from '@/components/Header.vue'
import Menu from '@/components/Menu.vue'
import Turkkahvesi from '@/components/Turkkahvesi.vue'





export default {
  name: 'magaza-sayfasi',
  components: {
    Header,
    Menu,
    Turkkahvesi
    
  },
  data(){
    return {
      title: 'Kahve Çeşitleri |Turk Kahvesi | Kahve Dünyası '
    }
  }
}
</script>
