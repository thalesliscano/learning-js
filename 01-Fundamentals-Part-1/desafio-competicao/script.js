document.getElementById("btn-media").addEventListener("click", function () {
  setTimeout(() => {
    window.location.href = window.location.href;
  }, 5000);
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  setTimeout(() => {
    window.location.href = window.location.href;
  }, 5000);
});

function fazerMedia() {
  let p1Gol, p2Gol, p3Gol;
  p1Gol = document.getElementById("pontuacaoUm-golfinhos").value;
  p2Gol = document.getElementById("pontuacaoDois-golfinhos").value;
  p3Gol = document.getElementById("pontuacaoTres-golfinhos").value;
  console.log(p1Gol, p2Gol, p3Gol);

  let p1Coa, p2Coa, p3Coa;
  p1Coa = document.getElementById("pontuacaoUm-coalas").value;
  p2Coa = document.getElementById("pontuacaoDois-coalas").value;
  p3Coa = document.getElementById("pontuacaoTres-coalas").value;

  let pontuacaoContaGol = (p1Gol + p2Gol + p3Gol) / 3;
  let pontuacaoContaCoa = (p1Coa + p2Coa + p3Coa) / 3;

  // if (pontuacaoContaGol >= 100 && pontuacaoContaCoa >= 100) {
  if (pontuacaoContaGol > pontuacaoContaCoa) {
    let imgGol = document.createElement("img");
    let imgTrofeu = document.createElement("img");
    imgGol.classList.add("equipe", "img-add");
    imgTrofeu.classList.add("equipe", "img-add");

    imgGol.src = "./img/transferir.jpeg";
    imgTrofeu.src = "./img/transferir (2).jpeg";

    document.getElementById("trofeu").appendChild(imgGol);
    document.getElementById("trofeu").appendChild(imgTrofeu);
  } else if (pontuacaoContaGol === pontuacaoContaCoa) {
    let imgGol = document.createElement("img");
    let imgCoa = document.createElement("img");

    imgGol.classList.add("equipe");
    imgCoa.classList.add("equipe");

    imgGol.src = "./img/transferir.jpeg";
    imgCoa.src = "./img/transferir (1).jpeg";

    document.getElementById("trofeu").appendChild(imgGol);
    document.getElementById("trofeu").appendChild(imgCoa);
    console.log(pontuacaoContaGol + "\n" + pontuacaoContaCoa);
  } else {
    let imgGol = document.createElement("img");
    let imgTrofeu = document.createElement("img");
    imgGol.classList.add("equipe", "img-add");
    imgTrofeu.classList.add("equipe", "img-add");

    imgGol.src = "./img/transferir (1).jpeg";
    imgTrofeu.src = "./img/transferir (2).jpeg";

    document.getElementById("trofeu").appendChild(imgGol);
    document.getElementById("trofeu").appendChild(imgTrofeu);
  }
  document.getElementById("btn-media").disabled = true;
}
// }
