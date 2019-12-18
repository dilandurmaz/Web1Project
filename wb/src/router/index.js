import Vue from 'vue'
import VueRouter from 'vue-router'
import Anasayfa from '../views/Anasayfa.vue'
import GirisYap from '../views/GirisYap.vue'
import KayitOlSayfasi from '../views/KayitOlSayfasi.vue'
import KahveSayfasi from '../views/KahveSayfasi.vue'
import CikolataSayfasi from '../views/CikolataSayfasi.vue'
import CikolataSayfasi2 from '../views/CikolataSayfasi2.vue'
import CikolataSayfasi3 from '../views/CikolataSayfasi3.vue'
import AksesuarSayfasi from '../views/AksesuarSayfasi.vue'
import KutuCikolataSayfası from '../views/KutuCikolataSayfası.vue'
import AtolyeSayfası from '../views/AtolyeSayfası.vue'
import MagazalarSayfası from  '../views/MagazalarSayfası.vue'
import UrunBilgiSayfasi from  '../views/UrunBilgiSayfasi.vue'
import BlogSayfası from  '../views/BlogSayfası.vue'
import ÜyelikSayfası from  '../views/ÜyelikSayfası.vue'
import TurkKahvesiSayfasi from  '../views/TurkKahvesiSayfasi.vue'
import FiltreKahveSayfasi from  '../views/FiltreKahveSayfasi.vue'
import AksesuarSayfasi2 from  '../views/AksesuarSayfasi2.vue'
import Gift from  '../views/Gift.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'anasayfa',
    component:Gift,
  
    
  },
  {
    path: '/anasayfa',
    name: 'anasayfa',
    component: Anasayfa,
  
    
  },
  
  {
    path: '/giris-yap',
    name: 'girisyap',
    component: GirisYap,
   
  },
  {
    path: '/kayit-ol',
    name: 'kayiol',
    component: KayitOlSayfasi
  },
  {
    path: '/kahve-sayfasi',
    name: 'kahve',
    component: KahveSayfasi
  },
  {
    path: '/cikolata-sayfasi',
    name: 'cikolata',
    component: CikolataSayfasi
  },
  {
    path: '/cikolata-sayfasi2',
    name: 'cikolata2',
    component: CikolataSayfasi2
  },
  {
    path: '/cikolata-sayfasi3',
    name: 'cikolata3',
    component: CikolataSayfasi3
  },
  {
    path: '/aksesuar-sayfasi',
    name: 'aksesuar',
    component: AksesuarSayfasi
  },
 
  {
    path: '/cikolata/kutu-cikolata',
    name: 'kutucikolata',
    component: KutuCikolataSayfası
  },


  {
    path: '/atolye-sayfasi',
    name: 'atolye',
    component: AtolyeSayfası
  },
  {
    path: '/magaza-sayfasi',
    name: 'magaza',
    component: MagazalarSayfası
  },
  {
    path: '/urunbilgi-sayfasi',
    name: 'urun',
    component: UrunBilgiSayfasi
  },
  {
    path: '/blog-sayfasi',
    name: 'blog',
    component: BlogSayfası,
   
  },
  {
    path: '/uyelik-sayfasi',
    name: 'üyelik',
    component:ÜyelikSayfası
  },
  {
    path: '/turkkahvesi-sayfasi',
    name: 'turkkahvesi',
    component:TurkKahvesiSayfasi
  },
  {
    path: '/filtrekahve-sayfasi',
    name: 'filtrekahvesi',
    component:FiltreKahveSayfasi
  },
  { 
    path: '/aksesuar2-sayfasi',
    name: 'aksesuar',
    component:AksesuarSayfasi2
  }
   
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



export default router
