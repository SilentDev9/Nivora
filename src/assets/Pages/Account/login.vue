<template>
  <div>
    <div class="help--website" :class="{ 'avtive--help': showHelpWebsite }">
      {{ dataHelp }}
    </div>
    <div class="countiner">
      <form>
        <h1>Login</h1>

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
          <input type="password" v-on:click="lableActivePasswoed" />
          <i
            class="fa fa-eye"
            :class="{ showPassword: activShowPassword }"
            v-on:click="activShowPassword"
          ></i>
        </div>
        <button type="submit" v-on:click="checkingLogin">submit</button>
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
</template>

<script>
import { RouterView } from "vue-router";

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
      } else if (this.User.Password == "") {
        this.dataHelp = " اوه Password رو یادت رفت کامل کنی";
        this.showHelpWebsite = !this.showHelpWebsite;
        setTimeout(() => {
          this.showHelpWebsite = !this.showHelpWebsite;
        }, 3000);
      }
    }
  }
};
</script>

<style>
.countiner {
  height: 400px;
  background-color: var(--surface);
  border-radius: 20px;
  color: white;
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
  translate: 0px;
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
