<template>
  <div id="ModalPostForm">
    <div class="form-container">
      <form
        action="#"
        class="form-wrap"
        method="POST"
        @submit.prevent="postNewImage"
      >
        <!-- da se ne izgubim -->
        <h2>Ponudi druženje</h2>
        <div class="form-box">
          <select class="custom-select" v-model="newPostGame" id="postGame">
            <option selected><strong>DRUŠTVENE IGRE</strong></option>
            <option
              value="https://firebasestorage.googleapis.com/v0/b/pronadiekipu.appspot.com/o/covjece_ne_ljuti_se.png?alt=media&token=0d55163a-970d-45a7-b3b3-70d1c4720040"
            >
              Čovječe ne ljuti se
            </option>
            <option
              value="https://firebasestorage.googleapis.com/v0/b/pronadiekipu.appspot.com/o/uno.png?alt=media&token=481330d2-dc23-49c2-951a-02993cf0701b"
            >
              Uno
            </option>
            <option
              value="https://firebasestorage.googleapis.com/v0/b/pronadiekipu.appspot.com/o/belot.png?alt=media&token=485c6cc5-30eb-4e62-8435-acd8ae2137da"
            >
              Belot
            </option>
            <option
              value="https://firebasestorage.googleapis.com/v0/b/pronadiekipu.appspot.com/o/poker.png?alt=media&token=4c9ddfd5-effe-4926-bafd-c54f8b6d04e3"
            >
              Poker
            </option>
            <option
              value="https://firebasestorage.googleapis.com/v0/b/pronadiekipu.appspot.com/o/briskula.png?alt=media&token=bd3b36e6-ed6d-4361-910e-95fffdc3968f"
            >
              Briškula
            </option>
            <option selected><strong>VANJSKE AKTIVNOSTI</strong></option>
            <option
              value="https://firebasestorage.googleapis.com/v0/b/pronadiekipu.appspot.com/o/kava.png?alt=media&token=deafa353-211a-48d8-b45b-b9b53208a200"
            >
              Kava
            </option>
            <option
              value="https://firebasestorage.googleapis.com/v0/b/pronadiekipu.appspot.com/o/setnja.png?alt=media&token=7ccb3df5-8166-429d-b4cc-406d85b9c32d"
            >
              Šetnja
            </option>
            <option
              value="https://firebasestorage.googleapis.com/v0/b/pronadiekipu.appspot.com/o/trcanje.png?alt=media&token=ac8f4331-7cba-4178-8157-e7ba6d487460"
            >
              Trčanje
            </option>
            <option
              value="https://firebasestorage.googleapis.com/v0/b/pronadiekipu.appspot.com/o/voznja_biciklom.png?alt=media&token=efea01e2-2f5d-4f95-b002-8e1fcf0ca48c"
            >
              Vožnja biciklom
            </option>
            <option
              value="https://firebasestorage.googleapis.com/v0/b/pronadiekipu.appspot.com/o/rolanje.png?alt=media&token=502a99bb-cf99-43b6-9cd2-7fa000998c84"
            >
              Rolanje
            </option>
            <option selected><strong>CUGANJA</strong></option>
            <option
              value="https://firebasestorage.googleapis.com/v0/b/pronadiekipu.appspot.com/o/vani.png?alt=media&token=2cbc40db-0bd1-4f12-be87-0613f5ee2229"
            >
              Vani
            </option>
            <option
              value="https://firebasestorage.googleapis.com/v0/b/pronadiekipu.appspot.com/o/kod_kuce.png?alt=media&token=a7c15ee5-91ee-4637-938f-9b9b8030eca8"
            >
              Kod kuće
            </option>
            <option selected><strong>SPORTOVI</strong></option>
            <option
              value="https://firebasestorage.googleapis.com/v0/b/pronadiekipu.appspot.com/o/kosarka.png?alt=media&token=7da6dced-19ee-4ed7-bfcb-f9772ab4c3be"
            >
              Košarka
            </option>
            <option
              value="https://firebasestorage.googleapis.com/v0/b/pronadiekipu.appspot.com/o/nogomet.png?alt=media&token=e448687c-2876-4a2c-8bb6-86d5e62f7ed5"
            >
              Nogomet
            </option>
            <option
              value="https://firebasestorage.googleapis.com/v0/b/pronadiekipu.appspot.com/o/odbojka.png?alt=media&token=8a295c4c-2d8d-4346-a0ba-1e0b0a02dca3"
            >
              Odbojka
            </option>
            <option
              value="https://firebasestorage.googleapis.com/v0/b/pronadiekipu.appspot.com/o/rukomet.png?alt=media&token=84f4cbab-7be1-4e56-ad61-754725572e91"
            >
              Rukomet
            </option>
            <option
              value="https://firebasestorage.googleapis.com/v0/b/pronadiekipu.appspot.com/o/plivanje.png?alt=media&token=c8c3c22c-d769-4f89-bc99-56dcd20bdb88"
            >
              Plivanje
            </option>
            <option selected><strong>ONLINE</strong></option>
            <option
              value="https://firebasestorage.googleapis.com/v0/b/pronadiekipu.appspot.com/o/gaming.png?alt=media&token=c1396269-ac50-42a4-bda8-c477aaeb461f"
            >
              Gaming
            </option>
            <option
              value="https://firebasestorage.googleapis.com/v0/b/pronadiekipu.appspot.com/o/kamera.png?alt=media&token=1941499f-cb5e-43e3-81a9-4acae2e933dc"
            >
              Kamera
            </option>
          </select>
        </div>
        <div class="form-box">
          <textarea
            rows="25"
            cols="10"
            placeholder="Opiši druženje"
            v-model="newPostOpis"
            type="text"
            id="postOpis"
          ></textarea>
        </div>
        <div class="form-submit">
          <button type="submit" value="Objavi" id="objavi">Objavi</button>
          <!--<input type="submit" value="Objavi" id="objavi" />-->
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { firebase } from "@/firebase.js";
import store from "@/store";
import { db, storage } from "@/firebase";
import router from "@/router";

firebase.auth().onAuthStateChanged((user) => {
  const currentRoute = router.currentRoute;
  if (user) {
    // User is signed in.
    store.currentUser = user.email;

    if (user.displayName) {
      store.userDisplayName = user.displayName;
    }
  } else {
    // No user is signed in.
    store.currentUser = null;
  }
  if (user.email) {
    store.userEmail = user.email;
  }
  if (user.phoneNumber) {
    store.userPhoneNumber = user.phoneNumber;
  }
});
export default {
  name: "PostForm",
  data() {
    return {
      cards: [],
      store,
      newPostOpis: "",
      newPostGame: "",
      Imeiprezime: "",
    };
  },

  methods: {
    postNewImage() {
      const postGame = this.newPostGame;
      const postOpis = this.newPostOpis;
      const pack_data = [];

      db.collection("posts")
        .add({
          id: pack_data,
          userName: store.userDisplayName,
          option: postGame,
          desc: postOpis,
          email: store.currentUser,
          img: store.profilePicture,
          posted_at: Date.now(),
        })
        .then((doc) => {
          console.log("Spremljeno", doc);
          this.newPostGame = "";
          this.newPostOpis = "";
          this.$router.push({ name: "Naslovna" });
          let postId = doc.id;
        })
        .catch((e) => {
          console.error(e);
        });
      for (let x = 0; x < pack_data.length; x++) {
        db.doc(pack_data[x].id);
      }
    },
  },
};
</script>