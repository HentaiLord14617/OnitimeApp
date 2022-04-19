<template>
  <div class="content-wrap">
    <div class="main-image">
      <img :src="require('../assets/photos/contactus.jpg')" />
      <h2>Câu Hỏi Thường Gặp</h2>
    </div>
    <div class="content">
      <div class="col1">
        <div class="section" v-for="(part, index1) in col1" :key="index1">
          <h1>{{ part.section[0].title }}</h1>
          <div
            v-for="(item, index2) in part.section[1]"
            :key="index2"
            @click="toogleAnswer(index1, index2)"
          >
            <p class="question">{{ item.question }}</p>
            <p v-if="item.show" class="answer">{{ item.answer }}</p>
          </div>
        </div>
      </div>
      <div class="col2">
        <div class="section" v-for="(part, index1) in col2" :key="index1">
          <h1>{{ part.section[0].title }}</h1>
          <div
            v-for="(item, index2) in part.section[1]"
            :key="index2"
            @click="toogleAnswer(index1 + 4, index2)"
          >
            <p class="question">{{ item.question }}</p>
            <p v-if="item.show" class="answer">{{ item.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    col1() {
      return this.$store.state.FAQ.slice(0, 4);
    },
    col2() {
      return this.$store.state.FAQ.slice(4, 8);
    },
  },
  methods: {
    toogleAnswer(value1, value2) {
      this.$store.commit("toogleAnswer", { index1: value1, index2: value2 });
    },
  },
  created() {
    this.$store.commit("clearAnswer");
  },
};
</script>

<style scoped>
.content-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.main-image {
  width: 100%;
  position: relative;
}
.main-image h2 {
  position: absolute;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  top: 50%;
  color: white;
  font-size: 30px;
  text-transform: uppercase;
}
img {
  display: block;
  width: 100%;
  height: 180px;
}
.content {
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
}
.col1 h1,
.col2 h1 {
  font-size: 20px;
  color: #203f7e;
  margin: 20px 0;
}
.col1,
.col2 {
  width: 40%;
}
.question {
  color: #203f7e;
  margin: 20px 0;
  cursor: pointer;
}
.answer {
  font-weight: 500;
}
@media (min-width: 800px) {
  img {
    height: 336px;
  }
}
</style>