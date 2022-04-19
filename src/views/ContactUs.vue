<template>
  <div class="content-wrap">
    <div class="main-image">
      <img :src="require('../assets/photos/contactus.jpg')" />
      <h2>Liên hệ</h2>
    </div>
    <div class="content">
      <div class="get-in-touch">
        <div class="left">
          <div class="title">
            <h2>Gửi thông tin</h2>
            <p>
              Quý khách vui lòng điền thông tin bên dưới và chúng tôi sẽ liên hệ
              với bạn ngay sau đó
            </p>
          </div>
          <form @submit.prevent="">
            <div>
              <input type="text" placeholder="Tên" />
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Chủ đề" />
              <input type="text" placeholder="Số điện thoại" />
            </div>
            <textarea rows="5" placeholder="Nội dung gửi"></textarea>
            <div>
              <button>Submit</button>
            </div>
          </form>
        </div>
        <div class="right">
          <gmap-map
            :center="center"
            :zoom="12"
            style="width: 100%; height: 100%"
          >
            <gmap-marker
              :key="index"
              v-for="(m, index) in markers"
              :position="m.position"
              @click="center = m.position"
            ></gmap-marker>
          </gmap-map>
        </div>
      </div>
      <div>
        <div class="container">
          <div class="destination">
            <div class="icon">
              <img :src="require('../assets/alter-icons/Group 1867.jpg')" />
            </div>

            <p>186 Quán Thánh, quận Ba Đình, Hà Nội</p>
          </div>
          <div class="contact">
            <div class="icon">
              <img :src="require('../assets/alter-icons/Group 1868.jpg')" />
            </div>
            <p>Hỗ trợ 24/7 ngay khi quý khách liên hệ</p>
          </div>
          <div class="mail">
            <div class="icon">
              <img :src="require('../assets/alter-icons/Group 1869.jpg')" />
            </div>
            <p>contact@onitimecar.com</p>
          </div>
        </div>
      </div>
      <div class="contact-us">
        <div class="wrap">
          <h1>Liên hệ với chúng tôi</h1>
          <div class="contact-icons">
            <div class="icon">
              <img
                :src="require('../assets/alter-icons/contact-us/Frame.jpg')"
              />
              <p>Whatapp</p>
            </div>
            <div class="icon">
              <img
                :src="require('../assets/alter-icons/contact-us/Frame (1).jpg')"
              />
              <p>Messenger</p>
            </div>
            <div class="icon">
              <img
                :src="require('../assets/alter-icons/contact-us/Frame (2).jpg')"
              />
              <p>Telegram</p>
            </div>
            <div class="icon">
              <img
                :src="
                  require('../assets/alter-icons/contact-us/56.kakao-talk.jpg')
                "
              />
              <p>kakaotalk</p>
            </div>
            <div class="icon">
              <img
                :src="require('../assets/alter-icons/contact-us/Group.jpg')"
              />
              <p>Line</p>
            </div>
            <div class="icon">
              <img
                :src="require('../assets/alter-icons/contact-us/Frame (3).jpg')"
              />
              <p>Wechat</p>
            </div>
            <div class="icon">
              <img
                :src="require('../assets/alter-icons/contact-us/Frame (4).jpg')"
              />
              <p>imessage</p>
            </div>
            <div class="icon">
              <img
                :src="
                  require('../assets/alter-icons/contact-us/zalo-logo 1.jpg')
                "
              />
              <p>Zalo</p>
            </div>
          </div>
          <p>Liên hệ nếu quý khách ở nước ngoài</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import destination from "../assets/alter-icons/Group 1867.svg";
// import phone from "../assets/alter-icons/Group 1868.svg";
// import mail from "../assets/alter-icons/Group 1869.svg";
export default {
  mounted() {
    this.geolocate();
  },
  methods: {
    geolocate: function () {
      navigator.geolocation.getCurrentPosition((position) => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
    },
  },
  data() {
    return {
      center: { lat: 45.508, lng: -73.587 },
      markers: [],
      places: [],
      currentPlace: null,
    };
  },
  //   components: {
  //     destination,
  //     phone,
  //     mail,
  //   },
};
</script>

<style scoped>
.main-image img {
  display: block;
  width: 100%;
  height: 180px;
}
.main-image {
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
.content {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 50px 0;
}
.get-in-touch {
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin: 50px 0;
  flex-direction: column;
}
form div:first-child {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin: 20px 0;
}
form {
  display: flex;
  flex-direction: column;
}
input {
  height: 30px;
  border: 1px solid #203f7e;
  border-radius: 4px;
  padding: 0 20px;
}
textarea {
  border: 1px solid #203f7e;
  border-radius: 4px;
  padding: 10px 20px;
}
.right {
  order: 2;
  width: 100%;
  height: 400px;
  margin: 50px 0;
}
.left {
  width: 100%;
  order: 1;
}
.left h2 {
  color: #4b5f75;
  font-size: 30px;
  position: relative;
  margin-bottom: 50px;
}
.left h2::after {
  width: 50px;
  height: 2px;
  content: "";
  background: #f26921;
  position: absolute;
  bottom: -15px;
  left: 0;
}
button {
  background: #f26921;
  color: #fff;
  padding: 10px;
  border-radius: 4px;
  border: none;
  margin-top: 20px;
  cursor: pointer;
}
.content > div:nth-child(2) {
  display: flex;
  width: 100%;
  justify-content: center;
  background: #f0f3fb;
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0;
  width: 80%;
  flex-direction: column;
}
.container > div {
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* width: 30%; */
  margin: 20px 0;
  height: 200px;
  width: 270px;
  text-align: center;
}
.container > div > p {
  font-weight: 600;
  word-wrap: break-word;
  width: 90%;
}
.container > div:last-child {
  margin-right: 0;
}
.icon {
  width: fit-content;
  margin: 0 auto;
  text-align: center;
  margin: 10px 0;
}
.contact-us {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.contact-icons .icon {
  max-width: 149px;
  width: 100%;
  background: #f0f3fb;
  padding: 20px 0;
  height: 100%;
}
.contact-icons .icon img {
  border-radius: 50%;
  width: fit-content;
}
.wrap {
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 50px 0;
}
.contact-icons {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  margin: 20px 0;
}
.contact-us h1 {
  color: #203f7e;
}
.wrap > p {
  position: relative;
  margin-left: 15px;
}
.wrap > p::before {
  position: absolute;
  content: "";
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #203f7e;
  left: -15px;
  bottom: 5px;
}
@media (min-width: 500px) {
  .contact-icons {
    grid-template-columns: repeat(4, 1fr);
  }
}
@media (min-width: 800px) {
  form div:first-child {
    grid-template-columns: repeat(2, 1fr);
  }
  .contact-icons {
    grid-template-columns: repeat(8, 1fr);
  }
  .main-image img {
    height: 336px;
  }
  .get-in-touch {
    flex-direction: row;
  }
  .right {
    margin: 0;
    margin-left: 30px;
    height: 360px;
    width: 469px;
  }
  .left {
    max-width: 624px;
  }
}
@media (min-width: 700px) {
  .container {
    flex-direction: row;
  }
  .container > div {
    margin-right: 20px;
  }
}
</style>