class Vehicule{
    marque;
    modele;
    places;
    constructor(pMarque, pModele, pPlaces)
    {
        this.marque = pMarque;
        this.modele = pModele;
        this.places = pPlaces;
    }

    afficherVoiture()
    {
        return `Le véhicule est de la marque ${this.marque} et du modèle ${this.modele}. Il peut transporter ${this.places} personne(s).`;
    }

}