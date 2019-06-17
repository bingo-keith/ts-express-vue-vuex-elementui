import Vue from 'vue'
import Vuex, { Commit, Dispatch } from 'vuex'
import actions from './actions'
import getters from './getters'
import cart, { State as CartState } from './modules/cart'
import books, { State as BooksState } from './modules/books'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters, 
  modules: {
    cart,
    books
  }
})

export interface ActionContextBasic {
  commit: Commit,
  dispatch: Dispatch
}

export interface State {
  cart: CartState,
  books: BooksState
}

export type CheckoutStatus = 'successful' | 'failed' | null

export interface Book {
  id: number,
  title: string,
  price: number,
  inventory: number
}

export interface CartBook {
  title: string,
  price: number,
  inventory: number
}

export interface AddToCartPayload {
  id: number
}
