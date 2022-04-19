<template>
  <div class="content-wrap">
    <div class="wrap">
      <h1>Câu hỏi thường gặp</h1>
      <div class="questions">
        <div class="col1">
          <div v-for="(part, index) in col1" :key="index">
            <h5 @click="toogleAnswer(index)">{{ part.question }}</h5>
            <p v-if="part.show">{{ part.answer }}</p>
          </div>
        </div>
        <div class="col2">
          <div v-for="(part, index) in col2" :key="index">
            <h5 @click="toogleAnswer(3 + index)">{{ part.question }}</h5>
            <p v-if="part.show">{{ part.answer }}</p>
          </div>
        </div>
      </div>
      <div>
        <router-link :to="{ name: 'FAQ' }" class="router-link"
          >All questions</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    col1() {
      return this.$store.state.FAQ[0].section[1].slice(0, 3);
    },
    col2() {
      return this.$store.state.FAQ[0].section[1].slice(3, 6);
    },
  },
  methods: {
    toogleAnswer(index) {
      this.$store.commit("toogleAnswer", { index1: 0, index2: index });
    },
  },
};
</script>

<style scoped>
.content-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #f0f3fb;
}
.wrap {
  width: 80%;
  margin: 50px 0;
}
.questions {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.router-link {
  border: 1px solid #f26921;
  padding: 10px;
  border-radius: 5px;
  margin: 20px 0;
  color: #f26921;
}
.wrap > div:last-child {
  margin-top: 50px;
}
.router-link:hover {
  background: #f26921;
  color: #fff;
}
h1,
h5 {
  color: #4b5f75;
}
h1 {
  margin-bottom: 20px;
}
h5 {
  cursor: pointer;
  margin-bottom: 20px;
  font-size: 15px;
}
.col1,
.col2 {
  width: 100%;
}
@media (min-width: 500px) {
  .col1,
  .col2 {
    width: 50%;
  }
  .questions {
    flex-direction: row;
  }
}
</style>