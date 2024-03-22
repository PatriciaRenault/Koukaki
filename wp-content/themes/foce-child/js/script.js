////////////////////////////////// parallaxe video/logo ////////////////////////////////////////////////////////:
let parallax = document.querySelector("#logo-parallax");
let imageP = document.querySelector("#logo-banner");

window.addEventListener("scroll", function () {
  let offset = window.scrollY;
  let parallaxTop = parallax.offsetTop;
  let parallaxHeight = parallax.offsetHeight;
  let windowHeight = window.innerHeight;

  // Vérifier si l'élément parallax est dans la fenêtre de visualisation
  if (offset + windowHeight > parallaxTop && offset < parallaxTop + parallaxHeight) {
    parallax.style.transform = "translateY(" + (offset * 0.4) + "px)";
  }
});

//////////////////////////////////// effet scroll sur les titres /////////////////////////////////////////////////////

const titles = document.getElementsByTagName('span') // recherche des elements <span>

// création de l' objet IntersectionObserver qui verifie si l'element est visible ou pas.
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.classList.add('active')  // si l'element est dans la fenetre j'ajoute la classe active
        } else {
        entry.target.classList.remove('active') // sinon je supprime la classe active
        } 
    })
});
// j'observe chaque element du tableau de titles. lors du scroll, IntersectionObserver sera déclenchée.
for (let i = 0; i < titles.length; i++) {
const title = titles[i];
observer.observe(title)
}


//////////////////////////////////// SWIPER / carroussel de chats /////////////////////////////////////////////////////

// init Swiper:
const swiper = new Swiper('.mySwiper', {
    centeredSlides: true, //Centre les slides
    slidesPerView: 'auto', // nombre de diapositives visibles
    slideToClickedSlide: true, //permet de cliquer sur une diapo
    effect: 'coverflow',//effet de Cover Flow
    grabCursor: true,//curseur de type "main" lors du survol
    loop: true, //lecture en boucle.
    loopAdditionalSlides: 1,// Ajoute une diapositive supplémentaire 
    coverflowEffect: {//paramètres de l'effet de Cover Flow.
        rotate: 60,//Angle de rotation 
        slideShadows: false,//pas d'ombre
        scale: 0.85,// Échelle des diapositives
        modifier: 1,//Vitesse de l'effet
    },
});

//////////////////////////////////// effet de parallaxe sur les nuages lors du défilement de la page /////////////////////////////////////////////////////

//sélectionner des éléments HTML qui ont les id "big_cloud" et "little_cloud" et les stock dans les constantes bigCloud et littleCloud 
const bigCloud = document.getElementById("big_cloud")
const littleCloud = document.getElementById("little_cloud")


//ajout un écouteur d'événements de défilement à la fenêtre  
window.addEventListener('scroll', () => {
    const screenY = window.scrollY;
    const speed = 0.5;

    const nuageOffset = (screenY * speed) + 300;
//Applique la transformation CSS translateX aux éléments bigCloud et littleCloud
    bigCloud.style.setProperty("transform", `translateX(${nuageOffset}px)`);
    littleCloud.style.setProperty("transform", `translateX(${nuageOffset}px)`);
    
})