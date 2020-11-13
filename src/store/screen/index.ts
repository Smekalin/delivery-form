import { Module } from 'vuex';
import { SET_WIDTH } from './mutation-types';

// eslint-disable-next-line
const state: Module<any, any> = { // тут типизация должна быть
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
