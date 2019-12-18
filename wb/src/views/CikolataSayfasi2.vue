
<template>
  <div v-title="title" class="home">
    <Header />
    <Menu/>
    <Cikolata2/>
    
  </div>
</template>
<script>
// @ is an alias to /src

import Header from '@/components/Header.vue'
import Menu from '@/components/Menu.vue'
import Cikolata2 from '@/components/Cikolata2.vue'




export default {
  name: 'kahve-sayfasi2',
  components: {
    Header,
    Menu,
    Cikolata2
  
   
  },
  data(){
    return {
      title: 'Çikolata Çeşitleri | Kahve Dünyası | Kahve Dünyası'
    }
  }
}
</script>

