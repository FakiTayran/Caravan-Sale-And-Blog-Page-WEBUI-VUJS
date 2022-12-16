import axios from 'axios'
const actions = {
    addModule({commit,store},data){
        axios.post(`https://localhost:44335/api/CaravanModule/CreateCaravanModule/${data.Name}/${data.Price}/${data.Description}`,
        data.file,
        {headers:{
            "Authorization":"Bearer " + localStorage.getItem('token'),
          }})
          .then(res=>{
            commit("onAdded",res.data)
          }).catch((er)=>{
              console.log(er)
          })
    },
    getAllModules({commit}){
        axios.get("https://localhost:44335/api/CaravanModule/ListCaravanModule")
        .then(res=>{
            let data = res.data;
            commit("updateModules",data)
            return data;
            // data.map(caravan=>{
            //     commit("updateCaravans",caravan)
            // })
        })
    },

    deleteModule({commit,store},data){
        if (!confirm("Bu karavanı silmek istediğinize emin misiniz ?")){
            return
        }
        axios.get("https://localhost:44335/api/CaravanModule/DeleteCaravanModule/"+data,{headers:{
            "Authorization":"Bearer " + localStorage.getItem('token'),
            "Content-Type" : "application/json"
          }}).then(res=>{
            commit("onDeleted",res.data)
          })
    },


}
const state  ={
    modules :[]
}

const mutations = {
    updateModules(state,modules){
        state.modules = [];
        state.modules = modules;
    },
    onAdded(state,module){
        state.modules.push(module);
    },
    onDeleted(state,module){
       console.log(module)
       state.modules = state.modules.filter(x=>{return x.id!=module.id})
    }
}

const getters = {
    getModules(state){
        return state.modules;
    },
    getModule(state){

    }
}

export default {
    actions,
    mutations,
    getters,
    state
}
