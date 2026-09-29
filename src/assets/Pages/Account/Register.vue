<template>
  <div>
    <div class="help--website" :class="{ 'avtive--help': showHelpWebsite }">
      {{ dataHelp }}
    </div>
    <div class="countiner">
      <form>
        <h1>ساخت اکانت</h1>

        <div>
          <label class="lable--email" :class="{ lableActive: emailActive }"
            >Email</label
          >
          <input
            type="email"
            required
            v-on:click="lableemailActive"
            v-model="User.Email"
          />
        </div>
        <br />

        <div>
          <label
            class="lable--username"
            :class="{ lableActive: usernameActive }"
            >نام کاربری</label
          >
          <input
            type="text"
            required
            v-on:click="lableUsernameActive"
            v-model="User.Username"
          />
        </div>
        <br />

        <div class="div--password">
          <label
            class="lable--password"
            :class="{ lableActive: passwordActive }"
            >Password</label
          >
          <input
            :type="showPassword ? 'text' : 'password'"
            required
            v-on:click="lableActivePasswoed"
            v-model="User.Password"
          />
          <i class="fa fa-eye" @click="showPassword = !showPassword"></i>
        </div>
        <br />

        <div class="div--password">
          <label class="lable--password" :class="{ lableActive: confirmActive }"
            >تکرار Password</label
          >
          <input
            :type="showConfirm ? 'text' : 'password'"
            required
            v-on:click="lableConfirmActive"
            v-model="User.ConfirmPassword"
          />
          <i class="fa fa-eye" @click="showConfirm = !showConfirm"></i>
        </div>

        <button type="submit" v-on:click="checkingRegister">ثبت‌ نام</button>

        <div>
          <router-link to="/Login">
            <span class="forget--password">قبلاً اکانت داری؟ وارد شو</span>
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      emailActive: false,
      usernameActive: false,
      passwordActive: false,
      confirmActive: false,
      showPassword: false,
      showConfirm: false,
      showHelpWebsite: false,
      dataHelp: "",
      User: {
        Email: "",
        Username: "",
        Password: "",
        ConfirmPassword: ""
      }
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
    lableemailActive() {
      if (this.emailActive == true) {
        return;
      }
      this.emailActive = !this.emailActive;
    },
    lableActivePasswoed() {
      if (this.passwordActive == true) {
        return;
      }
      this.passwordActive = !this.passwordActive;
    },
    lableUsernameActive() {
      if (this.usernameActive == true) {
        return;
      }
      this.usernameActive = !this.usernameActive;
    },
    lableConfirmActive() {
      if (this.confirmActive == true) {
        return;
      }
      this.confirmActive = !this.confirmActive;
    },

    checkingRegister() {
      if (this.User.Email == "") {
        this.showMessage("اول Email رو وارد کن");
        setTimeout(() => {
          this.showHelpWebsite = false;
        }, 3000);
        return;
      } else if (this.User.Username === "") {
        this.showMessage("نام کاربری رو یادت رفته");
        return;
      } else if (this.User.Password === "") {
        this.showMessage("Password رو وارد کن");
        return;
      } else if (this.User.Password.length < 6) {
        this.showMessage("Password باید حداقل ۶ کاراکتر باشه");
        return;
      } else if (this.User.Password != this.User.ConfirmPassword) {
        this.showMessage("Password و تکرارش یکی نیستن");
        return;
      } else {
        this.showMessage("اکانت ساخته شد! (فعلاً فقط نمایشیه)");
      }
    }
  }
};
</script>

<style scoped>
.countiner {
  min-height: 650px;
  height: auto;
  width: min(650px, calc(100% - 32px));
  margin: 40px auto;
  padding: 28px;
  background-color: var(--surface);
  border-radius: 20px;
  color: var(--text);
  text-align: center;
  direction: rtl;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  border: 2px solid var(--line);
}
.countiner h1 { padding: 10px; font-size: clamp(1.5rem, 5vw, 2.1rem); }
form { width: 100%; height: auto; color: var(--text); }
input[type="email"], input[type="password"], input[type="text"] {
  display: block;
  border: none;
  border-bottom: 2px solid var(--dim);
  padding: 12px 4px;
  width: 82%;
  margin: 12px auto 0;
  color: var(--text);
  background: transparent;
  outline: none;
}
input[type="email"]:focus, input[type="password"]:focus, input[type="text"]:focus { border-bottom-color: var(--accent); }
.lable--email, .lable--password, .lable--username {
  position: absolute;
  right: 12%;
  transform: translateY(22px);
  transition: all ease .3s;
}
.lableActive { transform: translateY(-4px); color: var(--accent); }
.div--password { position: relative; }
.div--password > i { position: absolute; top: 14px; left: 8%; color: var(--dim); cursor: pointer; }
button[type="submit"] {
  width: min(280px, 80%);
  padding: 10px 18px;
  margin: 28px auto 20px;
  display: block;
  background-color: var(--accent);
  color: var(--text);
  border: 0;
  border-radius: 10px;
}
.forget--password { color: var(--text); }
.create--account { color: var(--accent); }
@media (max-width: 500px) {
  .countiner { width: calc(100% - 16px); min-height: 620px; margin: 24px auto; padding: 22px 14px; }
  input[type="email"], input[type="password"], input[type="text"] { width: 88%; }
  .lable--email, .lable--password, .lable--username { right: 8%; }
  .div--password > i { left: 4%; }
}
</style>
