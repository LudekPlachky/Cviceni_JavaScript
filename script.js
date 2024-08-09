document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#letenkyForm");
  const celkovaCenaElement = document.querySelector("#celkovaCena");
  const kontrolaRozpoctuButton = document.querySelector("#kontrolaRozpoctu");
  const vysledekKontrolyElement = document.querySelector("#vysledekKontroly");
  const poznamkaElement = document.querySelector("#poznamka");

  function vypocetCeny() {
    const destinace = parseInt(document.querySelector("#destinace").value);
    const pocet = parseInt(document.querySelector("#pocet").value);
    const zpatecni = document.querySelector("#zpatecni").checked;
    const trida = parseFloat(
      document.querySelector('input[name="trida"]:checked').value
    );

    let cena = destinace * pocet;
    if (zpatecni) cena *= 2;
    cena *= trida;

    celkovaCenaElement.textContent = cena.toFixed(2) + " Kč";
  }

  form.addEventListener("change", vypocetCeny);

  kontrolaRozpoctuButton.addEventListener("click", function () {
    const rozpocet = parseFloat(document.querySelector("#rozpocet").value);
    const celkovaCena = parseFloat(celkovaCenaElement.textContent);

    if (rozpocet >= celkovaCena) {
      vysledekKontrolyElement.textContent = "Váš rozpočet je dostačující!";
      vysledekKontrolyElement.className = "alert alert-success";
    } else {
      vysledekKontrolyElement.textContent = "Váš rozpočet bohužel nestačí.";
      vysledekKontrolyElement.className = "alert alert-danger";
    }
    vysledekKontrolyElement.style.display = "block";
  });

  poznamkaElement.addEventListener("input", function (e) {
    this.value = this.value.replace(/[^a-zA-Z0-9\s.,!?]/g, "");
  });

  vypocetCeny();
});
