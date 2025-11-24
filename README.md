# 🚀 Exercice CI/CD – GitHub Actions

### BTS SIO SLAM – Pipeline CI avec tests automatisés

---

## 📌 Description

Cet exercice permet de découvrir l’intégration continue (**CI – Continuous Integration**) avec GitHub Actions en exécutant automatiquement des tests à chaque **push** ou **pull request**.

🎯 **Objectif :** vérifier automatiquement que le code fonctionne avant validation.
🧪 **Méthode :** exécuter un test Node.js dans la pipeline CI.
📈 **Résultat possible :**

* ✔ **Pipeline VERT** si les tests passent
* ❌ **Pipeline ROUGE** si les tests échouent

---

## 📁 Structure du projet

```
exercice-ci-cd-2/
├── package.json
├── isEven.js
├── test.js
└── .github/
    └── workflows/
        └── ci.yml
```

---

## 🧠 Fonction à tester

```js
function isEven(number) {
  return number % 2 === 0;
}
module.exports = { isEven };
```

---

## 🧪 Test automatisé

```js
const { isEven } = require("./isEven");

const result = isEven(4);

if (result === true) {
  console.log("✔ Test réussi : 4 est bien pair");
  process.exit(0);
} else {
  console.error("❌ Test échoué : fonction incorrecte");
  process.exit(1);
}
```

---

## ⚙ Workflow GitHub Actions (`.github/workflows/ci.yml`)

```yml
name: CI Exercice 2

on: [push, pull_request]

jobs:
  test_job:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repo
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Install dependencies
        run: npm install

      - name: Run tests
        run: npm test
```

---

## 🛠 Installation locale

```
npm install
npm test
```

Résultat attendu :

✔ **Test réussi : 4 est bien pair**

---

## 🚀 Envoi sur GitHub

```
git init
git add .
git commit -m "Exercice CI/CD fonction isEven"
git branch -M main
git remote add origin https://github.com/<TON_COMPTE>/<TON_REPO>.git
git push -u origin main
```

Ensuite :

1. Ouvre ton dépôt GitHub
2. Va dans **l’onglet Actions**
3. Le workflow s’exécute automatiquement ✔

👉 Si l’état est **VERT**, ta CI fonctionne parfaitement.

---

## 🔥 Mettre volontairement le pipeline au ROUGE

Dans `test.js`, remplace :

```js
const result = isEven(4);
```

par :

```js
const result = isEven(5);
```

Puis :

```
npm test
git add .
git commit -m "Test volontaire KO"
git push
```

Résultat dans GitHub Actions :

❌ **Test échoué → pipeline rouge**

---

## 🎓 Compétences travaillées

| Compétence          | Détail                                         |
| ------------------- | ---------------------------------------------- |
| **CI/CD**           | Mise en place d’une pipeline GitHub Actions    |
| **Qualité du code** | Exécution automatique de tests                 |
| **Collaboration**   | Validation automatique avant merge             |
| **DevOps**          | Automatisation & industrialisation du workflow |

---

## 🎉 Conclusion

Vous venez de mettre en place :

✔ un projet Node.js
✔ un test automatisé
✔ un workflow CI GitHub Actions
✔ un contrôle automatique de la qualité du code

🧠 **C’est une compétence essentielle en entreprise dans tous les projets modernes.**
