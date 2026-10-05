      const moonPath =
        '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>';
      const sunPath =
        '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>';

      function applyTheme(theme) {
        document.documentElement.setAttribute("data-theme", theme);
        document.getElementById("themeIcon").innerHTML =
          theme === "dark" ? sunPath : moonPath;
        localStorage.setItem("nivora-theme", theme);
      }
      function toggleTheme() {
        const current = document.documentElement.getAttribute("data-theme");
        applyTheme(current === "dark" ? "light" : "dark");
      }
      applyTheme(localStorage.getItem("nivora-theme") || "dark");

