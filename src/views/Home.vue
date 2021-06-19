<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->

    <div class="user-list">
      <router-link
        @click="clickToDetail(user.id)"
        :to="{ name: 'Profile', params: { userid: user.id } }"
        v-for="user in allUser"
        :key="user.id"
        >{{ user.userName }}</router-link
      >
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

// @ is an alias to /src
export default {
  name: "Home",
  data() {
    return {
      users: [],
    };
  },
  computed: {
    // allUser() {
    //   const users = this.$store.state.User.users;
    //   return users;
    // },
    ...mapGetters("User", ["allUser"]),
  },
  created() {
    // this.fetchData();
  },
  methods: {
    // async fetchData() {
    //   const result = await axios.get("http://localhost:5000/api/test");
    //   this.users = result.data;
    // },
    clickToDetail(id) {
      console.log("id", id);
      this.$store.dispatch("User/setUser", this.allUser[id - 1]);
    },
  },
};
</script>
<style lang="scss" scoped>
.home {
  padding: 50px 5%;

  .user-list {
    display: flex;
    flex-direction: column;
  }
}
</style>
