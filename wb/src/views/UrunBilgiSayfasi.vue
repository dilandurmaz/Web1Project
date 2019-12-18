
<template>
  <div v-title="title" class="home">
    <Header />
    <Menu/>
    <UrunBilgi/>
    
  </div>
</template>
<script>
// @ is an alias to /src

import Header from '@/components/Header.vue'
import Menu from '@/components/Menu.vue'

import UrunBilgi from '@/components/UrunBilgi.vue'



export default {
  name: 'magaza-sayfasi',
  components: {
    Header,
    Menu,
    UrunBilgi
  },
  data(){
    return {
      title: ' Kahve Dünyası '
    }
  }
}
</script>
