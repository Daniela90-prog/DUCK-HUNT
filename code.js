const audioElement = document.getElementById('audioElement');
const toggleSoundButton = document.getElementById('toggleSound');

let isSoundOn = true;

toggleSoundButton.addEventListener('click', () => {
  if (isSoundOn) {
    audioElement.pause();
    toggleSoundButton.textContent = 'Encender Sonido';
  } else {
    audioElement.play();
    toggleSoundButton.textContent = 'Apagar Sonido';
  }
  
  isSoundOn = !isSoundOn;
});

function addPlayer() {
    var playerName = document.getElementById("playerName").value;

    if (playerName.trim() === "") {
        alert("Por favor, ingresa un nombre de jugador válido.");
        return;
    }

    var table = document.getElementById("playerTable").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);

    var nameCell = newRow.insertCell(0);
    nameCell.innerHTML = playerName;

    var actionCell = newRow.insertCell(1);
    var deleteButton = document.createElement("i");
    deleteButton.className = "fa fa-trash";
    deleteButton.onclick = function () {
    table.deleteRow(newRow.rowIndex -1);
    };
    actionCell.appendChild(deleteButton);

    document.getElementById("playerName").value = "";
}






