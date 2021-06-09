# Wikispace

Le but de cet exercice est de réaliser un wiki sur les astronautes et les stations spatiales, à partir
d’une API externe.
L’application sera réalisée en Vue.js 3 avec l’outil Vite. 
L’API à utiliser sera la suivante : https://spacelaunchnow.me/api/3.3.0/

## Consignes 

### Etape 1 – Liste des astronautes
Le but est d’afficher la liste des astronautes avec leurs photos. Pour cela, nous allons faire une
requête à l’API /astronaut, avec une limite de 30 éléments. Cela donne l’url suivante :
https://spacelaunchnow.me/api/3.3.0/astronaut/?limit=30
L’url des photos peut être récupérée via la propriété « profile_image_thumbnail » pour être utilisée
dans une balise <img>.
De la même façon, on peut récupérer l’abréviation du nom de l’agence (NASA, ESA, SpX…) à partir
des propriétés de chaque donnée.

### Etape 2 – Pagination
Le but est d’afficher une pagination : précédent, suivant, le nombre de pages et la page actuelle.
Pour récupérer ces informations, on peut utiliser les résultats de la requête :
- count : le nombre total d’éléments dans la liste
- next : l’url d’API pour la page suivante, si elle existe
- previous : l’url d’API pour la page précédente, si elle existe
Ainsi que le paramètre « limit » utilisé précédemment. Dans les requêtes « next » et « previous », on
peut récupérer l’offset qui représente le nombre de données passées avant la requête actuelle.
Au clic sur suivant / précédent, on doit charger les nouvelles données. Au changement de la valeur de
la page actuelle, on doit charger les données de la page.
Attention : il est à noter que les url dans « next » et « previous » commencent par « http » au lieu de
« https ». Si vous voulez utiliser ces adresses, pensez à faire un traitement pour remplacer « http »
par « https ».


### Etape 3 – Vaisseaux & évènements
Le but est d’afficher trois « onglets » en haut de la page. Par défaut, on est sur la liste des
astronautes. Au clic sur un onglet, on doit charger les données correspondantes aux trois endpoints :
- https://spacelaunchnow.me/api/3.3.0/astronaut/ => liste des astronautes, déjà fait
- https://spacelaunchnow.me/api/3.3.0/spacecraft/ => liste des vaisseaux
- https://spacelaunchnow.me/api/3.3.0/event/ => liste des évènements
Pour rendre le code plus lisible, il est conseillé de créer des composants pour les différents types de
données, ainsi qu’un composant générique pour les listes.
Les évènements n’ont pas d’agence associée.
Les vaisseaux ont leurs agences, mais pas les abréviations. Pour les récupérer, il faut faire des
requêtes à l’url https://spacelaunchnow.me/api/3.3.0/agencies/:id/, où :id est à remplacer par
l’identifiant de l’agence.
Attention : éviter de lancer une requête pour chaque élément, on préfèrera envoyer une requête
pour chaque identifiant distinct (une seule requête pour NASA, une seule pour ESA…).


### Etape 4 – Détail d’une donnée
Lorsqu’on clique sur une donnée, on veut afficher ses détails dans une nouvelle page.
Il faudra à ce moment-là utiliser Vue Router, afin de créer une ou des routes pour les détails des
données.
Une fois arrivé sur la page, utiliser les routes suivantes :
- https://spacelaunchnow.me/api/3.3.0/astronaut/:id/ => détail d’un astronaute
- https://spacelaunchnow.me/api/3.3.0/spacecraft/:id/ => détail d’un vaisseau
- https://spacelaunchnow.me/api/3.3.0/event/:id/ => détail d’un évènement
A chaque fois, :id est à remplacer par l’identifiant de la donnée à lire (récupérable dans
this.$route.params.id).


### Bonus
- Utilisation du routeur pour changer d’onglet / de page sur la liste. Cela permet de pouvoir
revenir en arrière depuis le détail d’une donnée
- Affichage de données supplémentaires (liste des agences, configurations de vaisseaux,
images des vols des vaisseaux…)

## Lancement du projet

Une fois le projet cloné, il faut installer les dépendances.
On se met dans le dossier et on fait : npm i 

Ensuie on lance le projet : npm run dev


