// 导入axios对象
import axios from 'axios'
// import  store  from '@/store/index';

// // 引入mackApi.js
// require('@/http/mockApi.js')

// 用axios创建一个axios的实例
const Server=axios.create({
    baseURL:'',//根域名
    timeout:5000,//超时时间
})

// 定义请求拦截器
Server.interceptors.request.use((config)=>{
    console.log(config)
          // let data=sessionStorage.getItem('ad')
    // let token=JSON.parse(data)||null
    // console.log(data)
    // config.headers['authorization']=token
    // store.commit('changeload',true)
    // config.headers['Authorization']=JSON.parse(sessionStorage.getItem('lx'))||''
    // config.headers['token']=JSON.parse(sessionStorage.getItem('tok'))||''
    // config.headers['token']=JSON.parse(sessionStorage.getItem('aa'))||''
    // config.headers.Authorization=JSON.parse(sessionStorage.getItem('tk'))||''
    return config
},error=>{
    return Promise.reject(error)
})  


//4. 定义相应拦截器
Server.interceptors.response.use((response)=>{
    console.log(response)
    if(response.status==200){
        // store.commit('changeload',false)
         return response.data;
    }
    return response
},(error)=>{
    return Promise.reject(error);
});

// 定义好的对象抛出对象
export default Server;

