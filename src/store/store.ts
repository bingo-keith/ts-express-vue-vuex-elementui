import { Commit, MutationTree, GetterTree } from 'vuex';
import * as types from './types';

interface State {
  id: number;
  userName: string;
}
// interface RootStateTypes {
//   getName: string;
// }

const state: any = {
  userName: 'vuex-typescript state demo',
};

// const getter: MutationTree<RootStateTypes> = {
//   getName: (state: RootStateTypes) => state.name,
// };

const mutations: MutationTree<any> = {
  [types.SET_STATE](status: State, payload: State): void {
    state.userName = payload.userName + 'mutasions setState';
  },
};

const actions: any = {
  SET_ASYNC_STATE(context: { commit: Commit }, params: object) {
    setTimeout(() => {
      console.log('-----actions began-----');
      context.commit('SET_STATE', params);
      console.log(params);
      console.log('-----actions end-----');
    }, 500);
  },
};

export default {
  namespaced: true, // namespaced为false的时候，state,mutations,actions全局可以调用，为true，生成作用域，引用时要声明模块名称
  state,
  mutations,
  actions,
};
