const { addition } = require("/index");
const result = addition(2, 3);
if (result === 5) {
 console.log("✔ Test réussi : addition(2,3) = 5");
 process.exit(0); // OK
} else {
 console.error("❌ Test échoué : résultat incorrect");
 process.exit(1); // KO => casse le pipeline
}