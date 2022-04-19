<template>
  <div class="home">
    <loading v-if="isLoading"></loading>
    <modal
      :userMessage="error"
      @close-modal="clearError"
      v-if="!!error"
    ></modal>
    <router-link :to="{ name: 'Contact Us' }">
      <div class="fixed-icon">
        <img :src="require('../assets/alter-icons/image 49.png')" alt="" />
      </div>
    </router-link>
    <div class="fixed-icon-up" @click="Up">
      <goup></goup>
    </div>
    <div class="main-image">
      <img :src="require('../assets/photos/main.png')" />
      <img
        :src="require('../assets/photos/unsplash_GQEqAqxZfM4 (1).png')"
        class="mobile"
      />
      <div class="content">
        <div class="title">
          <h1>
            Ứng dụng đặt xe đi sân bay, đi tỉnh chuyên nghiệp và trách nhiệm
          </h1>
        </div>
        <div class="option">
          <div @submit.prevent="">
            <div class="switch">
              <label
                :class="{ clicked: !clicked, unclicked: clicked }"
                @click="click(false)"
                >Đi đến sân bay
              </label>

              <label
                :class="{ clicked: clicked, unclicked: !clicked }"
                @click="click(true)"
                >Từ sân bay về
              </label>
            </div>
            <div class="option-content">
              <div class="inputs">
                <div>
                  <div class="input">
                    <destination v-if="!clicked" class="icon" />
                    <plane class="icon" v-else />

                    <GmapAutocomplete
                      v-if="type1"
                      @place_changed="setFrom"
                      :options="autocompleteOptions"
                      :placeholder="slot1"
                    />
                    <div v-else>
                      <destination v-if="!clicked" class="icon" />
                      <plane v-else class="icon" />

                      <input
                        :placeholder="slot1"
                        type="text"
                        v-model="From"
                        @keyup.enter="onEnter"
                        @keyup.down="onDown"
                        @keyup.up="onUp"
                        class="from-autocomplete"
                      />
                      <ul
                        class="autocomplete-results"
                        v-if="From && !fromFound && !close"
                      >
                        <li
                          v-for="(place, index) in airportDataList"
                          :key="index"
                          @click="setFrom(place)"
                          @contextmenu.prevent="setFrom(place)"
                          @click.middle="setFrom(place)"
                          :style="[
                            index === fromCurrentIndex
                              ? { background: 'rgba(235,242,254,255)' }
                              : { background: '#fff' },
                          ]"
                        >
                          {{ place.detail }}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="icon">
                    <right />
                  </div>

                  <div class="input">
                    <!-- <destination class="icon" /> -->
                    <plane class="icon" v-if="!clicked" />
                    <destination v-else class="icon" />

                    <GmapAutocomplete
                      v-if="type2"
                      @place_changed="setTo"
                      :options="autocompleteOptions"
                      :placeholder="slot2"
                    />
                    <div v-else>
                      <plane class="icon" v-if="!clicked" />
                      <destination v-else class="icon" />
                      <input
                        type="text"
                        :placeholder="slot2"
                        v-model="To"
                        @keyup.enter="onEnter"
                        @keyup.down="onDown"
                        @keyup.up="onUp"
                        class="to-autocomplete"
                      />
                      <ul
                        class="autocomplete-results"
                        v-if="To && !toFound && !close"
                      >
                        <li
                          v-for="(place, index) in airportDataList"
                          :key="index"
                          @click="setTo(place)"
                          @contextmenu.prevent="setTo(place)"
                          @click.middle="setTo(place)"
                          :style="[
                            index === fromCurrentIndex
                              ? { background: 'rgba(235,242,254,255)' }
                              : { background: '#fff' },
                          ]"
                        >
                          {{ place.detail }}
                        </li>
                      </ul>
                    </div>
                  </div>

                  <button @click="showCarList()">Xem giá</button>
                </div>
              </div>
              <div class="info">
                <div class="left">
                  <!-- <lock />
                  <creditcard />
                  <paypal />
                  <p>Cash</p> -->
                  "Always responsible-Luôn trách nhiệm"
                </div>
                <div class="right">
                  <div class="stars">
                    <span>TripAdvisor </span>
                    <fullstar />
                    <fullstar />
                    <fullstar />
                    <fullstar />
                    <blankstar />
                    <span>(4)</span>
                  </div>

                  <p v-if="notFound && stateFrom && stateTo">
                    Để đặt xe đi tỉnh, quý khách vui lòng liên hệ trực tiếp
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <car-list
      v-if="showAll === true && !notFound && stateFrom && stateTo"
      id="carList"
    ></car-list>
    <why-choose-us></why-choose-us>

    <div class="photos">
      <div>
        <div class="photo">
          <img :src="require('../assets/photos/photo-2.jpg')" />
        </div>
        <div class="photo">
          <img :src="require('../assets/photos/photo-3.jpg')" />
        </div>
        <div class="photo">
          <img :src="require('../assets/photos/photo-1.jpg')" />
        </div>
      </div>
    </div>
    <onitime-advatage></onitime-advatage>
    <bonus></bonus>
    <slidertwo></slidertwo>
    <div class="service-explain">
      <div class="service-container">
        <h2>Đặt xe tại ứng dụng</h2>
        <div class="explain-info">
          <div class="step-1">
            <div class="icon">
              <one />
              <div class="line"></div>
            </div>
            <div class="main-content">
              <h5>Nhập thông tin đặt xe</h5>
              <ul>
                <li>
                  Xe đi sân bay, xe ghép: quý khách nhập thông tin chuyến đi và
                  đặt xe
                </li>
                <li>
                  Xe đi tỉnh: quý khách chọn BÁO GIÁ, nhận thông báo mức giá
                  trước khi đặt xe
                </li>
              </ul>
            </div>
          </div>
          <div class="step-2">
            <div class="icon">
              <one />
              <div class="line"></div>
            </div>
            <div class="main-content">
              <h5>Nhận thông tin xe đón</h5>
              <ul>
                <li>
                  Ứng dụng gửi thông báo chi tiết xe đón trước giờ đón tối thiểu
                  40 phút; và trước 20h tối hôm trước đối với chuyến đi sáng sớm
                </li>
                <li>đồng thời lái xe chủ động gọi hẹn quý khách</li>
              </ul>
            </div>
          </div>
          <div class="step-3">
            <div class="icon">
              <three />
              <div class="line"></div>
            </div>
            <div class="main-content">
              <h5>Đánh giá chất lượng chuyến đi</h5>
              <ul>
                <li>
                  Sau khi kết thúc chuyến đi, quý khách vui lòng chấm sao chất
                  lượng chuyến đi.
                </li>
                <li>Thu nhập của lái xe phụ thuộc vào đánh giá của bạn</li>
              </ul>
            </div>
          </div>
          <div class="check">
            <check></check>
          </div>
        </div>
      </div>
    </div>
    <rating-statistic></rating-statistic>

    <questions-and-answers></questions-and-answers>
    <!-- <onitime-app-preview></onitime-app-preview> -->
    <about-us-preview></about-us-preview>
  </div>
