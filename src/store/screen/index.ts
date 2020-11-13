import { Module } from 'vuex';
import { SET_WIDTH } from './mutation-types';

const state: Module<any, any> = {
  namespaced: true,

  state: {
    width: 0,
  },

  getters: {
    isDesktop: (state) => state.width > 768,
  },

  actions: {
    setWidth({ commit }, width) {
      commit(SET_WIDTH, width);
    },
  },

  mutations: {
    [SET_WIDTH]: (state, width) => {
      state.width = width;
    },
  },
};

export default state;
