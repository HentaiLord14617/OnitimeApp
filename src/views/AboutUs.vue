<template>
  <div class="content-wrap">
    <div class="main-image">
      <img :src="require('../assets/photos/contactus.jpg')" />
      <h2>VỀ CHÚNG TÔI</h2>
    </div>
    <div class="content">
      <div>
        <h3>GIỚI THIỆU</h3>
        <div class="main-info">
          <div>
            <img :src="require('../assets/photos/Rectangle 1111.png')" alt="" />
          </div>
          <div>
            <ul>
              <li>
                Công ty TNHH Onitime Việt Nam có trụ sở chính tại 186 Quán
                Thánh, quận Ba Đình, Hà Nội
              </li>
              <li>Số đăng ký kinh doanh:</li>
              <li>
                Slogan “Always responsible” – “Luôn trách nhiệm” là định hướng
                xuyên suốt của chúng tôi khi cung cấp dịch vụ tới khách hàng và
                được cụ thể hóa
              </li>
              <li>
                Với trên 5 năm kinh nghiệm trong lĩnh vực dịch vụ xe và nhân sự
                quản lý am hiểu thị trường Việt Nam giúp quy trình vận hành được
                tối ưu.
              </li>
              <li>
                Nhân sự công ty đông đảo và cùng ý thức việc lấy khách hàng làm
                trung tâm
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <h3>ĐIỂM MẠNH</h3>
        <div class="advantages">
          <div>
            <div class="title">
              <div class="wrap">
                <div class="icon">
                  <img
                    :src="require('../assets/alter-icons/like 1.png')"
                    alt=""
                  />
                </div>
              </div>
              <p>Chiến lược phát triển lâu dài</p>
            </div>
            <div>
              <p>
                Tiềm lực tài chính vững mạnh giúp công ty có đủ nguồn lực để
                hướng tới sự phát triển lâu dài và bền vững
              </p>
            </div>
          </div>
          <div>
            <div class="title">
              <div class="wrap">
                <div class="icon">
                  <img
                    :src="require('../assets/alter-icons/Vector (1).png')"
                    alt=""
                  />
                </div>
              </div>
              <p>Ban lãnh đạo</p>
            </div>
            <div>
              <p>
                Tập thể lãnh đạo công ty được kết hợp giữa nhân sự đào tạo tại
                các nước phát triển và nhân sự có trên 5 năm kinh nghiệm am hiểu
                thị trường Việt Nam
              </p>
            </div>
          </div>
          <div>
            <div class="title">
              <div class="wrap">
                <div class="icon">
                  <img
                    :src="require('../assets/alter-icons/Vector (2).png')"
                    alt=""
                  />
                </div>
              </div>
              <p>Đầu tư nghiên cứu Ứng dụng</p>
            </div>
            <div>
              <p>
                Ứng dụng Onitimecar được nghiên cứu xây dựng trong thời gian
                dài, và sẽ cập nhật để bám sát nhu cầu khách hàng Việt Nam
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <why-choose-us color="#fff" background="#F0F3FB"></why-choose-us>

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
  </div>
</template>

<script>
import WhyChooseUs from "../components/WhyChooseUs.vue";

export default {
  components: {
    WhyChooseUs,
  },
};
</script>

<style scoped>
.main-image img {
  display: block;
  width: 100%;
  height: 180px;
}
h3 {
  color: #4b5f75;
  margin: 20px 0;
}
.main-image {
  position: relative;
  width: 100%;
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
.content-wrap {
  display: flex;
  justify-content: center;

  flex-direction: column;
  align-items: center;
}
.content {
  width: 80%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 30px 0;
}
.photos {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
}
.photos > div {
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
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
.main-info {
  display: flex;
  flex-direction: column;
}

.content > div > div ul {
  margin-left: 15px;
}
.content > div > div ul li {
  font-size: 16px;
  margin: 5px 0;
}
.main-info img {
  width: 100%;
  display: block;
}
.advantages {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.advantages > div {
  background: #ffffff;
  /* Shadown2 */

  box-shadow: 0px 4px 30px rgba(124, 124, 124, 0.25);
  width: 80%;
  padding: 30px;
  margin: 20px 0;
  height: 350px;
}
.title p {
  text-align: center;
  margin: 10px 0;
  color: #203f7e;
  font-weight: 700;
}
.icon {
  padding: 10px;
  border-radius: 50%;
  background: #203f7e;
  width: fit-content;
  height: fit-content;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  top: 50%;
}
.wrap {
  border: 1px dashed #203f7e;
  height: 100px;
  width: 100px;
  margin: 0 auto;
  border-radius: 50%;
  position: relative;
}
.icon img {
  display: block;
  margin: auto;
}
@media (min-width: 600px) {
  .photo {
    margin: 100px auto;
  }
}
@media (min-width: 800px) {
  .advantages > div {
    width: 30%;
    padding: 30px;
    margin: 0;
    height: 400px;
  }
  .advantages {
    flex-direction: row;
  }
  .main-image img {
    height: 336px;
  }
}
@media (min-width: 1100px) {
  .main-info {
    flex-direction: row;
  }
  ul {
    margin-top: 60px;
  }
  .main-info img {
    width: fit-content;
  }
}
</style>