</template>


<script>
import plane from "../assets/alter-icons/plane.svg";
import destination from "../assets/alter-icons/destination.svg";
import one from "../assets/alter-icons/1.svg";
import three from "../assets/alter-icons/3.svg";
import check from "../assets/alter-icons/check.svg";
import right from "../assets/alter-icons/right.svg";
// import lock from "../assets/alter-icons/lock.svg";
// import creditcard from "../assets/alter-icons/credit-card.svg";
// import paypal from "../assets/alter-icons/paypal.svg";
import fullstar from "../assets/alter-icons/fullstar.svg";
import blankstar from "../assets/alter-icons/blankstar.svg";
import Slidertwo from "../components/Slider2.vue";
import RatingStatistic from "../components/RatingStatistic.vue";
import WhyChooseUs from "../components/WhyChooseUs.vue";
import QuestionsAndAnswers from "../components/QuestionsAndAnswers.vue";
// import OnitimeAppPreview from "../components/OnitimeAppPreview.vue";
import AboutUsPreview from "../components/AboutUsPreview.vue";
import OnitimeAdvatage from "../components/OnitimeAdvatage.vue";
import Bonus from "../components/Bonus.vue";
import CarList from "../components/CarList.vue";
import goup from "../assets/alter-icons/goup.svg";
import Modal from "../components/Modal.vue";
export default {
  name: "Home",
  components: {
    right,
    // lock,
    // creditcard,
    // paypal,
    fullstar,
    blankstar,
    destination,
    plane,
    one,
    three,
    check,
    Slidertwo,
    RatingStatistic,
    WhyChooseUs,
    QuestionsAndAnswers,
    // OnitimeAppPreview,
    AboutUsPreview,
    OnitimeAdvatage,
    Bonus,
    CarList,
    goup,
    Modal,
  },
  data() {
    return {
      clicked: false,
      showAllCarList: null,
      autocompleteOptions: {
        componentRestrictions: {
          country: ["vn"],
        },
      },
      fromInput: "",
      toInput: "",
      airportData: [],
      fromFound: false,

      fromCurrentIndex: -1,
      close: false,
      intitalFrom: "",
      intitalTo: "",
      toFound: false,
      isLoading: false,
      checkProvince: false,
      currentFrom: null,
      currentTo: null,
    };
  },
  methods: {
    click(val) {
      this.clicked = val;
      this.fromInput = this.toInput = "";
      // this.$store.commit("setFrom", null);
      // this.$store.commit("setTo", null);
      this.currentFrom = this.currentTo = null;
      this.fromFound = this.toFound = false;

      console.log(this.type);
    },
    async showCarList() {
      this.isLoading = true;
      this.$store.commit("setFrom", this.currentFrom);
      this.$store.commit("setTo", this.currentTo);
      this.checkProvince = true;
      await this.$store.dispatch("showCarList");
      this.isLoading = false;
      this.scroll("carList");
      // console.log(this.error);
    },
    scroll(id) {
      if (document.getElementById(id)) {
        document.getElementById(id).scrollIntoView({
          behavior: "smooth",
        });
      }
    },

    Up() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    setFrom(place) {
      console.log(place);
      this.fromInput = place.detail;
      this.fromFound = true;
      this.currentFrom = place;
      // this.$store.commit("setFrom", place);
    },
    setTo(place) {
      console.log(place);

      this.toInput = place.detail;
      this.toFound = true;
      this.currentTo = place;

      // this.$store.commit("setTo", place);
    },
    async getAirportData(place) {
      const response = await fetch(
        `http://api.onitime.vn/api/booking/location/search?type=airport&location=${place}`
      );
      const responseData = await response.json();

      this.airportData = responseData.data;
    },
    onEnter() {
      if (this.type === "airport_home") {
        if (this.fromCurrentIndex >= 0) {
          console.log(this.airportDataList[this.fromCurrentIndex].detail);
          this.fromInput = this.airportDataList[this.fromCurrentIndex].detail;
          this.fromFound = true;
          // this.$store.commit(
          //   "setFrom",
          //   this.airportDataList[this.fromCurrentIndex]
          // );
          this.currentFrom = this.airportDataList[this.fromCurrentIndex];
          this.fromCurrentIndex = -1;
          this.close = false;
        }
      } else {
        if (this.fromCurrentIndex >= 0) {
          this.toInput = this.airportDataList[this.fromCurrentIndex].detail;
          this.toFound = true;
          // this.$store.commit(
          //   "setTo",
          //   this.airportDataList[this.fromCurrentIndex]
          // );
          this.currentTo = this.airportDataList[this.fromCurrentIndex];
          this.fromCurrentIndex = -1;
          this.close = false;
        }
      }
    },
    onUp() {
      if (this.type === "airport_home") {
        if (this.fromCurrentIndex >= 0 && (!this.fromFound || !this.toFound)) {
          this.fromCurrentIndex = this.fromCurrentIndex - 1;
          if (this.fromCurrentIndex == -1) {
            this.fromInput = this.intitalFrom;
            return;
          }
          this.fromInput = this.airportDataList[this.fromCurrentIndex].detail;
        }
      } else {
        if (this.fromCurrentIndex >= 0 && (!this.fromFound || !this.toFound)) {
          this.fromCurrentIndex = this.fromCurrentIndex - 1;
          if (this.fromCurrentIndex == -1) {
            this.toInput = this.intitalTo;
            return;
          }
          this.toInput = this.airportDataList[this.fromCurrentIndex].detail;
        }
      }
    },
    onDown() {
      if (this.type === "airport_home") {
        if (
          this.fromCurrentIndex < this.airportDataList.length - 1 &&
          (!this.fromFound || !this.toFound)
        ) {
          this.fromCurrentIndex = this.fromCurrentIndex + 1;

          this.fromInput = this.airportDataList[this.fromCurrentIndex].detail;
        }
      } else {
        if (
          this.fromCurrentIndex < this.airportDataList.length - 1 &&
          (!this.fromFound || !this.toFound)
        ) {
          this.fromCurrentIndex = this.fromCurrentIndex + 1;

          this.toInput = this.airportDataList[this.fromCurrentIndex].detail;
        }
      }
    },
    clearError() {
      this.$store.dispatch("clearError");
    },
    ToHandleInput(value) {
      if (value.data === null) {
        this.currentFrom = null;
        // this.$store.commit("setNotFound", false);
      }
      this.checkProvince = false;
    },
    FromHandleInput(value) {
      if (value.data === null) {
        this.currentTo = null;
        // this.$store.commit("setNotFound", false);
      }
      this.checkProvince = false;
    },
  },
  computed: {
    slot1() {
      return this.$store.state.slot1;
    },
    slot2() {
      return this.$store.state.slot2;
    },
    From: {
      get() {
        return this.fromInput;
      },
      async set(place) {
        this.fromInput = this.intitalFrom = place;
        this.checkProvince = false;
        await this.getAirportData(place);
        if (this.fromFound === true) {
          if (this.fromInput !== this.currentFrom.detail) {
            // this.$store.commit("setFrom", null);
            this.currentFrom = null;

            // this.$store.commit("setNotFound", false);
          }
          this.fromFound = false;
          // this.checkProvince = false;
          this.fromCurrentIndex = -1;
        }
      },
    },
    To: {
      get() {
        return this.toInput;
      },
      async set(place) {
        this.toInput = this.intitalTo = place;
        this.checkProvince = false;
        await this.getAirportData(place);
        if (this.toFound === true) {
          if (this.toInput !== this.currentTo.detail) {
            // this.$store.commit("setTo", null);
            this.currentTo = null;
            //   this.checkProvince = false;
            //   this.$store.commit("setNotFound", false);
          }
          this.toFound = false;
          // this.checkProvince = false;
          this.fromCurrentIndex = -1;
        }
      },
    },
    stateFrom() {
      return this.$store.state.From;
    },
    stateTo() {
      return this.$store.state.To;
    },

    showAll() {
      return this.$store.state.showAllCarList;
    },
    destinationData() {
      return this.$store.state.destinationData;
    },
    type() {
      return this.$store.state.type;
    },
    type1() {
      return this.type === "home_airport";
    },
    type2() {
      return this.type === "airport_home";
    },
    airportDataList() {
      return this.airportData.slice(0, 5);
    },
    error() {
      return this.$store.state.errorMessage;
    },
    notFound() {
      return this.$store.state.notFound;
    },
  },
  mounted() {
    document.addEventListener("click", (event) => {
      if (this.type === "home_airport") {
        console.log(event.target.className);

        if (
          event.target.className !== "to-autocomplete" &&
          event.target.className !== "autocomplete-results"
        ) {
          console.log(event.target.className);
          this.close = true;
          if (this.fromCurrentIndex >= 0) {
            this.toInput = this.airportDataList[this.fromCurrentIndex].detail;
            this.toFound = true;
            this.currentTo = this.airportDataList[this.fromCurrentIndex];
          }
        } else {
          this.close = false;
        }

        // this.fromCurrentIndex = -1;
      } else if (this.type === "airport_home") {
        if (
          event.target.className !== "from-autocomplete" &&
          event.target.className !== "autocomplete-results"
        ) {
          this.close = true;
          if (this.fromCurrentIndex >= 0) {
            this.fromInput = this.airportDataList[this.fromCurrentIndex].detail;
            this.fromFound = true;
            this.currentFrom = this.airportDataList[this.fromCurrentIndex];
          }
        } else {
          this.close = false;
        }
      }
    });
  },
  watch: {
    clicked(val) {
      if (val === false) {
        this.$store.commit("setDestination", {
          slot1: "Chọn điểm đón",
          slot2: "Chọn sân bay",
          type: "home_airport",
        });
      } else {
        this.$store.commit("setDestination", {
          slot1: "Chọn điểm đón",
          slot2: "Chọn thành phố/ sân bay",
          type: "airport_home",
        });
      }
    },
    fromInput(val) {
      if (val === "") {
        this.fromFound = false;
        this.close = false;

        this.currentFrom = null;
      }
    },
    toInput(val) {
      if (val === "") {
        this.toFound = false;
        this.close = false;
        this.currentTo = null;
        console.log(this.stateTo);
      }
    },
  },
  created() {
    // this.fromInput = this.toInput = null;
    // this.fromFound = this.toFound = false;
    this.$store.commit("clearAnswer");
    console.log(this.$store.state.step2Data);
    // location.reload();
  },
};
</script>
<style scoped>
.autocomplete {
  position: relative;
}
.autocomplete-results {
  padding: 0;
  margin: 0;
  border: 1px solid #eeeeee;
  height: 120px;
  height: fit-content;
  position: absolute;
  width: 100%;
  z-index: 60;
  border: none;
  box-shadow: 0px 4px 30px rgba(124, 124, 124, 0.25);
}
.autocomplete-results li {
  list-style: none;
  text-align: left;
  padding: 4px 2px;
  cursor: pointer;
  background: #fff;
  color: #000;
  font-weight: 400;
  font-size: 15px;
  padding: 15px;
  border: none;
  border-bottom: 1px solid gainsboro;
}
.autocomplete-results li:last-child {
  border: none;
}

