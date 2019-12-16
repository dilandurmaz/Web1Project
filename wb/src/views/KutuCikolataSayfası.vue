
<template>
  <div v-title="title" class="home">
    <Header />
    <Menu/>
    <KutuCikolata/>
    
  </div>
</template>
<script>
// @ is an alias to /src

import Header from '@/components/Header.vue'
import Menu from '@/components/Menu.vue'
import KutuCikolata from '@/components/KutuCikolata.vue'




export default {
  name: 'kahve-sayfasi',
  components: {
    Header,
    Menu,
    KutuCikolata  
  },
  data(){
    return {
      title: 'Kutu Çikolata | Çikolata Çeşitleri | Kahve Dünyası | Kahve Dünyası'
    }
  }
}
</script>
