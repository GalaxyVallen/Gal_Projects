/** @format */

// Get the navigation links
const navLinks = document.querySelectorAll("li");

// Loop through each link and add event listener
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // Remove the "active" class from all links
    navLinks.forEach((link) => {
      link.classList.remove("active");
      item.parentElement.classList.remove("active");
    });

    // Add the "active" class to the clicked link
    link.classList.add("active");
  });
});

const navMenu = document.querySelector(".icon");
const hamburger = document.querySelector("nav ul");
navMenu.addEventListener("click", () => {
  hamburger.classList.toggle("show");

  document.body.addEventListener("click", function (event) {
    if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
      hamburger.classList.remove("show");
    }
  });
});

const tabMenu = document.querySelectorAll(".sidebar li a");
const tabPanels = document.querySelectorAll(".tab-panel");

// Loop untuk setiap tab menu
tabMenu.forEach(function (menu) {
  // Tambahkan event listener untuk saat menu di klik
  menu.addEventListener("click", function (event) {
    event.preventDefault(); // Mencegah aksi default

    // Hapus kelas active dari semua menu
    tabMenu.forEach(function (item) {
      item.parentElement.classList.remove("active");
    });

    // Tambahkan kelas active ke menu yang sedang di klik
    menu.parentElement.classList.add("active");

    // Ambil ID dari tab content yang sesuai
    const tabId = menu.getAttribute("href");

    // Sembunyikan semua tab content
    tabPanels.forEach(function (panel) {
      panel.classList.remove("active");
    });

    // Tampilkan tab content yang sesuai
    document.querySelector(tabId).classList.add("active");
  });
});

const orderItems = document.querySelectorAll(".order_items");
const ddd = document.getElementsByClassName(".order");
orderItems.forEach((item) => {
  item.addEventListener("click", function () {
    if (this.style.height !== "100%") {
      this.style.height = "100%";
      this.parentElement.style.height = "100%";
      this.style.overflow = "visible";
    } else {
      this.style.height = "";
      this.parentElement.style.height = "";
      this.style.overflow = "hidden";
    }
  });
});
