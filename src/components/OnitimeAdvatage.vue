<template>
  <div class="content-wrap">
    <div class="container">
      <h1>Điểm mạnh Onitime</h1>
      <div class="advantages">
        <div class="col1">
          <div class="advantage">
            <h1>1</h1>
            <div class="content">
              <h3>Công ty duy nhất cam kết bồi thường</h3>
              <p>
                Bồi thường 100% chuyến đi, tiền vé máy bay … nếu xe đón muộn
                hoặc trễ chuyến bay
              </p>
            </div>
          </div>
          <div class="advantage">
            <h1>2</h1>
            <div class="content">
              <h3>Chất lượng chuyến xe đảm bảo</h3>
              <p>
                Xe có niên hạn không quá 5 năm cùng quy trình giám sát chặt chẽ
                giúp đảm bảo chất lượng chuyến đi
              </p>
            </div>
          </div>
          <div class="advantage">
            <h1>3</h1>
            <div class="content">
              <h3>Dịch vụ trên toàn quốc</h3>
              <p>
                Dịch vụ phủ rộng toàn bộ thành phố lớn và các điểm du lịch nên
                có thể phục vụ trọn vẹn nhu cầu của quý khách
              </p>
            </div>
          </div>
          <div class="advantage">
            <h1>4</h1>
            <div class="content">
              <h3>Tổng đài hỗ trợ 24/7</h3>
              <p>
                Do phục vụ cả khách quốc tế nên chúng tôi hỗ trợ ngay khi quý
                khách gặp vấn đề phát sinh
              </p>
            </div>
          </div>
        </div>
        <div class="photo">
          <img :src="require('../assets/photos/iPhone 11 Pro 2.png')" alt="" />
        </div>
        <div class="col3">
          <div class="advantage">
            <h1>5</h1>
            <div class="content">
              <h3>Loại hình xe đa dạng</h3>
              <p>
                Đầy đủ dịch vụ: xe đi sân bay, đi tỉnh, đi tour du lịch, xe
                ghép, xe tự lái. Loại xe đa dạng: từ xe 5 chỗ đến 45 chỗ; xe phổ
                thông đến xe cao cấp
              </p>
            </div>
          </div>
          <div class="advantage">
            <h1>6</h1>
            <div class="content">
              <h3>Mức giá hợp lý</h3>
              <p>
                Mức giá tương đương thị trường dù dịch vụ hậu mãi đầy đủ hơn
              </p>
            </div>
          </div>

          <div class="advantage">
            <h1>7</h1>
            <div class="content">
              <h3>Thao tác ứng dụng thuận tiện</h3>
              <p>
                Dễ dàng đặt lại chuyến đã đi, đặt chiều quay về, đánh giá chuyến
                đi
              </p>
            </div>
          </div>
          <div class="advantage">
            <h1>8</h1>
            <div class="content">
              <h3>Đáp ứng chuyến đặt gấp</h3>
              <p>
                Có thể bố trí xe đón ngay sau 10 phút kể từ khi quý khách đặt xe
                (áp dụng tại Hà Nội)
              </p>
            </div>
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
}
.container {
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 50px 0;
}
.advantages {
  display: flex;
  flex-direction: column;

  grid-template-columns: repeat(2, 1fr);
}
.photo {
  grid-row-start: 1;
  grid-column-start: 2;
  grid-row-end: 3;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
  display: none;
}
.photo img {
  margin: auto 0;
  display: block;
}

.col1,
.col3 {
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  grid-row-start: 1;
}

.advantage {
  /* height: 200px; */
  display: flex;
  align-items: flex-start;
  position: relative;
  margin-bottom: 20px;
}
.advantage h1 {
  margin-right: 15px;
  height: fit-content;
  position: absolute;
  top: -5px;
}
.advantage .content {
  margin-left: 30px;
}
.col1 .advantage:nth-child(1) h1 {
  color: #6daafa;
}

.col1 .advantage:nth-child(2) h1 {
  color: #ff6d52;
}
.col1 .advantage:nth-child(3) h1 {
  color: #8484f2;
}
.col1 .advantage:nth-child(4) h1 {
  color: #2196f3;
}
.col3 .advantage:nth-child(1) h1 {
  color: #f99e6b;
}
.col3 .advantage:nth-child(2) h1 {
  color: #f26a86;
}
.col3 .advantage:nth-child(3) h1 {
  color: #2196f3;
}
.col3 .advantage:nth-child(4) h1 {
  color: #5f97f6;
}

.container > h1 {
  margin: 20px 0;
}

@media (min-width: 1000px) {
  .photo {
    display: block;
    margin: auto 30px;
  }
  .advantage {
    height: fit-content;
  }
  .advantages {
    flex-direction: row;
  }

  .col1,
  .col3 {
    width: 50%;
  }
  .col1 p,
  .col3 p {
    font-size: 20px;
  }
}
</style>