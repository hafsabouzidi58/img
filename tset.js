// Fonction appelée lorsque la page est chargée
function handlePageLoad() {
    console.log("La page est complètement chargée.");
}

// Fonction qui met en surbrillance une image au survol ou au focus
function highlightImage(element) {
    element.style.border = "2px solid #000"; // Bordure pour surbrillance
}

// Fonction qui réinitialise l'apparence de l'image lorsque la souris la quitte ou le focus disparaît
function resetImage(element) {
    element.style.border = "none"; // Réinitialise la bordure
}

// Fonction pour ajouter l'attribut tabindex à chaque figure
function addTabindex() {
    let figures = document.querySelectorAll("figure");
    figures.forEach((figure, index) => {
        figure.setAttribute("tabindex", index); // Attribue un tabindex unique
    });
    console.log("Les tabindex ont été ajoutés aux figures.");
}

// Ajout d'un événement clavier pour tester l'accessibilité
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter" || event.key === " ") {
        let focusedElement = document.activeElement;
        if (focusedElement.tagName === "FIGURE") {
            alert("Vous avez sélectionné l'image: " + focusedElement.querySelector("figcaption").innerText);
        }
    }
});

// Appel de la fonction pour ajouter tabindex lors du chargement de la page
window.onload = function() {
    handlePageLoad();
    addTabindex(); // Ajoute l'attribut tabindex aux figures
};

