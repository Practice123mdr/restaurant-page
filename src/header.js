export {array}
let array = [];
export default function header() {
  const content = document.querySelector(".content");
  const header = document.createElement("header");
  content.appendChild(header);

  const ul = document.createElement("ul");
  header.appendChild(ul);

  function createLi(text, idName) {
    for (let i = 0; i < 1; i++) {
      let li = document.createElement("li");
      li.textContent = text;
      li.setAttribute("id", idName)
      array.push(li);
      ul.appendChild(li);
    }
  }
  createLi("Home", "home");
  createLi("Menu", "menu");
  createLi("Contact", "contact");
}
