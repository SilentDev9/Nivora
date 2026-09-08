import Index from "./assets/Pages/component/Index.vue";
import Login from "./assets/Pages/Account/login.vue";
import Register from "./assets/Pages/Account/Register.vue";
import ForgetPasswoed from "./assets/Pages/Account/ForgetPassword.vue";
import ProductViwe from "./assets/Pages/Product/ProductViwe.vue";

export const Routes = [
  {
    path: "/",
    component: Index
  },
  {
    path: "/Login",
    component: Login
  },
  {
    path: "ForgetPasswoed",
    component: ForgetPasswoed
  },
  {
    path: "CreateAccount",
    component: Register
  },
  {
    // ":id" یعنی این بخش از مسیر متغیره — هر عددی که بجاش بیاد
    // (مثلاً /ProductViwe/3) با پارامتر id=3 در دسترس کامپوننت قرار می‌گیره
    path: "/ProductViwe/:id",
    component: ProductViwe
  }
];
