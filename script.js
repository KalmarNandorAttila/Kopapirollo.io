// Egyelőre kezdetben minden számláló 0 lesz
let wins = 0;
let losses = 0;
let draws = 0;

function updateStats() {
    document.getElementById('win').innerText = wins;
    document.getElementById('loss').innerText = losses;
    document.getElementById('draw').innerText = draws;
}

function playerChoice(choice) {
    var computerChoices = ['kő', 'papír', 'olló'];
    var computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    var result;
    if (choice === computerChoice) {
        result = 'Döntetlen!';
        draws++; 
    } else if (
        (choice === 'kő' && computerChoice === 'olló') ||
        (choice === 'papír' && computerChoice === 'kő') ||
        (choice === 'olló' && computerChoice === 'papír')
    ) {
        result = 'Nyertél!';
        wins++; 
    } else {
        result = 'Vesztettél!';
        losses++; 
    }

    updateStats(); 

    document.getElementById('result').textContent = `Végeredmény : ${result},\t Játékos válasza : ${choice},\t Gép válasza : ${computerChoice}`;
   
}

  
  document.getElementById('rock').addEventListener('click', function() {
    playerChoice('kő');
  });
  
  document.getElementById('paper').addEventListener('click', function() {
    playerChoice('papír');
  });
  
  document.getElementById('scissors').addEventListener('click', function() {
    playerChoice('olló');
  });
  

