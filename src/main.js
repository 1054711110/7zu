import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 配置axios的信息
// import http from '@/utils/request'
// Vue.prototype.$axios=http

// 引入mackApi.js
// require('@/http/mockApi.js')
 
// 配置echarts的信息
// import echats from 'echarts'
// Vue.prototype.$echarts=echats

// 引入element-ui
// import element from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css';

// Vue.use(element)


// 引入vant-ui
// import vant from 'vant'
// import 'vant/lib/index.css';
// Vue.use(vant)


// 定义路由守卫
router.beforeEach((to, from, next) => {

  // let data=JSON.parse(sessionStorage.getItem('aa'))||''
  // console.log(data)
  // if(to.path.indexOf('/aa')>-1){
  //   if(to.path=='/aa/login'){
  //     if(data!=''){
  //       next('/aa/index')
  //     }
  //   }else{
  //     if(data==''){
  //       next('/aa/login')
  //     }
  //   }
  // }
  console.log(to)
 

  
  next()
})

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
