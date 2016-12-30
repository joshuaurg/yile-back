const Hello = resolve => {
    require.ensure(['./components/Hello.vue'], () => {
        resolve(require('./components/Hello.vue'));
    });
};

const Welcome = resolve => {
    require.ensure(['./components/Welcome.vue'], () => {
        resolve(require('./components/Welcome.vue'));
    });
};

const routers = [{
    path: '/hello',
    name: 'hello',
    component: Hello
},{
    path: '/welcome',
    name: 'welcome',
    component: Welcome
},]

export default routers
