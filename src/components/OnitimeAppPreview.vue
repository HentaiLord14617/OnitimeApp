<template>
  <div class="content-wrap">
    <div class="container">
      <div class="col1">
        <div class="header">
          <h1>Onitime App-Book Car In City</h1>
          <p>
            The unique app in Vietnam helps you book a car for short distances
            in city with English-speaking dispatcher
          </p>
          <div class="advantages">
            <h3>Advantages compared to Tradiontional taxi and Grab app:</h3>
            <ul>
              <div class="advantage">
                <p>Better ride quality: wider, newer, cleaner</p>
              </div>
              <div class="advantage">
                <p>Dispatcher assist you in English to you catch the car</p>
              </div>
              <div class="advantage">
                <p>Price is known in advance and fixed</p>
              </div>
              <div class="advantage">
                <p>Pay by cash or by Paypal, credit card in advance</p>
              </div>
            </ul>
            <div class="sub-info">
              <p>Over 5,000 app downloads</p>
              <router-link to="" class="router-link">More info</router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="col2">
        <div>
          <div class="app-image">
            <img :src="require('../assets/photos/app.jpg')" alt="" />
          </div>
          <div class="icons">
            <div class="icon">
              <appstore></appstore>
            </div>
            <div class="icon">
              <googleplay></googleplay>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import appstore from "../assets/alter-icons/appstore.svg";
import googleplay from "../assets/alter-icons/gg-play.svg";

export default {
  components: {
    appstore,
    googleplay,
  },
};
</script>

<style scoped>
.content-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  display: flex;
  width: 80%;
  justify-content: space-between;
  /* align-items: center; */
  margin: 50px 0;
}
img {
  display: block;
  width: 100%;
  height: 100%;
}
h1 {
  color: #203f7e;
}
.col1 {
  width: 100%;
}
.col1 p {
  color: #4b5f75;
  font-weight: 500;
  margin: 20px 0;
  position: relative;
}
ul p::before {
  content: "";
  position: absolute;
  width: 8px;
  height: 8px;
  background: #203f7e;
  left: -30px;
  top: 3px;
  border-radius: 50%;
  border: 5px solid #aabbdd;
}
ul {
  margin-left: 70px;
}
.sub-info {
  display: flex;
  align-items: center;
  /* width: fit-content; */
}
.router-link {
  margin: 0 10px;
  background: #f26d22;
  padding: 5px 10px;
  border-radius: 4px;
}
.col2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  display: none;
  margin-right: 50px;
}
.col2 div:first-child {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.icons {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 20px;
}
.icon {
  margin: 0 5px;
}
@media (min-width: 700px) {
  .col2 {
    display: block;
  }
  .col1 {
    width: 50%;
  }
}
</style>