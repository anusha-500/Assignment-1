import Vue from 'vue'
import Router from 'vue-router'
//import Helloword from '../components/HelloWorld'
import pro1 from '../components/pro1'
import home from '../components/home'
import blog from '../components/blog'
import services from '../components/services'
import contact from '../components/contact'
import form1 from '../components/form1'
//import search from '../components/sampleap1'
import tested from '../components/test28'
//import test1 from '../components/test1'
//import q5 from '../components/q5'
//import q2 from '../components/q2'
//import q1 from '../components/q1'
//import q8 from '../components/q8'
//import q4 from '../components/q4'
//import q3 from '../components/q3'
//import q10 from '../components/q10'
import q6 from '../components/q6'
    Vue.use(Router)
    const routes=[{
    path:'/',
    name:"q6",
    component:q6
},
{
    path:'/pro1',
    name:"Project1",
    component:pro1
},
{
    path:'/home',
    name:"Home",
    component:home
},
{
    path:'/blog',
    name:"Blog",
    component:blog
},
{
    path:'/services',
    name:"Services",
    component:services
},
{
    path:'/contact',
    name:"Contact",
    component:contact
},
{
    path:'/form1',
    name:"formpage",
    component:form1
},
{
    path:'/test28',
    name:"tested",
    component:tested
},



    ]
    let router=new Router({routes})
    export default router

