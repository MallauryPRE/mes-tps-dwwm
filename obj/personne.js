class Personne
{
    prenom;
    nom;
    constructor(pPrenom , pNom)
    {
        this.prenom = pPrenom;
        this.nom = pNom;
    }
    afficherInfo()
    {
        return `La personne se nomme ${this.prenom} ${this.nom}`;
    }

    // toString(){
    //     return JSON.stringify(this);
    // }
}

// console.log(Personne.toString());