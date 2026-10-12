<template>
  <div>
    <div class="help--website" :class="{ 'avtive--help': showHelpWebsite }">
      {{ dataHelp }}
    </div>
    <div class="animate__animated  animate__fadeInDown">
      <div class="countiner">
        <form @submit.prevent="checkingLogin">
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
          <div><h1>Login</h1></div>
          <div>
            <label class="lable--email" :class="{ lableActive: labelActive }"
              >Email</label
            >
            <input
              type="email"
              required
              v-on:click="showLable"
              v-model="User.Email"
            />
          </div>
          <br />
          <div class="div--password">
            <label
              class="lable--password "
              :class="{ lableActive: showLablePassword }"
              >Password</label
            >
            <input
              type="password"
              v-on:click="lableActivePasswoed"
              v-model="User.Password"
            />
            <i
              class="fa fa-eye"
              :class="{ showPassword: activShowPassword }"
              v-on:click="activShowPassword"
            ></i>
          </div>
          <br />
          <button v-on:click="checkingLogin" type="submit">
            <span class="text--submit">ورود</span>
          </button>
          <div>
            <router-link to="/ForgetPasswoed">
              <span class="forget--password"
                >Forgot Password ?
              </span></router-link
            >
            <router-link to="/CreateAccount">
              <span class="create--account">Create Account</span></router-link
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labelActive: false,
      showLablePassword: false,
      showHelpWebsite: false,
      dataHelp: "",
      User: { Email: "", Password: "" }
    };
  },
  methods: {
    showLable() {
      this.labelActive = !this.labelActive;
    },
    lableActivePasswoed() {
      this.showLablePassword = !this.showLablePassword;
    },
    activShowPassword() {},
    showMessage(message) {
      this.dataHelp = message;
      this.showHelpWebsite = true;
      setTimeout(() => {
        this.showHelpWebsite = false;
      }, 3500);
    },
    checkingLogin() {
      const email = this.User.Email.trim().toLowerCase();
      const password = this.User.Password;
      if (email == "") {
        this.showMessage("ایمیل را وارد کن .");
        return;
      }
      if (password == "") {
        this.showMessage("رمز عبور را وارد کن .");
        return;
      }
      if (!email || !password) {
        this.showMessage("ایمیل و رمز عبور را کامل وارد کن.");
        return;
      }
      let registeredUser = null;
      try {
        registeredUser = JSON.parse(
          localStorage.getItem("nivoraUser") || "null"
        );
      } catch (error) {
        registeredUser = null;
      }
      if (
        !registeredUser ||
        registeredUser.email !== email ||
        registeredUser.password !== password
      ) {
        this.showMessage(
          "حسابی با این اطلاعات پیدا نشد. ابتدا ثبت‌نام کن یا اطلاعات را بررسی کن."
        );
        return;
      }
      this.$store.commit("User/SET_USER", {
        email: registeredUser.email,
        username: registeredUser.username
      });
      this.$router.push("/Dashboard");
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
