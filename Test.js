const { isEven } = require("./isEven");
const result = isEven(4);
if (result === true) {
 console.log("✔ Test réussi : 4 est bien pair");
 process.exit(0);
} else {
 console.error("❌ Test échoué : fonction incorrecte");
 process.exit(1);
}