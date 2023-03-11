export default function contact() {
  const content = document.querySelector(".content");

  const contactPage = document.createElement("div");
  contactPage.classList.add("contact-page");
  content.appendChild(contactPage);
  const selectContactPage = document.querySelector(".contact-page");

  const contactForm = document.createElement("div");
  contactForm.classList.add("contact-form");
  selectContactPage.appendChild(contactForm);
  const selectContactForm = document.querySelector(".contact-form");

  const pInfo = document.createElement("div");
  pInfo.classList.add("pinfo");
  selectContactForm.appendChild(pInfo);
  const selectPInfo = document.querySelector(".pinfo");

  const subject = document.createElement("div");
  subject.classList.add("subject");
  selectContactForm.appendChild(subject);
  const selectSubject = document.querySelector(".subject");

  const sendButton = document.createElement("button");
  sendButton.textContent = "Send";
  contactForm.appendChild(sendButton);

  function createDiv(placeholder) {
    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("placeholder", placeholder);
    selectPInfo.appendChild(input);
  }
  createDiv("First Name");
  createDiv("Surname");
  createDiv("Email");
  createDiv("Phone Number");

  const textArea = document.createElement("textarea");
  textArea.setAttribute("placeholder", "Subject");
  selectSubject.appendChild(textArea);
}
