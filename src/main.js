import Vue from 'vue';
import App from './App.vue';
import cadastrarCandidato from './components/cadastrarCandidato.vue'
import VueRouter from 'vue-router';

// Vue.use(VueRouter)

// Vue.use(VueRouter)

// const router = new VueRouter()

// router.map({
//   '/cadastrarCandidato':{
//     component: cadastrarCandidato
//   }
// })

const router = new VueRouter({
  routes: [
    { path: '/', component: cadastrarCandidato }
  ],
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
