# API Pokémon

Ce projet est une application Angular permettant de consulter et de visualiser des informations détaillées sur les Pokémon, notamment leurs statistiques, types, résistances, et évolutions. Elle utilise l'[API PokeBuild](https://pokebuildapi.fr/) pour récupérer les données des Pokémon.

## Fonctionnalités

- **Affichage de la liste des Pokémon** : Une liste paginée et filtrable de Pokémon avec une recherche intégrée.
- **Détails des Pokémon** : Consultation des statistiques, types, résistances, et évolutions d'un Pokémon.
- **Animations et effets CSS** : Ajout de styles et d'effets 3D pour améliorer l'expérience utilisateur (UI/UX).
- **Accessibilité** : Optimisation des composants pour une meilleure accessibilité et une meilleure expérience utilisateur.

## Technologies Utilisées

- **Angular** : Framework front-end pour construire l'application.
- **TypeScript** : Langage utilisé pour structurer et typiser le code.
- **API PokeBuild** : Source des données des Pokémon.
- **CSS** : Personnalisation du style pour un design amélioré et des effets visuels.

## Installation et Lancement

1. **Cloner le dépôt** :
   ```bash
   git clone https://github.com/James-TREMA/API-pokemon.git
   ```
   
2. **Installer les dépendances** :
   ```bash
   cd API-pokemon
   npm install
   ```

3. **Démarrer le projet** :
   ```bash
   npm start
   ```
   Rendez-vous sur `http://localhost:4200/` pour voir l'application.

## Commandes Utilisées pour Créer le Projet

- **Création du projet** : `ng new API-pokemon`
- **Génération des composants** :
  - Liste des Pokémon : `ng generate component components/pokemon-list`
  - Détails des Pokémon : `ng generate component components/pokemon-detail`
- **Génération du service API** : `ng generate service services/pokemon`
- **Création des interfaces** : `ng generate interface interface/pokemon`