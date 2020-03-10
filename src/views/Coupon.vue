<template>
  <div class="coupon">
    <div class="coupon-container w1180">
      <h3 class="ban-wz">
        <img src="../assets/coupon/ban_wz.png" />
      </h3>
      <ul class="coupon-list clear">
        <li class="left">
          <span class="yh-img">
            <img src="../assets/coupon/yh1.png" alt />
          </span>
          <div class="yh-content">
            <span>新人专享</span>
            <p>
              限111元以上课程使用
              <br />有效期：自领取之日14天内
            </p>
          </div>
        </li>
        <li class="left">
          <span class="yh-img">
            <img src="../assets/coupon/yh2.png" alt />
          </span>
          <div class="yh-content">
            <span>新人专享</span>
            <p>
              限300元以上课程使用
              <br />有效期：自领取之日3天内
            </p>
          </div>
        </li>
      </ul>
      <button class="yh-btn">一键领取</button>
      <div class="yh-rule">
        <h4>优惠卷使用规则</h4>
        <p>
          1、限新注册用户领取，只能领一次，优惠券绑定个人账户，可用于PC、M站、App各平台。
          <br />2、优惠券需在有效期内使用，过期作废后不能重领。
          <br />3、每单限用一张优惠券， 可与折扣活动叠加使用。仅限部分商品使用，图书和特惠商品不参加活动。
          <br />4、如报课时未使用本券，则视作自动放弃。
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.coupon {
  width: 100%;
  background: #b22d24 url("../assets/coupon/bg.jpg") center top no-repeat;
  padding: 112px 0 50px;
}

.ban-wz img {
  margin: 0 auto;
  display: block;
}

.coupon-list {
  margin-top: 60px;
  padding-left: 34px;
}

.coupon-list li {
  display: inline-block;
  width: 510px;
  height: 181px;
  padding: 36px;
  background: url("../assets/coupon/yh-bg.png");
}

.coupon-list li:nth-child(2) {
  margin-left: -52px;
}

.yh-img {
  float: left;
  width: 200px;
  height: 181px;
  overflow: hidden;
}

.yh-img img {
  margin: 58px auto 0;
  display: block;
}

.yh-content {
  float: left;
  width: 260px;
  margin: 40px 0 0 40px;
}

.yh-content span {
  display: block;
  width: 110px;
  height: 32px;
  line-height: 32px;
  font-size: 18px;
  font-weight: bold;
  color: #f4cca9;
  text-align: center;
  background-color: #cd241a;
  border-radius: 4px;
}

.yh-content p {
  line-height: 30px;
  font-size: 16px;
  color: #fff;
  margin-top: 15px;
}

.yh-btn {
  display: block;
  width: 300px;
  height: 60px;
  line-height: 60px;
  font-size: 24px;
  color: #da463c;
  text-align: center;
  background-color: #f4cca9;
  border-radius: 4px;
  margin: 15px auto 0;
  cursor: pointer;
  outline: none;
  border: none;
}

.yh-btn:hover {
  color: red;
  background-color: #e9b98f;
}

.yh-rule {
  width: 960px;
  height: 200px;
  background-color: #a62219;
  border-radius: 10px;
  margin: 50px auto 0;
  padding: 30px 40px;
}

.yh-rule h4 {
  height: 40px;
  line-height: 40px;
  font-size: 20px;
  color: #f4cca9;
  text-align: center;
  background: url("../assets/coupon/line.png") center center no-repeat;
}

.yh-rule p {
  line-height: 34px;
  font-size: 16px;
  color: #f4cca9;
  margin-top: 23px;
}
</style>