import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../components/LoginForm.vue";

Vue.use(VueRouter);

/*注意：路由中定义的name 值必须唯一 ，因为path可以定义成一样的 */
const routes = [
    {
        path: "/",
        name: "login",
        component: Login,
    },
    {
        path: "/reg",
        name: "reg",
        component: () =>
            import(/* webpackChunkName: "reg" */ "../components/RegisterForm.vue"),
    },
    {
        path: "/home",
        name: "home",
        component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
        children: [
            {
                path: "list",
                name: "list",
                component: () =>
                    import(/* webpackChunkName: "list" */ "../views/List.vue"),
            },
            {
                path: "user",
                name: "user",
                component: () =>
                    import(/* webpackChunkName: "user" */ "../views/UserCenter.vue"),
            },
        ]
    },
    {
        path: "/add",
        name: "add",
        component: () =>
            import(/* webpackChunkName: "add" */ "../views/AddPage.vue"),
    },
    {
        path: "/info",
        name: "info",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "add" */ "../components/ItemInfo.vue"),
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    linkActiveClass: 'active',   /*当链接被选中时，模块颜色发生变化*/
    routes,
});

export default router;
