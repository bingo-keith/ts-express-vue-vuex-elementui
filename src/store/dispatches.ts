import store from './index'
import { CartBook, Book } from '@/types'

export const dispatchCheckout = (books: CartBook[]) => {
    return store.dispatch('checkout', books)
}

export const dispatchAddToCart = (books: Book) => {
    return store.dispatch('addToCart', books)
}
