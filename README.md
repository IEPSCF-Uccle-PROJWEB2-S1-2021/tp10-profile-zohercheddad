# TP10 - profile

Ce TP a pour objectif de stocker le profil du visiteur dans sa session.

## Consignes

* Créez un formulaire pour encoder les informations de l'utilisateur :
  * Prénom
  * Nom
  * Adresse email
  * Date de naissance
  * Adresse postale
    * Rue
    * Numéro
    * Code postal
    * Commune
* Validez les données du formulaire tant au niveau du client que du serveur.
  Si les données sont valides, sauvegarder-les dans la session.
* Créer la page principale de l'application.
  Son contenu n'a pas d'importance, mais vous devez afficher le prénom, le nom et le code postal du visiteur.
  Si le visiteur n'a pas encore de session avec un profil enregistré, affichez "Utilisateur anonyme" à la place de ses informations.
* Ajoutez un lien vers le formulaire à partir de la page principale.
* Ajoutez un bouton pour terminer la session de l'utilisateur.
  Vous trouverez le nom de la méthode à utiliser sur la page de documentation du module express-session.
  Si vous ne retrouvez pas le lien direct dans les références de la leçon de cette semaine, faites une recherche sur https://npmjs.com.
