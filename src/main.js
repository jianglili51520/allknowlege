import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "lib-flexible/flexible"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { Grid, GridItem, Dialog, Icon, Search,Button,Field,List,cell,CellGroup,NavBar,Collapse,CollapseItem,Pagination,Empty } from 'vant'
// 引入echarts
import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts

Vue.use(ElementUI);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Grid)
Vue.use(GridItem)
Vue.use(Dialog)
Vue.use(Icon)
Vue.use(Search)
Vue.use(Button)
Vue.use(Field)
Vue.use(List)
Vue.use(cell);
Vue.use(CellGroup );
Vue.use(NavBar);
Vue.use(Pagination);
Vue.use(Empty);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
