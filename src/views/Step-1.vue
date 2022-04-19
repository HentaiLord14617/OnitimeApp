<template>
  <div class="content-wrap" v-if="From && To && (step1Data || step1DataReturn)">
    <loading v-if="isLoading"></loading>
    <modal
      v-if="!timeBookingValid"
      :userMessage="userMessage"
      @close-modal="timeBookingValid = true"
    ></modal>
    <div class="content">
      <div class="progress">
        <div class="step1">
          <div class="step-progress">
            <p>1.Đặt xe</p>
            <div class="circle"></div>
            <div class="line">
              <div class="percent" style="width: 30%"></div>
            </div>
          </div>
        </div>
        <div class="step2">
          <div class="step-progress">
            <p>2.Thanh toán</p>

            <div class="circle"></div>
            <div class="line">
              <div class="percent" style="width: 0"></div>
            </div>
          </div>
        </div>
        <div class="step3">
          <div class="step-progress">
            <p>3.Xác nhận</p>

            <div class="circle">
              <div class="percent" style="width: 0"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="progress-mobile">
        <div class="step1-mobile">
          <div class="step-progress-mobile">
            <p>1.Đặt xe</p>
            <div>
              <div class="circle"></div>
            </div>
            <div class="line-mobile">
              <div class="percent-mobile" style="height: 40%"></div>
            </div>
          </div>
        </div>
        <div class="step2-mobile">
          <div class="step-progress-mobile">
            <p>2.Thanh toán</p>
            <div>
              <div class="circle"></div>
            </div>

            <div class="line-mobile">
              <div class="percent-mobile" style="height: 0"></div>
            </div>
          </div>
        </div>
        <div class="step3-mobile">
          <div class="step-progress-mobile">
            <p>3.Xác nhận</p>
            <div>
              <div class="circle">
                <div class="percent" style="height: 0"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="travel-info">
        <div>
          <div v-if="type === 'home_airport'">
            <h1>THÔNG TIN CHUYẾN ĐI</h1>
            <div class="icon-wrap timeguess">
              <div class="icon">
                <img
                  :src="require('../assets/alter-icons/Group (3).png')"
                  alt=""
                />
              </div>
              <p>Thời gian dự kiến: ~ 1 h</p>
            </div>
            <div class="destination first">
              <div class="from">
                <p>{{ From.detail || From.formatted_address }}</p>
              </div>
              <div class="inputs">
                <p>Ngày giờ đón *</p>
                <div>
                  <div class="icon-wrap input left">
                    <div class="icon">
                      <img
                        :src="require('../assets/alter-icons/Group (4).png')"
                        alt=""
                      />
                    </div>
                    <!-- <input type="text" v-model="homeAirportDataLeavingDay" /> -->
                    <!-- <datepicker
                      input-class="date-picker"
                      format="dd/MM/yyyy"
                      v-model="homeAirportDataLeavingDay"
                      :disabledDates="disabledDates"
                    ></datepicker> -->
                    <datepicker
                      format="dd/MM/yyyy"
                      :disabledDates="disabledDates"
                      v-model="homeAirportDataLeavingDay"
                      input-class="date-picker"
                    ></datepicker>
                  </div>
                  <div class="icon-wrap input">
                    <div class="icon">
                      <img
                        :src="require('../assets/alter-icons/Group (3).png')"
                        alt=""
                      />
                    </div>
                    <vue-timepicker
                      format="HH:mm"
                      class="timepicker"
                      placeholder="giờ:phút"
                      hide-clear-button
                      v-model="homeAirportDataLeavingTime"
                    ></vue-timepicker>
                  </div>
                </div>
              </div>
              <div class="to">
                <p>{{ To.detail || To.formatted_address }}</p>
              </div>
            </div>
          </div>
          <div class="border-line" v-if="type === 'home_airport'"></div>
          <div>
            <div class="way-back" v-if="type === 'home_airport'">
              <div>
                <h3>Đặt chiều về</h3>
                <p>{{ moneyBaseReturn }} VND</p>
              </div>
              <input
                type="checkbox"
                v-if="type === 'home_airport'"
                @click="setReturn"
              />
            </div>
            <div class="way-back" v-if="type === 'airport_home'">
              <h1>THÔNG TIN CHUYẾN ĐI</h1>
            </div>

            <div class="icon-wrap timeguess">
              <div class="icon">
                <img
                  :src="require('../assets/alter-icons/Group (3).png')"
                  alt=""
                />
              </div>
              <p>Thời gian dự kiến: ~ 1 h</p>
            </div>
            <div class="destination second">
              <div class="from">
                <p v-if="type === 'airport_home'">
                  {{ From.detail || From.formatted_address }}
                </p>
                <p v-else>{{ To.detail || To.formatted_address }}</p>
              </div>
              <div class="inputs">
                <p>Mã chuyến bay</p>
                <input type="text" v-model="airportHomeDataFlightCode" />
                <p class="note">
                  Nếu chưa có mã chuyến bay, chúng tôi sẽ liên hệ hỏi quý khách
                  sau để theo dõi máy bay hạ cánh
                </p>
                <p>Ngày giờ đón *</p>
                <div>
                  <div class="icon-wrap input left">
                    <div class="icon">
                      <img
                        :src="require('../assets/alter-icons/Group (4).png')"
                        alt=""
                      />
                    </div>
                    <datepicker
                      format="dd/MM/yyyy"
                      :disabledDates="disabledDates"
                      v-model="airportHomeDataLeavingDay"
                      input-class="date-picker"
                    ></datepicker>
                  </div>
                  <div class="icon-wrap input">
                    <div class="icon">
                      <img
                        :src="require('../assets/alter-icons/Group (3).png')"
                        alt=""
                      />
                    </div>
                    <vue-timepicker
                      format="HH:mm"
                      class="timepicker"
                      placeholder="giờ:phút"
                      hide-clear-button
                      v-model="airportHomeDataLeavingTime"
                    ></vue-timepicker>
                  </div>
                </div>
              </div>
              <div class="to">
                <p v-if="type === 'airport_home'">
                  {{ To.detail || To.formatted_address }}
                </p>
                <p v-else>{{ From.detail || From.formatted_address }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="user-info">
          <h3>THÔNG TIN CHI TIẾT</h3>
          <div class="name-tel">
            <div :class="{ Invalid: !fullNameValid }">
              <p>Họ tên quý khách *</p>
              <input
                type="text"
                class="name"
                v-model="userDataFullName"
                @blur="checkFullName"
                @input="clearErrorFullName"
              />
              <p v-if="fullNameValid === false" class="errorMessage">
                Xin hãy điền đầy đủ họ tên
              </p>
            </div>
            <div :class="{ Invalid: !phoneNumberValid }">
              <p>Số điện thoại *</p>
              <vue-tel-input
                v-model="userDataPhoneNumber"
                v-bind="bindProps"
                @blur="checkPhoneNumber"
                @input="clearErrorPhoneNumber"
              >
                <template v-slot:arrow-icon>
                  <icon></icon>
                </template>
              </vue-tel-input>
              <p v-if="phoneNumberValid === false" class="errorMessage">
                Xin hãy điền chính xác số điện thoại
              </p>
            </div>
            <div>
              <p>Ghi chú</p>
              <input type="text" class="take-note" v-model="userDataNote" />
            </div>
          </div>
        </div>
        <div class="contact">
          <h3>PHƯƠNG THỨC LIÊN HỆ (Nếu quý khách ở nước ngoài)</h3>
          <p>Choose one or more app to contact</p>
          <div class="option">
            <div>
              <label for="zalo"
                >Zalo
                <input
                  type="checkbox"
                  id="zalo"
                  v-model="contactMethods"
                  value="zalo"
                  @change="setContactMethods"
                />
                <span class="checkmark"></span>
              </label>
            </div>
            <div>
              <label for="whatsapp "
                >Whatsapp
                <input
                  type="checkbox"
                  id="whatsapp "
                  value="whatsapp"
                  v-model="contactMethods"
                  @change="setContactMethods"
                />
                <span class="checkmark"></span>
              </label>
            </div>
            <div>
              <label for="message"
                >Messenger
                <input
                  type="checkbox"
                  id="message"
                  value="messenger"
                  v-model="contactMethods"
                  @change="setContactMethods"
                />
                <span class="checkmark"></span>
              </label>
            </div>
            <div>
              <label for="telegram"
                >Telegram
                <input
                  type="checkbox"
                  id="telegram"
                  value="telegram"
                  v-model="contactMethods"
                  @change="setContactMethods"
                />
                <span class="checkmark"></span>
              </label>
            </div>
            <div>
              <label for="kakao-talk"
                >Kakao Talk
                <input
                  type="checkbox"
                  id="kakao-talk"
                  value="kakaotalk"
                  v-model="contactMethods"
                  @change="setContactMethods"
                />
                <span class="checkmark"></span>
              </label>
            </div>
            <div>
              <label for="line"
                >Line
                <input
                  type="checkbox"
                  id="line"
                  value="line"
                  v-model="contactMethods"
                  @change="setContactMethods"
                />
                <span class="checkmark"></span>
              </label>
            </div>
            <div>
              <label for="wechat"
                >Wechat
                <input
                  type="checkbox"
                  id="wechat"
                  value="wechat"
                  v-model="contactMethods"
                  @change="setContactMethods"
                />
                <span class="checkmark"></span>
              </label>
            </div>
            <div>
              <label for="imessage"
                >iMessage
                <input
                  type="checkbox"
                  id="imessage"
                  value="imessage"
                  v-model="contactMethods"
                  @change="setContactMethods"
                />
                <span class="checkmark"></span>
              </label>
            </div>
            <div>
              <label for="other"
                >Other
                <input
                  type="checkbox"
                  id="other"
                  value="other"
                  v-model="contactMethods"
                  @change="setContactMethods"
                />
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
        </div>
        <div>
          <h3>Voucher</h3>
          <div>
            <input type="text" v-model="voucher" />
            <button @click="setVoucher">Áp dụng</button>
          </div>
        </div>
        <button
          :to="{ name: 'Step 2' }"
          class="last-button"
          @click="step2Prepare"
        >
          Tiếp tục
        </button>
      </div>
      <div class="car-info">
        <div>
          <div class="wrap">
            <div class="icon-wrap">
              <div class="icon">
                <img
                  :src="require('../assets/alter-icons/Group 1808.png')"
                  alt=""
                />
              </div>

              <p class="title">{{ step1Data.carType.name }}</p>
            </div>
            <div>
              <div class="from-to">
                <div>
                  <div>
                    <div class="circle"></div>
                    <p>
                      {{
                        From.detail
                          ? From.detail
                          : From.address_components[0].long_name +
                            "," +
                            From.address_components[1].long_name +
                            "," +
                            From.address_components[2].long_name
                      }}
                    </p>
                  </div>
                  <p>{{ moneyBase }} VND</p>
                </div>
                <div>
                  <div class="circle"></div>
                  <p>
                    {{
                      To.address_components
                        ? To.address_components[0].long_name +
                          "," +
                          To.address_components[1].long_name +
                          "," +
                          To.address_components[2].long_name
                        : To.detail
                    }}
                  </p>
                </div>
              </div>
              <div class="to-from" v-if="wayBack === true">
                <div>
                  <div>
                    <div class="circle"></div>
                    <p>
                      {{
                        To.address_components
                          ? To.address_components[0].long_name +
                            "," +
                            To.address_components[1].long_name +
                            "," +
                            To.address_components[2].long_name
                          : To.detail
                      }}
                    </p>
                  </div>
                  <p>{{ moneyBaseReturn }} VND</p>
                </div>
                <div>
                  <div class="circle"></div>
                  <p>
                    {{
                      From.detail
                        ? From.detail
                        : From.address_components[0].long_name +
                          "," +
                          From.address_components[1].long_name +
                          "," +
                          From.address_components[2].long_name
                    }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p>Tổng:</p>
          <p v-if="wayBack === false">{{ moneyTotal }} VND</p>
          <p v-else>{{ moneyTotalReturn }} VND</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import icon from "../assets/alter-icons/Down_Arrow_3_.svg";
import Datepicker from "vuejs-datepicker";
import VueTimepicker from "vue2-timepicker";

// CSS
import "vue2-timepicker/dist/VueTimepicker.css";
export default {
  data() {
    return {
      phone: null,
      bindProps: {
        mode: "international",
        defaultCountry: "VN",
        inputOptions: {
          showDialCode: true,
        },
      },
      contactMethods: [],
      voucher: null,
      isLoading: false,
      disabledDates: {
        to: new Date(
          new Date().getFullYear(),
          new Date().getMonth(),
          new Date().getDate()
        ),
      },
      fullNameValid: true,
      phoneNumberValid: true,
      timeBookingValid: true,
      userMessage: null,
    };
  },
  components: {
    icon,
    Datepicker,
    VueTimepicker,
  },
  methods: {
    setContactMethods() {
      console.log(this.contactMethods);
      this.$store.commit("setContactMethods", this.contactMethods);
    },

    isRequired(value) {
      if (value === "" || value === null) {
        return false;
      }
      return true;
    },
    isPhoneNumber(value) {
      console.log(value.trim());
      console.log(
        /((^(\+84|84|0|0084){1})(3|5|7|8|9))+([0-9]{8})$/.test(value.trim())
      );
      if (
        !/((^(\+84|84|0|0084){1})(3|5|7|8|9))+([0-9]{8})$/.test(
          value.replace(/\s/g, "")
        )
      ) {
        return false;
      }
      return true;
    },
    isFullName(str) {
      str = str.toLowerCase();
      str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
      str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
      str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
      str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
      str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
      str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
      str = str.replace(/đ/g, "d");
      if (!/^[a-zA-Z ]{2,}$/g.test(str)) {
        return false;
      }
      return true;
    },
    setVoucher() {
      this.$store.commit("setVoucher", this.voucher);
    },
    checkPhoneNumber() {
      this.phoneNumberValid = true;
      console.log(this.isRequired(this.$store.state.userData.fullName));
      console.log(this.isPhoneNumber(this.$store.state.userData.phoneNumber));
      if (!this.isPhoneNumber(this.$store.state.userData.phoneNumber)) {
        this.phoneNumberValid = false;
      }
      console.log(this.phoneNumberPassed);
    },
    checkFullName() {
      this.fullNameValid = true;
      console.log(this.isRequired(this.$store.state.userData.fullName));
      console.log(this.isPhoneNumber(this.$store.state.userData.phoneNumber));
      if (!this.isFullName(this.$store.state.userData.fullName)) {
        this.fullNameValid = false;
      }
      console.log(this.phoneNumberPassed);
    },
    async step2Prepare() {
      this.checkFullName();
      this.checkPhoneNumber();

      if (!this.fullNameValid || !this.phoneNumberValid) {
        return;
      }
      this.isLoading = true;
      this.checkBookingTime();
      if (this.timeBookingValid === false) {
        this.isLoading = false;
        console.log(this.timeBookingValid);
        return;
      }

      await this.$store.dispatch("step2Prepare");
      if (this.type === "home_airport") {
        await this.$store.dispatch("step2PrepareReturn");
        if (this.wayBack === true) {
          await this.$store.dispatch("step1PrepareReturn");
        }
      }
      this.isLoading = false;
      this.$router.push({ name: "Step 2" });
    },
    setReturn() {
      this.$store.commit("setReturn");
    },
    clearErrorPhoneNumber() {
      this.phoneNumberValid = true;
    },
    clearErrorFullName() {
      this.fullNameValid = true;
    },
    checkBookingTime() {
      this.timeBookingValid = true;
      const currentTime = (
        new Date().getHours() +
        ":" +
        new Date().getMinutes()
      ).replace(/[^0-9]/g, "");
      if (this.type === "home_airport") {
        console.log(this.homeAirportDataLeavingTime.replace(/[^0-9]/g, ""));
        console.log(
          this.homeAirportDataLeavingDay.getDate() - new Date().getDate()
        );
        console.log(
          this.homeAirportDataLeavingDay.getMonth() - new Date().getMonth()
        );
        console.log(
          this.homeAirportDataLeavingDay.getFullYear() -
            new Date().getFullYear()
        );
        if (
          this.homeAirportDataLeavingTime.replace(/[^0-9]/g, "") - currentTime <
            0 &&
          this.homeAirportDataLeavingDay.getDate() - new Date().getDate() ===
            0 &&
          this.homeAirportDataLeavingDay.getMonth() - new Date().getMonth() ===
            0 &&
          this.homeAirportDataLeavingDay.getFullYear() -
            new Date().getFullYear() ===
            0
        ) {
          this.timeBookingValid = false;
          this.userMessage = "Thời gian đi không phù hợp";
          return;
        }
        if (this.wayBack) {
          const date =
            this.airportHomeDataLeavingDay - this.homeAirportDataLeavingDay;
          const time =
            this.airportHomeDataLeavingTime.replace(/[^0-9]/g, "") -
            this.homeAirportDataLeavingTime.replace(/[^0-9]/g, "");
          console.log(date);
          console.log(time);

          if (date < 0) {
            this.timeBookingValid = false;
            this.userMessage = "Thời gian đi phải sớm hơn thời gian về";
          }
          if (date === 0 && time <= 0) {
            this.timeBookingValid = false;
            this.userMessage = "Thời gian đi phải sớm hơn thời gian về";
          }
        }
      } else {
        if (
          this.airportHomeDataLeavingTime.replace(/[^0-9]/g, "") - currentTime <
          0
        ) {
          this.timeBookingValid = false;
          this.userMessage = "Thời gian đi không phù hợp";
        }
      }
    },
  },
  computed: {
    type() {
      return this.$store.state.type;
    },
    From() {
      return this.$store.state.From;
    },
    To() {
      return this.$store.state.To;
    },

    step1Data() {
      return this.$store.state.step1Data;
    },
    step1DataReturn() {
      return this.$store.state.step1DataReturn;
    },
    airportHomeDataFlightCode: {
      get() {
        return this.$store.state.airportHomeData.flightCode;
      },
      set(payload) {
        this.$store.commit("setAirportHomeDataFlightCode", payload);
      },
    },

    userDataFullName: {
      get() {
        return this.$store.state.userData.fullName;
      },
      set(payload) {
        this.$store.commit("setUserDataFullName", payload);
      },
    },
    userDataPhoneNumber: {
      get() {
        return this.$store.state.userData.phoneNumber;
      },
      set(payload) {
        this.$store.commit("setUserDataPhoneNumber", payload);
      },
    },
    userDataNote: {
      get() {
        return this.$store.state.userData.note;
      },
      set(payload) {
        this.$store.commit("setUserDataNote", payload);
      },
    },
    moneyBase() {
      return this.step1Data.moneyBase.toLocaleString("vi-VN", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      });
    },
    moneyTotal() {
      return this.step1Data.moneyTotal.toLocaleString("vi-VN", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      });
    },
    moneyBaseReturn() {
      return this.step1DataReturn.moneyBase.toLocaleString("vi-VN", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      });
    },
    moneyTotalReturn() {
      const money =
        parseFloat(this.step1Data.moneyTotal) +
        parseFloat(this.step1DataReturn.moneyTotal);
      return money.toLocaleString("vi-VN", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      });
    },

    wayBack() {
      return this.$store.state.Return;
    },
    homeAirportDataLeavingDay: {
      get() {
        return this.$store.state.homeAirportData.leavingDay;
      },
      set(payload) {
        this.$store.commit("setHomeAirportDataLeavingDay", payload);
      },
    },
    airportHomeDataLeavingDay: {
      get() {
        return this.$store.state.airportHomeData.leavingDay;
      },
      set(payload) {
        console.log(payload);
        this.$store.commit("setAirportHomeDataLeavingDay", payload);
      },
    },
    homeAirportDataLeavingTime: {
      get() {
        return this.$store.state.homeAirportData.leavingTime;
      },
      set(payload) {
        this.$store.commit("setHomeAirportDataLeavingTime", payload);
      },
    },
    airportHomeDataLeavingTime: {
      get() {
        return this.$store.state.airportHomeData.leavingTime;
      },
      set(payload) {
        this.$store.commit("setAirportHomeDataLeavingTime", payload);
      },
    },
    // it-IT
    // vi-VN
  },
  // beforeMount() {
  //   if (
  //     this.step1Data === null ||
  //     this.step1DataReturn === null ||
  //     this.From === null ||
  //     this.To === null
  //   ) {
  //     this.$router.replace({ name: "Home" });
  //   }
  // },
  created() {
    console.log(this.airportHomeDataLeavingTime);
    this.$store.commit("updateTime");
  },
};
</script>

