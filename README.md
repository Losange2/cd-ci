🚀 Exercice CI/CD avec GitHub Actions — Guide pas à pas
But : apprendre à automatiser l’exécution des tests avec GitHub Actions (CI) pour détecter automatiquement les erreurs à chaque push ou pull request.
⸻
🧰 Prérequis
Avant de commencer, assure-toi d’avoir :
• Node.js (version 16+ recommandée) et npm installés.
• Git installé et configuré (git config --global user.name "Ton Nom" et git config --global user.email "ton@mail").
• Un compte GitHub.
• (Optionnel) l’outil gh (GitHub CLI) si tu veux créer le repo depuis la ligne de commande.
⸻
📁 Contenu du projet
Fichiers inclus dans ce dépôt d’exercice :
.
├── index.js                # Petite fonction (addition)
├── test.js                 # Test simple qui vérifie addition(2,3) === 5
├── package.json            # script "test": "node test.js"
└── .github/
   └── workflows/
       └── ci.yml          # Workflow GitHub Actions (CI)

⸻
✅ Étape 1 — Installer les dépendances et exécuter le test localement
1. Ouvre un terminal (bash, PowerShell, etc.) à la racine du projet.
2. Installe (même s’il n’y a pas de dépendances externes, this is good practice) :
npm install
3. Lance le test localement :
npm test
• Si tout va bien tu dois voir : ✔ Test réussi : addition(2,3) = 5
• Si le test échoue, le processus retourne un code d’erreur (utilisé par GitHub Actions pour marquer l’étape en échec).
⸻
✅ Étape 2 — Initialiser Git et préparer le dépôt local
Si tu n’as pas encore de dépôt Git local :
git init
git add .
git commit -m "Initial: ajout exercice CI/CD"

⸻
✅ Étape 3 — Créer le dépôt GitHub (méthode web)
1. Va sur github.com → New repository → nomme ton repo (ex : exercice-ci-cd) → Create repository.
2. On te donnera l’URL du repo (ex : https://github.com/TON_COMPTE/exercice-ci-cd.git).
Ou, si tu as GitHub CLI (gh), tu peux faire :
gh repo create TON_COMPTE/exercice-ci-cd --public --source=. --remote=origin --push

⸻
✅ Étape 4 — Pousser ton code sur GitHub
Si tu as créé le repo via l’interface web, ajoute le remote et pousse :
git remote add origin https://github.com/<TON_COMPTE>/<TON_REPO>.git
git branch -M main
git push -u origin main

⸻
✅ Étape 5 — Vérifier GitHub Actions
1. Sur GitHub, ouvre ton dépôt.
2. Clique sur l’onglet Actions.
3. Tu verras un workflow appelé CI Demo (fichier .github/workflows/ci.yml).
4. Clique dessus pour voir les logs : chaque étape (checkout, setup-node, npm install, npm test) affiche la sortie dans les logs.
⸻
🔎 Lire les logs et redémarrer un job
• Dans l’onglet Actions, clique sur une exécution -> clique sur un job -> développe une étape pour lire les logs ligne par ligne.
• Pour relancer l’exécution, tu peux re-commit/push une modification ou utiliser le bouton Re-run jobs (sur la page de l’exécution).
⸻
🛠️ Dépannage courant
• Le workflow est rouge (échec)
• Ouvre les logs de l’étape en échec pour trouver la cause.
• Erreurs fréquentes : version Node non supportée, npm install qui échoue (manque d’auth/token pour paquets privés), script test qui retourne un code ≠ 0.
• npm install prend trop de temps / échoue
• Vérifie le package.json. Ici on n’a pas de dépendances externes, donc npm install ne fait rien de spécial.
• Si tu ajoutes des dépendances, assure-toi qu’elles existent et sont publiques (ou configurer les secrets pour les privées).
• Les logs ne sont pas suffisants
• Ajoute des console.log() temporaires dans test.js ou dans les scripts pour mieux voir ce qui se passe.
⸻
🧪 Exercice pratique pour la classe (rapide)
1. Modifie le fichier test.js pour casser volontairement le test. Par exemple remplace :
const result = addition(2, 3);
par
const result = addition(10, 4);
2. git add && git commit && git push
3. Observe le pipeline dans Actions : il doit devenir rouge — mission accomplie : CI détecte l’erreur.
⸻
⚙️ Option : ajouter un badge de statut dans le README
Pour afficher le badge du workflow en haut du README (remplace <USER> et <REPO> par tes infos) :
![CI](https://github.com/<USER>/<REPO>/actions/workflows/ci.yml/badge.svg)
Exemple :
![CI](https://github.com/mon-compte/exercice-ci-cd/actions/workflows/ci.yml/badge.svg)

⸻
🔁 Extensions possibles (pour aller plus loin)
• Remplacer le script simple par des tests avec Jest (structure et assert plus professionnelle).
• Ajouter un job de lint (ESLint) avant les tests.
• Créer un job de build pour une application React/Vue/Node.
• Ajouter un déploiement automatique (ex : GitHub Pages, Netlify, Vercel, Render) sur push vers main.
• Ajouter pull_request protections sur la branche main pour forcer les PRs à passer le CI avant merge.
⸻
📚 Ressources et bonnes pratiques rapides
• Place workflow dans .github/workflows/ci.yml.
• Sépare les jobs si tu veux paralléliser (ex : lint, test, build).
• Utilise des secrets GitHub pour les identifiants / tokens (Settings → Secrets) si tu veux déployer ou accéder à des APIs privées.
• Documente les étapes importantes dans le README (comme ici) pour que tous les élèves sachent quoi faire.
