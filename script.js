const links = [
  "images/landscape-photography-tips-yosemite-valley-feature.webp",
  "images/lanscape.jfif",
  "images/UK_advice-gardening-growing-poppies_header.jpg",
]; // масив шляхів до картинок
let i = 0;
window.onload = function () {
  let slider = document.getElementById("slider");
  let nextButton = document.getElementById("next");

  nextButton.addEventListener("click", next);

  let imagesMini = document.querySelectorAll("img.mini");
  for (let i = 0; i < imagesMini.length; i++) {
    imagesMini[i].onclick = showSlide;
  }

  function showSlide(event) {
    let image = event.target;
    //   let name = image.id;
    //   name = name + ".jpg";
    //   image.src = "images/" + name;
    
  }

  function next() {
    i++;
    if (i >= links.length) {
      i = 0;
    }
    slider.src = links[i];
  }
};
