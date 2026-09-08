// این ماژول لیست محصولات پیشنهادی رو نگه می‌داره.
// فعلاً دیتا استاتیکه (توی همین فایل)، ولی وقتی بک‌اند (ASP.NET Core) آماده شد،
// فقط کافیه به‌جای این آرایه‌ی ثابت، یه action با fetch/axios به API واقعی وصل بشه —
// بقیه‌ی کامپوننت (ProductProposed.vue) دست‌نخورده می‌مونه چون از getter میاد، نه مستقیم از این فایل.

const state = {
  products: [
    {
      id: 1,
      title: "داستان دو شهر",
      image: require("../../assets/img/Proposed/AtaleOfTwoCites.png")
    },
    {
      id: 2,
      title: "بنگ",
      image: require("../../assets/img/Proposed/BANG.png")
    },
    {
      id: 3,
      title: "کایوتی در مقابل اکمی",
      image: require("../../assets/img/Proposed//CoyoteVsAcme.png")
    },
    {
      id: 4,
      title: "مسافران دهلی",
      image: require("../../assets/img/Proposed//DelhiSafari.png")
    },
    {
      id: 5,
      title: "بال های هراس",
      image: require("../../assets/img/Proposed/Haras.png")
    },
    {
      id: 6,
      title: "آلفا",
      image: require("../../assets/img/Proposed/ALPHA.png")
    }
  ]
};
// فقط ۶ تای اول رو برای بخش "پیشنهادی" برمی‌گردونه —
// بعداً اگه محصول بیشتر اضافه شد، این getter جداست و منطق نمایش رو کنترل می‌کنه
const getters = {
  allProducts: state => state.products,
  proposedProducts: state => state.products.slice(0, 6),

  productById: state => id =>
    state.products.find(p => String(p.id) === String(id))
};

export default {
  namespaced: true,
  state,
  getters
};
