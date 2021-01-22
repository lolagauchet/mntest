
## Usage 

Récupérer le projet :
```
git clone https://github.com/lolagauchet/mntest.git
```

À la racine du projet, lancer les commandes :
```
npm i -g expo-cli
expo start
```

## Sources
- Récupération des data depuis le site de [NewsApi](https://newsapi.org/), et plus particulièrement des actualités liées à TechCrunch via cette [url](https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=82965f348be144828e8a35bd69e804a8):

## Librairies utilisées
- [React native router flux](https://github.com/aksonov/react-native-router-flux) : Permet de mettre en place la navigation
- [Native base](https://docs.nativebase.io/) : Banque d'UI components, permet une intégration plus rapide d'éléments UI
- [Moment.js](https://momentjs.com/docs/) : Utilisée pour formatter les dates sous le format souhaité


## TODO
- Ajouter une pagination pour avoir seulement un certain nombre d'actualités chargées
- Ajouter une barre de recherche pour filter les actualités par mots-clé





