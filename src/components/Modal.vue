<template>
  <div class="modal">
    <div class="modal-content" v-if="userMessage">
      <p>{{ this.userMessage }}</p>
      <button @click="closeModal">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["userMessage"],
  methods: {
    closeModal() {
      this.$emit("close-modal");
    },
  },
  created() {
    window.addEventListener("click", (event) => {
      if (event.target.className === "modal") {
        this.closeModal();
      }
    });
  },
};
</script>

<style scoped>
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 200;
  background: rgba(0, 0, 0, 0.7);
}
.modal-content {
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  width: 300px;
  padding: 40px 30px;
  background: #fff;
  align-items: center;
  z-index: 1000;
}
button {
  background: #203f7e;
  padding: 10px;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>

