const texte = document.querySelector('#texte');
console.log(texte);
const auteur = document.querySelector('#auteur');

async function afficherCitation(pIndice){
  
    const response = await fetch ("./../quotes/citations.json");
    console.log(response);
    const data = await response.json();
    console.log(data);
    if (response.ok){
        if (pIndice == -1)
        pIndice = Math.floor(Math.random()*data.length);
        texte.textContent = data[pIndice].texte
        auteur.textContent = data[pIndice].auteur
    }
    else {
        texte.textContent = "Enfer et damnation, une erreur!";
        console.log(data);
    }
}

let n = 
afficherCitation(-1);

function searchquote(){
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    let x = document.querySelector('#list-holder');
    x.innerHTML = ''

    for (i=0; i< data.length; i++){
        let obj = data[i];
        if (obj.Name.toLowerCase().includes(input)) {
            const elem = document.createElement("li")
            elem.innerHTML = `${obj.Name} - ${obj.Color}`
            x.appendChild(elem)
    }
}
}

