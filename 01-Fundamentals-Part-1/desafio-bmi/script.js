function calculateBMI() {
  let markMass = parseFloat(document.getElementById("markMass").value);
  let markHeight = parseFloat(document.getElementById("markHeight").value);
  let johnMass = parseFloat(document.getElementById("johnMass").value);
  let johnHeight = parseFloat(document.getElementById("johnHeight").value);

  //Calculo

  let markBmi = markMass / markHeight ** 2;
  let johnBmi = johnMass / johnHeight ** 2;

  let markHeightBmi = markBmi > johnBmi;

  let resultElement = document.getElementById("result");
  resultElement.innerHTML =
    "Mark's BMI: " +
    markBmi.toFixed(2) +
    "<br>" +
    "John's BMI:  " +
    johnBmi.toFixed(2) +
    "<br>" +
    (markHeightBmi
      ? "Mark has a higher BMI than john"
      : "John has a higher BMI than Mark");
}
