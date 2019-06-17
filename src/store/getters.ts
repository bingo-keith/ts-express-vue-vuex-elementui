import { GetterTree, Getter } from 'vuex'
import { State, CartBook } from '@/types'

const cartBooks: Getter<State, any> = (state: State) => {
    return state.cart.added.map((shape) => {
        const books = state.books.all.find((p) => p.id === shape.id)
        if (books) {
            const cartBook: CartBook = {
                title: books.title,
                price: books.price,
                inventory: shape.inventory
            }
            return cartBook
        }
    })
}

const getterTree: GetterTree<State, any> = {
    cartBooks
}

export default getterTree
