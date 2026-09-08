<template>
  <div>
    <div class="help--website" :class="{ 'avtive--help': showHelpWebsite }">
      {{ dataHelp }}
    </div>
    <div class="countiner countiner--small">
      <form @submit.prevent="checkingReset" v-if="!sent">
        <h1>فراموشی رمز</h1>
        <p class="reset-hint">
          ایمیلت رو وارد کن، لینک بازیابی رمز رو براش می‌فرستیم
        </p>

        <div>
          <label class="lable--email" :class="{ lableActive: emailActive }"
            >Email</label
          >
          <input
            type="email"
            required
            v-on:click="emailActive = true"
            v-model="email"
          />
        </div>

        <button type="submit">ارسال لینک بازیابی</button>

        <div>
          <router-link to="/Login">
            <span class="forget--password">یادت اومد؟ برگرد به ورود</span>
          </router-link>
        </div>
      </form>

      <div v-else class="sent-state">
        <h1>ایمیل ارسال شد</h1>
        <p class="reset-hint">
          یه لینک بازیابی رمز به {{ email }} فرستادیم. صندوق ایمیلت رو چک کن.
        </p>
        <router-link to="/Login">
          <span class="forget--password">برگرد به ورود</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      emailActive: false,
      sent: false,
      showHelpWebsite: false,
      dataHelp: ""
    };
  },
  methods: {
    showMessage(msg) {
      this.dataHelp = msg;
      this.showHelpWebsite = true;
      setTimeout(() => {
        this.showHelpWebsite = false;
      }, 3000);
    },
    checkingReset() {
      if (this.email === "") {
        this.showMessage("اول ایمیلت رو وارد کن");
        return;
      }
      // اینجا بعداً وصل میشه به API واقعی وقتی بک‌اند آماده شد
      this.sent = true;
    }
  }
};
</script>

<style>
.countiner--small {
  height: auto;
  min-height: 380px;
  padding-bottom: 30px;
}
.reset-hint {
  color: var(--dim);
  font-size: 0.9em;
  padding: 0 10%;
  margin-bottom: 10px;
}
.sent-state {
  width: 100%;
  padding: 20px;
  text-align: center;
}
</style>
