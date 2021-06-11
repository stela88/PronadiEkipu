<template>
  <div class="naslovna">
    <div class="redovi">
      <div class="red">
        <router-link
          to="/PostForm"
          class="fa fa-plus-circle fa-lg facss"
        ></router-link>
      </div>
      <div class="red facss">NASLOVNA</div>
      <div class="red facss">
        <a href="#" @click.prevent="logout()">Logout</a>
      </div>
    </div>

    <div class="pretraga">
      <input
        class="search-input"
        v-model="store.searchTerm"
        name="search"
        type="search"
        placeholder="Pretraga"
      />
    </div>
    <div class="post">
      <Post v-for="(card, drac) in filteredCards" :key="drac" :info="card" />
    </div>
  </div>
</template>
<script>
import { firebase } from "@/firebase.js";
import store from "@/store";
import { db } from "@/firebase";
import router from "@/router";
import Post from "../components/Post.vue";

export default {
  name: "naslovna",
  data() {
    return {
      cards: [],
      store,
      newPostOpis: "",
      newPostGame: "",
      newPostName: "",
      Imeiprezime: "",
    };
  },
  mounted() {
    this.getPosts();
  },
  computed: {
    filteredCards() {
      let termin = this.store.searchTerm;

      return this.cards.filter((card) =>
        card.description.toLowerCase().includes(termin.toLowerCase())
      );
    },
  },
  methods: {
    getPosts() {
      console.log("firebase dohvat...");
      db.collection("posts")
        .orderBy("posted_at", "desc")
        .get()
        .then((query) => {
          query.forEach((doc) => {
            const data = doc.data();
            console.log(data);

            this.cards.push({
              id: doc.id,
              time: data.posted_at,
              description: data.desc,
              option: data.option,
              name: data.userName,
              img: data.img,
              profilePicture: store.profilePicture,
            });
          });
        });
    },
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
    Post,
  },
};
</script>
<style scoped>
.pretraga {
  margin-bottom: 5px;
  position: relative;
}
.naslovna {
  /*  background-color: rgb(209, 204, 204); */
  background-color: white;
}
.pretraga input {
  border-radius: 12px;
  padding-left: 15px;
  padding-right: 15px;
  text-align: center;
}
</style>