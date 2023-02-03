import {n2GrammarArray, n1GrammarArray, n3GrammarArray, n4GrammarArray, n5GrammarArray} from './grammar.js'

let darkToggle = document.getElementById('dark-button')
let header2 = document.getElementById('header-text')      
let navIcon = document.getElementById('menu-btn')
let navItems = document.getElementById('nav-menu')
let gb1 = document.getElementById('g-btn-1')
let gb2 = document.getElementById('g-btn-2')
let gb3 = document.getElementById('g-btn-3')
let gb4 = document.getElementById('g-btn-4')
let gb5 = document.getElementById('g-btn-5')
let gli1 = document.getElementById('g-li-1')
let gli2 = document.getElementById('g-li-2')
let gli3 = document.getElementById('g-li-3')
let formDiv = document.getElementById('form-container')
let greetingText = document.getElementById('show-hide')
let answersBtn = document.getElementById('answers-btn')
let qAnswers = document.getElementById('answers-display')


//    nav toggle      //
navIcon.addEventListener('click', navToggle)

function navToggle(){
  navItems.classList.toggle('nav-active')
}

// dark toggle //

darkToggle.addEventListener('click', toggle)
function toggle(){
    header2.classList.toggle('dark-text')
    formDiv.classList.toggle('dark-text')
    greetingText.classList.toggle('dark-text')
    answersBtn.classList.toggle('dark-text')
    document.body.classList.toggle('dark')
    navIcon.classList.toggle('dark-text')
    navItems.classList.toggle('dark-text')
    gli1.classList.toggle('dark-text')
    gli2.classList.toggle('dark-text')
    gli3.classList.toggle('dark-text')
}

  // grammar forms for grammar page //

gb1.addEventListener('click', function(){
  greetingText.style.display = "none"
  let forms = n1GrammarArray.map(g => {0
    return `<form class='grammar-form'>
    <p class='question-text'>${g.question}</p>
    <input class="answer" type='checkbox'>${g.answer[0]}</input>
    <input class="answer" type='checkbox'>${g.answer[1]}</input>
    <input class="answer" type='checkbox'>${g.answer[2]}</input>
    <input class="answer" type='checkbox'>${g.answer[3]}</input>
</form>
    `
  }).join('')
  formDiv.innerHTML = ""
  formDiv.innerHTML += forms
  answersBtn.style.display = 'block'
  let answersbox = `<h3 class="answers" >Answers: 1: []  2: []  3: [] 4: [] 5: []</h3>`
  qAnswers.innerHTML = ""
  qAnswers.innerHTML += answersbox
  qAnswers.style.display = "none"
})

gb2.addEventListener('click', function(){
  greetingText.style.display = "none"
  let forms = n2GrammarArray.map(g => {
    return `<form class='grammar-form'>
    <p class='question-text'>${g.question}</p>
    <input class="answer" type='checkbox'>${g.answer[0]}</input>
    <input class="answer" type='checkbox'>${g.answer[1]}</input>
    <input class="answer" type='checkbox'>${g.answer[2]}</input>
    <input class="answer" type='checkbox'>${g.answer[3]}</input>
</form>
    `
  }).join('')
  formDiv.innerHTML = ""
  formDiv.innerHTML += forms
  answersBtn.style.display = 'block'
  let answersbox = `<h3 class="answers" >Answers: 1: []  2: []  3: [] 4: [] 5: []</h3>`
  qAnswers.innerHTML = ""
  qAnswers.innerHTML += answersbox
  qAnswers.style.display = "none"
  
})

gb3.addEventListener('click', function(){
  greetingText.style.display = "none"
  let forms = n3GrammarArray.map(g => {
    return `<form class='grammar-form'>
        <p class='question-text'>${g.question}</p>
        <input class="answer" type='checkbox'>${g.answer[0]}</input>
        <input class="answer" type='checkbox'>${g.answer[1]}</input>
        <input class="answer" type='checkbox'>${g.answer[2]}</input>
        <input class="answer" type='checkbox'>${g.answer[3]}</input>
    </form>
    `
  }).join('')
  formDiv.innerHTML = ""
  formDiv.innerHTML += forms
  answersBtn.style.display = 'block'
  let answersbox = `<h3 class="answers" >Answers: 1: []  2: []  3: [] 4: [] 5: []</h3>`
  qAnswers.innerHTML = ""
  qAnswers.innerHTML += answersbox
  qAnswers.style.display = "none"
})

gb4.addEventListener('click', function(){
  greetingText.style.display = "none"
  let forms = n4GrammarArray.map(g => {
    return `<form class='grammar-form'>
        <p class='question-text'>${g.question}</p>
        <input class="answer" type='checkbox'>${g.answer[0]}</input>
        <input class="answer" type='checkbox'>${g.answer[1]}</input>
        <input class="answer" type='checkbox'>${g.answer[2]}</input>
        <input class="answer" type='checkbox'>${g.answer[3]}</input>
    </form>
    `
  }).join('')
  formDiv.innerHTML = ""
  formDiv.innerHTML += forms
  answersBtn.style.display = 'block'
  let answersbox = `<h3 class="answers" >Answers: 1: []  2: [nam]  3: [] 4: [] 5: []</h3>`
  qAnswers.innerHTML = ""
  qAnswers.innerHTML += answersbox
  qAnswers.style.display = "none"
})

gb5.addEventListener('click', function(){
  greetingText.style.display = "none"
  let forms = n5GrammarArray.map(g => {
    return `<form class='grammar-form'>
    <p class='question-text'>${g.question}</p>
    <input class="answer" type='checkbox'>${g.answer[0]}</input>
    <input class="answer" type='checkbox'>${g.answer[1]}</input>
    <input class="answer" type='checkbox'>${g.answer[2]}</input>
    <input class="answer" type='checkbox'>${g.answer[3]}</input>
</form>
    `
  }).join('')
  formDiv.innerHTML = ""
  formDiv.innerHTML += forms
  answersBtn.style.display = 'block'
  let answersbox = `<h3 class="answers" >Answers: 1: []  2: []  3: [] 4: [] 5: []</h3>`
  qAnswers.innerHTML = ""
  qAnswers.innerHTML += answersbox
  qAnswers.style.display = "none"
  
})


// answers toggle //

answersBtn.addEventListener('click', function(){
  qAnswers.style.display = "block"
  answersBtn.style.display = 'none'
})
