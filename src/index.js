import "./style.css";
import header from "./header.js";
import { array } from "./header.js";
import homePage from "./home-page.js";
import menu from "./menu.js";
import contact from "./contact.js";

const selectContent = document.querySelector(".content");

function firstLoad() {
  header();
  homePage();
}

firstLoad();

function clearPage() {
  selectContent.removeChild(selectContent.children[1]);
}

array.forEach((element) => {
  element.addEventListener("click", () => {
    if (element.textContent == "Home") {
      clearPage();
      return homePage();
    } else if (element.textContent == "Menu") {
      clearPage();
      return menu();
    } else if (element.textContent == "Contact") {
      clearPage();
      return contact();
    }
  });
});
