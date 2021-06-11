<template>
  <div class="profil">
    <div class="profilHeader">
      <div class="avatar" v-if="!showCroppa">
        <card v-for="(card, drac) in cards" :key="drac" :info="card" />

        <a @click.prevent="hideCroppa">Uredi</a>
      </div>
      <form
        class="md-form"
        method="POST"
        @submit.prevent="postNewImage"
        v-if="showCroppa"
      >
        <croppa
          id="croppaAvatar"
          :width="100"
          :height="100"
          placeholder="Učitaj sliku"
          v-model="imageReference"
        ></croppa>
        <div class="form-submit">
          <button type="submit" value="Objavi" id="objavi">Objavi</button>
          <!--<input type="submit" value="Objavi" id="objavi" />-->
        </div>
      </form>
      <!-- mb-4 -->
      <p contenteditable="true">
        {{ store.userDisplayName }}
      </p>
    </div>
    <!-- headerrrrrrrrrrrrrrrrrrrrrr -->

    <div class="osobniPodaci" v-show="!show">
      <form method="POST" @submit.prevent="postUserData">
        <div class="podaci">
          Email:
          <p class="spol">{{ store.currentUser }}</p>
        </div>
        <div class="podaci">
          Spol:
          <select v-model="userSex">
            <option value="M">M</option>
            <option value="Ž">Ž</option>
          </select>
        </div>
        <div class="podaci">
          Godine:
          <input type="text" v-model="userAge" />
        </div>
        <div class="profilOpis">
          <div class="podaci">
            Opis:
            <textarea
              contenteditable="true"
              placeholder="Napišite nešto o sebi."
              rows="5"
              cols="50"
              v-model="userOpis"
            >
            </textarea>
          </div>
        </div>

        <div class="form-submit">
          <button type="submit" value="Dodaj" id="dodaj">Dodaj</button>
        </div>
      </form>
    </div>

    <div v-show="show">
      <UserInfo v-for="(card, drac) in userInfo" :key="drac" :info="card" />
    </div>
  </div>
</template>


<script>
import store from "@/store";
import { firebase } from "@/firebase";
import router from "@/router";
import { db, storage } from "@/firebase";
import Card from "@/components/userData.vue";
import UserInfo from "../components/userInfo.vue";

firebase.auth().onAuthStateChanged((user) => {
  // const currentRoute = router.currentRoute;
  if (user) {
    // User is signed in.
    store.currentUser = user.email;

    /* console.log("emailVerified:" + user.emailVerified); */

    /* if (!currentRoute.meta.requiredUser && user.emailVerified) {
      router.push({ name: "Home" });
    }*/

    if (user.displayName) {
      store.userDisplayName = user.displayName;
    }
  } else {
    // No user is signed in.
    store.currentUser = null;

    /*   if (currentRoute.meta.requiredUser) {
      router.push({ name: "Login" });
    }*/
  }

  if (user.email) {
    store.userEmail = user.email;
  }

  if (user.phoneNumber) {
    store.userPhoneNumber = user.phoneNumber;
  }
});

export default {
  name: "profil",
  data() {
    return {
      store,
      cards: [],
      imageReference: null,
      userOpis: "",
      userAge: "",
      userSex: "",
      showCroppa: false,
      userInfo: [],
      show: false,
    };
  },
  mounted() {
    console.log("MOUNTED");
    this.getPosts();
    this.getUserData();
  },
  methods: {
    getUserData() {
      let collection = store.currentUser;
      console.log("firebase dohvat...");

      db.collection("userData")
        .doc(collection)
        .collection("podaci")
        .get()
        .then((query) => {
          query.forEach((doc) => {
            this.userInfo = [];
            const data = doc.data();
            console.log(data);

            this.userInfo.push({
              godine: data.godine,
              spol: data.spol,
              opis: data.opis,
            });
          });
        });
    },
    hideCroppa() {
      this.showCroppa = !this.showCroppa;
    },

    getPosts() {
      console.log("firebase dohvat...");

      let collection = store.currentUser;

      db.collection(collection)
        .get()
        .then((query) => {
          query.forEach((doc) => {
            this.cards = [];
            const data = doc.data();
            console.log(data);
            //i sada pristupamo cards i dodajemo sa metodom push novi objekt u kojem ovaj id time option...
            this.cards.push({
              //id: doc.id,
              img: data.url,
            });
          });
        });
    },
    //proba

    postUserData() {
      let collection = store.currentUser;
      const userOpis = this.userOpis;
      const userAge = this.userAge;
      const userSex = this.userSex;
      db.collection("userData")
        .doc(collection)
        .collection("podaci")
        .add({
          email: store.currentUser,
          opis: userOpis,
          spol: userSex,
          godine: userAge,
        })
        .then((doc) => {
          console.log("Spremljeno", doc);
          this.show = !this.show;
          this.userOpis = "";
          this.userAge = "";
          this.userSex = "";
        })
        .catch((e) => {
          console.error(e);
        });
    },
    postNewImage() {
      let collection = store.currentUser;
      this.imageReference.generateBlob((blobData) => {
        let imageName =
          "posts/" + store.currentUser + "/" + Date.now() + ".png";

        storage
          .ref(imageName)
          .put(blobData)
          .then((result) => {
            // uspjesna linija
            result.ref
              .getDownloadURL()
              .then((url) => {
                db.collection(collection)
                  .add({
                    url: url,
                    email: store.currentUser,
                  })
                  .then((doc) => {
                    console.log("Spremljeno", doc);
                    this.imageReference.remove();
                    this.showCroppa = !this.showCroppa;
                    this.getPosts();
                  })
                  .catch((e) => {
                    console.error(e);
                  });

                var user = firebase.auth().currentUser;

                user
                  .updateProfile({
                    photoURL: url,
                  })
                  .then(() => {
                    store.profilePicture = user.photoURL;
                  })
                  .catch(function (error) {
                    console.error(e);
                  });
              })

              .catch((e) => {
                console.error(e);
              });
          })
          .catch((e) => {
            console.error(e);
          });
      });
    },
  },
  components: {
    Card,
    UserInfo,
  },
};
</script>

<style>
.profilHeader {
  max-width: 750px;
  margin-right: auto;
  margin-left: auto;
  margin: 0;
  background-color: #e4857f;
}

.profilHeader .croppa {
  border-radius: 50rem;
}
.avatar {
  width: 100px;
  margin-right: auto;
  margin-left: auto;
}
.avatar .card {
  width: 100px;
  margin: 0;
  border-radius: 50rem;
}
.avatar .card img {
  border-radius: 50rem;
}
select {
  width: 51%;
  margin-left: 45px;
}
input {
  width: 51%;
  margin-left: 30px;
}
.podaci {
  display: flex;
  text-align: left;
  margin: 30px;
}
textarea {
  width: 51%;
  margin-left: 45px;
}
</style>