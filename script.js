const wrapper = document.querySelector(".wrapper");
const noBtn = document.querySelector(".no-btn");
const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();
noBtn.addEventListener("mouseover", () => {
  const i =
    Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
  const j =
    Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;
  noBtn.style.left = i + "px";
  noBtn.style.top = j + "px";
});

const urlParams = new URLSearchParams(window.location.search);
const nama = urlParams.get("nama");
console.log(nama);

const namakamu = document.querySelector(".namakamu");
namakamu.innerText = nama;