.autocomplete-results li:hover {
  background-color: #d5d5d5 !important;
}
.goog-logo-link {
  display: none !important;
}
option {
  font-weight: 400;
  font-size: 13px;
}
.goog-te-gadget {
  color: transparent !important;
}

.main-image img {
  display: block;
  width: 100%;
  height: 100%;
}
.main-image img:first-child {
  display: none;
}
.main-image {
  display: flex;
  justify-content: center;
  color: #fff;
  position: relative;
  height: 750px;
  align-items: center;
}
.home {
  position: relative;
}
.fixed-icon {
  cursor: pointer;
  width: fit-content;
  right: 5px;
  bottom: 130px;
  position: fixed;
  z-index: 50;
  height: fit-content;
  height: 70px;
  background: #fff;
  border-radius: 50%;
  width: 70px;
}
.fixed-icon img {
  display: block;

  width: 100%;
}
.fixed-icon-up {
  background: #f26d22;
  padding: 10px;
  border-radius: 4px;
  padding: 10px 15px;
  cursor: pointer;
  width: fit-content;
  position: fixed;
  right: 20px;
  bottom: 70px;
  z-index: 50;
}
.content {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 20px;

  width: 80%;
  height: 80%;
}
.title {
  width: 100%;
  margin-top: 20px;
}
.content h1 {
  font-family: "SF Pro Text";
  font-style: normal;
  font-weight: 400;
  line-height: 48px;
  font-size: 20px;

  letter-spacing: 2px;
  margin-bottom: 20px;

  color: #ffffff;
}

