import axios from 'axios'
const actions = {
    addCaravanForRent({commit,store},data){
        axios.post("https://localhost:44335/api/RentCaravan/CreateRentCaravan",data,{headers:{
            "Authorization":"Bearer " + localStorage.getItem('token'),
          }})
          .then(res=>{
              commit("onRentAdded",res.data)
             
          }).catch((er)=>{
              console.log(er)
          })
    },
    getAllRentCaravans({commit}){
        axios.get("https://localhost:44335/api/RentCaravan/ListAllAsync")
        .then(res=>{
            let data = res.data;
            commit("updateRentCaravans",data)
            // data.map(caravan=>{
            //     commit("updateCaravans",caravan)
            // })
        })
    },
    deleteRentCaravan({commit,store},data){
        if (!confirm("Bu karavanı silmek istediğinize emin misiniz ?")){
            return
        }
        axios.get("https://localhost:44335/api/RentCaravan/DeleteCaravanAsync/"+data,{headers:{
            "Authorization":"Bearer " + localStorage.getItem('token'),
            "Content-Type" : "application/json"
          }}).then(res=>{
            commit("onRentDeleted",res.data)
          })
    },
}

const state = {
    caravans:[]
}


const mutations = {
    updateRentCaravans(state,caravans){
        state.caravans = [];
        state.caravans = caravans;
    },
    onRentAdded(state,caravan){
        state.caravans.push(caravan);
    },
    onRentDeleted(state,caravan){
       console.log(caravan)
       state.caravans = state.caravans.filter(x=>{return x.id!=caravan.id})
    }
}
const getters = {
    getCaravansForRent(state){
        return state.caravans;
    },
    getCaravanForRent(state){

    }
}

export default {
    actions,
    state,
    mutations,
    getters
}
