
<template>
  <div v-title="title" class="girisyap">
   
    <Header />
    <Menu/>
    <GirisYap />
    
  </div>
</template>
<script>
// @ is an alias to /src

import Header from '@/components/Header.vue'
import GirisYap from '@/components/GirisYap.vue'
import Menu from '@/components/Menu.vue'


export default {
  name: 'anasayfa',
  components: {
    Header,
    Menu,
    GirisYap,
    
  },
   data(){
    return {
      title: 'Kayıt Ol / Giriş Yap | Kahve Dünyası'
    }
  }
 
}
</script>

<style scoped>
</style>
