import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/inicio'
import Menu from './components/templates/menu'
import MenuAlt from './components/templates/menuAlt'
//import Usuario from './components/usuario/usuario'
//import UsuarioLista from './components/usuario/usuarioLista'
//import UsuarioDetalhe from './components/usuario/usuarioDetalhe'
//import UsuarioEditar from './components/usuario/usuarioEditar'

Vue.use(Router)

//carregando de forma dinamica
const Usuario = ()=> import(/* webpackChunkName: "usuario" */'./components/usuario/usuario')
const UsuarioLista = ()=> import(/* webpackChunkName: "usuario" */'./components/usuario/usuarioLista')
const UsuarioDetalhe = ()=> import(/* webpackChunkName: "usuario" */'./components/usuario/usuarioDetalhe')
const UsuarioEditar = ()=> import(/* webpackChunkName: "usuario" */'./components/usuario/usuarioEditar')

const router =  new Router({
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        if(savedPosition){
            return savedPosition
        }else if(to.hash) {
            return {selector: to.hash}
        }else {
            return { x: 0, y: 0}
        }
    },
    name: 'inicio',
    routes: [{
        path: '/',
        //component: Inicio
        components: {
            default: Inicio,
            menu: Menu
        }
    }, {
        path: '/usuario',
        //component: Usuario,
        components:{
            default: Usuario,
            menu: MenuAlt,
            menuInferiror: MenuAlt
        },
        props: true,
        children: [
            { path: '', component:UsuarioLista },
            { path: ':id', component:UsuarioDetalhe, props:true, 
                beforeEnter: (to, from, next) => { next() } },
            { path: ':id/editar', component:UsuarioEditar, props:true, name: 'editarUsuario' }
        ]
    }, {
        path: '/redirecionar',
        redirect: '/usuario'
    },  {
        path: '*',
        redirect: '/'
    }]
})

router.beforeEach((to, from, next)=> {next()})
export default router 