<template>
  <header>
    <modal @close-modal="closeMenu" v-if="mobileNav"></modal>
    <div class="container">
      <div class="navigation">
        <div class="branding">
          <router-link :to="{ name: 'Home' }" class="router-link">
            <logo @click="reload"></logo>
          </router-link>
        </div>
        <ul v-if="!mobile" class="width">
          <router-link
            :to="{ name: 'Home' }"
            class="router-link"
            active-class="router-link-active"
            >Trang chủ</router-link
          >
          <!-- <router-link to="" class="router-link">Booking</router-link> -->
          <router-link
            :to="{ name: 'Price List' }"
            class="router-link"
            active-class="router-link-active"
            >Bảng giá</router-link
          >
          <!-- <router-link to="" class="router-link">Onitime App</router-link> -->
          <router-link
            :to="{ name: 'About Us' }"
            class="router-link"
            active-class="router-link-active"
            >Về chúng tôi</router-link
          >
          <router-link
            :to="{ name: 'Contact Us' }"
            class="router-link"
            active-class="router-link-active"
            v-if="!mobile"
            >Liên hệ</router-link
          >
          <button class="button" @click="gotoApp">Tải ứng dụng</button>
          <div class="nationality">
            <img
              :src="require(`../assets/photos/${nationFlag}.webp`)"
              v-if="nation"
            />
            <p>Khách Việt Nam</p>
            <span><vector @click="toogleNation"></vector></span>
            <div class="nationality-info" v-if="showNation">
              <ul>
                <li
                  v-for="(nation, index) in nations"
                  :key="index"
                  @click="selectNation(nation.name)"
                >
                  <div class="flag">
                    <img
                      :src="require(`../assets/photos/${nation.flag}.webp`)"
                    /><span>{{ nation.name }}</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </ul>

        <bar class="icon" @click="toogleMenu" v-if="mobile"></bar>
      </div>
      <div class="navigation-mobile" v-if="mobileNav">
        <ul>
          <router-link :to="{ name: 'Home' }" class="router-link"
            >Trang chủ</router-link
          >

          <router-link :to="{ name: 'Price List' }" class="router-link"
            >Bảng giá</router-link
          >

          <router-link :to="{ name: 'About Us' }" class="router-link"
            >Về chúng tôi</router-link
          >
          <router-link :to="{ name: 'Contact Us' }" class="router-link"
            >Liên hệ</router-link
          >
          <button class="button" @click="gotoApp">Tải ứng dụng</button>
        </ul>
        <div class="nationality">
          <img
            :src="require(`../assets/photos/${nationFlag}.webp`)"
            v-if="nation"
          />
          <p>Khách Việt Nam</p>
          <span><vector @click="toogleNation"></vector></span>
          <div class="nationality-info" v-if="showNation">
            <ul>
              <li
                v-for="(nation, index) in nations"
                :key="index"
                @click="selectNation(nation.name)"
              >
                <div class="flag">
                  <img
                    :src="require(`../assets/photos/${nation.flag}.webp`)"
                  /><span>{{ nation.name }}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import logo from "../assets/alter-icons/logo.svg";
import vector from "../assets/Icons/Vector.svg";
import bar from "../assets/Icons/bars-regular.svg";

// import phone from "../assets/Icons/phone-1.svg";
// import angle from "../assets/Icons/angle-down-svgrepo-com.svg";

// import mail from "../assets/Icons/envelope-regular.svg";
export default {
  components: {
    vector,
    logo,
    bar,
  },
  data() {
    return {
      nations: [
        {
          flag: "wp2190362",
          name: "UK",
        },
      ],
      showNation: false,
      nation: null,
      mobile: false,
      mobileNav: false,
    };
  },
  created() {
    window.addEventListener("resize", () => {
      this.checkScreen();
    });
    this.checkScreen();
  },
  methods: {
    toogleNation() {
      this.showNation = !this.showNation;
    },
    selectNation(nationName) {
      this.nation = this.nations.filter((nation) => {
        return nation.name === nationName;
      });
      console.log(this.nation);
    },
    toogleMenu() {
      this.mobileNav = !this.mobileNav;
    },
    checkScreen() {
      if (window.innerWidth <= 1170) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
    },
    showCarList(value) {
      this.$store.dispatch("showCarList", value);
    },
    closeMenu() {
      console.log("click");
      this.mobileNav = false;
    },
    reload() {
      this.$router.push({ name: "Home" });
      location.reload();
    },
    gotoApp() {
      window.location.href = "https://www.google.com.vn/?hl=vi";
    },
  },
  computed: {
    nationFlag() {
      return this.nation[0].flag;
    },
  },
};
</script>

<style scoped>
header {
  background: #0e1c38;
  height: 65px;
  z-index: 99;
}
/* .width .nationality {
  display: f;
} */
.container {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
}
.contact-info {
  display: flex;
  justify-content: space-between;
}
.left {
  display: flex;
  justify-content: space-around;
}
.navigation {
  display: flex;
  /* justify-content: space-around; */
  align-items: center;

  width: 80%;
  position: relative;
}
.router-link {
  color: #fff;
  text-decoration: none;
}
.branding {
  display: flex;
  justify-content: center;
  align-items: center;
}
p {
  color: #fff;
}
.branding span {
  font-size: 25px;
}
.navigation > ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 65%;
  margin-left: auto;
}
ul .button:nth-child(5) {
  background-color: #f26921;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  color: #fff;
  padding: 15px;
}
ul .router-link,
ul .button {
  font-weight: 700;
}
.navigation-mobile ul .button {
  margin-top: 20px;
}

ul .router-link:hover {
  color: #f26921;
}
.router-link-active {
  color: #f26921;
}
.nationality {
  position: relative;
  align-items: center;
  margin: 20px;
  display: flex;
}
.nationality p {
  margin-right: 10px;
}
.nationality-info {
  position: absolute;
  top: 30px;
  background: #0e1c38;
  width: 100%;
  left: 10px;
  z-index: 99;
}
.nationality-info ul {
  list-style: none;
  color: white;
}
.nationality-info ul li {
  width: 100%;
  border-bottom: 1px solid rgb(165, 164, 164);
  cursor: pointer;
}
.nationality-info ul li:hover {
  background: #1b3468;
}
img {
  display: block;
  width: 20px;
  height: 15px;
}
.flag {
  display: flex;
  width: 100%;
  justify-content: space-around;
}
.navigation-mobile {
  display: flex;
  flex-direction: column;
  /* justify-content: center; */

  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 300px;
  height: 100vh;
  z-index: 200;
  background: #0e1c38;
}
.navigation-mobile ul {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
  margin: 20px;
}
.navigation-mobile ul .router-link {
  margin: 10px 0;
}
.navigation-mobile .branding {
  display: block;
  margin: 20px;
}
.icon {
  width: 30px;
  position: absolute;
  right: 0;
  color: white;
  cursor: pointer;
}
@media (min-width: 1170px) {
  .nationality {
    margin-left: 0;
    margin-right: 0;
  }
}
</style>