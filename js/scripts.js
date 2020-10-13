const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

// const trigger_search = document.querySelector(".trigger_search");
// const input = document.querySelector(".input");

// trigger_search.addEventListener("click", () => {
//   if (!input.classList.contains("input-open")) {
//     input.classList.add("input-open");
//     trigger_search.innerHTML = "  <i class='fas fa-times'>  </i>";
//   } else {
//     input.classList.remove("input-open");
//     trigger_search.innerHTML = "  <i class='fas fa-search'>  </i>";
//   }
// });
