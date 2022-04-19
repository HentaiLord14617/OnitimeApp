<template>
  <div class="content-wrap" v-if="From && To && (step2Data || step2DataReturn)">
    <loading v-if="isLoading"></loading>
    <div class="content">
      <div class="progress">
        <div class="step1">
          <div class="step-progress">
            <p>1.Đặt xe</p>
            <div class="circle"></div>
            <div class="line">
              <div class="percent" style="width: 100%"></div>
            </div>
          </div>
        </div>
        <div class="step2">
          <div class="step-progress">
            <p>2.Thanh toán</p>

            <div class="circle"></div>
            <div class="line">
              <div class="percent" style="width: 30%"></div>
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
              <div class="percent-mobile" style="height: 100%"></div>
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
              <div class="percent-mobile" style="height: 40%"></div>
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
      <div class="payment-method">
        <div>
          <h2>PHƯƠNG THỨC THANH TOÁN</h2>

          <div class="inputs">
            <div>
              <label
                for="method-1"
                :class="{ methodSelected: listObject.method_1Selected }"
              >
                <div>
                  <input
                    type="radio"
                    id="method-1"
                    name="methods"
                    value="cash"
                    v-model="paymentMethod"
                    @change="setPaymentMethod('method_1Selected')"
                    checked
                  />
                  <p>Thanh toán tiền mặt</p>
                </div>
              </label>
              <label
                for="method-2"
                :class="{ methodSelected: listObject.method_2Selected }"
              >
                <div>
                  <input
                    type="radio"
                    id="method-2"
                    name="methods"
                    value="banking_drive"
                    v-model="paymentMethod"
                    @change="setPaymentMethod('method_2Selected')"
                  />
                  <p>Chuyển khoản cho lái xe khi kết thúc chuyến đi</p>
                </div>
              </label>
              <label
                for="method-3"
                :class="{ methodSelected: listObject.method_3Selected }"
              >
                <div>
                  <input
                    type="radio"
                    id="method-3"
                    name="methods"
                    value="banking_before"
                    v-model="paymentMethod"
                    @change="setPaymentMethod('method_3Selected')"
                  />
                  <div>
                    <p>Chuyển khoản trước cho Onitime</p>
                    <p class="sub-note">
                      Chúng tôi sẽ gửi tin nhắn xác nhận ngay khi nhận được
                      tiền.
                    </p>
                  </div>
                </div>
              </label>
              <label
                for="method-4"
                :class="{ methodSelected: listObject.method_4Selected }"
              >
                <div>
                  <input
                    type="radio"
                    id="method-4"
                    name="methods"
                    value="Thanh toán tiền mặt"
                    v-model="paymentMethod"
                    @change="setPaymentMethod('method_4Selected')"
                  />
                  <div>
                    <p>Chuyển khoản sau khi về nhà</p>
                    <p class="sub-note">
                      Áp dụng với người Việt Nam từ nước ngoài về không có tiền
                      mặt
                    </p>
                  </div>
                </div>
              </label>
              <label
                for="method-5"
                :class="{ methodSelected: listObject.method_5Selected }"
              >
                <div>
                  <input
                    type="radio"
                    id="method-5"
                    name="methods"
                    value="Thanh toán tiền mặt"
                    v-model="paymentMethod"
                    @change="setPaymentMethod('method_5Selected')"
                  />
                  <p>Thanh toán trước qua Paypal</p>
                </div>
                <div class="icon">
                  <img
                    :src="require('../assets/alter-icons/paypal 1.png')"
                    alt=""
                  />
                </div>
              </label>
            </div>
          </div>
        </div>

        <button
          :to="{ name: 'Step 3' }"
          class="last-button"
          @click="step3Prepare"
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

              <p class="title">{{ step2Data.carType.name }}</p>
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
export default {
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
    step2Data() {
      return this.$store.state.step2Data;
    },
    step2DataReturn() {
      return this.$store.state.step2DataReturn;
    },
    step1DataReturn() {
      return this.$store.state.step1DataReturn;
    },
    moneyBase() {
      return this.step2Data.moneyBase.toLocaleString("vi-VN", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      });
    },
    moneyTotal() {
      return this.step2Data.moneyTotal.toLocaleString("vi-VN", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      });
    },
    moneyBaseReturn() {
      return this.step2DataReturn.moneyBase.toLocaleString("vi-VN", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      });
    },
    moneyTotalReturn() {
      const money =
        parseFloat(this.step1DataReturn.moneyTotal) +
        parseFloat(this.step2DataReturn.moneyTotal);
      return money.toLocaleString("vi-VN", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      });
    },
    wayBack() {
      return this.$store.state.Return;
    },
  },
  data() {
    return {
      paymentMethod: null,
      isLoading: false,
      listObject: {
        method_1Selected: true,
        method_2Selected: false,
        method_3Selected: false,
        method_4Selected: false,
        method_5Selected: false,
      },
    };
  },
  methods: {
    setPaymentMethod(index) {
      for (let component in this.listObject) {
        console.log(this.listObject);
        this.listObject[component] = false;
      }
      console.log(index);
      this.listObject[index] = true;

      this.$store.commit("setPaymentMethod", this.paymentMethod);
    },
    async step3Prepare() {
      this.isLoading = true;
      await this.$store.dispatch("step3Prepare");
      if (this.type === "home_airport") {
        this.$store.dispatch("step3PrepareReturn");
        if (this.wayBack === true) {
          this.$store.dispatch("setWayBack");
        }
      }
      this.isLoading = false;
      this.$router.push({ name: "Step 3" });
    },
  },
  // beforeMount() {
  //   if (
  //     this.step2Data === null ||
  //     this.step2DataReturn === null ||
  //     this.From === null ||
  //     this.To === null
  //   ) {
  //     this.$router.replace({ name: "Step 1" });
  //   }
  // },
};
</script>

