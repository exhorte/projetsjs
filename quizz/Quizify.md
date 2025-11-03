# 🚀 Quizify — Projet JavaScript (UI + Logique de Quiz)

**Sous-titre :** Une petite application de quiz en JavaScript — interface interactive, récupération des réponses, comparaison des résultats et affichage de messages adaptés. *(README prêt à copier-coller dans ton dépôt GitHub)*

---

## 🔍 Description courte
**Quizify** est un projet pédagogique en JavaScript qui se concentre sur la création d’une interface de quiz soignée et accessible. L’objectif n’est **pas** d’écrire le programme ici, mais de fournir une documentation claire, un plan de conception et une checklist fonctionnelle pour implémenter l’application.

Ce README contient : titre, description, objectifs, spécifications UI/UX, structure de projet suggérée, étapes de développement, et idées d’améliorations.

---

## ✨ Fonctionnalités principales (exigées)
1. **Créer l’interface** — zones de question, blocs de réponses, boutons radio.  
2. **Styliser le tout** — design agréable, responsive, accessible.  
3. **Récupérer les données au clic** — capter la réponse choisie par l’utilisateur.  
4. **Comparer les résultats** — logique qui évalue les réponses par rapport à la solution.  
5. **Afficher des messages** — phrases / feedback adaptés selon le score obtenu.

---

## 🎯 Objectifs détaillés
- Concevoir une interface intuitive pour parcourir un quiz (1 question à la fois ou liste de questions).  
- Assurer une bonne UX : feedback immédiat, gestion des erreurs, navigation (suivant / précédent).  
- Implémenter une logique de scoring simple : total correct, pourcentage, catégories de résultats (ex : « Débutant / Intermédiaire / Expert »).  
- Fournir des messages personnalisés selon la performance (ex. 🎉 Bravo!, 👍 Pas mal, 🔁 Réessaye).

---

## 🧭 Spécifications UI / UX (recommandées)
- **Layout** : conteneur centré, carte/question, zone de réponses, barre de progression.  
- **Composants** :  
  - Titre du quiz + description courte  
  - Question (texte + option media facultatif)  
  - Liste d’options (boutons radio) avec labels cliquables  
  - Bouton `Valider` / `Suivant` / `Précédent`  
  - Affichage du score final + message de résultat  
- **Accessibilité** : labels associés aux inputs, `aria-live` pour feedback, navigation au clavier.  
- **Responsive** : mobile-first, tests sur petits écrans.  
- **Visuel** : palette simple (2-3 couleurs), typographie lisible (Inter / System font), espaces généreux.

---

## ✅ Checklist de développement (à cocher au fur et à mesure)
- [ ] Création du layout HTML de base  
- [ ] Composants CSS (carte, boutons, états : hover/focus/active)  
- [ ] Gestion des boutons radio avec `for` + `id` sur labels  
- [ ] Écouteurs d’événements pour capturer le clic / la sélection  
- [ ] Fonction de validation pour comparer la réponse à la solution  
- [ ] Calcul du score et de la progression  
- [ ] Page de résultat affichant un message selon le score  
- [ ] Tests manuels (desktop / mobile) et corrections d’UX  
- [ ] Ajout d’animations légères (facultatif) et messages d’erreur

---

## 🗂️ Structure de projet suggérée
