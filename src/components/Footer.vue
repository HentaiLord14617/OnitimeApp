<template>
  <footer>
    <div class="container">
      <div class="col-1">
        <router-link to="" class="router-link">
          <logo></logo>
        </router-link>
        <div class="col-top">
          <div>
            <img :src="require(`../assets/photos/blue.png`)" />
            <img :src="require(`../assets/photos/red.png`)" />
          </div>
          <div class="bottom">
            <router-link to="">
              <appstore></appstore>
            </router-link>
            <router-link to="">
              <playstore></playstore>
            </router-link>
          </div>
        </div>
      </div>
      <div class="col-2">
        <ul>
          <li>
            <router-link :to="{ name: 'FAQ' }" class="router-link"
              >Câu hỏi thường gặp</router-link
            >
          </li>
          <li>
            <router-link :to="{ name: 'Price List' }" class="router-link"
              >Bảng giá</router-link
            >
          </li>
          <li>
            <p class="router-link" to="">Điều khoản sử dụng</p>
          </li>
        </ul>
        <div class="row-icons">
          <router-link to="" class="router-link">
            <div class="row">
              <div class="lock">
                <lock></lock>
              </div>
              <span class="lock-text">Security payment</span>
            </div>
          </router-link>
          <div class="row">
            <div class="lock-icon">
              <visa />
            </div>
            <div class="lock-icon">
              <mastercard />
            </div>

            <div class="lock-icon">
              <jcb />
            </div>
            <div class="lock-icon">
              <paypal />
            </div>
          </div>
        </div>
      </div>
      <div class="col-3">
        <ul>
          <li>
            <router-link :to="{ name: 'About Us' }" class="router-link"
              >Về chúng tôi</router-link
            >
          </li>
          <li>
            <router-link :to="{ name: 'Contact Us' }" class="router-link"
              >Liên hệ</router-link
            >
          </li>
        </ul>
      </div>
      <div class="col-4">
        <h3>Liên hệ với chúng tôi</h3>
        <div class="col-top">
          <div class="row-icons-2">
            <div class="row-1">
              <router-link to="">
                <mess />
              </router-link>
              <router-link to="">
                <message />
              </router-link>
              <router-link to="">
                <lines />
              </router-link>
              <router-link to="">
                <skype />
              </router-link>
            </div>
            <div class="row-2">
              <router-link to="">
                <facebook />
              </router-link>
              <router-link to="">
                <kakaotalk />
              </router-link>
              <router-link to="">
                <telegram />
              </router-link>
              <router-link to="">
                <phone />
              </router-link>
            </div>
          </div>
          <p class="bottom">Hotline: +8439787457</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import playstore from "../assets/alter-icons/Play-Store.svg";
import appstore from "../assets/alter-icons/App-Store.svg";
import lock from "../assets/alter-icons/lock.svg";
import visa from "../assets/alter-icons/visa.svg";
import jcb from "../assets/alter-icons/jcb.svg";
import paypal from "../assets/alter-icons/paypal.svg";
import mastercard from "../assets/alter-icons/mastercard.svg";
import message from "../assets/alter-icons/message.svg";
import lines from "../assets/alter-icons/line.svg";
import skype from "../assets/alter-icons/skype.svg";
import mess from "../assets/alter-icons/mess.svg";
import facebook from "../assets/alter-icons/facebook.svg";
import kakaotalk from "../assets/alter-icons/kakao-talk.svg";
import telegram from "../assets/alter-icons/telegram.svg";
import phone from "../assets/alter-icons/phone.svg";
import logo from "../assets/alter-icons/logo.svg";
export default {
  components: {
    playstore,
    appstore,
    lock,
    visa,
    jcb,
    paypal,
    mastercard,
    mess,
    message,
    lines,
    skype,
    facebook,
    kakaotalk,
    telegram,
    phone,
    logo,
  },
};
</script>

<style scoped>
footer {
  background: #0e1c38;
  min-height: 305px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
  width: 80%;
  gap: 10px;
  margin: 0 auto;
  flex-direction: column;
}
.container > .col-2,
.container > .col-3 {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.col-2 {
  grid-row-start: 1;
  display: none;
  order: 2;
}
.col-3 {
  grid-row-start: 1;
  display: none;
  order: 1;
}
.col-1 {
  grid-row-start: 2;
  grid-column-start: 1;
  grid-column-end: 3;
  display: none;
}
.col-4 {
  grid-row-start: 3;
  grid-column-start: 1;
  grid-column-end: 3;
  display: none;
}
.lock-text {
  font-size: 12px;
  font-weight: 700;
  margin: auto 0;
  height: fit-content;
}
.lock {
  margin-right: 10px;
}
.lock-icon {
  margin-right: 10px;
}
.lock-icon:last-child {
  margin-right: 0;
}
.row {
  display: flex;
  align-items: center;
  margin-top: 10px;
}
.row-icons {
  display: flex;
  flex-direction: column;
}
ul li {
  margin-bottom: 10px;
}
@media (min-width: 670px) {
  .col-1 {
    display: flex;
    flex-direction: column;
  }
  .col-2 {
    order: 2;
  }
  .col-3 {
    order: 3;
  }
}
@media (min-width: 1000px) {
  .col-4 {
    display: flex;
    flex-direction: column;
    order: 4;
  }
}
@media (min-width: 450px) {
  .container {
    flex-direction: row;
  }
  .col-2 {
    order: 1;
  }
  .col-3 {
    order: 2;
  }
}
.branding p {
  font-size: 10px;
}
p {
  color: #fff;
}
.col-3 .last {
  background-color: #f26921;
  padding: 10px;
  border-radius: 5px;
}

.bottom,
.row-icons {
  margin-top: auto;
}
.col-1 .bottom {
  margin-top: 70px;
}

.col-1 div {
  display: flex;
  justify-content: space-around;
}

.col-4 {
  max-width: 200px;
  width: 100%;
}

.col-4 p {
  color: #f26921;
  font-weight: 600;
}
h3,
.col-1 > .router-link {
  margin-bottom: 20px;
}
.col-top {
  display: flex;
  flex-direction: column;
}
.row-1,
.row-2 {
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
}
</style>