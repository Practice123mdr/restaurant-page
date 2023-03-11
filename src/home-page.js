export default function homePage() {
  const content = document.querySelector(".content");

  const homePageDiv = document.createElement("div");
  homePageDiv.classList.add("home-page");
  content.appendChild(homePageDiv);

  const h1 = document.createElement("h1");
  h1.textContent = "Bakery"
  homePageDiv.appendChild(h1);

  const firstP = document.createElement("p");
  firstP.textContent = "Uo repellat expedita non impedit commodi qui illum perferendis?";
  homePageDiv.appendChild(firstP);

  const secondP = document.createElement("p");
  secondP.textContent = "Lorem ipsum dolor sit amet. Aut quia quisquam.";
  homePageDiv.appendChild(secondP);
}