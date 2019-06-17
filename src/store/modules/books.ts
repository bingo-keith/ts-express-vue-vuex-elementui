import shop from '@/api/shop'
import { ActionContextBasic, Book, AddToCartPayload } from '../index'

export interface BooksPayload {
    books: Book[]
}

export interface State {
    all: Book[]
}

const initState = {
    all: []
}

const getters = {
    allBooks: (state: State) => state.all
}

const actions = {
    getAllBooks(context: ActionContextBasic) {
        shop.getBooks((books: Book[]) => {
            const payload: BooksPayload = {
                books
            }
            context.commit('RECEIVE_BOOKS', payload)
        })
    }
}

const mutations = {
    RECEIVE_BOOKS(state: State, payload: BooksPayload) {
        state.all = payload.books
    },
    ADD_TO_CART(state: State, payload: AddToCartPayload) {
        const books = state.all.find((p) => p.id === payload.id)
        if (books) {
            books.inventory--
        }
    }
}


export default {
    state: initState,
    getters,
    actions,
    mutations
}
