# qiankun-demo
本demo力求用最少的代码进行演示如何使用`qiankun`,更多细节需要自己去[文档](https://qiankun.umijs.org/) 查看
> 说明:
> 
> main-vue 是主应用，son-react 和 son-vue是子应用
  
# 启动程序
> 进入三个目录分别启动程序
1. `cd main-vue && yarn && yarn start`
2. `cd son-react && yarn && yarn start`
3. `cd son-vue && yarn && yarn start` 
4. 打开 `http://localhost:8080/`  

下面说明自己在使用`qiankun`的时候觉得重要的步骤
## 主应用注意事项 
1. 主应用主要是给子应用提供容器
2. 主应用跳转到子应用使用`window.history.pushState({}, title, href);`
3. 在主应用中注册
``` javascript
import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  {
    name: 'reactApp',
    entry: '//localhost:3000',   // 自己可以在son-react/package.json配置
    container: '#sub-view',
    activeRule: '/app-react',
  },
  {
    name: 'vueApp',
    entry: '//localhost:8081', // 自己可以在son-vue/package.json配置
    container: '#sub-view',
    activeRule: '/app-vue',  // **重要** 这里的activeRule要和子应用的new VueRouter中的base一致
  },
]);
// 启动 qiankun
start()
```

## 子应用 react 注意事项
1. 本`react demo` 是用`Create React App`搭建的`react` V17.0版本,V16版本同理配置。
2. 在`son-react`的根目录创建`.rescriptsrc.js`文件，注意根目录不是`son-react/src`，而是`son-react`的目录。
3. 在`son-react/src`目录下面创建`.public-path.js`文件。
4. 修改根据[文档](https://qiankun.umijs.org/zh/guide/tutorial#react-%E5%BE%AE%E5%BA%94%E7%94%A8) 修改`index.js`
5. `react-router`的`basename`需要设置为`{window.__POWERED_BY_QIANKUN__ ? '/app-react' : '/'}`

## 子应用 vue2.x 的注意事项
1. 在`son-vue/src`目录下面创建`.public-path.js`文件。
2. 修改根据[文档](https://qiankun.umijs.org/zh/guide/tutorial#vue-%E5%BE%AE%E5%BA%94%E7%94%A8) 修改`vue.config.js`
3. `Vue`的创建在`main`文件的`render`函数中，所以`vuex`的`store`在`render`函数中里面加入
4. 注意`vue-router`的`base`修改为`window.__POWERED_BY_QIANKUN__ ? '/app-vue/' : '/'`
