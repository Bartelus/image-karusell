let detteBildet = 0;
  // Elementene vi trenger fra HTML
let alleBilder = document.querySelectorAll(".karusell img");
   
function visBilde(imageIndex) {}

function flyttBilde(offset) {
    // Regn ut hvilket bilde som blir neste
let nyIndex = detteBildet + offset;
let totalBilder = alleBilder.length - 1;

// Sørge for at neste bildenummer er et bilde vi har
if (nyIndex < 0) {
  //Hvis vi prøver å gå under null, sett til siste bilde
  detteBildet = totalBilder;
} else if (nyIndex > totalBilder) {
  // Hvis vi prvøver å gå til over antall bilder tilgjengelig, gå til start bildet
  detteBildet = 0;
} else {
  // Hvis vi har bildet, gå til bildet
  detteBildet = nyIndex;
}


    // For hvert bilde element kjør denne blokken med kode
alleBilder.forEach((image, index) => {
if (index === detteBildet) {
// Fjern current-image classen fra nåværende bilde
image.className = "current-image";
}
else {
   // Legg til current-image på det nye bild
image.className = "";
}
});
}



let previousButton = document.querySelector("#previousbutton");
let nextButton = document.querySelector("#nextbutton");

previousButton.addEventListener("click", () =>
{flyttBilde(-1);
})

nextButton.addEventListener("click", () =>
{flyttBilde(1);
})
