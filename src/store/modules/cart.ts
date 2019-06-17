import { Commit } from 'vuex'
import shop from '@/config/shop'
import { CartBook, AddToCartPayload, CheckoutFailurePayload, CartState } from '@/types'
import API from '@/config/API.ts';

const initState: CartState = {
    added: [],
    checkoutStatus: null,
}

const getters = {
    checkoutStatus: (state: CartState) => state.checkoutStatus,
}

const actions = {
    checkout(context: { commit: Commit; state: CartState }, books: CartBook[]) {
        const failurePayload: CheckoutFailurePayload = {
            savedCartItems: [...context.state.added],
        }
        context.commit(API.CHECKOUT_REQUEST)
        shop.buyBooks(
            books,
            () => context.commit(API.CHECKOUT_SUCCESS),
            () => context.commit(API.CHECKOUT_FAILURE, failurePayload),
        )
    },
}

const mutations = {
    [API.ADD_TO_CART](state: CartState, payload: AddToCartPayload) {
        state.checkoutStatus = null
        const record = state.added.find((p) => p.id === payload.id)
        if (!record) {
            state.added.push({
                id: payload.id,
                inventory: 1,
            })
        } else {
            record.inventory++
        }
    },
    [API.CHECKOUT_REQUEST](state: CartState) {
        state.added = []
        state.checkoutStatus = null
    },
    [API.CHECKOUT_SUCCESS](state: CartState) {
        state.checkoutStatus = 'successful'
    },
    [API.CHECKOUT_FAILURE](state: CartState, payload: CheckoutFailurePayload) {
        state.added = payload.savedCartItems
        state.checkoutStatus = 'failed'
    },
}

export default {
    state: initState,
    getters,
    actions,
    mutations,
}
