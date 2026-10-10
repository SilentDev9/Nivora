<template>
  <nav>
    <ul class="navbar--ul">
      <div>
        <button>
         <span> دسته بندی </span><i class="fa fa-caret-left "></i>
          <div class="show--list">
            <ul>
              <li>اکشن</li>
              <li>درام</li>
              <li>کمدی</li>
              <li>ترسناک</li>
              <li>جنایی</li>
            </ul>
          </div>
        </button>
      </div>

      <li>ارتباط با ما</li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
nav {
  margin: 1%;
  text-align: right;
  background: linear-gradient(360deg, var(--surface), rgba(229, 52, 44, 0.035));
  border-radius: 30px;
  border: 2px solid var(--line);
  direction: rtl;
}
.navbar--ul {
  padding: 10px 5%;
  margin: 0;

  display: flex;
  align-items: center;
}
.navbar--ul li {
  display: flex;
  align-items: center;
  padding-right: 20px;
  font-size: 1.1rem;
  font-weight: 700;
}

nav div {
  position: relative;
}
nav li i {
  transition: all 0.5s;
  padding: 13px;
}
.show--list {
  position: absolute;
  top: 40px;
  background-color: var(--surface);
  border: 3px solid var(--line);
  padding: 20px;
  transition: all 0.7s;
display: none;
}
.show--list ul {
  display: flex;
  padding: 0px;
}
.navbar--ul button:hover .show--list {
display: block;
}
.show--list:hover .show--list {
display: block;
}
.navbar--ul button:hover i {
  transition: all 0.5s;
  color: var(--accent);
  transform: rotate(-90deg);
}
</style>
