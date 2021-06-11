<template>
  <div class="card">
    <div class="osobniPodaci">
      <div class="podaci">
        Email:
        <p class="spol">{{ store.currentUser }}</p>
      </div>
      <div class="podaci">
        Spol:
        <p class="spol">{{ info.spol }}</p>
      </div>
      <div class="podaci">
        Godine:
        <p class="godine">{{ info.godine }}</p>
      </div>
      <div class="podaci">
        Opis:
        <p class="opis">{{ info.opis }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import { db, storage } from "@/firebase";
export default {
  props: ["info"],
  name: "userInfo",
  data() {
    return {
      store,
    };
  },
};
</script>

<style>
.spol {
  width: 51%;
  margin-left: 45px;
}
.godine {
  width: 51%;
  margin-left: 30px;
}
.podaci {
  display: flex;
  text-align: left;
  margin: 30px;
}
.opis {
  width: 51%;
  margin-left: 45px;
}
</style>