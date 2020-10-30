/**
 * @description 
 * @author cq
 * @Date 2020-10-30 15:41:47
 * @LastEditTime 2020-10-30 19:45:36
 * @LastEditors cq
 */
import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // layout: {},
  routes: [
    // { path: '/', component: '@/pages/index' },
    { exact: true, path: '/', redirect: '/home' },
    { exact: true, path: "/login", component: '@/pages/login/index',},
    {
      path: '/',
      component: '@/layouts/index', //放页面主体
      wrappers: [
        '@/wrappers/auth', //权限判定
      ],
      routes: [
        { path: '/home', component: '@/pages/home/index' },
        { path: '/testPage', component: '@/pages/testPage/index' },
        // { path: '/admin', component: 'admin' },
        { component: '@/pages/404' },
      ],
    }, 
  ],
});
