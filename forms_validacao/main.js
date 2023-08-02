document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var campoA = parseFloat(document.getElementById("campoA").value);
    var campoB = parseFloat(document.getElementById("campoB").value);
  
    if (isNaN(fieldA) || isNaN(fieldB)) {
      showMessage("Preencha ambos os campos com números.", "error");
    } else if (fieldB > fieldA) {
      showMessage("Formulário válido! B é maior que A.", "success");
    } else {
      showMessage("Formulário inválido! B deve ser maior que A.", "error");
    }
  });
  
  document.getElementById("campoA").addEventListener("keyup", function() {
    clearMessage();
  });
  
  document.getElementById("campoB").addEventListener("keyup", function() {
    clearMessage();
  });
  
  function showMessage(message, type) {
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = message;
    resultDiv.className = type;
  }
  
  function clearMessage() {
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";
    resultDiv.className = "";
  }
  
  