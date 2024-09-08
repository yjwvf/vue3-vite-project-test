import svgtest from '@/components/SvgIcon/index.vue';
import page from '@/components/Page/index.vue'
const allGloablComponent:any = { svgtest, page };
//全局组件的插件
export default {
    install(app:any,p1:any,p2:any) {
        Object.keys(allGloablComponent).forEach(key => {
            //注册为全局组件
            app.component(key, allGloablComponent[key]);
        });
    }
}