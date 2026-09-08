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
  height: 500px;
  background-color: var(--surface);
  border-radius: 20px;
  color: var(--text);
  text-align: center;
  direction: rtl;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;
  margin: 100px;
  border: 5px solid var(--line);
}
.countiner h1 {
  padding: 20px;
}

form {
  width: 100%;
  height: 100px;
  color: var(--text);
}
input[type="email"],
input[type="password"],
input[type="text"] {
  border: 0px;
  border: none;
  border-bottom: 3px solid var(--dim);
  padding: 3%;
  width: 70%;
  margin-top: 2%;
  position: relative;
  color: var(--text);
}
.lable--email {
  position: absolute;
  translate: 0px 17px;
}
.lable--password {
  position: absolute;
  translate: 0px 17px;
}
input::placeholder {
  color: var(--text);
}
input:focus {
  border: none;
  border-bottom: 5px solid var(--dim);
}
input {
  all: unset;
}
.lableActive {
  transition: all ease 0.5s;
  transform: translateY(-28px);
}
.div--password {
  position: relative;
}
i {
  position: absolute;
  top: 18px;
  left: 50px;
}
button[type="submit"] {
  width: 50%;
  padding: 5px;
  margin: 35px;
  background-color: var(--accent);
  color: var(--text);
}
.forget--password {
  color: var(--text);
}
.create--account {
  color: var(--accent);
}
.lable--username {
  position: absolute;
  translate: 0px 17px;
}
</style>
