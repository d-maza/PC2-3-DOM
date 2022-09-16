let age = prompt(
  "Necesitamos saber su edad para poder relizar una oferta a su medida"
);
age = parseInt(age);

age >= 60
  ? mostrar(
      "goldenrod",
      "Tarjeta Oro 👵🏽",
      "ITV de tu silla gratis y dentadura postiza de dracula 🦷 para tus fiestas de Halloween 🦇"
    )
  : age <= 60 && age >= 30
  ? mostrar(
      "lightcyan",
      "Tarjeta Nomina 💵",
      "Ven y deja que te saquemos hastas la ultima gota de tu pasta💉🩸 💸💸💸"
    )
  : age <= 30 && age >= 18
  ? mostrar(
      "pink",
      "Tarjeta Joven 🗽",
      "Vuela ✈, Salta 🪂 y disfrutas 🎉, te ofrecemos miles de descuentos en adtividades de ocio "
    )
  : mostrar(
      "",
      "Oooops!",
      "No tenemos ningún plan para ofrecerle  ¿Pusite bien la edad? 🧐"
    );

function mostrar(color, titulo, parrafo) {
  let elem = document.getElementById("principal");
  elem.style.backgroundColor = color;
  elem.innerHTML = `<h2>${titulo}</h2>
        <hr>
        <h5>${parrafo}</h5>`;
}
