import { createApp } from 'vue'
//@ts-ignore
import App from '@/App.vue'
const app = createApp(App);

//引入element-plus的所有组及所有及样式
import  ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//@ts-ignore忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
//import { icons } from '@element-plus/icons-vue/global'

//通过插件的形式，引入ElementPlus里面的所有组件
app.use(ElementPlus, {
    locale: zhCn
});

//引入svg注册脚本
import 'virtual:svg-icons-register'

//引入清除样式
import '@/styles/index.scss'

// import page from '@/components/Page/index.vue'
// import svgtest from '@/components/Svgicon/index.vue'
// app.component('svgtest', svgtest);
// app.component('page', page);
import globalComponets from '@/components'
//通过插件的形式，引入@/components目录下面的组件
app.use(globalComponets);

//最后挂载
app.mount('#app');