<style scoped>
.content-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.errorMessage {
  color: red;
  font-weight: 500;
  position: absolute;
}
.Invalid {
  position: relative;
}
.Invalid input,
.Invalid .vue-tel-input {
  border: 1px solid red !important;
}
input {
  padding-left: 5px;
}
.vue-tel-input {
  border: 1px solid #becad6;
  height: 35px;
}
.vue-tel-input:focus-within {
  writing-mode: horizontal-tb !important;
  text-rendering: auto;
  color: -internal-light-dark(black, white);
  letter-spacing: normal;
  word-spacing: normal;
  line-height: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  text-align: start;
  appearance: auto;
  -webkit-rtl-ordering: logical;
  cursor: text;
  background-color: -internal-light-dark(rgb(255, 255, 255), rgb(59, 59, 59));
  margin: 0em;
  border-style: inset;
  border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
  border-image: initial;
  border-color: #000;
  border-radius: 4px;
  box-shadow: none;
  outline: -webkit-focus-ring-color auto 1px;
}
.last-button {
  width: 100%;
  /* height: 100%; */
  padding: 10px 0;
  border-radius: 8px;
  border: none;
  background: #f26d22;
  color: #fff;
  font-size: 20px;
  margin-bottom: 100px;
  cursor: pointer;
}