form {
  position: relative;
}

.option {
  border: 1px solid #ffffff;
  position: relative;
  box-sizing: border-box;
  backdrop-filter: blur(84px);

  border-radius: 4px 4px 4px 4px;
}
.switch {
  display: flex;

  width: 100%;
}
.switch label {
  padding: 20px 0;
  width: 100%;
  text-align: center;
  font-weight: bold;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
}
.switch label:hover,
.switch label:focus {
  background: none;
  color: #fff;
  height: 100%;
}

button {
  background: #f26921;
  color: #fff;
  padding: 11px 15px;
  border-radius: 5px;
  border: none;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
}
input {
  width: 100%;
  border-radius: 5px;
  border: none;
  background: #dfe4ea;
  padding: 5px 30px;
  height: 45px;
}
::placeholder {
  color: #0e1c38;
  font-weight: 600;
}

.info {
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
  margin-bottom: 30px;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
}

.right {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 10px;
}
.right p {
  margin-top: 10px;
  position: absolute;
  bottom: 17px;
}
.left {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 10px;
}
.inputs {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 5px;
  /* grid-template-columns: repeat(1, 1fr); */
  flex-direction: column;
}
.inputs > div:first-child {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  row-gap: 15px;
}
.clicked {
  background: none;
  color: #fff;
}
.unclicked {
  background: #fff;
  color: #0e1c38;
}
.option-content {
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
}
.input {
  position: relative;
  width: 100%;
}

