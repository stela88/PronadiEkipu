<template>
  <div class="home">
    <div class="redovi">
      <div class="red">
        <router-link
          to="/PostForm"
          class="fa fa-plus-circle fa-lg facss"
        ></router-link>
      </div>
      <div class="red">DRUŽENJA</div>
      <div class="red"><a href="#" @click.prevent="logout()">Logout</a></div>
    </div>
    <div class="pretraga">
      <input v-model="store.searchTerm" type="search" placeholder="Pretraga" />
    </div>

    <div class="row">
      <home-card
        v-for="(card, drac) in filteredCards"
        :key="drac"
        :info="card"
      />
    </div>
  </div>
</template>



<script>
// @ is an alias to /src

import { firebase } from "@/firebase.js";
import store from "@/store";
import HomeCard from "../components/HomeCard.vue";

let cards = [];

cards = [
  {
    img: require("@/assets/drustvene_igre.png"),
    description: "Društvene igre",
    page: "/Drustvene_igre",
  },
  {
    img: require("@/assets/vanjske_aktivnosti.jpg"),
    description: "Vanjske aktivnosti",
    page: "/Vanjske_aktivnosti",
  },
  {
    img: require("@/assets/cuganja.png"),
    description: "Cuganja",
    page: "/Cuganja",
  },
  {
    img: require("@/assets/sportovi.jpg"),
    description: "Sportovi",
    page: "/Sportovi",
  },
  {
    img: require("@/assets/online.jpg"),
    description: "Online",
    page: "/Online",
  },
];

export default {
  name: "Home",
  data() {
    return {
      store,
      cards,
    };
  },

  computed: {
    filteredCards() {
      let termin = this.store.searchTerm;
      return this.cards.filter((card) => card.description.includes(termin));
    },
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
    },
  },
  components: {
    HomeCard,
  },
};
</script>
<style scoped>
.pretraga {
  margin-bottom: 5px;
}
.pretraga input {
  border-radius: 12px;
  padding-left: 15px;
  padding-right: 15px;
  text-align: center;
}
</style>
