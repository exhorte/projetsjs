const form = document.querySelector(".form-quizz");

const reponses = ["c", "a", "b", "a", "c"];
const emojis = ["✔️", "✨", "👀", "😭", "👎"];
const titreResultat = document.querySelector(".resultats h2");
const noteResultat = document.querySelector(".note");
const aideResultat = document.querySelector(".aide");
const toutesLesQuestions = document.querySelectorAll(".question-block");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // utilison une variable locale pour les réponses du formulaire
  const tableauResultats = [];

  // Collecte des réponses q1..q5 (inclus)
  for (let i = 1; i <= 5; i++) {
    const checked = document.querySelector(`input[name="q${i}"]:checked`);
    if (checked) {
      tableauResultats.push(checked.value);
    } else {
      // Si une question n'est pas répondue, on peut afficher un message et arrêter
      alert(`Veuillez répondre à la question ${i} avant de valider.`);
      return;
    }
  }

  verifFunc(tableauResultats);
});

function verifFunc(tabResultats) {
  // utilise un tableau local pour éviter les effets de bord
  const verifLocal = [];

  for (let a = 0; a < reponses.length; a++) {
    verifLocal.push(tabResultats[a] === reponses[a]);
  }

  afficherResultats(verifLocal);
  // Appel de la coloration AVANT de vider/ignorer quoi que ce soit
  couleursFonction(verifLocal);
  // verifLocal est local, pas besoin de le réinitialiser
}

function afficherResultats(tabCheck) {
  const nbDeFautes = tabCheck.filter((e1) => e1 !== true).length;

  switch (nbDeFautes) {
    case 0:
      titreResultat.innerText = "✔️ Bravo, c'est un sans faute ! ✔️";
      aideResultat.innerText = "";
      noteResultat.innerText = "5/5";
      break;
    case 1:
      titreResultat.innerText = "✨ Vous y êtes presque ! ✨";
      aideResultat.innerText =
        "Retentez une autre réponse dans la case rouge, puis re-validez !";
      noteResultat.innerText = "4/5";
      break;
    case 2:
      titreResultat.innerText = "✨ Encore un effort ... 👀";
      aideResultat.innerText =
        "Retentez une autre réponse dans les cases rouges, puis re-validez !";
      noteResultat.innerText = "3/5";
      break;
    case 3:
      titreResultat.innerText = "👀 Il reste quelques erreurs. 😭";
      aideResultat.innerText =
        "Retentez une autre réponse dans les cases rouges, puis re-validez !";
      noteResultat.innerText = "2/5";
      break;
    case 4:
      titreResultat.innerText = "😭 Peut mieux faire ! 😭";
      aideResultat.innerText =
        "Retentez une autre réponse dans les cases rouges, puis re-validez !";
      noteResultat.innerText = "1/5";
      break;
    case 5:
      titreResultat.innerText = "👎 Peut mieux faire ! 👎";
      aideResultat.innerText =
        "Retentez une autre réponse dans les cases rouges, puis re-validez !";
      noteResultat.innerText = "0/5";
      break;
    default:
      console.warn("Cas inattendu dans afficherResultats");
  }
}

function couleursFonction(tabValBool) {
  // on boucle sur toutes les questions ; si tabValBool est plus court on ignore le reste
  for (let j = 0; j < toutesLesQuestions.length; j++) {
    if (tabValBool[j] === true) {
      toutesLesQuestions[j].style.background = "lightgreen";
      toutesLesQuestions[j].classList.remove("echec");
    } else if (tabValBool[j] === false) {
      toutesLesQuestions[j].style.background = "#ffb8b8";
      toutesLesQuestions[j].classList.add("echec");

      // enlever la classe "echec" après un court délai (typo corrigée)
      setTimeout(() => {
        toutesLesQuestions[j].classList.remove("echec");
      }, 500);
    } else {
      // si tabValBool[j] est undefined (ex : réponses manquantes), on le laisse neutre
      toutesLesQuestions[j].style.background = "";
      toutesLesQuestions[j].classList.remove("echec");
    }
  }
}

toutesLesQuestions.forEach((item) => {
  item.addEventListener("click", () => {
    item.style.background = "white";
    item.classList.remove("echec");
  });
});
