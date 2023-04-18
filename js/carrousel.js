(function(){
    //console.log('début du carrousel');
    let boutcarrousel__ouvrir = document.querySelector('.carrousel__ouvrir')
    /* ---------------- variable du carroussel */
    let carrousel = document.querySelector('.carrousel')
    let carrousel__x = document.querySelector('.carrousel__x')
    let carrousel__figure = document.querySelector(".carrousel__figure")
    let carrousel__form = document.querySelector(".carrousel__form")

    /*--------------------- variable de la galerie */
    let galerie = document.querySelector(".galerie")
    let galerie__img = galerie.querySelectorAll("img")
    //console.log("galerie--img " + galerie__img.length);
    /* ------------------------ ouvrir boite modele */
    let index = 0
    let ancien_index = -1

    boutcarrousel__ouvrir.addEventListener('mousedown', function(){
        carrousel.classList.add('carrousel--ouvrir')
        ajouter_img_dans_carroussel()

    })
    carrousel__x.addEventListener('mousedown', function(){
        carrousel.classList.remove('carrousel--ouvrir')
    })

    function ajouter_img_dans_carroussel(){
        for(const elm of galerie__img){
            creation_img_carrousel(elm)
            creation_radio_carrousel()
        }
    }

    function creation_img_carrousel(elm){
            //console.log(elm.getAttribute('src'));
            let img = document.createElement('img');
            img.src=elm.src
            img.classList.add('carrousel__img')
            //img.setAttribute('src', elm.getAttribute('src'));
            //console.log(img.getAttribute('src'));
            carrousel__figure.appendChild(img)
    }

    /**
     * creation d un radio noutton
     */
    let position = 0

    function creation_radio_carrousel(){
        let rad = document.createElement('input')
        rad.setAttribute('type', 'radio')
        rad.setAttribute('name', 'carrousel__rad')
        rad.classList.add('carrousel__rad')
        rad.dataset.index = position
        position = position + 1
        carrousel__form.appendChild(rad)

        rad.addEventListener('mousedown', function(){
            //console.log(this.dataset.index)
           // carrousel__figure.children[this.dataset.index].style.opacity = 1
            index = this.dataset.index
            if(ancien_index!= -1){
               // carrousel__figure.children[ancien_index].style.opacity = 0
                carrousel__figure.children[ancien_index].classList.remove('carrousel__img--activer')
            }
            carrousel__figure.children[index].classList.add('carrousel__img--activer')
            //carrousel__figure.children[index].style.opacity = 1
            ancien_index = index

        })
    }

})() //fonction auto-executante