.input .icon {
  position: absolute;
  top: 10px;
  left: 5px;
}
input::-webkit-calendar-picker-indicator {
  opacity: 0;
}

.service-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  margin: 50px 0;
}
.service-explain {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: #f0f3fb;

  /* margin: 100px auto; */
}
.service-explain h2 {
  color: #4b5f75;
  font-size: 32px;
  margin-bottom: 50px;
}
.explain-info {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  position: relative;
  flex-direction: column;
}
.explain-info > .step-1,
.explain-info > .step-2,
.explain-info > .step-3 {
  width: 100%;
  display: flex;
}
.explain-info > div > .icon {
  display: flex;
  /* align-items: center; */
  width: fit-content;
  flex-direction: column;
  /* position: relative; */
  min-height: 200px;
}
.main-content ul {
  margin-left: 17px;
}
.main-content ul li {
  color: #4b5f75;
}
.line {
  width: 1px;
  height: 63%;
  background-color: #4b5f75;
  margin: auto;

  /* display: none; */
}
/* .icon:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 1px;
  transform: rotateZ(90deg);
  background: #0e1c38;
} */
.check {
  width: fit-content;
}
.main-content {
  width: 90%;
}
.photos {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f0f3fb;
}
.photos > div {
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  margin: 20px 0;
  flex-direction: column;
}
.photo {
  margin: 50px auto;
}
.photo:nth-child(1),
.photo:nth-child(3) {
  width: 50%;
}
.photo:nth-child(2) {
  margin: 0 15px;
  width: 90%;
}
.photo img {
  width: 100%;
  z-index: -1;
  height: 100%;
}
h5 {
  color: #4b5f75;
  font-size: 20px;
  font-weight: 800;
  margin: 10px 0;
}
.explain-info p {
  font-size: 20px;
}
.inputs > div > .icon {
  margin: auto;
  transform: rotateZ(90deg);
  display: none;
}
/* @media (min-width: 600px) {
  .content h1 {
    font-size: 20px;
  }
} */
input {
  width: 100%;
}

