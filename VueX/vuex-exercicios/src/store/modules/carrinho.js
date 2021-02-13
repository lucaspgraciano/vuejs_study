export default {
    state: {
        produtos: [],
    },
    getters: {
        valorTotal(state) {
            return state.produtos.map( p => p.quantidade * p.preco)
                .reduce((total, atual) => total + atual, 0)
        }
    },
    mutations: {
        adcionarProduto(state, payload){
            state.produtos.push(payload)
        }
    },
    actions: {
        adcionarProduto({ commit }, payload) {
            setTimeout(() => {
                commit('adcionarProduto', payload)
            }, 1000)
        }
    }
}