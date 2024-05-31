// ==================================================================================

// ========================== S C R O L L E R =======================================

// ==================================================================================

/**
 * Change le style des différentes sections selon l'item sélectionné.
 * @param {*} itemfocus numéro d'item.
 */
let changeSectionStyles = (itemfocus) => {
    for (let i = 0; i < sections.length; i++) {
        if (i == itemfocus) {
            sections[i].style.clipPath = 'polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%)';
            sections[i].style.width = '80%';
            sections[i].style.marginLeft = '10%';
        }
        else {
            sections[i].style.clipPath = 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)';
            sections[i].style.width = '50%';
            sections[i].style.marginLeft = '25%';
        }
    }
}

let sections = document.querySelectorAll("section");
// Attribution du style.

changeSectionStyles(0);

window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;
    // console.log('Position de défilement:', scrollPosition);
    let itemFocus = 0;
    if (scrollPosition < 300) {
        itemFocus = 0; // intro
    } else if (scrollPosition < 700) {
        itemFocus = 1; // formation
    } else if (scrollPosition < 1500) {
        itemFocus = 2; // développement
    } else if (scrollPosition < 3700) {
        itemFocus = 3; // projets perso
    } else if (scrollPosition < 4700) {
        itemFocus = 4; // 3D
    } else if (scrollPosition < 6900) {
        itemFocus = 5; // Photo
    } else if (scrollPosition < 7150) {
        itemFocus = 6; // plus loin
    } else if (scrollPosition < 7550) {
        itemFocus = 7; // cv
    } else {
        itemFocus = 8; // contact
    }
    changeSectionStyles(itemFocus);
});