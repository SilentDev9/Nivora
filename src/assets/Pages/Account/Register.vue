<template>
  <div
    class="animate__animated animate__fadeInLeft "
    :class="{ animate__fadeOutRight: exitHandler }"
  >
    <div class="help--website" :class="{ 'avtive--help': showHelpWebsite }">
      {{ dataHelp }}
    </div>
    <div class="countiner">
      <form @submit.prevent="checkingRegister">
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
          <label class="lable--password" :class="{ lableActive: labelActive }"
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
        <button type="submit">ثبت‌ نام</button>

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
        const email = this.User.Email.trim().toLowerCase();
        const user = {
          email,
          username: this.User.Username.trim(),
          password: this.User.Password
        };
        localStorage.setItem("nivoraUser", JSON.stringify(user));
        this.$store.commit("User/SET_USER", {
          email: user.email,
          username: user.username
        });
        this.$router.push("/Dashboard");
      }
    }
  }
};
</script>

<style>
.countiner {
  min-height: 520px;
  height: auto;
  margin: 10%;
  padding: 32px 28px;
  background: linear-gradient(145deg, var(--surface), rgba(229, 53, 44, 0.07));
  border-radius: 20px;
  color: var(--text);
  text-align: center;
  direction: rtl;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  border: 2px solid var(--line);
}
.countiner h1 {
  padding: 10px;
  font-size: clamp(1.6rem, 5vw, 2.2rem);
}
.success--active {
  color: green;
}

.sucsses--form {
  width: 20%;
  height: 20px;
  display: flex;
  justify-content: space-around;
}
.sucsses--form {
  font-size: 25px;
}
form {
  width: 100%;
  height: auto;
  color: var(--text);
  position: relative;
}
input[type="email"],
input[type="password"],
input[type="text"] {
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
input[type="email"]:focus,
input[type="password"]:focus,
input[type="text"]:focus {
  border-bottom-color: var(--accent);
}
.lable--email,
.lable--password,
.lable--username {
  position: absolute;
  right: 12%;
  transform: translatex(-22px);
  transition: all ease 0.3s;
}
.lableActive {
  transform: translateY(-25px);
  color: var(--accent);
}
.div--password {
  position: relative;
}
.div--password > i {
  position: absolute;
  top: 14px;
  left: 8%;
  color: var(--dim);
  cursor: pointer;
}
button[type="submit"] {
  width: min(280px, 80%);
  padding: 10px 18px;
  margin: 32px auto 20px;
  display: block;
  background: linear-gradient(145deg, var(--surface), rgba(229, 53, 44, 0.358));

  color: var(--text);
  font-size: 1rem;
  border: 0;
  border-radius: 10px;
  transition: all 0.2s ease;
  position: relative;
}
.text--submit {
  z-index: 100;
  font-weight: 800;
}
button[type="submit"]::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(40deg, rgba(229, 53, 44, 0.358), var(--surface));
  opacity: 0;
  transition: all 0.8s ease;
  border-radius: 10px;
  z-index: 1;
}
button[type="submit"]:hover::before {
  opacity: 1;
}
.forget--password {
  color: var(--text);
}
.create--account {
  color: var(--accent);
}
transition {
  transition: all 1s;
}
@media (max-width: 820px) {
  .countiner {
    padding: 24px 14px;
    margin: 5% 10%;
  }
  input[type="email"],
  input[type="password"],
  input[type="text"] {
    width: 70%;
  }
  .lable--email,
  .lable--password,
  .lable--username {
    right: 8%;
  }
  .div--password > i {
    left: 2%;
  }
  .sucsses--form {
    width: 10%;
  }
}
</style>
