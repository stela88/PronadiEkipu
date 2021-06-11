<template>
  <div class="card">
    <div class="userPost">
      <div class="userPostImgName">
        <img class="" :src="info.img" />
        <p>{{ info.name }}</p>
        <p>{{ postedFromNow }}</p>
      </div>
      <img class="card-img-top" :src="info.option" />
      <p class="description">{{ info.description }}</p>
      <hr />
      <div class="komentari" v-show="show">
        <div>
          <a v-for="c in comments" v-bind:key="c.posted_at">
            <div class="comment">
              <div class="commentName">
                <small>{{ c.name }}: </small>
              </div>
              <div class="commentText">
                <small>{{ c.comment }}</small>
              </div>
            </div>
            <hr />
          </a>
        </div>
        <!-- {{ formatTime(c.posted_at) }} by  -->
        <div class="commentInput">
          <form @submit.prevent="postComment">
            <input
              v-model="newComment"
              type="text"
              placeholder="Any comment?"
            />
            <button type="submit" class="btn btn-outline-secondary">
              Post
            </button>
          </form>
        </div>
      </div>
      <!-- komentari -->
      <div>
        <div class="komentarShowHide">
          <i class="fa fa-comment" aria-hidden="true"></i>
          <a @click="show = !show">Komentar</a>

          <!-- <button @click.prevent="toogleModal">Open modal</button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { firebase } from "@/firebase.js";
import store from "@/store";
import router from "@/router";
import { db, storage } from "@/firebase";

export default {
  props: ["info"],
  name: "Post",
  data() {
    return {
      store,
      comments: [],
      newComment: "",
      show: false,
      /* isVisibility: false, */
    };
  },
  mounted() {
    this.getComments();
  },
  methods: {
    /* toogleModal() {
      this.isVisibility = !this.isVisibility;
    }, */
    postComment() {
      if (this.newComment) {
        db.collection("posts") // kolekcija roditelj
          .doc(this.info.id) // konkretni post
          .collection("comments") // podkolekcija
          .add({
            email: store.currentUser,
            userName: store.userDisplayName,
            comment: this.newComment,
            posted_at: Date.now(),
          })
          .then((result) => {
            console.log(result);
            this.newComment = "";
          })
          .catch((e) => {
            console.error(e);
          });

        this.comments.push({
          email: store.currentUser,
          name: store.userDisplayName,
          comment: this.newComment,
          posted_at: Date.now(),
        });
      }
    },
    formatTime(t) {
      return moment(t.posted_at).fromNow();
    },
    getComments() {
      console.log("firebase dohvat...");
      db.collection("posts")
        .doc(this.info.id)
        .collection("comments")
        .orderBy("posted_at")
        .get()
        .then((query) => {
          query.forEach((doc) => {
            const data = doc.data();
            console.log(data);
            this.comments.push({
              posted_at: data.posted_at,
              comment: data.comment,
              name: data.userName,
              email: data.email,
            });
          });
        });
    },
  },
  computed: {
    postedFromNow() {
      return moment(this.info.time).fromNow();
    },
  },
};
</script>

<style>
.card {
  transition: 0.3s;
  max-width: 750px;
  left: 0;
  right: 0;
  margin: 0px auto 20px auto;
  background-color: rgba(255, 255, 255, 0.918);
}
/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0spx rgb(0, 0, 0);
}
/* Add some padding inside the card container */
.container {
  width: 100%;
}
.userPostImgName {
  display: flex;
  float: left;
  padding: 2px;
  width: 100%;
}
.userPostImgName img {
  width: 50px;
  border-radius: 50%;
  margin-right: 10px;
}
.userPostImgName p {
  margin: auto 5px auto 5px;
}
.description {
  margin: 7px 5px 5px 5px;
  font-size: 20px;
}
.komentarShowHide {
  width: 60%;
  display: flex;
  margin-right: auto;
  margin-left: auto;
}
.komentarShowHide i {
  margin: auto 0px auto auto;
}
.komentarShowHide a {
  margin: auto auto auto 2px;
}
.comment {
  display: flex;
  width: 100%;
}
.comment .commentName {
  width: 40%;
  float: left;
}
.comment .commentText {
  width: 60%;
  text-align: left;
}
.commentInput {
  width: 100%;
  display: flex;
  float: left;
}
.commentInput input {
  border-radius: 20px;
  width: 78%;
  height: 31px;
  opacity: 60%;
}
.commentInput form {
  margin: 0px auto 0px auto;
}
.btn {
  border-radius: 50rem;
  width: 22%;
  height: 33px;
}
</style>

