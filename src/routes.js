import HomePage from './components/HomePage/HomePage';
import Caravan from './components/Caravan/Caravan';
import CaravanSale from './components/Caravan/CaravanSale';
import CaravanDesign from './components/Caravan/CaravanDesign';
import CaravanRent from './components/Caravan/CaravanRent';
import Admin from './components/Admin/Admin'
import Login from './components/Login/Login'
import AdminCaravanSaleAndList from './components/Admin/AdminCaravanSaleAndList'
import AdminCaravanRentAndList from './components/Admin/AdminCaravanRentAndList'
import AdminModuleAddAndList from './components/Admin/AdminModuleAddAndList'
import AdminDesignMeeting from './components/Admin/AdminDesignMeeting'
import CaravanSaleAndList from './components/Admin/CaravanSaleAndList'
import CaravanSalePhotoAdd from './components/Admin/CaravanSalePhotoAdd'
import CaravanSaleEdit from './components/Admin/CaravanSaleEdit'
import CaravanRentAndList from './components/Admin/CaravanRentAndList'
import CaravanRentPhotoAdd from './components/Admin/CaravanRentPhotoAdd'
import CaravanRentEdit from './components/Admin/CaravanRentEdit'
import router from './router';
import axios from 'axios'

const routes = [
    {
        path: "/",
        component: HomePage
    },
    {
        path : "/karavansatis",
        component : Caravan,
        children : [
            {
                path:'/karavansatis',
                component : CaravanSale
            },
            {
                path:"/karavantasarimi",
                component : CaravanDesign
            },
            {
                path:"/karavankiralama",
                component:CaravanRent
            }
        ]
    },
    {
        path:"/admin",
        component : Admin,
        beforeEnter:(to,from,next)=>{
            var token = localStorage.getItem("token");
            if(!token){
                router.replace("/login")
            }
            else{
                axios.get("https://localhost:44335/api/Account/IsAuthorize",{headers:{'Authorization': 'Bearer ' + token}})
                .then(res => {
                    console.log("Hi")
                    next();
                    alert("Hoşgeldin")
                }).catch((er)=>{
                    alert("Yasadışı bir giriş tespit edildi.")
                    router.replace("/login")
                });
            }
        },
        children: [
            {
                path:'/karavansatiskontrolpanel',
                component : AdminCaravanSaleAndList,
                children : [
                    {
                        path:'',
                        component : CaravanSaleAndList
                    },
                    {
                        path:':id/karavansatisfotografekleme',
                        component : CaravanSalePhotoAdd
                    },
                    {
                        path:':id/karavansatisdüzenleme',
                        component : CaravanSaleEdit
                    },
                   

                ]
            },
            {
                path:'/karavankiralamakontrolpanel',
                component : AdminCaravanRentAndList,
                children : [
                    {
                        path:'',
                        component : CaravanRentAndList
                    },
                    {
                        path:':id/karavankiralamafotografekleme',
                        component : CaravanRentPhotoAdd
                    },
                    {
                        path:':id/karavankiralamadüzenleme',
                        component : CaravanRentEdit
                    },
                ]
            },
            {
                path:'/karavanmodulkontrolpanel',
                component : AdminModuleAddAndList
            },
            {
                path:'/tasarimranduvalarim',
                component:AdminDesignMeeting
            }
        ]
    },
    {
        path:"/login",
        component : Login
    }
]
export default routes