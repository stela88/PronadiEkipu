<template>
  <div class="home">
    <div class="redovi">
      <div class="red">
        <a class="fa fa-plus-circle fa-lg facss" href="/PostForm"></a>
      </div>
      <div class="red">DRUŽENJA</div>
      <div class="red"><a href="#" @click.prevent="logout()">Logout</a></div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <card v-for="(card, drac) in cards" :key="drac" :info="card" />
        </div>
      </div>
    </div>
  </div>
</template>



<script>
// @ is an alias to /src
import Card from "@/components/Card.vue";
import { firebase } from "@/firebase.js";
import store from "@/store";

let cards = [];

cards = [
  { img: require("@/assets/vani.png"), description: "Vani" },
  { img: require("@/assets/kod_kuce.png"), description: "Kod kuće" }
];

export default {
  name: "Cuganja",
  data() {
    return {
      store,
      cards
    };
  },
  components: {
    Card
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          store.currentUser = null;
          this.$router.push({ name: "Pocetna" });
        });
    }
  }
};
</script>



