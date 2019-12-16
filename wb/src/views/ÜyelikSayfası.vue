
<template>
  <div class="home">
    <Header />
    <Menu/>
    <Uyelik/>

    
  </div>
</template>
<script>
// @ is an alias to /src

import Header from '@/components/Header.vue'
import Menu from '@/components/Menu.vue'
import Uyelik from '@/components/Uyelik.vue'





export default {
  name: 'uyelik-sayfasi',
  components: {
    Header,
    Menu,
    Uyelik,

  
   
  }
}
</script>
