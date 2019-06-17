import shop from '@/config/shop'
import { ActionContextBasic, Book, AddToCartPayload, BooksPayload, BooksState } from '@/types'
import API from '@/config/API';

const initState = {
    all: [],
}

const getters = {
    allBooks: (state: BooksState) => state.all,
}

const actions = {
    getAllBooks(context: ActionContextBasic) {
        shop.getBooks((books: Book[]) => {
            const payload: BooksPayload = {
                books,
            }
            context.commit(API.RECEIVE_BOOKS, payload)
        })
    },
}

const mutations = {
    [API.RECEIVE_BOOKS](state: BooksState, payload: BooksPayload) {
        state.all = payload.books
    },
    [API.ADD_TO_CART](state: BooksState, payload: AddToCartPayload) {
        const books = state.all.find((p) => p.id === payload.id)
        if (books) {
            books.inventory--
        }
    },
}


export default {
    state: initState,
    getters,
    actions,
    mutations,
}
