export default function menu() {
  const content = document.querySelector(".content");

  const menuPage = document.createElement("div");
  menuPage.classList.add("menu-page");
  content.appendChild(menuPage);

  const selectMenuPage = document.querySelector(".menu-page");

  const menuSection = document.createElement("div");
  menuSection.classList.add("menu-section");
  selectMenuPage.appendChild(menuSection);

  const selectmenuSection = document.querySelector(".menu-section");

  let divArr = [];

  function createDiv(number, xd) {
    for (let i = 0;  i < number; i++) {
      const menuCard = document.createElement("div");
      divArr.push(menuCard);
    }
    divArr.forEach(element => {
      selectmenuSection.appendChild(element);

      const menuCardImg = document.createElement("img");
      menuCardImg.src = "../src/img/croissant.png"
      element.appendChild(menuCardImg);

      const menuCardH1 = document.createElement("h1");
      menuCardH1.textContent = "Croissant";
      element.appendChild(menuCardH1); 

      const menuCardP = document.createElement("p");
      menuCardP.textContent = "Lorem ipsum dolor sit am qui repellat quia aut earum quia et maiores quia.";
      element.appendChild(menuCardP);

      const menuCardSpan = document.createElement("span");
      menuCardSpan.textContent = "$3.19";
      element.appendChild(menuCardSpan);

      const menuCardButton = document.createElement("button");
      menuCardButton.textContent = "Add To Card";
      element.appendChild(menuCardButton);
    });
  }
 createDiv(6)
}
