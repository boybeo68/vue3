<template>
  <div id="app">
    <nav>
      <router-link @click="clickhome" to="/">
        <div class="navigation__logo">HOME</div>
      </router-link>
      <div class="navigation__user" v-if="userName">
        {{ userName.userName }}
      </div>
    </nav>
    <router-view />
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      user: null,
    };
  },
  created() {
    this.fetchData();
  },
  computed: {
    userName() {
      return this.$store.state.User.user;
    },
  },
  methods: {
    async fetchData() {
      const result = await axios.get("http://localhost:5000/api/test");
      this.$store.dispatch("User/setListUsers", result.data);
    },
    clickhome() {
      this.$store.dispatch("User/setUser", null);
      console.log("test2");
    },
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
  background-color: #f3f5fa;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 5%;
    background-color: deeppink;
    color: white;

    .navigation__logo {
      font-weight: bold;
      font-size: 24px;
    }

    .navigation__user {
      font-weight: bold;
    }
  }
}
</style>
