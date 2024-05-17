const serials = document.querySelector(".serials");
const header = document.querySelector("header");
const popup = document.querySelector(".popup");

serials.addEventListener("mouseover", () => {
  console.log(serials);
  popup.classList.add("open__popup");
  header.classList.add("popup__open__header");
});

popup.addEventListener("mouseover", () => {
  popup.classList.add("open__popup");
  header.classList.add("popup__open__header");
});

popup.addEventListener("mouseout", () => {
  popup.classList.remove("open__popup");
  header.classList.remove("popup__open__header");
});
