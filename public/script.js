let points = 0;
function play(userChoice) {
    const choices = ['rock', 'paper', 'scissor'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    
    
    document.getElementById('player-img').src = `./images/rps/${userChoice}.jpg`;
    document.getElementById('computer-img').src = `./images/rps/${computerChoice}.jpg`;

    let result = '';

    if (userChoice === computerChoice) {
      result = `It's a tie! Both chose ${userChoice}.`;
    } else if (
      (userChoice === 'rock' && computerChoice === 'scissor') ||
      (userChoice === 'paper' && computerChoice === 'rock') ||
      (userChoice === 'scissor' && computerChoice === 'paper')
    ) {
      result = `You win! ${userChoice.charAt(0).toUpperCase() + userChoice.slice(1)} beats ${computerChoice}.`;
      point+=1;
    } else {
      result = `You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${userChoice}.`;
      $('#questionModal').modal('show');
    }

    document.getElementById('result').innerHTML = `
      <p>${result}</p>
      <p>Computer chose: ${computerChoice}</p>
    `;
  }
  function answerQuestion(isCorrect) {
    if (isCorrect) {
      points += 4;  
    } else {
      points -= 2;  
    }

    document.getElementById('points').innerText = `Points: ${points}`;
    $('#questionModal').modal('hide'); 
  }