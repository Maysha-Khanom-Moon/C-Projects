# projects related to DOM

## Project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# solution code

## project 1

``````
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
``````

## project 2

``````
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
``````

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