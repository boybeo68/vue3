<template>
  <div class="comment" @click="favouriteClick(twood.id)">
    <div class="comment-user">@{{ username }}</div>
    <div class="comment-content">{{ twood.comment }}</div>
    <!-- <a href="">link new</a> -->
  </div>
</template>
<script>
export default {
  name: "CommentItem",
  props: {
    username: {
      type: String,
      required: true,
    },
    twood: {
      type: Object,
      required: true,
    },
  },
  methods: {
    favouriteClick(id) {
      this.$emit("favourite", id);
    },
  },
};
</script>
<style lang="scss" >
.comment {
  padding: 20px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid #dfe3e8;
  box-sizing: border-box;
  cursor: pointer;
  transition: all 0.25s ease;
  margin: 10px;
  &:hover {
    transform: scale(1.1, 1.1);
  }
}
.backgrounRed {
  background-color: red;
}
</style>