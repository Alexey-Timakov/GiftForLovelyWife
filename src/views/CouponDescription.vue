<template>
  <div class="coupon-link__wrapper">
    <router-link class="body__link" to="/coupons">
      <span> &#8592; </span>
      Назад к списку подарков
    </router-link>
  </div>
  <div class="coupon-page__wrapper">
    <CouponPage
    v-bind:couponName="couponName"
    v-bind:couponText="couponText"
    v-bind:couponStatus="couponStatus"
    v-bind:loggedUserName="loggedUserName"
    v-bind:couponDateFromLS="couponDateFromLS"
    />
  </div>

</template>

<script>
import CouponPage from "@/components/CouponPage";

export default {
  data() {
    return {};
  },
  components: {
    CouponPage,
  },
  props: {
    couponName: {
      type: String,
      required: true,
    },
    couponText: {
      type: String,
    },
    couponStatus: {
      type: String
    },
    loggedUserName: String,
    couponDateFromLS: String
  },
};
</script>

<style scoped>
.coupon-page__wrapper {
  margin-bottom: 50px;
}
.coupon-link__wrapper {
  margin-bottom: 25px;
}
span {
  margin-right: 10px;
}
.body__link {
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  font-size: 20px;
  text-decoration: none;
  text-transform: uppercase;
  padding-bottom: 10px;
}
.body__link:hover {
  border-bottom: 2px solid #FF0000;
}
@media screen and (max-width: 768px) {
.body__link {
  font-size: 15px;
}
}
</style>