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
    qAnswers.classList.toggle('dark-text')
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
    <input class="answer" name="radAnswer" type='radio'><span>${g.answer[0]}</span></input>
    <input class="answer" name="radAnswer" type='radio'><span>${g.answer[1]}</span></input>
    <input class="answer" name="radAnswer" type='radio'><span>${g.answer[2]}</span></input>
    <input class="answer" name="radAnswer" type='radio'><span>${g.answer[3]}</span></input>
</form>
    `
  }).join('')
  formDiv.innerHTML = ""
  formDiv.innerHTML += forms
  answersBtn.style.display = 'block'
  let answersbox = `<h3 class="answers" >Answers: 1: [ いえども ]  <br> 2: [ ともなると ] <br> 3: [ まみれ ] <br> 4: [ とあって ] <br> 5: [ ぬいた ]</h3>`
  qAnswers.innerHTML = ""
  qAnswers.innerHTML += answersbox
  qAnswers.style.display = "none"
})

gb2.addEventListener('click', function(){
  greetingText.style.display = "none"
  let forms = n2GrammarArray.map(g => {
    return `<form class='grammar-form'>
    <p class='question-text'>${g.question}</p>
    <input class="answer" type='radio' name="radAnswer"><span>${g.answer[0]}</span></input>
    <input class="answer" type='radio' name="radAnswer"><span>${g.answer[1]}</span></input>
    <input class="answer" type='radio' name="radAnswer"><span>${g.answer[2]}</span></input>
    <input class="answer" type='radio' name="radAnswer"><span>${g.answer[3]}</span></input>
</form>
    `
  }).join('')
  formDiv.innerHTML = ""
  formDiv.innerHTML += forms
  answersBtn.style.display = 'block'
  let answersbox = `<h3 class="answers" >Answers: 1: [ しかかからない ] <br> 2: [ 基づいて ] <br> 3: [ 死に ] <br> 4: [ ありながら ] <br> 5: [ 最中 ]</h3>`
  qAnswers.innerHTML = ""
  qAnswers.innerHTML += answersbox
  qAnswers.style.display = "none"
  
})

gb3.addEventListener('click', function(){
  greetingText.style.display = "none"
  let forms = n3GrammarArray.map(g => {
    return `<form class='grammar-form'>
        <p class='question-text'>${g.question}</p>
    <input class="answer" type='radio' name="radAnswer" ><span>${g.answer[0]}</span></input>
    <input class="answer" type='radio' name="radAnswer" ><span>${g.answer[1]}</span></input>
    <input class="answer" type='radio' name="radAnswer" ><span>${g.answer[2]}</span></input>
    <input class="answer" type='radio' name="radAnswer" ><span>${g.answer[3]}</span></input>
    </form>
    `
  }).join('')
  formDiv.innerHTML = ""
  formDiv.innerHTML += forms
  answersBtn.style.display = 'block'
  let answersbox = `<h3 class="answers" >Answers: 1: [ って ] <br> 2: [ たびに ] <br> 3: [ いつの間にか ] <br> 4: [ ことになった ] <br> 5: [ のように ]</h3>`
  qAnswers.innerHTML = ""
  qAnswers.innerHTML += answersbox
  qAnswers.style.display = "none"
})

gb4.addEventListener('click', function(){
  greetingText.style.display = "none"
  let forms = n4GrammarArray.map(g => {
    return `<form class='grammar-form'>
        <p class='question-text'>${g.question}</p>
    <input class="answer" type="radio" name="radAnswer"><span>${g.answer[0]}</span></input>
    <input class="answer" type="radio" name="radAnswer"><span>${g.answer[1]}</span></input>
    <input class="answer" type="radio" name="radAnswer"><span>${g.answer[2]}</span></input>
    <input class="answer" type="radio" name="radAnswer"><span>${g.answer[3]}</span></input>
    </form>
    `
  }).join('')
  formDiv.innerHTML = ""
  formDiv.innerHTML += forms
  answersBtn.style.display = 'block'
  let answersbox = `<h3 class="answers" >Answers: 1: [ のに ] <br> 2: [ 決めないでほしい ] <br> 3: [ かかってきた ] <br> 4: [ できてよかった ] <br> 5: [ あとで ]</h3>`
  qAnswers.innerHTML = ""
  qAnswers.innerHTML += answersbox
  qAnswers.style.display = "none"
})

gb5.addEventListener('click', function(){
  greetingText.style.display = "none"
  let forms = n5GrammarArray.map(g => {
    return `<form class='grammar-form'>
    <p class='question-text'>${g.question}</p>
    <input class="answer" type='radio' name="radAnswer"><span>${g.answer[0]}</span></input>
    <input class="answer" type='radio' name="radAnswer"><span>${g.answer[1]}</span></input>
    <input class="answer" type='radio' name="radAnswer"><span>${g.answer[2]}</span></input>
    <input class="answer" type='radio' name="radAnswer"><span>${g.answer[3]}</span></input>
</form>
    `
  }).join('')
  formDiv.innerHTML = ""
  formDiv.innerHTML += forms
  answersBtn.style.display = 'block'
  let answersbox = `<h3 class="answers" >Answers: 1: [　を　]</span> <br> 2: [　まだ　] <br> 3: [　で　] <br> 4: [　が　] <br> 5: [　行って　]</h3>`
  qAnswers.innerHTML = ""
  qAnswers.innerHTML += answersbox
  qAnswers.style.display = "none"
  
})


// answers toggle //

answersBtn.addEventListener('click', function(){
  qAnswers.style.display = "block"
  answersBtn.style.display = 'none'
})
