import { Commit } from 'vuex'
import shop from '@/api/shop'
import { CartBook, CheckoutStatus, AddToCartPayload, Shape, CheckoutFailurePayload, CartState } from '@/types'

const initState: CartState = {
    added: [],
    checkoutStatus: null
}

const getters = {
    checkoutStatus: (state: CartState) => state.checkoutStatus
}

const actions = {
    checkout(context: { commit: Commit; state: CartState }, books: CartBook[]) {
        const failurePayload: CheckoutFailurePayload = {
            savedCartItems: [...context.state.added]
        }
        context.commit('CHECKOUT_REQUEST')
        shop.buyBooks(
            books,
            () => context.commit('CHECKOUT_SUCCESS'),
            () => context.commit('CHECKOUT_FAILURE', failurePayload)
        )
    }
}

const mutations = {
    ADD_TO_CART(state: CartState, payload: AddToCartPayload) {
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
    CHECKOUT_REQUEST(state: CartState) {
        state.added = []
        state.checkoutStatus = null
    },
    CHECKOUT_SUCCESS(state: CartState) {
        state.checkoutStatus = 'successful'
    },
    CHECKOUT_FAILURE(state: CartState, payload: CheckoutFailurePayload) {
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
