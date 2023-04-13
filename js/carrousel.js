(function(){
    console.log('début du carrousel');
    let boutcarrousel__ouvrir = document.querySelector('.carrousel__ouvrir');
    /* ---------------- variable du carroussel */
    let carrousel = document.querySelector('.carrousel');
    let carrousel__x = document.querySelector('.carrousel__x');
    let carrousel__figure = document.querySelector(".carrousel__figure");

    /*--------------------- variable de la galerie */
    let galerie = document.querySelector(".galerie");
    let galerie__img = galerie.querySelectorAll("img");
    console.log("galerie--img " + galerie__img.length);
    /* ------------------------ ouvrir boite modele */
    boutcarrousel__ouvrir.addEventListener('mousedown', function(){
        carrousel.classList.add('carrousel--ouvrir')
        ajouter_img_dans_carroussel()

    })
    carrousel__x.addEventListener('mousedown', function(){
        carrousel.classList.remove('carrousel--ouvrir')
    })

    function ajouter_img_dans_carroussel(){
        for(const elm of galerie__img){
            console.log(elm.getAttribute('src'));
            let img = document.createElement('img');
            img.setAttribute('src', elm.getAttribute('src'));
            console.log(img.getAttribute('src'));
            carrousel__figure.appendChild(img);
        }
    }

})() //fonction auto-executante

