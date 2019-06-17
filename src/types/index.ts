import { Commit, Dispatch } from 'vuex'


export interface CartState {
  added: Shape[]
  checkoutStatus: CheckoutStatus
}

export interface BooksState {
  all: Book[]
}

export interface State {
  cart: CartState,
  books: BooksState
}

export interface ActionContextBasic {
  commit: Commit,
  dispatch: Dispatch
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

export interface Shape {
  id: number
  inventory: number
}

export interface BooksPayload {
  books: Book[]
}

export interface CheckoutFailurePayload {
  savedCartItems: Shape[]
}
