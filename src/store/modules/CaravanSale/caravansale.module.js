import axios from 'axios'
const actions = {
    addCaravanForSale({commit,store},data){
        axios.post("https://localhost:44335/api/SaleCaravan/CreateSaleCaravan",data,{headers:{
            "Authorization":"Bearer " + localStorage.getItem('token'),
          }})
          .then(res=>{
              commit("onAdded",res.data)

          }).catch((er)=>{
              console.log(er)
          })
    },
    getAllCaravans({commit}){
        axios.get("https://localhost:44335/api/SaleCaravan/ListAllAsync")
        .then(res=>{
            let data = res.data;
            commit("updateCaravans",data)
            // data.map(caravan=>{
            //     commit("updateCaravans",caravan)
            // })
        })
    },
    deleteCaravan({commit,store},data){
        if (!confirm("Bu karavanı silmek istediğinize emin misiniz ?")){
            return
        }
        axios.get("https://localhost:44335/api/SaleCaravan/DeleteCaravanAsync/"+data,{headers:{
            "Authorization":"Bearer " + localStorage.getItem('token'),
            "Content-Type" : "application/json"
          }}).then(res=>{
            commit("onDeleted",res.data)
          })
    },
    editCaravan({commit,store},data){
      axios.post("https://localhost:44335/api/SaleCaravan/UpdateAsync",data,{headers:{
          "Authorization":"Bearer " + localStorage.getItem('token'),
          "Content-Type" : "application/json"
        }}).then(res=>{
          commit("updateCaravans",res.data)
          console.log(res)
          return res.data
      })
    },
    getPicture(store,data){
      var response = axios.get(`https://localhost:44335/api/SaleCaravan/GetPicture/${data}`,{headers:{
        "Authorization":"Bearer " + localStorage.getItem('token'),
          "Content-Type" : "application/json"
      }}).then((res)=>{
        return res.data
      })
      return response
    },
    deleteImage(store,data){
       axios.get(`https://localhost:44335/api/SaleCaravan/DeleteImage/${data}`,{headers:{
          "Authorization":"Bearer " + localStorage.getItem('token'),
          "Content-Type" : "application/json"
        }}).then((res)=>{
         return res.data
       })
    }
}

const state = {
    caravans:[]
}


const mutations = {
    updateCaravans(state,caravans){
        state.caravans = [];
        state.caravans = caravans;
    },
    onAdded(state,caravan){
        state.caravans.push(caravan);
    },
    onDeleted(state,caravan){
       console.log(caravan)
       state.caravans = state.caravans.filter(x=>{return x.id!=caravan.id})
    }
}
const getters = {
    getCaravansForSale(state){
        return state.caravans;
    },
    getCaravanForSale(state){

    }
}

export default {
    actions,
    state,
    mutations,
    getters
}
