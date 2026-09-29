const state = {
  products: [
    {
      id: 1,
      title: "داستان دو شهر",
      image: require("../../assets/img/Proposed/AtaleOfTwoCites.png"),
      time: "1:20:56",
      score: "7.8",
      cast: "",
      direction: ""
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
    },
    {
      id: 7,
      title: "مرد زمزمه کننده",
      image: require("../../assets/img/Proposed/The Whisper Man.png")
    }
  ]
};

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
