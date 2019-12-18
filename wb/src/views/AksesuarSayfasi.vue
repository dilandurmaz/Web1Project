
<template>
  <div v-title="title" class="home">
    <Header />
    <Menu/>
    <Aksesuar/>
    
  </div>
</template>
<script>
// @ is an alias to /src

import Header from '@/components/Header.vue'
import Menu from '@/components/Menu.vue'
import Aksesuar from '@/components/Aksesuar.vue'




export default {
  name: 'kahve-sayfasi',
  components: {
    Header,
    Menu,
    Aksesuar
  
   
  },
  data(){
    return {
      title: 'Aksesuar Çeşitleri | Kahve Dünyası | Kahve Dünyası'
    }
  }
}
</script>

