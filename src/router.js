const routers = [{
    path: '/',
    meta: {
        title: ''
    },
    component: (resolve) => require(['./views/orderList.vue'], resolve)
},{
    path: '/demo',
    meta: {
        title: ''
    },
    component: (resolve) => require(['./views/demo.vue'], resolve)
}
];

//引入组件

export default routers;





