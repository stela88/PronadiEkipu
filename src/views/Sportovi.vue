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
  {
    img: require("@/assets/kosarka.png"),
    description: "Košarka"
  },
  { img: require("@/assets/nogomet.png"), description: "Nogomet" },
  { img: require("@/assets/odbojka.png"), description: "Odbojka" },
  { img: require("@/assets/rukomet.png"), description: "Rukomet" },
  { img: require("@/assets/plivanje.png"), description: "Plivanje" }
];

export default {
  name: "Sportovi",
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



