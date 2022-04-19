<template>
  <div class="app-wrapper">
    <navigation></navigation>
    <div class="app">
      <router-view />
    </div>
    <footers></footers>
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import Footers from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    Navigation,
    Footers,
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
  watch: {},
};
</script>

<style >
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");
.pac-container:after {
  content: none !important;
}
.date-picker {
  height: 35px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #becad6;
  padding-left: 35px;
}
.vdp-datepicker {
  width: 100%;
}
.vue__time-picker {
  width: 100% !important;
}
.vdp-datepicker__calendar {
  width: 200px !important;
}
.timepicker input[type="text"] {
  height: 35px !important;
  width: 100% !important;
  border-radius: 4px !important;
  border: 1px solid #becad6 !important;
  padding-left: 35px !important;
}
.timepicker .hint {
  display: none;
}
.timepicker .active {
  background: #203f7e !important;
}
.pac-item-query {
  font-size: 15px;
  font-weight: 400;
}
.pac-icon {
  display: none;
}
.pac-container {
  font-weight: 450;
  font-size: 15px;
  box-shadow: 0px 4px 30px rgba(124, 124, 124, 0.25);
}
.pac-matched {
  font-weight: 400;
  font-size: 15px;
}
.pac-item {
  padding: 10px;
  font-size: 15px;
  cursor: pointer;
}
.pac-item:hover {
  background-color: #d5d5d5;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Quicksand", sans-serif;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* .container {
  max-width: 1440px;
  margin: 0 auto;
} */
.router-link {
  color: #fff;
  text-decoration: none;
}
.link {
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  color: black;
}

.link-light {
  color: #fff;
}
.app-wrapper {
  min-width: 360px;
}
</style>