@media (min-width: 600px) {
  /* input {
    width: 300px;
  } */
  .photos > div {
    flex-direction: row;
  }
}
@media (min-width: 800px) {
  .inputs > div:first-child {
    grid-template-columns: 1fr 50px 1fr;
    display: grid;
    row-gap: 20px;
  }
  .inputs button {
    grid-column-start: 1;
    grid-column-end: 4;

    height: fit-content;

    min-width: 200px;
  }
  .inputs > div > .icon {
    margin-left: auto;
    margin-right: auto;
    transform: rotateZ(0deg);
    display: none;
  }
  .content h1 {
    font-size: 30px;
  }
  .title {
    width: 60%;
  }
  .explain-info > .step-1,
  .explain-info > .step-2,
  .explain-info > .step-3 {
    flex-direction: column;
  }
  .explain-info {
    flex-direction: row;
  }
  .explain-info > div > .icon {
    min-height: 100%;
    flex-direction: row;
    width: 100%;
  }
  .line {
    width: 70%;
    height: 1px;
    margin: auto;
  }
  input {
    width: 100%;
  }
  .input {
    width: 100%;
  }
  .info {
    flex-direction: row;
  }
  .right {
    align-items: flex-end;
  }
  .right p {
    text-align: end;
  }
  .main-image img:first-child {
    display: block;
  }
  .mobile {
    display: none !important;
  }
  .inputs > div > .icon {
    display: block !important;
  }
}

@media (min-width: 1110px) {
  .inputs > div:first-child {
    justify-content: space-between;
    flex-direction: row;
    display: flex;
  }
  .inputs button {
    grid-column-start: 4;
    margin-left: 40px;
    width: fit-content;
  }

  .content h1 {
    font-size: 40px;
  }
  .main-image {
    height: 500px;
    align-items: flex-end;
  }
  .inputs > div > .icon {
    margin-left: 40px;
    margin-right: 40px;
  }
}
@media (min-width: 600px) {
  .photo {
    margin: 100px auto;
  }
  .main-image {
    height: 650px;
  }
}
</style>