.content {
  width: 80%;
  display: grid;
  grid-template-columns: 70% 30%;
}
.progress {
  display: none;
  width: 130.5%;
  /* justify-content: space-between; */
  margin: 50px 0;
  width: 100%;
}
.timeguess {
  margin-left: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
}
.travel-info {
  grid-column-start: 1;
  grid-column-end: 3;
}
.car-info {
  grid-column-start: 1;
  grid-row-start: 2;
  grid-column-end: 3;

  height: fit-content;

  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}
.car-info > div:last-child {
  display: flex;
  width: 100%;
  padding: 10px;
}
.car-info > div:last-child p {
  font-size: 20px;
  font-weight: 700;
}
.car-info > div:last-child p:first-child {
  color: #4b5f75;
  margin-right: 10px;
}
.car-info > div:last-child p:last-child {
  color: #203f7e;
}
.title {
  color: #fff;
  background: #203f7e;
  padding: 20px 0;
  padding-left: 45px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  width: 100%;
}
.step-progress-mobile > div {
  display: flex;
  align-items: center;
}
.progress-mobile {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  margin-top: 50px;
  margin-bottom: 30px;
}
.step-progress-mobile {
  position: relative;
  height: 100%;
}
.step-progress-mobile p {
  position: absolute;
  left: 30px;
  top: -9px;
  font-weight: 600;
  font-size: 20px;
}
.progress-mobile .circle {
  margin-right: 10px;
  position: relative;
}
.step1-mobile .circle {
  background: #f26d22;
}
.step1-mobile,
.step2-mobile {
  height: 80px;
}
.step1-mobile {
  color: #f26d22;
}
.line-mobile {
  height: 80%;
  width: 4px;
  background: #dfe4ea;
  margin-left: 3px;
  margin-top: 3px;
  align-items: flex-start !important;
}
.percent-mobile {
  background: #f26d22;
  height: 40%;
  width: 100%;
}
/* .step1-mobile .circle::before,
.step2-mobile .circle::before {
  content: "";
  position: absolute;
  height: 50px;
  width: 4px;
  background: #f26d22;
  top: 10px;
  left: 1.5px;
} */

