// J06 — Bilan des dépenses
// Type : number[] ; unité de chaque élément : FCFA.
const depensesSemaine = [1500, 2500, 0, 4000, 1000, 2500, 3000];

// TODO 1 : retourner le total en FCFA avec reduce.
function calculerTotal(depenses) {
  return depenses.reduce((total, montant) => total + montant, 0); // votre code ici
}

// TODO 2 : retourner la moyenne par jour ; 0 si le tableau est vide.
function calculerMoyenne(depenses) {
  if (depenses.length === 0) {
    return 0;   // Votre code ici.
  }
return calculerTotal(depenses) / depenses.length;
}

// TODO 3 : retourner les montants strictement supérieurs à 2000 FCFA.
function filtrerGrossesDepenses(depenses) {
  return depenses.filter((montant) => montant > 2000);
  // Votre code ici.
}

// TODO 4 : retourner la plus grande dépense ; 0 si le tableau est vide.
function trouverMaximum(depenses) {
  if (depenses.length === 0) {
    return 0;
  }
  return Math.max(...depenses);// Votre code ici.
}

// TODO 5 : créer une copie triée, puis afficher le rapport demandé.
console.log("tableau initial avant le tri :", depensesSemaine);
const depensesTriees = [...depensesSemaine].sort((a, b) => a - b);
console.log("TODO : complétez l’analyse des dépenses.");
console.log("Tableau initial après tri :", depensesSemaine);
console.log("Copie triée :", depensesTriees)
const total = calculerTotal(depensesSemaine);
const moyenne = calculerMoyenne(depensesSemaine);
const grosseDepenses = filtrerGrossesDepenses(depensesSemaine);
const maximum = trouverMaximum(depensesSemaine);
const rapport = `
============== BILAN DES DEPENSE =========================================
total : ${total} 
Moyenne par jour : ${moyenne.toFixed(2)} FCFA/jours
Dépenses supérieur à 2000 FCFA : ${grosseDepenses.join(",")} FCFA
plus grande dépense : $(maximum) FCFA
copie triée par ordre croissant : ${depensesTriees.join(", ")} FCFA
===================================
`;
console.log(rapport);