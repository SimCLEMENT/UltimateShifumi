const boutonPierre = document.getElementById('boutonPierre');
const boutonFeuille = document.getElementById('boutonFeuille');
const boutonCiseaux = document.getElementById('boutonCiseaux');

const choixDuBot = document.getElementById("choixDuBot");
const texte = document.getElementById("texte");

const elVictoire = document.getElementById("nbVictoire");
const elEgalite = document.getElementById("nbEgalite");
const elPerdu = document.getElementById("nbPerdu");

let scoreVictoire = 0;
let scoreEgalite = 0;
let scorePerdu = 0;

const boutons = document.querySelectorAll('.mon-bouton');
boutons.forEach(bouton => {
    bouton.addEventListener('click', (event) => {
        const idBouton = event.target.id;

        let choix = ["Pierre", "Feuille", "Ciseaux"];
        const robotChoice = Math.floor(Math.random() * 3);
        choixDuBot.textContent = "Le bot a choisi " + choix[robotChoice];
        let humainChoix = -1;

        if (idBouton == 'boutonPierre') {
            humainChoix = 0;

            if (robotChoice == 0) {
                scoreEgalite += 1;
                texte.textContent = "Egalité";
            }
            else if (robotChoice == 1) {
                scorePerdu += 1;
                texte.textContent = "Perdu";
            }
            else {
                scoreVictoire += 1;
                texte.textContent = "Gagné";
            }
        }

        else if (idBouton == 'boutonFeuille' ) {
            humainChoix = 1;

            if (robotChoice == 0) {
                texte.textContent = "Gagné";
                scoreVictoire += 1;
            }
            else if (robotChoice == 1) {
                texte.textContent = "Egalité";
                scoreEgalite += 1;
            }
            else {
                texte.textContent = "Perdu";
                scorePerdu += 1;
            }
        }

        else {
            humainChoix = 2;

            if (robotChoice == 0) {
                texte.textContent = "Perdu";
                scorePerdu += 1;
            }
            else if (robotChoice == 1) {
                texte.textContent = "Gagné";
                scoreVictoire += 1;
            }
            else {
                texte.textContent = "Egalité";
                scoreEgalite += 1;
            }
        }
        
        elVictoire.textContent = "Total de Victoire : " + scoreVictoire;
        elEgalite.textContent = "Total d'Egalite : " + scoreEgalite;
        elPerdu.textContent = "Total de Défaite : " + scorePerdu;
    })
});
