document.addEventListener('DOMContentLoaded', () => {
    // const stagiaire = new Personne();
    // stagiaire.nom = "PRE";
    // stagiaire.prenom = "Mallo";

    const nom = prompt("Entrez le nom de la personne :");
    const prenom = prompt("Entrez le prenom de la personne :");
    const stagiaire = new Personne(nom, prenom);
    // console.log(stagiaire.toString());
    // console.log(stagiaire.nom);
    // let stagiaire2EnTexte = JSON.stringify(stagiaire);
    // console.log(JSON.parse(stagiaire2EnTexte));
    console.log(stagiaire.constructor.name);
    console.log(stagiaire);
    console.log(stagiaire.afficherInfo());
    
    

    const nomAnimal = prompt("Entrez le nom de l'animal :");
    const espece = prompt("Entrez l'espèce de l'animal :");
    const animal = new Animal(nomAnimal, espece);
    console.log(animal.constructor.name);
    console.log(animal);
    console.log(animal.afficherAnimal());


    const marque = prompt("Entrez la marque du véhicule :");
    const modele = prompt("Entrez le modèle du véhicule :");
    const places = prompt("Entrez le nombre de places du véhicule:");
    const voiture = new Vehicule(marque, modele, places);
    console.log(voiture.constructor.name);
    console.log(voiture);
    console.log(voiture.afficherVoiture());


    
    const numRue = prompt("Entrez le numéro de rue de votre maison :");
    const typeVoie = prompt("Entrez le type de voie :");
    const nomVoie = prompt("Entrez le nom de la voie :");
    const codePostal = prompt("Entrez le code postal :");
    const ville = prompt("Entrez le nom de la ville:");
    const maison = new Maison(numRue, typeVoie, nomVoie, codePostal, ville);
    console.log(maison.constructor.name);
    console.log(maison);
    console.log(maison.afficherMaison());



});