.car-info > div {
  box-shadow: 0px 4px 30px rgba(124, 124, 124, 0.25);
  border-radius: 8px;
}
.from-to p,
.to-from p {
  font-size: 12px;
  color: #4b5f75;
}
.from-to > div:first-child,
.to-from > div:first-child {
  display: flex;
  justify-content: space-between;
}
.from-to > div,
.to-from > div {
  display: flex;
}
.from-to,
.to-from {
  background: #f7f7f7;
  margin: 20px 0;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px;
  position: relative;
}
.from-to::before,
.to-from::before {
  content: "";
  position: absolute;
  width: 1px;
  height: 65%;

  background: #9eafc1;
  left: 8px;
  top: 50%;
  transform: translate(0, -50%);
}
.from-to .circle,
.to-from .circle {
  background: #9eafc1;
  height: 8px;
  width: 8px;
  margin-right: 3px;
}
.from-to > div > div:first-child,
.to-from > div > div:first-child {
  display: flex;
}
.wrap > div:nth-child(2) {
  padding: 10px;
}

.car-info > div:first-child {
  margin-bottom: 30px;
}
.step1,
.step2 {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.step-progress {
  width: 100%;
  height: 4px;
  display: flex;
  align-items: center;
  position: relative;
}

.line {
  width: 95%;
  height: 100%;
  background: #dfe4ea;
  margin: 0 auto;
}
.circle {
  height: 10px;
  width: 10px;
  border-radius: 50%;
  border: 1px solid #dfe4ea;
}
.step1 .circle {
  background: #f26d22;
}
.step1 p {
  color: #f26d22;
}
.step-progress p {
  position: absolute;
  top: -30px;
}
.step-progress:last-child p {
  width: fit-content;
  min-width: 100px;
}
.percent {
  height: 100%;
  background: #f26d22;
}
.way-back input {
  position: relative;
  border: none;
  appearance: none;
  background: #becad6;
  outline: none;
  width: 80px;
  height: 30px;
  border-radius: 20px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  cursor: pointer;
}
.way-back input::before {
  content: "";
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 20px;
  top: 0;
  right: 0;
  background: #fff;
  transform: scale(1.1);
  transition: 750ms ease all;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
.way-back input:checked:before {
  background: #fff;
  right: 52px;
}
.way-back input:checked {
  background: #203f7e;
}
.travel-info > div:first-child h1 {
  color: #203f7e;
  font-size: 25px;
}
.travel-info > div:nth-child(n + 2) {
  padding: 20px;
}
.travel-info > div:first-child > div:nth-child(1),
.travel-info > div:first-child > div:nth-child(3) {
  padding: 20px;
}
.destination {
  display: flex;
  flex-direction: column;
  position: relative;
}
.travel-info > div {
  box-shadow: 0px 4px 30px rgba(124, 124, 124, 0.25);
  border-radius: 8px;
  margin-bottom: 20px;
}

.first:before {
  height: 83%;
  content: "";
  position: absolute;
  width: 5px;
  background: #203f7e;
  border-radius: 20px;
  left: 10px;
  top: 50%;
  transform: translate(0, -50%);
}
.second:before {
  height: 88%;
  content: "";
  position: absolute;
  width: 5px;

  background: #203f7e;
  border-radius: 20px;
  left: 10px;
  top: 49.5%;
  transform: translate(0, -50%);
}

.destination .inputs {
  margin: 30px 50px;
  display: flex;
  flex-direction: column;
}
.inputs > div {
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: column;
  height: 100px;
}

.inputs input {
  height: 30px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #becad6;
}

.inputs > div input:last-child {
  margin: 0;
}
.from,
.to {
  background: #dfe4ea;
  border-radius: 8px;
  width: fit-content;
  position: relative;
  z-index: -1;
}

.from::before,
.to::before {
  position: absolute;
  width: 12px;
  height: 12px;
  background: #203f7e;
  border-radius: 50%;
  content: "";
  left: 6.5px;
  top: 50%;
  transform: translate(0, -50%);
}
.from p,
.to p {
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 30px;
  margin-right: 10px;
}
.way-back {
  display: flex;
  justify-content: space-between;
}
.note {
  font-size: 12px;
  margin-top: 10px;
  margin-bottom: 20px;
}
.border-line {
  width: 100%;
  height: 0.5px;
  background: #4b5f75;
  margin: 20px 0;
}
.user-info h3 {
  color: #203f7e;
  margin: 20px 0;
}
.name,
.take-note {
  width: 100%;
  margin-right: 10px;
  border-radius: 4px;
  border: 1px solid #becad6;
}
.option {
  display: grid;
  margin: 20px 0;
  grid-template-columns: repeat(2, 120px);

  gap: 10px;
}
.option label {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
input {
  height: 35px !important;
}
.option input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #fff;
  border: 1px solid #203f7e;
  border-radius: 4px;
}
.option input:checked ~ .checkmark {
  background-color: #203f7e;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.option input:checked ~ .checkmark:after {
  display: block;
}
.way-back h3 {
  color: #4b5f75;
}
.way-back p {
  color: #203f7e;
  margin-top: 10px;
}
.travel-info > div .icon-wrap {
  margin-top: 20px;
}

/* Style the checkmark/indicator */
.option .checkmark:after {
  left: 5px;
  top: 2px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
.time p {
  margin: 20px 0;
}
.name-tel > div {
  margin: 50px 0;
}
.travel-info > div:nth-child(4) h3 {
  color: #203f7e;
  margin: 20px 0;
}
.travel-info > div:nth-child(4) input {
  height: 30px;
  width: 100%;
  margin-right: 10px;
  border-radius: 4px;
  border: 1px solid #becad6;
}
.travel-info > div:nth-child(4) div {
  display: flex;
  justify-content: center;
}
.travel-info > div:nth-child(4) button {
  margin-left: 20px;
  width: 100px;
  background: #f26d22;
  border: none;
  color: #fff;
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;
}
.travel-info > div:last-child {
  height: fit-content;
  padding: 0;
  margin-bottom: 250px;
}
.link div {
  background: #f26d22;
  text-align: center;
  color: #fff;
  padding: 10px 0;
}
.link {
  margin: 20px 0;
}

.travel-info .icon-wrap {
  display: flex;
  position: relative;
}
.input .icon {
  position: absolute;
  top: 5px;
  left: 8px;
  z-index: 1;
}
.input input {
  padding-left: 30px;
}
.wrap .icon-wrap {
  position: relative;
}
.wrap .icon-wrap .icon {
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  left: 10px;
}
.contact h3 {
  color: #4b5f75;
  margin: 20px 0;
}
.contact p {
  font-weight: 500;
}

@media (min-width: 510px) {
  .option {
    grid-template-columns: repeat(3, 120px);
  }
  .progress {
    display: flex !important;
  }
  .progress-mobile {
    display: none;
  }
}
@media (min-width: 1200px) {
  .car-info {
    grid-column-start: 2;
    margin-left: 10px;
  }

  .travel-info {
    grid-column-end: 2;
  }
  .option {
    grid-template-columns: repeat(5, 120px);
  }
  .travel-info .icon-wrap {
    width: 280px;
  }
  .inputs div {
    flex-direction: row;
    height: fit-content;
  }
  .left {
    margin-right: 10px;
  }
}
</style>