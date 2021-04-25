import dva from 'dva';
import './index.css';
import { createBrowserHistory  as createHistory} from 'history';
import router from "./router"

// 1. Initialize
const app = dva({
  history: createHistory(),
});

// 2. Plugins
// app.use({});

// 3. Model
require('./models').default.forEach(key => app.model(key.default));
// app.model(require('./models/example').default);
// app.model(require('./models/product').default);
// 

// 4. Router
// app.router(require('./router').default);
console.log(require('./router'));
app.router(router);

// 5. Start,相当于一个挂载的操作
app.start('#root');

/**
 * 第一种：带#号的路由
 * 比如说有一个地址#hahh， 其实是锚点到这个地址haha
 * 比方说这个a标签，<a href='#hello'>Hello</a>, 地址点击#hello也是自动跳转的是hello的这个位置，只不过目前的#这部分知识点已经通过js去控制了
 * 
 * 第二种：使用H5的history的Api 
 * https://developer.mozilla.org/zh-CN/docs/Web/API/History_API
 * https://bestvpn.org/html5demos/history/   在线例子
 * 
 * 页面跳转的组件放在route是里边的
 * UI组件放哪里呢？
 * 
 */
