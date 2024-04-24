# 1. Enoncé

L'exercice consiste à "décrire" des chaînes de caractères selon le principe suivant :

- Prenons la chaîne de caractères "a". Celle-ci est composée d'une (1) occurrence du caractère 'a'. Nous pouvons donc décrire la chaîne "a" par la chaîne "1a".
- Prenons désormais la nouvelle chaîne "1a". Celle-ci est composée d'un (1) caractère '1' puis d'un (1) caractère 'a'. Nous pouvons donc la décrire par "111a".
- De même, la chaîne "111a" est composée de 3 caractères consécutifs '1' puis d'un (1) caractère 'a'. Nous pouvons donc la décrire comme "311a"
- et ainsi de suite...

Si on représente les chaînes successives verticalement, où chaque chaîne décrit la précédente, nous obtenons :a1a111a311a13211a111312211a...

Une telle suite s'appelle [Suite de Conway](https://fr.wikipedia.org/wiki/Suite_de_Conway) ou suite "audioactive".

L'objectif de l'exercice est de réaliser un générateur de suites de Conway.

*Contraintes:* 

Langage 

- Langage : JS ou Python

## Etape 1

*Conçu pour diminuer la barrière d’entrée*

Créer une fonction `decoupeChaine` qui prend en paramètre une string et renvoie la même string dans laquelle les caractères successifs non identiques sont séparés par un espace.

Ex :

```jsx
decoupeChaine("ab")     // renvoie "a b"
decoupeChaine("aabbca") // renvoie "aa bb c a"`
```

## Etape 2

Créer une fonction `decritChaine`, inspirée de `decoupeChaine`, qui prend en paramètre une string et renvoie une string qui décrit, tel qu'expliqué ci-dessus, les caractères qui constituent la chaîne en paramètre.

Ex:

```jsx
decritChaine("ab")      // renvoie "1a1b"
decritChaine("aabbca")  // renvoie "2a2b1c1a"
```

## Etape 3

Créer une fonction `suiteConway` qui donne les `n` premiers termes de la suite qui commence par le caractère `carac`. `n` et `carac` sont passés en paramètres de la fonction.

Ex:

```jsx
suiteConway('a', 3)  
a
1a
111a

suiteConway('1', 3)  
1
11
21
```

## Etape **4**

Afficher la suite de Conway générée dans un navigateur. Utiliser un texte centré pour l'afficher sous forme de pyramide.
