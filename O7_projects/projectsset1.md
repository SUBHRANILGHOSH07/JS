# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

```javascript
const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach(function(button){
  button.addEventListener('click',function(e){
    console.log(e)
    console.log(e.target.id)
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id
    }
  })
})

```

## project 2

```javascript

const form = document.querySelector('form')
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit',function(e){
  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value)

  const weight = parseInt(document.querySelector('#weight').value)

  const results = document.querySelector('#results')

  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = "Please give a valid height"
  }else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = "Please give a valid weight"
  }else{
    const bmi = (weight / ((height * height) / 10000)).toFixed(2)
    if(bmi < 18.6){
      results.innerHTML = "Under Weight"
    }else if(bmi >= 18.6 && bmi <= 24.9){
      results.innerHTML = "Normal Weight"
    }else{
      results.innerHTML = "OverWeight"
    }
  }

})

```

## project 3

```javascript

const clock = document.querySelector('#clock')


setInterval(function(){
  let date = new Date()

  clock.innerHTML = date.toLocaleTimeString()
}, 1000)

```

## project 4

```javascript

let randomnumber = parseInt(Math.random()*100 + 1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const loworHi = document.querySelector('.lowOrHi')
const startover = document.querySelector('.resultParas')

const p = document.createElement('p')


let prevguess = []
let numguess = 1

let playgame = true

if(playgame){
  submit.addEventListener('click',function(e){
    e.preventDefault()
    const guess = parseInt(userInput.value)
    validateguess(guess)
  })
}


function validateguess(guess){
  if(isNaN(guess)){
    alert('Please enter a valid number')
  }else if(guess < 1){
    alert('Please enter a number more than 1')
  }else if(guess > 100){
    alert('Please enter a number more than 100')
  }else{
    prevguess.push(guess)
    if(numguess === 11){
      displayguess(guess)
      displaymessage(`Game Over,random number was ${randomnumber}`)
      endgame()
    }else{
      displayguess(guess)
      checkguess(guess)
    }
  }
}

function checkguess(guess){
  if(guess === randomnumber){
    displaymessage('You guessed it right')
    endgame()
  }else if(guess < randomnumber){
    displaymessage('Number is low')
  }else if(guess > randomnumber){
    displayguess('Number is high')
  }
}

function displayguess(guess){
  userInput.value = ''
  guessSlot.innerHTML += `${guess},  `
  numguess++;
  remaining.innerHTML = `${11 - numguess}`
}

function displaymessage(message){
  loworHi.innerHTML=`<h2>${message}</h2>`
}

function endgame(){
  userInput.value = ''
  userInput.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML = '<h2 id="newGame">Start new Game</h2>'
  startover.appendChild(p)
  playgame = false
  newgame()
}

function newgame(){
  const newgamebutton = document.querySelector('#newGame')
  newgamebutton.addEventListener('click',function(e){
    randomnumber = parseInt(Math.random()*100 + 1)
    prevguess=[]
    numguess = 1
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11 - numguess}`
    userInput.removeAttribute('disabled')
    startover.removeChild(p)

    playgame = true
  })
}

```

# project 5

```javascript

const insert = document.getElementById('insert')
window.addEventListener('keydown',(e)=>{
  insert.innerHTML=`
  <div class = 'color'>
  <table>
  <tr>
    <th>Key</th>
    <th>Keycode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'Space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
  </div>
  `;
})

```

# project 6
 
 ```javascript

 // generate a random color

const randomcolor = function(){
  const hex = '0123456789ABCDEF'
  let color = '#'
  for(let i=0; i<6; i++)
  {
    color += hex[Math.floor(Math.random()*16)];
  }
  return color;
}

let intervalid;
const startcolor = function(){
  function changecolor(){
    document.body.style.backgroundColor = randomcolor()
  }
  if(! intervalid){
    intervalid = setInterval(changecolor,1000)
  }
}
const stopcolor = function(){
  clearInterval(intervalid)
  intervalid = null;
}

document.querySelector('#start').addEventListener('click',startcolor);
document.querySelector('#stop').addEventListener('click',stopcolor);

 ```