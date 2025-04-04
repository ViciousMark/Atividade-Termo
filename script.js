const palavraSecreta = "LINDA";
const maxTentativas = 6;
let tentativas = 0;

function verificarPalpite() {
  const input = document.getElementById("guessInput");
  const palpite = input.value.toUpperCase();
  const mensagem = document.getElementById("mensagem");

  if (palpite.length !== 5) {
    mensagem.textContent = "Digite uma palavra com 5 letras.";
    return;
  }

  if (tentativas >= maxTentativas) {
    mensagem.textContent = "Suas tentativas acabaram! A palavra era " + palavraSecreta;
    input.disabled = true;
    return;
  }

  const grid = document.getElementById("grid");
  const linha = document.createElement("div");
  linha.classList.add("linha");

  for (let i = 0; i < 5; i++) {
    const letraDiv = document.createElement("div");
    letraDiv.classList.add("letra");

    if (palpite[i] === palavraSecreta[i]) {
      letraDiv.classList.add("correta");
    } else if (palavraSecreta.includes(palpite[i])) {
      letraDiv.classList.add("quase");
    } else {
      letraDiv.classList.add("errada");
    }

    letraDiv.textContent = palpite[i];
    linha.appendChild(letraDiv);
  }

  grid.appendChild(linha);
  tentativas++;

  if (palpite === palavraSecreta) {
    mensagem.textContent = "🎉 Parabéns! Você acertou!";
    input.disabled = true;
  } else if (tentativas === maxTentativas) {
    mensagem.textContent = "😢 Você perdeu! A palavra era " + palavraSecreta;
    input.disabled = true;
  } else {
    mensagem.textContent = "";
  }

  input.value = "";
  input.focus();
}