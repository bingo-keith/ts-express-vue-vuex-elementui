import { Commit } from 'vuex'
import shop1 from '@/api/shop1'
import { CartBook, CheckoutStatus, AddToCartPayload } from '../index'

interface Shape {
    id: number
    inventory: number
}

interface CheckoutFailurePayload {
    savedCartItems: Shape[]
}

export interface State {
    added: Shape[]
    checkoutStatus: CheckoutStatus
}

const initState: State = {
    added: [],
    checkoutStatus: null
}

const getters = {
    checkoutStatus: (state: State) => state.checkoutStatus
}

const actions = {
    checkout(context: { commit: Commit; state: State }, books: CartBook[]) {
        const failurePayload: CheckoutFailurePayload = {
            savedCartItems: [...context.state.added]
        }
        context.commit('CHECKOUT_REQUEST')
        shop1.buyBooks(
            books,
            () => context.commit('CHECKOUT_SUCCESS'),
            () => context.commit('CHECKOUT_FAILURE', failurePayload)
        )
    }
}

const mutations = {
    ADD_TO_CART(state: State, payload: AddToCartPayload) {
        state.checkoutStatus = null
        const record = state.added.find((p) => p.id === payload.id)
        if (!record) {
            state.added.push({
                id: payload.id,
                inventory: 1
            })
        } else {
            record.inventory++
        }
    },
    CHECKOUT_REQUEST(state: State) {
        state.added = []
        state.checkoutStatus = null
    },
    CHECKOUT_SUCCESS(state: State) {
        state.checkoutStatus = 'successful'
    },
    CHECKOUT_FAILURE(state: State, payload: CheckoutFailurePayload) {
        state.added = payload.savedCartItems
        state.checkoutStatus = 'failed'
    }
}

export default {
    state: initState,
    getters,
    actions,
    mutations
}
