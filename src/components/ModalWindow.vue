<template>
  <div class="modal-fade">
    <div class="modal-wrapper">
      <div class="modal-wrapper__text">
        <h1>Подтвердите ваш выбор</h1>
        <p>Купон: {{ couponName }}</p>
        <p>Дата: {{ localTime(couponDate) }}</p>
      </div>
      <div class="modal-wrapper__buttons">
        <button v-on:click="closeModalWindow" class="button modal cancel">Омена</button>
        <button v-on:click="submitForm" class="button modal ok">ОК</button>
      </div>
    </div>
  </div>  
</template>

<script>
import { getTime } from "@/func/getTime.js"

export default {
  data() {
    return {
    }
  },
  props: {
    couponName: String,
    couponDate: Date
  },
  methods: {
    closeModalWindow() {
      this.$emit("closeModalWindow");
    },
    submitForm() {
      this.$emit("submitForm");
      this.$emit("closeModalWindow");
    },
    localTime(time) {
      return getTime(time)
    },
  }
}
</script>

<style scoped>
.modal-fade {
  position: absolute;
  left: 0px;
  top: 0px;
  background: rgba(241, 244, 247, 0.2);
  width: 100%;
  height: 100%;
}
.modal-wrapper {
  position:sticky;
  top: 30%;
  padding: 20px;
  background: #5257e0;
  border-radius: 20px;
  width: 400px;
  margin: 0 auto;
}
.modal-wrapper__text {
  font-family: "Raleway", sans-serif;
  color: rgba(255, 255, 255, 0.781);
}
.modal-wrapper__text h1 {
  font-size: 25px;
  padding-top: 15px;
}
.modal-wrapper__text p {
  font-size: 20px;
  margin: 5px;
}
.modal-wrapper__buttons {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.button {
  width: 400px;
  height: 50px;
  border: none;
  border-radius: 20px;
  background: #FFF;
  color: #F7308c;
  font-weight: 500;
  font-size: 20px;
  font-family: "Raleway", sans-serif;
  cursor: pointer;
  box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.04);
  transition:all 0.3s ease;
}

.button.ok {
  margin: 15px;
  background-color: rgb(0, 250, 42);
  color: #FFF;
}
.button.ok:hover {
  background-color: #FFF;
  color: rgb(0, 250, 42);
}
.button.cancel {
  margin: 15px;
  background-color: #f7308c;
  color: #FFF;
}
.button.cancel:hover {
  background-color:#FFF;
  color: #f7308c;
}
@media screen and (max-width: 768px) {
.modal-wrapper {
  top: 25%;
  padding: 10px;
  border-radius: 10px;
  width: 300px;
}
.modal-wrapper__text h1 {
  font-size: 20px;
  padding-top: 10px;
}
.modal-wrapper__text p {
  font-size: 16px;
}
.button {
  width: 35%;
  height: 30px;
  border-radius: 10px;
  font-size: 20px;
}
.button.ok {
  margin: 10px;
}
.button.cancel {
  margin: 10px;
}
}
</style>