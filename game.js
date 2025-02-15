window.onload = function() {



const positions = ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "E1", "E2", "E3", "E4", "E5", "E6", "E7", "E8", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "G1", "G2", "G3", "G4", "G5", "G6", "G7", "G8", "H1", "H2", "H3", "H4", "H5", "H6", "H7", "H8"];
let startingPos = positions[Math.floor(Math.random() * positions.length)];
let targetPos = positions[Math.floor(Math.random() * positions.length)];
let score = 0;

document.getElementById("starting-pos").innerHTML = startingPos;
document.getElementById("target-pos").innerHTML = targetPos;
document.getElementById("score").innerHTML = score;



document.getElementById("submit-move").addEventListener("click", function() {

  const move = document.getElementById("move").value;

if (move === targetPos) {
    document.getElementById("message").innerHTML = "Parabéns!";
    // Gerar nova posição aqui
    targetPos = positions[Math.floor(Math.random() * positions.length)];
    document.getElementById("target-pos").innerHTML = targetPos;
    // Atualiza o score aqui
    score++;
    document.getElementById("score").innerHTML = score;
    return;
  }
document.getElementById("move").addEventListener("keypress", function(event) {
if (event.key === "Enter") {
document.getElementById("submit-move").click();
}
});


  if (!positions.includes(move)) {
    document.getElementById("message").innerHTML = "Posição inválida. Tente novamente.";
    return;
  }

  const colDiff = move.charCodeAt(0) - startingPos.charCodeAt(0);
  const rowDiff = parseInt(move[1]) - parseInt(startingPos[1]);

  if (![-2, -1, 1, 2].includes(colDiff) || ! [-2, -1, 1, 2].includes(rowDiff) || Math.abs(colDiff) === Math.abs(rowDiff)) {
document.getElementById("message").innerHTML = "Movimento inválido. Tente novamente.";
return;
}

startingPos = move;
document.getElementById("move").value = "";

document.getElementById("starting-pos").innerHTML = startingPos;

document.getElementById("score").innerHTML = score;

if (startingPos === targetPos) {
document.getElementById("message").innerHTML = "Parabéns!";
} else {
document.getElementById("message").innerHTML = "Continue procurando...";
}
});

};
