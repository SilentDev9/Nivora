const savedUser = (() => {
  try {
    return JSON.parse(localStorage.getItem("nivoraSession") || "null");
  } catch (error) {
    return null;
  }
})();

export default {
  namespaced: true,
  state: { user: savedUser },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
      localStorage.setItem("nivoraSession", JSON.stringify(user));
    },
    CLEAR_USER(state) {
      state.user = null;
      localStorage.removeItem("nivoraSession");
    }
  },
  getters: {
    user: state => state.user
  }
};
