<template>
  <div class="coupon-list">
    <CouponItem
      v-for="(coupon, index) of coupons"
      :key="coupon.id"
      v-bind:coupon="coupon"
      v-bind:index="index"
      v-bind:loggedUserName="loggedUserName"
    />
  </div>
</template>

<script>
import CouponItem from "@/components/CouponItem";
export default {
  components: {
    CouponItem,
  },
  props: {
    coupons: Array,
    loggedUserName: String},
  methods: {
  },
};
</script>

<style scoped>
.coupon-list {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
</style>