<template>
  <div class="countiner">
    <div class="product--header"><span>پیشنهادی</span></div>
    <div class="product">
    <div class="product--visite">
      <button class="slider--btn slider-btn-right" v-on:click="scrollRight"><</button>
      <ul>
        <li v-for="productderama in deramaProduct" :key="productderama.id">
          <router-link :to="'/ProductViwe/' + productderama.id">
            <img :src="productderama.image" :alt="productderama.title" />
          </router-link>
        </li>
      </ul>
       <button class="slider--btn slider-btn-left" v-on:click="scrollLeft">></button>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      deramaProduct: [
        {
          id: 1,
          title: "جدایی نادر از سیمین",
          image: require("../../img/Nivora_Posters_20/01 - جدایی نادر از سیمین.png"),
          time: "2:03:00",
          score: "8.3",
          cast: "پیمان معادی، لیلا حاتمی، ساره بیات",
          direction: "اصغر فرهادی"
        },

        {
          id: 2,
          title: "درباره الی",
          image: require("../../img/Nivora_Posters_20/02 - درباره الی.png"),
          time: "1:59:00",
          score: "7.9",
          cast: "ترانه علیدوستی، گلشیفته فراهانی، شهاب حسینی",
          direction: "اصغر فرهادی"
        },

        {
          id: 3,
          title: "فروشنده",
          image: require("../../img/Nivora_Posters_20/03 - فروشنده.png"),
          time: "2:04:00",
          score: "7.7",
          cast: "شهاب حسینی، ترانه علیدوستی، بابک کریمی",
          direction: "اصغر فرهادی"
        },

        {
          id: 4,
          title: "زندگی و یک روز",
          image: require("../../img/Nivora_Posters_20/04 - زندگی و یک روز.png"),
          time: "2:15:00",
          score: "8.1",
          cast: "پیمان معادی، نوید محمدزاده، پریناز ایزدیار",
          direction: "سعید روستایی"
        },

        {
          id: 5,
          title: "آواز گنجشک‌ها",
          image: require("../../img/Nivora_Posters_20/05 - آواز گنجشک ها.png"),
          time: "1:36:00",
          score: "7.9",
          cast: "رضا ناجی، مریم اکبری، کامران دهقان",
          direction: "مجید مجیدی"
        },

        {
          id: 6,
          title: "بچه‌های آسمان",
          image: require("../../img/Nivora_Posters_20/06 - بچه های آسمان.png"),
          time: "1:29:00",
          score: "8.2",
          cast: "رضا ناجی، امیر فرخ هاشمیان، بهاره صدیقی",
          direction: "مجید مجیدی"
        },

        {
          id: 7,
          title: "باران",
          image: require("../../img/Nivora_Posters_20/07 - باران.png"),
          time: "1:34:00",
          score: "7.7",
          cast: "حسین عابدینی، زهرا بهرامی، حسین رحیمی",
          direction: "مجید مجیدی"
        },

        {
          id: 8,
          title: "گاو",
          image: require("../../img/Nivora_Posters_20/08 - گاو.png"),
          time: "1:44:00",
          score: "7.8",
          cast: "عزت‌الله انتظامی، مهین شهابی، علی نصیریان",
          direction: "داریوش مهرجویی"
        },

        {
          id: 9,
          title: "دایره",
          image: require("../../img/Nivora_Posters_20/09 - دایره.png"),
          time: "1:30:00",
          score: "7.4",
          cast: "نرگس مامی‌زاده، مریم پالویان، مژگان فراه‌مرزی",
          direction: "جعفر پناهی"
        },

        {
          id: 10,
          title: "شهر زیبا",
          image: require("../../img/Nivora_Posters_20/10 - شهرزیبا.png"),
          time: "1:38:00",
          score: "7.6",
          cast: "فرامرز قریبیان، ترانه علیدوستی، بابک انصاری",
          direction: "اصغر فرهادی"
        },

        {
          id: 11,
          title: "بید مجنون",
          image: require("../../img/Nivora_Posters_20/11 - بید مجنون.png"),
          time: "1:36:00",
          score: "7.3",
          cast: "پرویز پرستویی، رویا تیموریان، صغرا اویسی",
          direction: "مجید مجیدی"
        },

        {
          id: 12,
          title: "آژانس شیشه‌ای",
          image: require("../../img/Nivora_Posters_20/12 - آژانس شیشه ای.png"),
          time: "1:54:00",
          score: "7.7",
          cast: "پرویز پرستویی، رضا کیانیان، حبیب رضایی",
          direction: "ابراهیم حاتمی‌کیا"
        },

        {
          id: 13,
          title: "بانوی اردیبهشت",
          image: require("../../img/Nivora_Posters_20/13 - بانوی اردیبهشت.png"),
          time: "1:28:00",
          score: "6.4",
          cast: "گلاب آدینه، مینو فرشچی، نیره فراهانی",
          direction: "رخشان بنی‌اعتماد"
        },

        {
          id: 14,
          title: "ماهی‌ها عاشق می‌شوند",
          image: require("../../img/Nivora_Posters_20/14 - ماهی ها عاشق میشوند.png"),
          time: "1:36:00",
          score: "6.9",
          cast: "رضا کیانیان، رویا نونهالی، گلشیفته فراهانی",
          direction: "علی رفیعی"
        },

        {
          id: 15,
          title: "کشتزارهای سفید",
          image: require("../../img/Nivora_Posters_20/15 - کشتزارهای سفید.png"),
          time: "1:32:00",
          score: "7.6",
          cast: "حسن پورشیرازی، یونس غزالی، محمد ربانی‌پور",
          direction: "محمد رسول‌اف"
        },

        {
          id: 16,
          title: "۲۰ انگشت",
          image: require("../../img/Nivora_Posters_20/16 - ۲۰ آگوست.png"),
          time: "1:12:00",
          score: "6.7",
          cast: "منیژه حکمت، بیژن دانشمند",
          direction: "مانیا اکبری"
        },

        {
          id: 17,
          title: "هفت روز",
          image: require("../../img/Nivora_Posters_20/17 - هفت روز.png"),
          time: "1:53:00",
          score: "6.4",
          cast: "ویشکا آسایش، مجید بختیاری، سینا پرهام",
          direction: "علی صمدی احدی"
        },

        {
          id: 18,
          title: "آیه‌های زمینی",
          image: require("../../img/Nivora_Posters_20/18 - آیه های زمینی.png"),
          time: "1:17:00",
          score: "7.2",
          cast: "بهرام ارک، صدف عسگری، اردشیر کاظمی",
          direction: "علی عسگری، علیرضا خاتمی"
        },

        {
          id: 19,
          title: "برندگان",
          image: require("../../img/Nivora_Posters_20/19 - برندگان.png"),
          time: "1:25:00",
          score: "6.9",
          cast: "رضا ناجی، یحیی، لیلا",
          direction: "حسن ناظر"
        },

        {
          id: 20,
          title: "دانه انجیر معابد",
          image: require("../../img/Nivora_Posters_20/20 - دانه انجیر معابد.png"),
          time: "2:47:00",
          score: "7.5",
          cast: "سهیلا گلستانی، میثاق زارع، ستاره ملکی",
          direction: "محمد رسول‌اف"
        }
      ]
    };
  },
  methods:{
    scrollRight(){
      this.$refs.movieSlider.scrollby({
        left:-500,
        behavior:'smooth'
      })
    },
     screenLeft(){
      this.$refs.movieSlider.scrollby({
        left:500,
        behavior:'smooth'
      })
    }
  }
};
</script>


<style scoped>
.product{

  overflow-x: auto;
  overflow-y: hidden;
  direction: rtl;
position: relative;
}
.product--visite ul{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  width: max-content;
  margin: 0;
  padding: 0;

}
.product--visite li{
  flex: 0 0 auto;
  width: 140px;
}
.product--visite li img{
  display: block;
  height: 250px;
  object-fit: cover;
  border-radius: 12px;
}
.slider--btn{
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  width: 42px;
  height: 70px;
  border: none;
  border-radius: 12px;
  background-color: rgba(20, 20, 24, 0.85);
  color: white;
  font-size: 38px;
  line-height: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: 0.50;
}
.slider-btn-left{
  left: 0;
}
</style>
