const couleur = window.prompt("Tapez blanc, rouge ou jaune puis sur OK");
switch (couleur.toLocaleLowerCase()) {
  case "blanc":
    alert("Vous avez tape blanc");
    break;
  case "rouge":
    alert("Vous avez tape rouge");
    break;
  case "jaune":
    alert("Vous avez tape jaune");
    break;
  default:
    alert("Desole, la couleur entre n'est pas pris en charge");
}
