(function(){
    console.log('début du carrousel');
    let boutcarrousel__ouvrir = document.querySelector('.carrousel__ouvrir');
    let carrousel = document.querySelector('.carrousel');
    let carrousel__x = document.querySelector('.carrousel__x');
    let galerie = document.querySelector(".galerie");
    let galerie__img = galerie.querySelectorAll("img");
    console.log("galerie--img " + galerie__img.length);
    /* ------------------------ ouvrir boite modele */
    boutcarrousel__ouvrir.addEventListener('mousedown', function(){
        carrousel.classList.add('carrousel--ouvrir')
    })
    carrousel__x.addEventListener('mousedown', function(){
        carrousel.classList.remove('carrousel--ouvrir')
    })

    function ajouter_img_dans_carroussel(){
        for(const elm of galerie__img){
            //console_log(elm.getAttribute('src'));
            let img = document.createElement('img');
            img.setAttribute('src', elm.getAttribute('src'));
            console.log(img.getAttribute('src'));
        }
    }

})() //fonction auto-executante

