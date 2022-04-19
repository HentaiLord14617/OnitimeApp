<template>
  <div class="user-comment">
    <div class="container">
      <h2>ĐÁNH GIÁ ONITIME TẠI TRIPADVISOR</h2>
      <div class="wrap">
        <div class="rating-statistic">
          <div class="header">
            <h3>Rating Statistic</h3>
            <div class="icon">
              <owl></owl>
            </div>
          </div>
          <div class="statistic">
            <div>
              <h2>{{ ratingNumber }}.0</h2>
              <div class="full-array">
                <div
                  class="full"
                  v-for="full in ratingNumber"
                  :key="full"
                ></div>
              </div>
              <div class="blank-array">
                <div
                  class="blank"
                  v-for="blank in 5 - ratingNumber"
                  :key="blank"
                ></div>
              </div>
              <p>{{ userComments.length }} reviews</p>
            </div>
            <div class="proportion">
              <div>
                <p>Excelent</p>

                <div class="percent-wrap">
                  <div
                    class="percent"
                    :style="{ width: excelentPercent }"
                  ></div>
                  <p>
                    {{ excelentCount }}
                  </p>
                </div>
              </div>
              <div>
                <p>Very good</p>
                <div class="percent" :style="{ width: veryGoodPercent }"></div>
                <p>{{ veryGoodCount }}</p>
              </div>
              <div>
                <p>Average</p>
                <div class="percent" :style="{ width: averagePercent }"></div>

                <p>
                  {{ averageCount }}
                </p>
              </div>
              <div>
                <p>Poor</p>
                <div class="percent" :style="{ width: poorPercent }"></div>
                <p>{{ poorCount }}</p>
              </div>
              <div>
                <p>Terible</p>
                <div class="percent" :style="{ width: teriblePercent }"></div>
                <p>{{ teribleCount }}</p>
              </div>
              <p>This is a review based on feedback from our customers</p>
            </div>
          </div>
        </div>
        <div class="comments">
          <div
            class="comment"
            v-for="(comment, index) in commentsView"
            :key="index"
          >
            <div class="content">
              <div class="user-info">
                <div class="avartar">
                  <img :src="comment.avartar" />
                </div>
                <div class="name-rating">
                  <h5>{{ comment.name }}</h5>
                  <div class="circle">
                    <div
                      class="full"
                      v-for="full in comment.rating"
                      :key="full"
                    ></div>
                    <div
                      class="blank"
                      v-for="blank in 5 - comment.rating"
                      :key="blank"
                    ></div>
                  </div>
                </div>
              </div>
              <p>{{ comment.comment }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import owl from "../assets/alter-icons/owl.svg";
export default {
  data() {
    return {
      userComments: [
        {
          avartar: require("../assets/photos/avartar-1.jpg"),
          name: "jame Honiver",
          rating: 5,
          comment:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos reiciendis qui unde dolore minima pariatur inventore, fuga modi voluptatum asperiores porro cum assumenda necessitatibus nobis explicabo aliquid facilis. Voluptates, quam!",
        },
        {
          avartar: require("../assets/photos/avartar-1.jpg"),
          name: "jame Honiver",
          rating: 5,
          comment:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos reiciendis qui unde dolore minima pariatur inventore, fuga modi voluptatum asperiores porro cum assumenda necessitatibus nobis explicabo aliquid facilis. Voluptates, quam!",
        },
        {
          avartar: require("../assets/photos/avartar-1.jpg"),
          name: "nobody",
          rating: 1,
          comment:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos reiciendis qui unde dolore minima pariatur inventore, fuga modi voluptatum asperiores porro cum assumenda necessitatibus nobis explicabo aliquid facilis. Voluptates, quam!",
        },
      ],
    };
  },
  components: {
    owl,
  },
  computed: {
    ratingNumber() {
      let ratingNumber = 0;
      this.userComments.forEach((comment) => {
        ratingNumber = ratingNumber + comment.rating;
      });
      return Math.round(ratingNumber / this.userComments.length);
    },
    excelentCount() {
      let count = 0;
      this.userComments.forEach((comment) => {
        if (comment.rating == 5) {
          count = count + 1;
        }
      });
      return count;
    },
    veryGoodCount() {
      let count = 0;
      this.userComments.forEach((comment) => {
        if (comment.rating == 4) {
          count = count + 1;
        }
      });
      return count;
    },
    averageCount() {
      let count = 0;
      this.userComments.forEach((comment) => {
        if (comment.rating == 3) {
          count = count + 1;
        }
      });
      return count;
    },
    poorCount() {
      let count = 0;
      this.userComments.forEach((comment) => {
        if (comment.rating == 2) {
          count = count + 1;
        }
      });
      return count;
    },
    teribleCount() {
      let count = 0;
      this.userComments.forEach((comment) => {
        if (comment.rating == 1) {
          count = count + 1;
        }
      });
      return count;
    },
    commentsView() {
      return this.userComments.slice(0, 2);
    },
    excelentPercent() {
      return (this.excelentCount / this.userComments.length) * 100 + "%";
    },
    veryGoodPercent() {
      return (this.veryGoodCount / this.userComments.length) * 100 + "%";
    },
    averagePercent() {
      return (this.averageCount / this.userComments.length) * 100 + "%";
    },
    poorPercent() {
      return (this.poorCount / this.userComments.length) * 100 + "%";
    },
    teriblePercent() {
      return (this.teribleCount / this.userComments.length) * 100 + "%";
    },
  },
};
</script>

<style scoped>
.percent {
  background: #34e0a1;
  height: 26px;
  border-radius: 20px;
}
.full {
  background: #34e0a1;
  height: 26px;
  min-width: 26px;
  width: 100%;
  border-radius: 50%;
}
.blank {
  border: 1px solid #34e0a1;
  height: 26px;
  width: 26px;
  border-radius: 50%;
}
.user-comment {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  min-height: 500px;
}
.container {
  display: flex;

  width: 80%;

  flex-direction: column;
  margin-bottom: 100px;
}
.wrap {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.header {
  display: flex;
  justify-content: space-around;
  margin: 10px 0;
}
.statistic .full-array,
.statistic .blank-array {
  display: flex;
}
.full,
.blank {
  margin: 0 2px;
}
.name-rating {
  display: flex;
  flex-direction: column;
}
.circle {
  display: flex;
}
.user-info {
  display: flex;
  align-items: center;
}
.proportion {
  display: flex;
  flex-direction: column;
}
.rating-statistic {
  background: #fff;

  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  /* width: 40%; */
  box-shadow: 0px 4px 30px rgba(124, 124, 124, 0.25);
  border-radius: 4px;
}
.comments {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px 0;
}

.proportion > div {
  display: flex;
  margin: 8px 0;
}
.comment {
  background: #fff;
  box-shadow: 0px 4px 30px rgba(124, 124, 124, 0.25);
  border-radius: 4px;
}
.comment:first-child {
  margin: 0;
}
.comment {
  margin-top: 20px;
}
.statistic > div:first-child {
  width: 100%;
  display: flex;
  align-items: center;
}
.statistic p {
  margin: 0 10px;
}
.content {
  margin: 20px;
}
.statistic h2 {
  margin: 0 10px;
  font-size: 35px;
  color: #203f7e;
}
.proportion {
  color: #203f7e;
  font-weight: 600;
}
.proportion > p {
  color: #000;
  font-weight: 200;
}
.container > h2 {
  margin: 50px 0px;
  color: #203f7e;
}
.percent-wrap {
  width: 100%;
  display: flex;
}
@media (min-width: 700px) {
  .wrap {
    flex-direction: row;
  }
  .comments {
    width: 60%;
  }
  .rating-statistic {
    margin-right: 20px;
  }
  .comments {
    margin: 0;
  }
}
</style>