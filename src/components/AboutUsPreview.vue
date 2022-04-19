<template>
  <div class="content-wrap">
    <div class="container">
      <h1>Về Chúng Tôi</h1>
      <div class="content">
        <div class="photo">
          <img :src="require('../assets/photos/aboutus.jpg')" alt="" />
        </div>

        <div class="info">
          <p>
            -Công ty TNHH Onitime Việt Nam có trụ sở chính tại 186 Quán Thánh,
            quận Ba Đình, Hà Nội
          </p>
          <p>
            Slogan “Always responsible” – “Luôn trách nhiệm” là định hướng của
            chúng tôi khi cung cấp dịch vụ tới khách hàng và được cụ thể hóa Với
            trên 5 năm kinh nghiệm trong lĩnh vực dịch vụ xe và nhân sự quản lý
            am hiểu thị trường Việt Nam giúp quy trình vận hành được tối ưu.
          </p>
          <router-link :to="{ name: 'About Us' }" class="router-link"
            >CHI TIẾT</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import contact from "../assets/alter-icons/contact.svg";

export default {
  components: {},
};
</script>

<style scoped>
.content-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #fff;
}
.container {
  width: 80%;
  position: relative;
  margin-bottom: 50px;
}
.content {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
}
.photo img {
  display: block;
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
.photo {
  width: 90%;
}
.info {
  width: 100%;

  height: 100%;
}
.info p {
  color: #4b5f75;
  font-weight: 600;
  font-size: 17px;
  margin: 20px 0;
  line-height: 30px;
}
h1 {
  color: #203f7e;
  margin: 20px 0;
}
.router-link {
  margin-top: 30px;
  background: #f26d22;
  padding: 10px 15px;
  border-radius: 4px;
}
.icons {
  position: absolute;
  right: -12%;
  bottom: 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (min-width: 1000px) {
  .content {
    flex-direction: row;
    align-items: center;
  }
  .info {
    margin-left: 30px;
    width: 90%;
  }
}
</style>