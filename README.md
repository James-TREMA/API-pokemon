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
- **CSS3** : Personnalisation du style pour un design amélioré et des effets visuels.

## Commandes et Étapes Utilisées pour Créer le Projet

### Création du projet Angular

Pour initialiser le projet Angular :
```bash
ng new API-pokemon
```

### Démarrage du Serveur de Développement

Pour démarrer l'application en mode développement, utilisez :
```bash
ng serve
```
Naviguez ensuite vers `http://localhost:4200/` pour visualiser l'application. Toute modification dans les fichiers sources rechargera automatiquement l'application.

### Génération des Composants, Services et Interfaces

1. **Composant pour la Liste des Pokémon** :
   ```bash
   ng generate component components/pokemon-list
   ```
2. **Composant pour les Détails des Pokémon** :
   ```bash
   ng generate component components/pokemon-detail
   ```
3. **Service pour Gérer les Requêtes API** :
   ```bash
   ng generate service services/pokemon
   ```
4. **Interfaces pour Typage des Données** :
   - Interface pour structurer les données des Pokémon :
     ```bash
     ng generate interface interface/pokemon
     ```
   - Interfaces additionnelles pour les statistiques, types, et résistances.

### Construction du Projet

Pour compiler le projet pour la production :
```bash
ng build
```
Les fichiers de construction seront stockés dans le répertoire `dist/`.

## Structure des Composants et Fonctionnalités

1. **PokemonListComponent** : Composant principal affichant la liste des Pokémon avec un champ de recherche et un indicateur de chargement.
   - Affichage de chaque Pokémon avec un effet 3D sur l'image.
   - Pagination pour charger les Pokémon par lots et réduire le temps de chargement initial.

2. **PokemonDetailComponent** : Affiche les informations détaillées d’un Pokémon.
   - Données incluent les statistiques, types, et résistances.
   - Animation 3D sur l'image du Pokémon pour un effet visuel attractif.

3. **PokemonService** : Service centralisant les appels API pour récupérer les données des Pokémon.

### Améliorations de l'UI/UX et Accessibilité

- **Effet de chargement** : Ajout d'un spinner pour informer l’utilisateur lorsque les données sont en cours de chargement.
- **Effets 3D** : Application d’effets de transformation 3D sur les images des Pokémon pour un rendu visuel dynamique.
- **Styles CSS Accessibles** : Améliorations de la visibilité des éléments interactifs et ajout de styles de focus pour la navigation au clavier.

## Tests et Développement

- **Tests Unitaires** : Exécution via [Karma](https://karma-runner.github.io).
  ```bash
  ng test
  ```
- **Tests End-to-End** : Peut être exécuté avec un outil de tests end-to-end. Ajoutez un package de tests end-to-end pour utiliser cette fonctionnalité.
  ```bash
  ng e2e
  ```

## Ressources Supplémentaires

- Pour plus d'informations sur l'Angular CLI, consultez la [documentation officielle Angular CLI](https://angular.dev/tools/cli).
- API utilisée pour les données : [PokeBuild API](https://pokebuildapi.fr/).