// BOUTON COULEUR ALEATOIRE

document.querySelector('#btn_random').addEventListener('click', function () {
    changeBackgroundColor();
});

function changeBackgroundColor() {

    let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
}

// BOUTON MONOCHROME

document.querySelector('#btn_monochrome').addEventListener('click', changeBlackWhite);

function changeBlackWhite() {
    console.log('changeBlackWhite');
    console.log(document.body.style.backgroundColor.length);
    console.log(document.body.style.backgroundColor);
    let couleur1 = 0;
    let couleur2 = 0;
    if ((document.body.style.backgroundColor == 'white') || (document.body.style.backgroundColor.length == 0)) {
        couleur1 = 'black';
        couleur2 = "white";
    }
    else {
        couleur1 = 'white';
        couleur2 = 'black';
    }
    // console.log(document.body.style.backgroundColor);
    // console.log(couleur1);
    document.body.style.backgroundColor = couleur1;
    // console.log(document.body.style.backgroundColor);
    document.body.style.color = couleur2;
    let paragraphes = document.querySelectorAll('.paragraph');
    paragraphes.forEach(paragraph => {
        paragraph.style.backgroundColor = couleur1;
        paragraph.style.color = couleur2;
    });

}

// BOUTON H1 ACTIF

document.querySelector('#btn_h1').addEventListener('click', createH1);

function createH1() {

    let nouveauTitre = document.createElement("h1");
    let texteDuTitre = document.createTextNode("Nouveau Titre");
    nouveauTitre.appendChild(texteDuTitre);
    document.body.appendChild(nouveauTitre);
}

// BOUTON P ACTIF

document.querySelector('#btn_p').addEventListener('click', createP);

function createP() {

    let nouveauP = document.createElement("p");
    nouveauP.classList.add('entry');
    let texteP = document.createTextNode("Nouveau Paragraphe");
    nouveauP.appendChild(texteP);
    // document.body.appendChild(nouveauP);
    document.body.insertBefore(nouveauP, null);
}

// BOUTON MASQUE / REVELER
function MasquerElements() {
    // let elements = document.querySelectorAll('p');
    const allEntries= document.querySelectorAll('.entry');
    allEntries.forEach(entry => {
        entry.classList.toggle('hidden');

    });
}
// document.querySelector('#btn_masquer').addEventListener('click', MasquerElements);
const btn_masquer = document.querySelector('#btn_masquer');
btn_masquer.addEventListener('click', MasquerElements);

