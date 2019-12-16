<template>
  <div v-title="title" class="home">
    <Header />
    <Menu/>

    
  </div>
</template>
<script>
// @ is an alias to /src

import Header from '@/components/Header.vue'
import Menu from '@/components/Menu.vue'





export default {
  name: 'kahve-sayfasi',
  components: {
    Header,
    Menu
  
  
   
  },
  data(){
    return {
      title: 'Aksesuar Çeşitleri | Kahve Dünyası | Kahve Dünyası'
    }
  }
}
</script>
