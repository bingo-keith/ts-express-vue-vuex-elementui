import store, { CartBook, Book } from './index'

export const dispatchCheckout = (books: CartBook[]) => {
    return store.dispatch('checkout', books)
}

export const dispatchAddToCart = (books: Book) => {
    return store.dispatch('addToCart', books)
}
