import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../pages/Home';
import About from '../pages/About';
import News from '../pages/News';
import Messages from '../pages/Messages';
import Detail from '../pages/Detail';


Vue.use(VueRouter);

const router = new VueRouter({
    mode:'history',
    routes: [
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: '/home/news',
                    component: News
                },
                {
                    path: '/home/messages',
                    component: Messages,
                    children: [
                        {

                            path: '/home/messages/detail/:id',
                            component: Detail,
                            name: 'detail',
                            //命名路由: 给路由取一个名字(将来通过名称使用路由)
                            props: function (route) {
                                console.log('router', route);
                                return {
                                    ...route.params,
                                    ...route.query
                                }
                            }
                        },
                    ]
                },
            ]
        },
        {
            path: '/about',
            component: About,
        },
        {
            path: '',
            redirect: '/home'
        }
    ]
})


export default router;