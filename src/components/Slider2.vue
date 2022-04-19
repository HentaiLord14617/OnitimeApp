<template>
  <div class="content-wrap">
    <transition-group name="fade" tag="div">
      <div v-for="i in [currentIndex]" :key="i" class="photos">
        <h1>Các loại xe</h1>
        <div class="wrap">
          <div class="content">
            <img :src="firstImg" />
            <h5>{{ information[currentNum].title }}</h5>
            <p>{{ information[currentNum].content }}</p>
          </div>
          <div class="content">
            <img :src="secondImg" />
            <h5>{{ information[secondNum].title }}</h5>
            <p>{{ information[secondNum].content }}</p>
          </div>
          <div class="content">
            <img :src="thirdImg" />
            <h5>{{ information[thirdNum].title }}</h5>
            <p>{{ information[thirdNum].content }}</p>
          </div>
          <div class="content">
            <img :src="fourthImg" />
            <h5>{{ information[fourthNum].title }}</h5>
            <p>{{ information[fourthNum].content }}</p>
          </div>
        </div>
      </div>
    </transition-group>
    <left class="prev" @click="prev"></left>
    <right class="next" @click="next"></right>
  </div>
</template>
<script>
import left from "../assets/alter-icons/left arrow.svg";
import right from "../assets/alter-icons/right arrow.svg";

export default {
  name: "Slider",
  data() {
    return {
      information: [
        {
          image: require("../assets/photos/image-2.jpg"),
          title: "Sedan 5 seater1",
          content: "Cerato/Mazda3, Toyota Vios,Kia Cetaro,Huyndai Accent",
        },
        {
          image: require("../assets/photos/image-3.jpg"),
          title: "Luxury Sedan2",
          content: "Mercedes C300,Mercedes C250,C300",
        },
        {
          image: require("../assets/photos/image-4.jpg"),
          title: "CUV 7 seater3",
          content: "Fortuner,Toyota Fortuner,Innova",
        },
        {
          image: require("../assets/photos/image-3.jpg"),
          title: "Luxury Sedan4",
          content: "Mercedes C300,Mercedes C250,C300",
        },
        {
          image: require("../assets/photos/image-3.jpg"),
          title: "Luxury Sedan5",
          content: "Mercedes C300,Mercedes C250,C300",
        },
      ],
      timer: null,
      currentIndex: 0,
    };
  },

  // created: function () {
  //   this.startSlide();
  // },

  methods: {
    // startSlide: function () {
    //   this.timer = setInterval(this.next, 4000);
    // },
    next: function () {
      this.currentIndex += 1;
      // clearInterval(this.timer);
      // this.timer = setInterval(this.next, 4000);
    },
    prev: function () {
      this.currentIndex -= 1;
      // clearInterval(this.timer);
      // this.timer = setInterval(this.next, 4000);
    },
  },

  computed: {
    currentNum() {
      return Math.abs(this.currentIndex) % this.information.length;
    },
    firstImg: function () {
      return this.information[this.currentNum].image;
    },
    secondNum() {
      let result = this.currentNum + 1;
      if (result >= this.information.length) {
        result = result - this.information.length;
      }
      return result;
    },

    secondImg() {
      return this.information[this.secondNum].image;
    },
    thirdNum() {
      let result = this.currentNum + 2;
      if (result >= this.information.length) {
        result = result - this.information.length;
      }
      return result;
    },
    thirdImg() {
      return this.information[this.thirdNum].image;
    },
    fourthNum() {
      let result = this.currentNum + 3;
      if (result >= this.information.length) {
        result = result - this.information.length;
      }
      return result;
    },
    fourthImg() {
      return this.information[this.fourthNum].image;
    },
  },
  components: {
    left,
    right,
  },
};
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

img {
  width: 100%;
  margin: 0 auto;
  height: 280px;

  display: block;
}
h1 {
  color: #4b5f75;
  /* margin: 30px 15px; */
}
h5 {
  color: #4b5f75;
  font-size: 20px;
  font-weight: 600;
}

.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 40%;
}

.next {
  right: 20px;
}

.prev {
  left: 20px;
}

.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.9);
}
.photos {
  display: flex;
  position: absolute;
  /* top: 0px; */

  left: 50%;
  margin-right: -50%;
  transform: translate(-50%);
  justify-content: space-between;
  width: 80%;
  margin: 20px 0;
  height: 400px;

  flex-direction: column;
}
.content-wrap {
  position: relative;
  height: 450px;
  display: flex;
  flex-direction: column;
}
.content {
  width: 100%;
}
.wrap {
  display: flex;
  justify-content: center;

  margin-bottom: 100px;
}
.photos .content:nth-child(2),
.photos .content:nth-child(3),
.photos .content:nth-child(4) {
  display: none;
}
.photos .content:first-child {
  width: fit-content;
  margin: 0 auto;
}
@media (min-width: 900px) {
  .photos .content:nth-child(2),
  .photos .content:nth-child(3),
  .photos .content:nth-child(4) {
    display: block;
  }
  .photos .content:first-child {
    width: 100%;
  }
  img {
    width: 100%;
    margin: 0 auto;
    height: 100%;

    display: block;
  }
}
</style>