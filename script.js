let detteBildet = 0;
  // Elementene vi trenger fra HTML
let alleBilder = document.querySelectorAll(".karusell img");
   
function visBilde(imageIndex) {}

function flyttBilde(offset) {

    // hvilket bilde er vi på nå - detteBildet

    // Regn ut hvilket bilde som blir neste

    let nyBildeIndex = detteBildet + offset;

alleBilder.forEach((image, index) => {
if (index === nyBildeIndex) {
// Fjern current-image classen fra nåværende bilde
image.className = "current-image";
}
else {
   // Legg til current-image på det nye bild
image.className = "";
}
});
}


console.log(alleBilder);
flyttBilde(1);
console.log(alleBilder);
