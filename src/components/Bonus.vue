<template>
  <div class="content-wrap">
    <div class="container">
      <div class="photo">
        <img :src="require('../assets/photos/Group 1878.png')" alt="" />
      </div>
      <div class="bonuses">
        <div>
          <p>Tặng ngay 70K vào tài khoản khuyến mại khi tải ứng dụng</p>
        </div>
        <div>
          <p>
            Tặng 70K mỗi lần giới thiệu ứng dụng tới bạn bè thành công và không
            giới hạn số lần
          </p>
        </div>
        <div>
          <p>Quý khách tải ứng dụng tại đây</p>
          <div class="icons">
            <router-link to="">
              <img :src="require('../assets/alter-icons/Artboard-1.png')" />
            </router-link>
            <router-link to="">
              <img :src="require('../assets/alter-icons/Page-1.png')" />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.content-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f0f3fb;
}
.container {
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin: 50px 0;
  flex-direction: column;
}
.bonuses {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
}
.bonuses > div {
  margin: 20px 0;
}
.bonuses > div:first-child {
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #f26d22;
}
.bonuses > div p {
  color: #0e1c38;
  font-weight: 600;
  position: relative;
  margin-left: 20px;
}
.bonuses > div:last-child p {
  margin: 20px 0;
}
.bonuses > div:first-child p::before {
  content: "";
  width: 15px;
  height: 15px;
  background: #f26d22;
  position: absolute;
  left: -30px;
  top: 0px;
  border-radius: 50%;
  border: 5px solid rgba(243, 239, 237, 0.692);
}
.bonuses > div:nth-child(2) {
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #203f7e;
}
.bonuses > div:nth-child(2) p::before {
  content: "";
  width: 15px;
  height: 15px;
  background: #203f7e;
  position: absolute;
  left: -30px;
  top: 5px;
  border-radius: 50%;
  border: 5px solid rgba(243, 239, 237, 0.692);
}
.icons > a:first-child {
  margin-right: 20px;
}
.bonuses > div:last-child {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.photo img {
  width: 80%;
  margin: 0 auto;
}
.photo {
  display: flex;
  justify-content: center;
}

@media (min-width: 700px) {
  .container {
    flex-direction: row;
  }
  .bonuses {
    margin-left: 20px;
  }
  .photo {
    justify-content: flex-start;
  }
  .bonuses > div:last-child {
    align-self: start;
  }
  .photo img {
    width: fit-content;
  }
}
</style>