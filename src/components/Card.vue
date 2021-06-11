<template>
  <div class="card">
    <div class="card-body p-0">
      <a :href="info.page"> <img class="card-img-top" :src="info.img" /> </a>
      <div class="container">
        <h4>
          <b>{{ info.description }}</b>
          <br />
          <router-link class="btnDruzenje" role="button" to="/PostForm"
            >Ponudi druženje</router-link
          >
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["info"],
  name: "Card",
};
</script>

<style >
.card {
  /* Add shadows to create the "card" effect */
  transition: 0.3s;
  max-width: 750px;
  left: 0;
  right: 0;
  margin: 0px auto 5px auto;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgb(255, 255, 255);
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
}
.btnDruzenje {
  font-size: 18px;
  color: #e4857f;
  text-decoration: none;
  padding: 5px;
  border-radius: 10px;
  border: 1px solid #e4857f;
}
.btnDruzenje:focus {
  background-color: #e4857f;
}
</style>

