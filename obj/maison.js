class Maison{
    numRue;
    typeVoie;
    nomVoie;
    codePostal;
    ville;
    constructor(pNumRue, pTypeVoie, pNomVoie, pCodePostal, pVille)
    {
        this.numRue = pNumRue;
        this.typeVoie = pTypeVoie;
        this.nomVoie = pNomVoie;
        this.codePostal = pCodePostal;
        this.ville = pVille;
    }
    
    afficherMaison()
    {
        return `Le logement se situe ${this.numRue} ${this.typeVoie} ${this.nomVoie} - ${this.codePostal} ${this.ville}`;
    }

}