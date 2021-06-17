<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->

    <div class="user-list">
      <router-link :to="{name: 'Profile', params: {userid: user.id}}" v-for="user in users" :key="user.id">{{
        user.userName
      }}</router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { users } from "../assets/users";
export default {
  name: "Home",
  data() {
    return {
      users,
    };
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
