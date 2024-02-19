class Animal {
    nom;
    espece;
    constructor(pNom, pEspece) 
    {
        this.nom = pNom;
        this.espece = pEspece;
    }

    afficherAnimal()
    {
        return `L'animal s'appelle ${this.nom} et est de l'espèce ${this.espece}`;
    }

    // toString(){
    //     return JSON.stringify(this);
    // }
}