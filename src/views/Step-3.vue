<template>
  <div class="content-wrap">
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
              <div class="percent" style="width: 100%"></div>
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
              <div class="percent-mobile" style="height: 100%"></div>
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
      <div class="success">
        <div>
          <div class="icon">
            <img
              :src="require('../assets/alter-icons/check-mark 1.png')"
              alt=""
            />
          </div>
          <h2>ĐẶT XE THÀNH CÔNG!</h2>
        </div>
        <div>
          <p>
            Chúng tôi đã tiếp nhận thông tin đặt xe của quý khách và sẽ liên hệ
            sau ít phút.
          </p>
          <p>
            Trước giờ đón tối thiểu 40 phút, chúng tôi sẽ gửi tin nhắn thông báo
            thông tin xe đón và lái xe chủ động gọi hẹn quý khách.
          </p>
        </div>
        <div v-if="dataReady && paymentMethod">
          <div v-for="(item, index) in bankList" :key="index">
            <div>
              <div class="col1">
                <h5 v-if="index === 0">
                  Quý khách vui lòng thanh toán theo thông tin sau:
                </h5>
                <div class="inputs">
                  <div>
                    <label for="number">Số tài khoản</label>
                    <div>
                      <input
                        type="text"
                        id="number"
                        :value="item.number"
                        disabled
                      />
                      <div class="icon" @click="doCopy('accountNumber', index)">
                        <img
                          :src="require('../assets/alter-icons/copy_24px.png')"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <p>Ngân Hàng</p>
                    <p>{{ item.bankName }}</p>
                  </div>
                  <div>
                    <p>Chủ tài khoản</p>
                    <p>{{ item.holder }}</p>
                  </div>
                  <div>
                    <label for="info">Nội dung </label>
                    <div>
                      <input
                        type="text"
                        id="info"
                        :value="item.content"
                        class="long"
                        disabled
                      />
                      <div class="icon" @click="doCopy('content', index)">
                        <img
                          :src="require('../assets/alter-icons/copy_24px.png')"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col2">
                <div>
                  <p class="from">"</p>
                  <p class="main">
                    Quý khách ghi đúng theo cú pháp trên. SĐT là số user đăng
                    nhập; Ngày tháng là ngày xe đón.
                  </p>
                  <p class="to">"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      accountNumber: null,
      content: null,
      dataReady: false,
    };
  },
  methods: {
    doCopy(inputType, index) {
      const item = this.bankList[index];
      if (inputType === "accountNumber") {
        this.$copyText(item.number).then(() => {
          alert("Copied");
        });
        return;
      }
      this.$copyText(item.content);
    },
  },
  async created() {
    console.log(this.$store.state.paymentMethod);
    this.dataReady = false;
    await this.$store.dispatch("getBankData");
    this.dataReady = true;
  },
  computed: {
    bankList() {
      return this.$store.state.bankList;
    },
    paymentMethod() {
      return this.$store.state.paymentMethod === "banking_before";
    },
  },
};
</script>

<style scoped>
.success {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #ffffff;
  /* Shadown2 */

  box-shadow: 0px 4px 30px rgba(124, 124, 124, 0.25);
  border-radius: 8px;
}

.success > div:first-child {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
}
.success > div:nth-child(2) {
  margin: 20px;
}
.success > div:last-child > div {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 4px dashed #fac5a7;
  flex-direction: column;
}

.success > div:last-child > div {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 20px 0;
  width: 100%;
}
.success > div:last-child > div > div {
  width: 60%;
  margin: 20px auto;
}

.col1 > .inputs > div {
  display: flex;
  margin: 20px 0;
  /* align-items: center; */
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
}
.col1 > .inputs > div:nth-child(1),
.col1 > .inputs > div:nth-child(4) {
  flex-direction: column;
}
.inputs input {
  height: 30px;
}
.long {
  width: 100%;
  /* width: 100%; */
  padding-right: 23px;
}
.col1 > .inputs > div > div {
  position: relative;
  display: flex;
  width: fit-content;
}
.wrap {
  color: #f26d22;
  font-size: 40px;
}
.inputs .icon {
  position: absolute;
  right: 3px;
  top: 5px;
  cursor: pointer;
}
.col1 h5 {
  font-size: 15px;
}
.col2 > div {
  /* width: 200px; */
  margin: 25px;
  position: relative;
}
.col1 {
  min-width: 60%;
}

.col2 {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px dashed #203f7e;
  box-sizing: border-box;
  border-radius: 8px;
  margin: 20px 0;
}
.col2 .main {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
}
.from,
.to {
  position: absolute;
  font-size: 40px;
  color: #f26d22;
}
.from {
  top: -20px;
  left: -15px;
}
.to {
  right: 0;
  right: -15px;
}
.step-progress {
  width: 100%;
  height: 4px;
  display: flex;
  align-items: center;
  position: relative;
}
.step-progress p {
  position: absolute;
  top: -30px;
}
.step-progress:last-child p {
  width: fit-content;
  min-width: 100px;
}
.progress {
  display: none;
  width: 130.5%;
  /* justify-content: space-between; */
  margin: 50px 0;
  width: 70%;
}
.step1 p {
  color: #f26d22;
}
.step-progress p {
  position: absolute;
  top: -30px;
}
.step2 {
  color: #f26d22;
}
.step3 {
  color: #f26d22;
}
.step2 .circle {
  background: #f26d22;
}
.step1 .circle {
  background: #f26d22;
}
.step3 .circle {
  background: #f26d22;
}
.step1,
.step2 {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.percent {
  height: 100%;
  background: #f26d22;
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
.content-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.content {
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 250px;
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
.step2-mobile .circle {
  background: #f26d22;
}
.step3-mobile .circle {
  background: #f26d22;
}
.step1,
.step2,
.step3 {
  color: #f26d22;
}
.step1-mobile,
.step2-mobile {
  height: 80px;
}
.step1-mobile,
.step2-mobile,
.step3-mobile {
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
@media (min-width: 510px) {
  .progress {
    display: flex !important;
  }
  .progress-mobile {
    display: none;
  }
}
@media (min-width: 700px) {
  .col1 > .inputs > div:nth-child(1),
  .col1 > .inputs > div:nth-child(4) {
    flex-direction: row;
  }
  .long {
    width: 250px;
    /* width: 100%; */
  }
}
@media (min-width: 1000px) {
  .success > div:last-child > div > div {
    display: flex;
    flex-direction: row;
  }
  .col2 {
    margin: 0;
    margin-left: 15px;
  }
}
</style>