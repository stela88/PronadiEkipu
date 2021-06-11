<template>
  <div class="pocetna">
      <div class="container" id="containerDiv">
       <div class="subContainer">Mi spajamo ljude.</div>
       <div class="subContainer">Vi stvarate prijateljstva.</div>
      <div class="subContainer"><router-link class="routerlink" to=/Login>Započnimo</router-link></div>
  </div>
  </div>
</template>

<style scoped>
.container {
  background-image: url(https://michiganross.umich.edu/sites/default/files/images/articles/remote-connections.jpg);
  width: 100%;
  max-width: 750px;
  background-position: center;
  background-repeat: repeat;
  background-size: cover;
  margin-left: auto;
  margin-right: auto;
}
#containerDiv {
  z-index: 9999;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.subContainer {
  margin-top: 100px;
  padding: 20px;
  margin-right: auto;
  margin-left: auto;
  background-color: pink;
  font-size: x-large;
  border-radius: 30px;
  text-align: center;
  width: 75%;
  color: black;
}

.routerlink {
  text-decoration: none;
  color: black;
}

/* @media screen and (max-width: 600px) {
  .p-3.border.bg-light1 {
    margin-left: -100px;
    text-align: center;
    font-size: x-large;
  }
  .p-3.border.bg-light2 {
    margin-left: -100px;
    text-align: center;
  }
  .container {
    background-image: url(https://michiganross.umich.edu/sites/default/files/images/articles/remote-connections.jpg);
    height: 50%;
    background-position: center;
    background-size: cover;
    background-repeat: repeat;
  }
} */
</style>