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
    parallax.style.transform = "translateY(" + (offset * 0.3) + "px)";
  }
});


//////////////////////////////////// SWIPER / carroussel de chats /////////////////////////////////////////////////////

// init Swiper:
const swiper = new Swiper('.mySwiper', {
    centeredSlides: 'true', //Centre les slides 
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

//////////////////////////////////// effet scroll sur les titres /////////////////////////////////////////////////////

// Ajout d'une class commune .titres aux titres, mots isolés dans des span
document.addEventListener('DOMContentLoaded', function() {
  const titres = document.querySelectorAll('h2, h3'); // sectionne les titres h2 et h3

  titres.forEach(titre => {
      titre.classList.add('animation-titres');//Ajout de la classe animation-titres
      const text = titre.innerText; // text contient le texte du titre
      const mots = text.split(' '); // tableau mots
      titre.innerHTML = mots.map((mot, index) => `<span style="animation-delay: ${index * 0.5}s">${mot}</span>&nbsp;`).join(' ');//chaque mot est enveloppé dans une balise <span>. Chaque <span> a également un délai d'animation calculé en fonction de son index
  });


});

// Création d'un Observer pour savoir quand l'utilisateur se trouve dans les sections avec les titres
const observer = new IntersectionObserver(function(entries, observer) {

  entries.forEach(entry => {  //boucle sur les éléments observés.
      
    if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {   // Si l'élement est au moins visible à 50%
          const spans = entry.target.querySelectorAll('span');//Sélectionne tous les éléments <span>
          spans.forEach(span => {
              span.classList.add('texte-mot');//Ajoute la classe texte-mot à chaque élément <span>.
          });

          // Quand la class a été ajoutée, on arrête l'observation de l'élément pour optimiser les performances
          observer.unobserve(entry.target);
      }
  });
}, {
  threshold: 0.5 // valeur du ratio d'intersection
});

// fonction pour observer quand les titres entrent dans la zone d'intersection avec l'ecran pour declencher les animations.


function observerLesTitres() {
  const titres = document.querySelectorAll('.animation-titres'); //selectionne les elements de classe ".animation-titres"

  //boucle qui applique l'observateur d'intersection à chaque titre de la liste titres
  titres.forEach(titre => {
      observer.observe(titre); 
  });
}

// Appel de la fonction d'observation des titres au scroll
window.addEventListener('scroll', observerLesTitres);//lorsque l'utilisateur fait défiler la page, la fonction observerLesTitres est déclenchée




////////////////////////////////////////////////////////////////