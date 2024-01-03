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
    alert("Golfinho");
  } else if (pontuacaoContaGol === pontuacaoContaCoa) {
    alert("igual");

    console.log(pontuacaoContaGol + "\n" + pontuacaoContaCoa);
  } else {
    alert("Coalas");
  }
}
// }
