import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from "./getters";
import * as mutations from "./mutations";
import * as actions from "./actions";
import login from "./modules/Login/login.module"
import caravansale from './modules/CaravanSale/caravansale.module'
import caravanrent from './modules/CaravanRent/caravanrent.module'
import caravanmodules from './modules/CaravanModules/modules.module'



Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
      
    },
    getters ,
    mutations ,
    actions ,
    modules: {
        login,
        caravansale,
        caravanrent,
        caravanmodules
    },
})