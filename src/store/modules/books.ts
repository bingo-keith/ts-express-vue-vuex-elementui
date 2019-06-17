import shop from '@/api/shop'
import { ActionContextBasic, Book, AddToCartPayload, BooksPayload, BooksState } from '@/types'

export interface BooksPayload {
    books: Book[]
}

export interface BooksState {
    all: Book[]
}

const initState = {
    all: []
}

const getters = {
    allBooks: (state: BooksState) => state.all
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
    RECEIVE_BOOKS(state: BooksState, payload: BooksPayload) {
        state.all = payload.books
    },
    ADD_TO_CART(state: BooksState, payload: AddToCartPayload) {
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