<style scoped>
.inputs > div {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
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
  margin-top: 20px;
}
.inputs > div > div {
  display: flex;
  align-items: center;
  margin: 10px 0;
  height: 70px;

  padding-left: 25px;
  background: #f0f3fb;
  width: 100%;
  border-radius: 8px;
  position: relative;
}
.icon {
  position: absolute;
  right: 10px;
}
.methodSelected {
  background: #bcd2ff !important;
}
.car-info {
  grid-column-start: 1;
  grid-row-start: 2;
  margin-bottom: 50px;
  height: fit-content;
  grid-column-end: 3;

  display: flex;
  flex-direction: column;
}
.payment-method {
  grid-column-start: 1;
  margin: 0;
  grid-column-end: 3;
  grid-row-start: 3;
  /* margin-right: 10px; */
}
.payment-method > div:first-child {
  background: #ffffff;
  /* Shadown2 */

  box-shadow: 0px 4px 30px rgba(124, 124, 124, 0.25);
  border-radius: 8px;
  padding: 20px;
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
.inputs input {
  width: 20px;
  height: 20px;
  accent-color: #000;
  margin-right: 10px;
  cursor: pointer;
}
.sub-note {
  font-size: 13px;
  font-weight: 400;
}
label {
  font-weight: 700;
  display: flex;
  align-items: center;
  margin: 10px 0;
  height: fit-content;
  cursor: pointer;

  padding-left: 25px;
  padding: 10px;
  background: #f0f3fb;
  width: 100%;
  border-radius: 8px;
  position: relative;
}
label:last-child .icon {
  bottom: -33px;
}
label:hover {
  background: #bcd2ff;
}

label > div:first-child {
  display: flex;

  width: 100%;

  margin: 30px 0;
}
label:last-child > div {
  display: flex;
}
.inputs div:nth-child(3) > div {
  margin-top: 15px;
}
.car-info > div:first-child {
  margin-bottom: 30px;
}
label > div > p {
  width: 90%;
}
label > div > div {
  width: 90%;
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
.step2-mobile .circle {
  background: #f26d22;
}
.step1 p {
  color: #f26d22;
}
.step2-mobile p {
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
.icon-wrap {
  position: relative;
}
.wrap .icon-wrap .icon {
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  left: 10px;
}
.payment-method > div:nth-child(2) {
  margin-top: 20px;
  margin-bottom: 250px;
}
.step2 {
  color: #f26d22;
}
.step2 .circle {
  background: #f26d22;
}
.content-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
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
.wrap > div:nth-child(2) {
  padding: 10px;
}
@media (min-width: 500px) {
  .progress {
    display: flex !important;
  }
  .progress-mobile {
    display: none;
  }
}
@media (min-width: 1000px) {
  .car-info {
    grid-column-start: 2;
    grid-row-start: 2;
    margin-left: 10px;
  }
  .payment-method {
    margin: 0;
    grid-row-start: 2;
    grid-column-end: 2;
  }
}
</style>