<template>
  <div class="content-wrap">
    <div class="main-image">
      <img :src="require('../assets/photos/contactus.jpg')" />
      <h2>bảng giá</h2>
    </div>

    <div class="price-list">
      <div class="buttons">
        <button
          @click="changeType('airport')"
          :class="{ clicked: airportClick, click: !airportClick }"
        >
          Xe sân bay
        </button>
        <button
          @click="changeType('province')"
          :class="{ clicked: provinceClick, unclicked: !provinceClick }"
        >
          Xe đi tỉnh
        </button>
        <button
          :class="{ clicked: combineClick, unclicked: !combineClick }"
          @click="changeType('combine')"
        >
          Xe ghép
        </button>
      </div>
      <div class="input">
        <input type="text" placeholder="Tìm kiếm địa điểm" v-model="Search" />
        <div class="icon">
          <img :src="require('../assets/alter-icons/Group 1118.png')" />
        </div>
      </div>
      <div v-if="typeReady">
        <div v-for="(table, index1) in Information" :key="index1">
          <h1 v-if="type === 'airport'">
            {{ index1 + 1 }}.Sân bay {{ table.key }}
          </h1>
          <h1 v-else>{{ index1 + 1 }}.Cung đường đến và đi {{ table.key }}</h1>
          <table>
            <tr class="first">
              <th>Loại xe</th>
              <th>Tuyến đường</th>
              <th>Giá trọn gói</th>
            </tr>
            <tr v-for="(item, index2) in table.items" :key="index2">
              <th>{{ item.carName }}</th>
              <th>{{ item.routeName }}</th>
              <th>{{ item.priceRange }}</th>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Polygon from "../assets/alter-icons/Polygon 1.svg";
export default {
  data() {
    return {
      input: "",
      listInformations: [],
      type: "airport",
      result: [],
      airportClick: true,
      provinceClick: false,
      combineClick: false,
      typeReady: true,
    };
  },
  computed: {
    Search: {
      get() {
        return this.input;
      },
      set(value) {
        this.input = value;
        this.findResult(this.input, this.type);
      },
    },
    Information() {
      return this.$store.state.destinations;
    },
  },
  methods: {
    async findResult(input, type) {
      await this.$store.dispatch("findResult", {
        input: input,
        type: type,
      });
    },
    changeType(value) {
      this.type = value;
      if (value === "airport") {
        this.airportClick = true;
        this.provinceClick = false;
        this.combineClick = false;
      } else if (value === "province") {
        this.provinceClick = true;
        this.airportClick = false;
        this.combineClick = false;
      } else {
        this.combineClick = true;
        this.provinceClick = false;
        this.airportClick = false;
      }
    },
  },
  async created() {
    await this.findResult(this.input, this.type);
    console.log(this.Information);
  },
  watch: {
    async type() {
      this.typeReady = false;
      await this.findResult(this.input, this.type);
      this.typeReady = true;
    },
  },
};
</script>

<style scoped>
.main-image {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.content-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.main-image img {
  display: block;
  width: 100%;
  position: relative;
  height: 180px;
}
.main-image h2 {
  position: absolute;
  color: #fff;
  margin: auto;
  font-size: 30px;
  text-transform: uppercase;
}

.price-list {
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.price-list > div:nth-child(n + 3) {
  width: 100%;
  overflow-x: auto;
}
.buttons,
.input {
  width: fit-content;
  display: flex;
}
.input {
  margin-bottom: 50px;
  position: relative;
}
input {
  height: 40px;
  width: 300px;
  border-radius: 20px;
  padding: 0 40px;
}
.icon {
  position: absolute;
  top: 5px;
  left: 10px;
}
.buttons button {
  margin: 0 5px;
  padding: 10px 20px;
  /* background: #203f7e;
  color: #fff; */
  font-weight: 700;
  border: 1px solid #203f7e;
  border-radius: 4px;
  cursor: pointer;
}
.buttons button:hover {
  background: #203f7e;
  color: #fff;
}
.buttons {
  margin-top: 50px;
  margin-bottom: 20px;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid #ddd;
  margin-bottom: 50px;
  position: relative;
}
h1 {
  font-size: 20px;
  color: #203f7e;
}
th,
td {
  text-align: left;
  padding: 20px;
}
tr {
  background: #f0f3fb;
  color: #4b5f75;
}

.first {
  background-color: #203f7e;
  color: #fff;
}
tr:nth-child(n + 2):nth-child(even) {
  background-color: #fff;
}
.clicked {
  background-color: #203f7e;
  color: #fff;
}
.unclicked {
  background: #fff;
  color: #203f7e;
}
.click {
  background: #fff;
  color: #203f7e;
}
@media (min-width: 800px) {
  .main-image img {
    height: 336px;
  }
}
</style>