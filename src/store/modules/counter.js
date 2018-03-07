const state = {
  count: 0,
};

const mutations = {
  decrement(sutate) {
    sutate.count - 1;
  },
  increment(sutate) {
    sutate.count + 1;
  },
};

const actions = {
  increment: ({ commit }) => commit("increment"),
  decrement: ({ commit }) => commit("decrement"),
};

export default {
  state,
  mutations,
  actions,
};
