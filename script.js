function openPresent() {
  console.log("tiklandi");
  const img = document.querySelector("#hediye");
  img.removeEventListener("click", openPresent);

  const hediye = document.querySelector("#present");
  const araba = document.querySelector("#car");

  hediye.classList.add("hidden");
  araba.classList.remove("hidden");
}

const image = document.querySelector("#present");
image.addEventListener("click", openPresent);
