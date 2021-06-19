export const User = {
  namespaced: true,
  state: {
    user: null,
    users: null,
  },
  getters: {
    allUser: state => state.users
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    SET_LIST_USER(state, users) {
      state.users = users;
    },
  },
  actions: {
    setUser({ commit }, user) {
      commit("SET_USER", user);
    },
    setListUsers({ commit }, users) {
      commit("SET_LIST_USER", users);
    },
  },
};
