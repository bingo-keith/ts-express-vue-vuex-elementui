import { Commit, MutationTree } from 'vuex';

const state: any = {
  userName: 'vuex-typescript state demo',
};

const mutations: MutationTree<any> = {
  getState(): string {
    return state.userName + ' mutations!';
  },
};

const actions: any = {
  GET_ASYNC_STATUS(context: { commit: Commit }, params: object) {
    setTimeout(() => {
      console.log('-----actions began-----');
      context.commit('getState', params);
      console.log(params);
      console.log('-----actions end-----');
    }, 2000);
  },
};

export default {
  namespaced: true, // namespaced为false的时候，state,mutations,actions全局可以调用，为true，生成作用域，引用时要声明模块名称
  state,
  mutations,
  actions,
};
