# projects related to DOM

## Project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# solution code

## project 1

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);

    if (e.target.id == 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });
});
```

## project 2

```javascript
const form = document.querySelector('form');

// this usecase will give you empty
// when load this page, we got empty value
// const height = parseInt(document.querySelector('#height').value)
// so, we need write inside the form

form.addEventListener('submit', function (e) {
  e.preventDefault(); // default action rest for a moment

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);

  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi < 18.6) {
      results.innerHTML = `<span>BMI: ${bmi} <br/></span><span style = "color: red;"> Under Weight</span>`;
    } else if (bmi <= 24.9) {
      results.innerHTML = `<span>BMI: ${bmi} <br/></span>Normal Weight`;
    } else {
      results.innerHTML = `<span>BMI: ${bmi} <br/></span><span style = "color: red;"> Overweight </span>`;
    }
  }
});
```

## project 3
```javascript
const clock = document.getElementById('clock');

// document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
// 1000 msec


```

## project 4
```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess > 100) {
    alert('Please enter a number less then 101');
  } else if (guess < 1) {
    alert('Please enter a number more than 1');
  } else {
    prevGuess.push(guess);

    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);

      endGame();
    } else {
      displayGuess(guess);

      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOO high`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2id = "newGame">Start new Game</h2>`;
  playGame = false;
  startOver.appendChild(p);
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener(function(e) {
    randomNumber = parseInt(Math.random()*100 + 1)
    prevGuess = []
    newGame = 1
    guessSlot = ''

    remaining.removeAttribute('disable')
    startOver.removeChild(p)

    playGame = true
  })
}


```