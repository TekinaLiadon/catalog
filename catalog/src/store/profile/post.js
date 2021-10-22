import axios from "axios";

export const postModule = {
    state: {
        cards: [],
        newCards: [],
        selectedSort: "",
        post: {
            title: "",
            body: "",
        },
        page: 1,
        limit: 10,
        totalPages: 0,
    },
    getters: {
        postsSort(state) {
            if (state.selectedSort == 'id') {
                return [...state.cards].sort((postA, postB) => postA[state.selectedSort] - postB[state.selectedSort])
            } else {
                return [...state.cards].sort((postA, postB) => postA[state.selectedSort]?.localeCompare(postB[state.selectedSort]))
            }
        }
    },
    mutations: {
        setCards(state, cards) {
            state.cards = cards;
        },
        setNewCards(state, newCards) {
            state.newCards = newCards;
        },
        setSelectedSort(state, selectedSort) {
            state.selectedSort = selectedSort;
        },
        setPost(state, post) {
            state.post = post;
        },
        setTotalPages(state, totalPages) {
            state.totalPages = totalPages;
        },
    },
    actions: {
        async fetchPosts({state, commit}) {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                        params: {
                            _page: state.page,
                            _limit: state.limit,
                        }
                    }
                );
                commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit) )
                commit("setCards", response.data)
            } catch (e) {
                console.log('Error');
            }
        },
    },
    namespaced: true
}