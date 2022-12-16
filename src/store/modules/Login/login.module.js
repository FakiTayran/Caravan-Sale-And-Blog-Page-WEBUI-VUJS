import axios from 'axios'
import router from '../../../router';
const actions = {
    loginPost(store,data){
        axios.post("https://localhost:44335/api/Account/Login",data,{headers:{
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin":"*"
          }})
          .then(res=>{
              console.log(res.data.token)
              localStorage.setItem('token',res.data.token)
              router.replace("/admin")
          }).catch((er)=>{
              console.log(er)
          })
    }
}


export default {
    actions
}
