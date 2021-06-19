import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import moment from 'moment'

export default new Vuex.Store({
    state: {
        itemList:[]
    },
    mutations: {
        receiveMsg(state, payload) {
            // 将A组件的数据存放于state
            payload.time = moment(payload.time).format('YYYY-MM-DD HH:mm')
            state.itemList.push(payload)
        },
    },
    actions: {},
    modules: {},
});
