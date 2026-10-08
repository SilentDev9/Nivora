<template>
  <div
    class="animate__animated animate__fadeInLeft "
    :class="{ animate__fadeOutRight: exitHandler }"
  >
    <div class="help--website" :class="{ 'avtive--help': showHelpWebsite }">
      {{ dataHelp }}
    </div>
    <div class="countiner">
      <form>
        <div class="sucsses--form">
          <i
            class="fa fa-lightbulb-o"
            :class="{
              'success--active': (User.Email || '').endsWith('@gmail.com')
            }"
          ></i>

          <i
            class="fa fa-lightbulb-o"
            :class="{
              'success--active': User.Password.length > 7
            }"
          ></i>
        </div>
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
        <router-link to="/Dashboard">
          <button type="submit" v-on:click="checkingRegister">ثبت‌ نام</button>
        </router-link>

        <div>
          <router-link to="/Login">
            <span v-on:click="clickHandlerExit" class="forget--password"
              >قبلاً اکانت داری؟ وارد شو</span
            >
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
      exitHandler: false,
      dataHelp: "",
      routerText: "",
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
    // clickHandlerExit() {
    //   this.exitHandler = !this.exitHandler;
    //   setTimeout(() => {
    //     this.routerText = '/Login'
    //   }, 1000);
    // },
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
        this.showMessage("اکانت ساخته شد! ");
        const user = {
          email: this.Email,
          username: this.Username,
          password: this.Password
        };
        localStorage.setItem("nivoraUser", JSON.stringify(user));
      }
    }
  }
};
</script>
