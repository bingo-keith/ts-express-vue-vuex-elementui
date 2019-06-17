/**
 * mock ajax data from server
 */

import { CartBook } from '@/types'

const initBooks = [
  {
    id: 1,
    title: 'javascript',
    price: 100,
    inventory: 5
  },
  {
    id: 2,
    title: 'java',
    price: 11152.01,
    inventory: 11
  },
  {
    id: 3,
    title: 'php',
    price: 9999.88,
    inventory: 22
  }
]

export default {
  getBooks(cb: (books: any[]) => void) {
    console.log('initBooks')
    setTimeout(() => cb(initBooks), 500)
  },
  buyBooks(books: CartBook[], successCallback: (books: any[]) => void, errorCallback: () => void) {
    setTimeout(() => {
      Math.random() > 0.5 ? successCallback(books) : errorCallback();
    }, 500)
  }
}
