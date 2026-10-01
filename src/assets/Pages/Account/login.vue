<template>
  <transition class="animated fadeOutDown">
    <div>
      <div class="help--website" :class="{ 'avtive--help': showHelpWebsite }">
        {{ dataHelp }}
      </div>
      <div class="countiner">
        <form>
          <div class="sucsses--form">
            <div
              class="success"
              :class="{
                'success--active': (User.Email || '').endsWith('@gmail.com')
              }"
            ></div>
            <div
              class="success"
              :class="{
                'success--active': (User.Password.length > 7)
              }"
            ></div>
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
          <br/>
          <div class="div--password">
            <label
              class="lable--password "
              :class="{ lableActive: showLablePassword }"
              >Password</label
            >
            <input type="password" v-on:click="lableActivePasswoed" />
            <i
              class="fa fa-eye"
              :class="{ showPassword: activShowPassword }"
              v-on:click="activShowPassword"
            ></i>
          </div>
          <br />
          <router-link to="">
            <button type="submit" v-on:click="checkingLogin">submit</button>
          </router-link>
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
  </transition>
</template>

<script>
export default {
  data() {
    return {
      labelActive: false,
      showLablePassword: false,
      showHelpWebsite: false,
      dataHelp: "",
      User: {
        Email: "",
        Password: ""
      }
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
    checkingLogin() {
      if (this.User.Email == "") {
        this.showHelpWebsite = !this.showHelpWebsite;
        this.dataHelp = " اوه توی قسمت اول Email خودتو بزن";
        setTimeout(() => {
          this.showHelpWebsite = !this.showHelpWebsite;
        }, 3000);
        return;
      }
      if (this.User.Password == "") {
        this.showHelpWebsite = !this.showHelpWebsite;
        this.dataHelp = " اوه Password رو یادت رفت کامل کنی";
        setTimeout(() => {
          this.showHelpWebsite = !this.showHelpWebsite;
        }, 3000);
        return;
      }
      this.$store.commit("User/SET_USER", {
        Email: this.User.Email
      });
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
  background-color: green;
}
.success {
  width: 45%;
  height: 100%;
  border-radius: 10px;
  border: 2px solid var(--dim);
}
.sucsses--form {
  width: 20%;
  height: 20px;
  display: flex;
  justify-content: space-around;
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
  transform: translateY(12px);
  transition: all ease 0.3s;
}
.lableActive {
  transform: translateY(-20px);
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
button[type="submit"]::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    bottom right,
    rgba(229, 53, 44, 0.358),
    var(--surface)
  );
  opacity: 0;
  transition: all 0.5s ease;
  border-radius: 10px;
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
@media (max-width: 500px) {
  .countiner {
    min-height: 500px;
    padding: 24px 14px;
  }
  input[type="email"],
  input[type="password"],
  input[type="text"] {
    width: 88%;
  }
  .lable--email,
  .lable--password,
  .lable--username {
    right: 8%;
  }
  .div--password > i {
    left: 4%;
  }
}
</style>
