# 1. Enoncé

Cet exercice vise à s'initier au PHP ainsi qu'aux principes clés des super-globales.
Les super-globales sont de variables internes qui sont toujours disponibles, quel que soit le contexte, dans votre code.
Dans cet exercice, nous allons, nous concentrer sur les suivantes : $_GET, $_POST et $_SESSION.

## Étape 0: Setup

Pour commencer, installez un serveur PHP sur votre machine pour executer du PHP.
Pour windows, vous pouvez installer WAMP, LAMP pour linux et MAMP pour macOS. Ces petits logiciels installent toute la suite serveur PHP+MySQL sur votre machine, pour en faire donc un serveur web complet!

Une fois installée, crée un "exercice.php" qui contiendra le code notre exercice.

## Étape 1: GET

Super, maintenant que tout est en place, nous allons nous amuser avec la variable $_GET.
Appelez votre page avec le paramètre `first_name` dans l'url.
`localhost/{...}/exercice.php?first_name=Ada`
Sur votre page HTML, affichez "Bonjour" suivi du nom indiqué en paramètre (ici, "Bonjour Ada" donc). Si aucun nom n'est fourni, affichez "Bonjour anonyme"

## Étape 2: POST

Modifiez la page pour y ajouter un formulaire et un champ de saisie comme suit:

```
<form action="exercice.php" method="post">
 <p>Votre nom : <input type="text" name="first_name" /></p>
 <p><input type="submit" value="OK"></p>
</form>

```

Une fois validé, le formulaire devra recharger cette page mais avec une variable $_POST qui contiendra le fameux firstname.
Nous allons donc changer les règles relatives au nom à afficher.

- Si un nom est donnée dans l'url, en GET, l'afficher ;
- Sinon, si un nom est donnée en POST, afficher celui-ci ;
- Autrement, afficher "anonyme"

## Étape 3: SESSION

Nous avons donc deux manières de donner un nom à afficher.
Nous allons ajouter une petite subtilité avec la session, ce dictionnaire persistant tout au long de votre navigation jusqu'à expiration.
Voici les règles à appliquer:

- Si un nom est donné dans l'url, en GET, l'afficher ;
- Si un nom est trouvée dans la SESSION, l'afficher ;
- Sinon, si un nom est donné en POST, afficher celui-ci ET le sauvegarder dans la SESSION ;
- Autrement, afficher "anonyme"

## Étape 4: Reset de la session

Ajouter un bout “Reset” pour réinitialiser la session et la valeur qu’elle contient.
