<template>
  <div class="content-wrap">
    <loading v-if="isLoading"></loading>
    <div class="content">
      <div class="travel-info">
        <h2>Điểm đón: {{ From.detail || From.formatted_address }}</h2>
        <div>
          <div class="icon">
            <img :src="require('../assets/alter-icons/Group.png')" alt="" />
          </div>
          <p>
            Điểm đến: <span>{{ To.detail || To.formatted_address }}</span>
          </p>
        </div>

        <div>
          <div class="icon">
            <img :src="require('../assets/alter-icons/Group (1).png')" alt="" />
          </div>

          <p>Khoảng cách: <span>25km</span></p>
        </div>
        <div>
          <div class="icon">
            <img :src="require('../assets/alter-icons/Group (2).png')" alt="" />
          </div>
          <p>Dự kiến thời gian: <span>2 giờ 30 phút</span></p>
        </div>
        <p>Mức giá đã bao gồm toàn bộ các phí như: vé sân bay, cầu đường …</p>
      </div>
      <div class="car-list">
        <div class="car" v-for="(car, index) in carList" :key="index">
          <div class="image-brand">
            <div>
              <img
                :src="require(`../assets/photos/carList/image 2.png`)"
                alt=""
              />
              <p>{{ car.carType.description }}</p>
            </div>
          </div>
          <div class="car-info">
            <h3>{{ car.carType.name }}</h3>
            <div>
              <div class="car-sub-info">
                <div>
                  <div class="icon">
                    <img
                      :src="require('../assets/alter-icons/Vector.png')"
                      alt=""
                    />
                  </div>
                  <p>{{ car.carType.seats }}</p>
                </div>

                <div class="car-sub-info">
                  <div>
                    <div class="icon">
                      <img
                        :src="require('../assets/alter-icons/baggage 1.png')"
                        alt=""
                      />
                    </div>

                    <p>2</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="price">
            <div>
              <h2>
                {{
                  car.estimatedFee.toLocaleString("vi-VN", {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  })
                }}
                VND
              </h2>
              <button @click="chooseCar(car.carTypeId)">Chọn xe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from "./Loading.vue";
export default {
  components: { Loading },
  data() {
    return {
      isLoading: false,
    };
  },
  computed: {
    carList() {
      return this.$store.state.carList;
    },
    type() {
      return this.$store.state.type;
    },
    From() {
      return this.$store.state.From;
    },
    To() {
      return this.$store.state.To;
    },
  },
  methods: {
    async chooseCar(carId) {
      this.isLoading = true;
      await this.$store.dispatch("step1Prepare", carId);
      if (this.type === "home_airport") {
        await this.$store.dispatch("step1PrepareReturn");
      }
      this.isLoading = false;
      this.$router.push({ name: "Step 1" });
    },
  },
};
</script>

<style scoped>
.content-wrap {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.car-info h3 {
  color: #203f7e;
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
}
.content {
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.travel-info h2 {
  color: #1b3468;
  margin: 20px 0;
}
.travel-info > div {
  display: flex;
  margin: 20px 0;
}
.travel-info > div .icon {
  margin-right: 10px;
}
.travel-info > div span {
  color: #1b3468;
  font-weight: 700;
}
.travel-info > p {
  font-weight: 700;
}
.car-list {
  display: flex;
  flex-direction: column;
}
.car {
  display: grid;
  width: 100%;
  justify-content: space-between;
  margin: 50px 0;
  box-shadow: 0px 4px 30px rgba(124, 124, 124, 0.25);
  border-radius: 8px;
  grid-template-columns: repeat(1, 1fr);
}
.image-brand img {
  display: block;
  margin: 0 auto;

  margin-bottom: 10px;
}
.image-brand {
  width: 100%;
  padding: 20px 0;
}
.image-brand > div {
  border-bottom: 2px solid #ebebeb;
}
.image-brand p {
  background: #f6f7f8;
  border-radius: 8px;
  padding: 10px;
  width: fit-content;
  margin: 0 auto;
}

.car-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-column-start: 1;
  grid-row-start: 2;
  width: fit-content;
  margin: 30px;
}

.car-sub-info {
  display: flex;
}
.car-sub-info .icon {
  margin-right: 20px;
}
.car-sub-info > div {
  margin-right: 10px;
  display: flex;
}
.price {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f0f3fb;
  min-width: 30%;
  grid-column-end: 3;
  grid-column-start: 1;
}
.price div {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
}
.price button {
  background: #f26d22;
  border: none;
  padding: 10px 0;
  margin-top: 20px;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  width: 100%;
}
@media (min-width: 650px) {
  .car-info {
    grid-column-start: 2;
    grid-row-start: 1;
    min-width: 30%;
  }
  .car {
    grid-template-columns: repeat(2, 1fr);
  }
  .image-brand > div {
    border-right: 2px solid #ebebeb;
    border-bottom: none;
  }
}
@media (min-width: 900px) {
  .car {
    display: flex;
  }
}
</style>