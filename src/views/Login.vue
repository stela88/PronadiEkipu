<template>
  <div class="about">
    <div class="logoLog">
      <img alt="logo" src="../assets/logoPronadiEkipu.png" />
    </div>
    <h1>Prijavi se</h1>
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form>
            <div class="form-group">
              <div class="label1">
                <label for="exampleInputEmail1">Email</label>
              </div>
              <input
                type="email"
                v-model="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder=""
              />
            </div>
            <div class="form-group">
              <div class="label1">
                <label for="exampleInputPassword1" id="myInput">Lozinka</label>
              </div>
              <input
                type="password"
                v-model="lozinka"
                class="form-control"
                id="exampleInputPassword1"
                placeholder=""
              />
            </div>
            <p style="display:none" class="errorMessage" id="errorMsg">
              ERROR: Netočan email ili lozinka
            </p>
            <button type="button" @click="login()" class="button" id="myBtn">
              Prijavi se
            </button>
          </form>
          <small id="emailHelp" class="form-text text-muted"
            >Nemate account?</small
          >
          <router-link to="/Signup">Registriraj se</router-link>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { firebase } from "@/firebase.js";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      lozinka: ""
    };
  },
  methods: {
    login() {
      console.log("login..." + this.email);

      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.lozinka)
        .then(result => {
          console.log("Uspješna prijava", result);
        })
        .catch(function(e) {
          console.error("Greška", e);
          document.getElementById("errorMsg").style.display = "block";
        });
    }
  }
};
</script>
<style scoped>
.errorMessage {
  color: red;
}
</style>