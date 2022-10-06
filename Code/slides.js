/* Mon code javascript a pour but de gérer le défilement des slides dans les sections #tennisman et #engineer. Pour chacune
de ces sections, j'ai crée un EventListenner permettant à l'utilisateur de cliquer sur les boutons droite et gauche. Lorsque le
click a lieu, ces EventListenner font appel à la fonction swipe. Celle-ci réalise une translation vers la gauche ou la droite
des blocs div de classe "slide" grâce au signe de l'incrément : positif pour défiler vers la droite et négatif vers la gauche.
Les blocs div de classe "slide" sont représentés par un objet avec trois attributs : un selecteur qui permet de sélectionner 
les slides que l'on souhaite faire défiler (tennisman ou engineer), un attribut slidesArray qui represente un tableau comprenant 
les slides avec leur indices et enfin un troisième attribut indice, qui permet de pointer la slide actuellement visible par
l'utilisateur. */

        const swipe = (slides, increment) => {
                slides.slidesIndex+=increment;
                slides.slidesArray.forEach((element) => {
                    if(increment > 0){
                        element.style.transform = 'translateX(' + (slides.slidesIndex * (-1) * increment * element.offsetWidth) +'px)';
                    }else{
                        element.style.transform = 'translateX(' + (slides.slidesIndex * increment * element.offsetWidth) +'px)';
                    }
                });
            }


        // Creation d'un objet slideTennisman pour la section #tennisman et initialisation de ses attributs

		let slidesTennisman = new Object();
			slidesTennisman.selector ='#window_tennisman > .slide';
			slidesTennisman.slidesArray = document.querySelectorAll(slidesTennisman.selector);
			slidesTennisman.slidesIndex = 0 ;

        //Creation d'un event listenner pour pouvoir cliquer sur le bouton gauche et faires defiler les slides Tennisman
           document.getElementById('left_button_tennisman').addEventListener('click', () => {
            if(slidesTennisman.slidesIndex > 0){
                swipe(slidesTennisman, -1);}
            });

        //Creation d'un event listenner pour pouvoir cliquer sur le bouton droite et faires defiler les slides Tennisman
           document.getElementById('right_button_tennisman').addEventListener('click', () => {
            if(slidesTennisman.slidesIndex < (slidesTennisman.slidesArray.length - 1)){
                swipe(slidesTennisman,+1);
            }
        });




        // Creation d'un objet slideEngineer pour la section #engineer et initialisation de ses attributs
		let slidesEngineer = new Object();
			slidesEngineer.selector ='#window_engineer > .slide';
			slidesEngineer.slidesArray = document.querySelectorAll(slidesEngineer.selector);
			slidesEngineer.slidesIndex = 0 ;

        //Creation d'un event listenner pour pouvoir cliquer sur le bouton gauche et faires defiler les slides Engineer
           document.getElementById('left_button_engineer').addEventListener('click', () => {
            if(slidesEngineer.slidesIndex > 0){
                swipe(slidesEngineer, -1);}
            });

        //Creation d'un event listenner pour pouvoir cliquer sur le bouton droite et faires defiler les slides Engineer
           document.getElementById('right_button_engineer').addEventListener('click', () => {
            if(slidesEngineer.slidesIndex < (slidesEngineer.slidesArray.length - 1)){
                swipe(slidesEngineer,+1);
            }
        });