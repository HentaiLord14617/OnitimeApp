<template>
  <div class="containers" :style="{ background: background }">
    <div class="content-wrap">
      <h1>Cam kết của chúng tôi</h1>
      <div class="reasons">
        <div class="reason" :style="{ background: color }">
          <div class="icon">
            <img
              :src="require('../assets/alter-icons/Group 1925.png')"
              :style="{ background: color }"
            />
          </div>
          <p>Miễn phí chuyến đi nếu xe đón muộn quá 10p</p>
        </div>
        <div class="reason" :style="{ background: color }">
          <div class="icon">
            <img
              :src="require('../assets/alter-icons/Frame (1).png')"
              :style="{ background: color }"
            />
          </div>
          <p>Bồi thường 5 triệu đồng nếu không có xe đón theo lịch</p>
        </div>
        <div class="reason" :style="{ background: color }">
          <div class="icon">
            <img
              :src="require('../assets/alter-icons/Frame (2).png')"
              :style="{ background: color }"
            />
          </div>
          <p>Bồi thường 100% tiền vé máy bay nếu quý khách bị trễ chuyến bay</p>
        </div>
        <div class="reason" :style="{ background: color }">
          <div class="icon">
            <img
              :src="require('../assets/alter-icons/Frame (3).png')"
              :style="{ background: color }"
            />
          </div>
          <p>Hoàn tiền 50% nếu quý khách không hài lòng chất lượng chuyến đi</p>
        </div>
      </div>
      <p class="note">
        Hướng dẫn chi tiết bồi thường nêu tại mục Câu hỏi thường gặp
      </p>
    </div>
  </div>
</template>

<script>
// import smartphone from "../assets/alter-icons/smart-phone.svg";
// import dollar from "../assets/alter-icons/dollar.svg";
// import card from "../assets/alter-icons/card.svg";
// import phone2 from "../assets/alter-icons/phone-2.svg";

export default {
  props: ["color", "background"],
};
</script>

<style scoped>
.containers {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #4b5f75; */
}
.content-wrap {
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px 0;
}
.content-wrap p {
  margin: 20px auto;
  color: #203f7e;
  font-size: 20px;
  text-align: center;
}
.note {
  font-style: italic;
}
.reasons {
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  width: 100%;
  margin-bottom: 50px;
  flex-direction: column;
}
h1 {
  color: #203f7e;
}
.reason {
  width: 100%;
  background: #f0f3fb;
  text-align: center;
  color: #4b5f75;
  padding: 20px;
  margin: 20px auto;
  /* max-width: 269px; */
}
img {
  display: block;
  margin: 0 auto;
  background: #f0f3fb;
}
@media (min-width: 900px) {
  .reasons {
    flex-direction: row;
  }
  .reason {
    margin-right: 20px;
  }
  .reason:last-child {
    margin-right: 0;
  }
}
</style>