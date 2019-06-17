import Vue from 'vue'
import Vuex, { Commit, Dispatch } from 'vuex'
import actions from './actions'
import getters from './getters'
import cart from '@/store/modules/cart'
import books from '@/store/modules/books'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters, 
  modules: {
    cart,
    books,
  },
})
