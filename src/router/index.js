import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Profile from "../views/Profile.vue";
// import store from "../store";
// import { users } from "../assets/users";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/user/:userid",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach(async (to, from, next) => {
  // const user = store.state.User.user;
  // const users = store.state.User.users;

  // if (!user) {
  //   await store.dispatch("User/setUser", users[0]);
  // }

  const isAdmin = false;
  const requiresAdmin = to.matched.some((record) => record.meta.requiresAdmin);

  if (requiresAdmin && !isAdmin) next({ name: "Home" });
  else next();
});
export default router;
