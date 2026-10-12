<template>
  <nav>
    <ul class="navbar--ul">
      <div>
        <button>
          <li>دسته بندی <i class="fa fa-caret-left "></i></li>
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

      <li><router-link to="/about">درباره سازنده</router-link></li>
      <li><router-link to="/support">پشتیبانی</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
nav {
  display: none;
}
@media (min-width: 700px) {
  nav {
    display: block;
    margin: 1%;
    text-align: right;
    background: linear-gradient(
      360deg,
      var(--surface),
      rgba(229, 52, 44, 0.035)
    );
    border-radius: 30px;
    border: 2px solid var(--surface);
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
  nav a {
    color: var(--text);
    text-decoration: none;
    transition: color 0.2s ease;
  }
  nav a:hover {
    color: var(--accent);
  }
  .navbar--ul button {
    color: var(--text);
    background: transparent;
    border: 0;
    padding: 10px 14px;
    cursor: pointer;
    font: inherit;
  }
  .navbar--ul > div {
    margin-left: 8px;
  }
  .show--list ul {
    gap: 14px;
    list-style: none;
    white-space: nowrap;
  }
  .show--list li {
    padding: 8px 10px;
    border-radius: 8px;
    cursor: pointer;
  }
  .show--list li:hover {
    color: var(--accent);
    background: var(--bg);
  }
  nav {
    margin: 10px;
    border-radius: 16px;
  }
  .navbar--ul {
    flex-wrap: wrap;
    gap: 8px;

  }
  .navbar--ul li {
    font-size: 0.9rem;
    padding: 6px;
  }
  .show--list {
    right: 0;
    max-width: calc(100vw - 40px);
    overflow: auto;
  }
  .show--list ul {
    flex-direction: column;
    gap: 4px;
  }
}
.navbar--ul{
  padding: 0px;
}
.show--list {
  position: absolute;
  top: 60px;
  background: linear-gradient(360deg, var(--surface), rgba(229, 52, 44, 0.035));
  padding: 20px;
  transition: all 0.7s;
  display: none;
  border-radius: 30px;
}
.show--list ul {
  padding: 0px;
}
.show--list ul li {
  display: flex;
  padding: 10px;
}
.navbar--ul button:hover .show--list {
  display: block;
}
.show--list:hover .show--list {
  display: block;
}
.show--list:hover {
  display: block;
}
.navbar--ul button:hover i {
  transition: all 0.5s;
  color: var(--accent);
  transform: rotate(-90deg);
}
</style>
