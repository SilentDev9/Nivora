import Index from "./assets/Pages/component/Index.vue";
import Login from "./assets/Pages/Account/login.vue";
import Register from "./assets/Pages/Account/Register.vue";
import ForgetPas from "./assets/Pages/Account/ForgetPassword.vue";
import ProductViwe from "./assets/Pages/Product/ProductViwe.vue";
import Dashboard from "./assets/Pages/Account/Dashboard.vue";
<<<<<<< HEAD
import DashboardFilms from "./assets/Pages/Account/dashboard/DashboardFilms.vue";
import DashboardSeries from "./assets/Pages/Account/dashboard/DashboardSeries.vue";
import DashboardLikes from "./assets/Pages/Account/dashboard/DashboardLikes.vue";
import DashboardSettings from "./assets/Pages/Account/dashboard/DashboardSettings.vue";
import About from "./assets/Pages/NivoraPage/About.vue";
=======
import DashboardFilms from "./assets/Pages/Account/DashboardFilms.vue";
import DashboardSeries from "./assets/Pages/Account/DashboardSeries.vue";
import DashboardLikes from "./assets/Pages/Account/DashboardLikes.vue";
import DashboardSettings from "./assets/Pages/Account/DashboardSettings.vue";

>>>>>>> 56377cba1a5988ac25761b24231e6c55fead697f
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
    path: "/ForgetPasswoed",
    component: ForgetPas
  },
  {
    path: "/CreateAccount",
    component: Register
  },
  {
    path:"/ProductViwe/drama/:id",
    component:ProductViwe
  },
  {
    path:"/ProductViwe/:id",
    component:ProductViwe
  },
  {
    path:"/Dashboard",
    component:Dashboard
  },
  {
    path:"/Dashboard/films",
    component:DashboardFilms
  },
  {
    path:"/Dashboard/series",
    component:DashboardSeries
  },
  {
    path:"/Dashboard/likes",
    component:DashboardLikes
  },
  {
    path:"/Dashboard/settings",
    component:DashboardSettings
<<<<<<< HEAD
  },
  {
    path:"/Login/about",
    component:About
=======
>>>>>>> 56377cba1a5988ac25761b24231e6c55fead697f
  }

];
