<template >
  <div class="user-profile">
    <div class="admin">
      <div class="admin-item">
        <h3 class="mrbot10">{{ fullNameUser }}</h3>
        <div class="is mrbot10" v-if="user.isAdmin">
          <span>Admin</span>
          <span>{{ userId }}</span>
        </div>
        <div class="">
          <span>Follwers</span> <span>{{ follower }}</span>
        </div>
        <div class="newTw">
          <form class="newTw" @submit.prevent="createNewTwoot">
            <span class="mrbot10" :class="{ changecount: coutNewTwoot > 100 }"
              >New twoot ({{ coutNewTwoot }}/100)</span
            >
            <textarea
              class="mrbot10"
              id="w3review"
              v-model="newTwootContent"
              rows="4"
            />
            <div class="sec mrbot10">
              <label for="cars">Type</label>
              <select id="type" v-model="selectTwootType">
                <option
                  :value="option.name"
                  v-for="option in twootType"
                  :key="option.id"
                >
                  {{ option.name }}
                </option>
              </select>
            </div>
            <button :disabled="coutNewTwoot > 100" class="mrbot10">new</button>
          </form>
        </div>
      </div>
    </div>
    <div class="list">
      <commen-item
        v-for="(item, index) in user.listComent"
        :key="index"
        :twood="item"
        :username="user.userName"
        @favourite="toglefavourie"
      />
    </div>
  </div>
</template>
<script>
import CommenItem from "../components/CommenItem.vue";
import { users } from "../assets/users";
import { mapGetters } from "vuex";
const shortid = require("shortid");
export default {
  name: "Profile",
  components: { CommenItem },
  data() {
    return {
      follower: 0,
      isButtonDisabled: false,
      selectTwootType: "open",
      newTwootContent: "",
      twootType: [
        { id: 1, name: "draf" },
        { id: 2, name: "open" },
      ],
      user: users[this.$route.params.userid - 1] || users[0],
    };
  },
  computed: {
    fullNameUser() {
      return `${this.user.firstName} ${this.user.lastName}`;
    },
    coutNewTwoot() {
      return this.newTwootContent.length;
    },
    userId() {
      return this.$route.params.userid;
    },
    ...mapGetters("User", ["allUser"]),
  },
  methods: {
    followUser() {
      this.follower++;
    },
    toglefavourie(id) {
      console.log(`#${id}`);
      this.user.listComent = this.user.listComent.filter((item) => {
        return item.id !== id;
      });
    },
    createNewTwoot() {
      if (this.newTwootContent && this.selectTwootType !== "draf") {
        console.log("test");
        this.user.listComent.unshift({
          id: shortid.generate(),
          comment: this.newTwootContent,
        });
        this.newTwootContent = "";
      }
    },
  },
  mounted() {
    this.followUser();
  },
  watch: {
    follower(newData, oldData) {
      console.log(newData, oldData);
    },
    allUser(newData, oldData) {
      console.log("watch", oldData, newData);
    },
  },
};
</script>
<style lang="scss">
.mrbot10 {
  margin-bottom: 10px;
}
.changecount {
  color: red;
}
.user-profile {
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 20px;
  justify-content: space-around;
  .admin {
    padding: 20px;
    .admin-item {
      background-color: #fff;
      padding: 10px;
      border: 1px solid #dfe3e8;
      border-radius: 5px;
      .newTw {
        display: flex;
        flex-direction: column;
      }
    }
  }
}

.list {
  width: 50%;
}
.is span {
  /* background-color: red; */
  border-radius: 10px;
  background-color: purple;
  font-size: 10px;
  padding: 5px 10px;
  color: #fff;
  font-weight: bold;
}
</style>