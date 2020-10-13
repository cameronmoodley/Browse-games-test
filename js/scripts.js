// Use id's instead classes, classes return an Array, you want a single element.
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

// create a close function
// use if else to see if the class is on the div
// if it is remove the class, if its not add the class
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
