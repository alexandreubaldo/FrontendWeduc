import Vue from 'vue';
import App from './App.vue';
// import VueRouter from 'vue-router';

// Vue.use(VueRouter)
// import cadastrarCandidato from './components/cadastrarCandidato.vue'

// Vue.use(VueRouter)

// const router = new VueRouter()

// router.map({
//   '/cadastrarCandidato':{
//     component: cadastrarCandidato
//   }
// })

Vue.config.productionTip = false

new Vue({
  // router,
  render: h => h(App),
}).$mount('#app')
