const telefoneTxtbox = document.getElementById("telefone__txtbox");
var prefix = "+55 ";
telefoneTxtbox.value = prefix;

telefoneTxtbox.addEventListener("keydown", (typeevent) => {
  var textContent = telefoneTxtbox.value;
  function fixPrefixonTxtbox() {
    if (textContent.indexOf(prefix) !== 0) {
      //Faz o prefixo ficar fixo na tela
      if (textContent != prefix.replace(" ", "")) {
        telefoneTxtbox.value = prefix + textContent;
      } else {
        telefoneTxtbox.value = prefix;
      }
    }
  }
  fixPrefixonTxtbox();
  function dontHandleNotNumbers() {
    if (isNaN(Number(typeevent.key)) && typeevent.key != "Backspace") {
      //Evita de aceitar qualquer tecla que não seja número ou backspace
      typeevent.preventDefault();
      return false;
    }
  }
  dontHandleNotNumbers();
});
