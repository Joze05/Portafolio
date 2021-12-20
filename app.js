let animationContainer = document.getElementsByClassName(
  "main-animation-container"
);
let columnApear = document.getElementsByClassName("column-apear");
let body = document.body;
let mainContent = document.getElementsByClassName("main-content");
let emoji = document.getElementById("emoji");
let header = document.getElementsByTagName("header");
let sticky = header[0].offsetTop;

for (let i = 0; i < columnApear.length; i++) {
  columnApear[2].addEventListener("animationend", function () {
    //Aqui va la función a ejecutar cuando la animación termine
    body.style.backgroundColor = "beige"; //cambiamos color de fondo del body

    animationContainer[0].style.display = "none"; //Quitamos las columnas de la animacion inicial

    mainContent[0].style.display = "flex"; //Colocamos los contenedores de la info de la web

    //emoji.style.display = "inline-block";

    header[0].style.display = "flex";
  });
}

function stickyHeader() {
  if (window.pageYOffset >= sticky) {
    header[0].classList.add("sticky");
  } else {
    header[0].classList.remove("sticky");
  }
}

window.onscroll = function () {
  stickyHeader();
};

window.addEventListener('scroll', function(){

let animatedPhoto = document.getElementById("photo");
let photoPosition = animatedPhoto.getBoundingClientRect().top;
console.log(photoPosition);

})
