<template>
  <div id="app">
    <router-view />
    <div class="navbar" v-if="store.currentUser">
      <router-link to="/Home" class="facss"
        ><img src="https://img.icons8.com/ios-filled/28/000000/friends.png"
      /></router-link>

      <router-link to="/Naslovna" class="fa fa-home fa-2x facss"></router-link>

      <router-link
        to="/profil"
        style="font-size: 25px"
        class="fa fa-user-circle fa-2x facss"
      ></router-link>
    </div>
  </div>
</template>
<script>
import { firebase } from "@/firebase.js";
import store from "@/store";
import router from "@/router";
import { db } from "@/firebase";

firebase.auth().onAuthStateChanged((user) => {
  const currentRoute = router.currentRoute; // citamo na kojoj smo ruti, router u sebi ima currentRoute atribut koji nam vraća jedan objekt trenutne rute ono sto ima name, component, meta i slicno to je ono pod router/index.js sto smo definirali za svaku rutu

  if (user) {
    console.log("***", user.email);
    store.currentUser = user.email;
    store.userDisplayName = user.displayName;
    store.profilePicture = user.photoURL;
    if (!currentRoute.meta.needsUser) {
      router.push({ name: "Naslovna" });
    } else {
      // Korisnik nije ulogiran
      console.log("*** No user");
      store.currentUser = null;

      if (currentRoute.meta.needsUser) {
        router.push({ name: "Pocetna" });
      }

      //ovo ce morat biti ovdje
      /* if (router.name !== "Login") {
      router.push({ name: "Login" });
    } */
    }
  }
});
export default {
  name: "app",
  data() {
    return {
      store,
      cards: [],
    };
  },

  methods: {},
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background-color: white !important;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
