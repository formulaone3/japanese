import {kanjiArrayn1, kanjiArrayn2, kanjiArrayn3, kanjiArrayn4, kanjiArrayn5} from './kanjiArrays.js'
import {n2GrammarArray, n1GrammarArray, n3GrammarArray, n4GrammarArray, n5GrammarArray} from './grammar.js'

let kanjiInput = document.getElementById('kanji-input')
let currentKanji = document.getElementById('kanji-text')
let wrongInput = document.getElementById('wrong-input')
let btn1 = document.getElementById('btn-1')
let btn2 = document.getElementById('btn-2')
let btn3 = document.getElementById('btn-3')
let btn4 = document.getElementById('btn-4')
let btn5 = document.getElementById('btn-5')
let darkToggle = document.getElementById('dark-button')
let header =document.getElementById('header-text')      
let navIcon = document.getElementById('menu-btn')
let navItems = document.getElementById('nav-menu')
let li1 = document.getElementById('li-1')
let li2 = document.getElementById('li-2')
let li3 = document.getElementById('li-3')
let formDiv = document.getElementById('form-container')

//    nav toggle      //

navIcon.addEventListener('click', navToggle)

function navToggle(){
  navItems.classList.toggle('nav-active')
}


darkToggle.addEventListener('click', toggle)
function toggle(){
    document.body.classList.toggle('dark')
    navIcon.classList.toggle('dark-text')
    navItems.classList.toggle('dark-text')
    kanjiInput.classList.toggle('dark-input')
    currentKanji.classList.toggle('dark-text')
    wrongInput.classList.toggle('dark-text')
    header.classList.toggle('dark-header')
    btn1.classList.toggle('dark-input')
    btn2.classList.toggle('dark-input')
    btn3.classList.toggle('dark-input')
    btn4.classList.toggle('dark-input')
    btn5.classList.toggle('dark-input')
    li1.classList.toggle('dark-text')
    li2.classList.toggle('dark-text')
    li3.classList.toggle('dark-text')
}


//     kanji page btns and elements   //

let activeArray = null

kanjiInput.addEventListener('keypress', () => {
  if (event.key === "Enter") {
    if (kanjiInput.value == currentKanji.textContent) {
      kanjiInput.value = ""
      wrongInput.textContent = ""
      currentKanji.textContent = activeArray[Math.floor(Math.random() * activeArray.length)]
    } else {
      wrongInput.textContent = "try again"
    }
  }
})

btn5.addEventListener('click', () => {
  activeArray = kanjiArrayn5
  currentKanji.textContent = activeArray[Math.floor(Math.random() * activeArray.length)]
})

btn4.addEventListener('click', () => {
  activeArray = kanjiArrayn4
  currentKanji.textContent = activeArray[Math.floor(Math.random() * activeArray.length)]
})

btn3.addEventListener('click', () => {
    activeArray = kanjiArrayn3
    currentKanji.textContent = activeArray[Math.floor(Math.random() * activeArray.length)]
  })

  btn2.addEventListener('click', () => {
    activeArray = kanjiArrayn2
    currentKanji.textContent = activeArray[Math.floor(Math.random() * activeArray.length)]
  })

  btn1.addEventListener('click', () => {
    activeArray = kanjiArrayn1
    currentKanji.textContent = activeArray[Math.floor(Math.random() * activeArray.length)]
  })

  // grammar forms for grammar page //

gb1.addEventListener('click', function(){
  let forms = n1GrammarArray.map(g => {
    return `<form class='grammar-form'>
        <p class='question1-text'>${g}</p>
        <input type='checkbox'>...</input>
        <input type='checkbox'>...</input>
        <input type='checkbox'>...</input>
        <input type='checkbox'>...</input>
    </form>
    `
  }).join('')
  formDiv.innerHTML = ""
  formDiv.innerHTML += forms
})

gb2.addEventListener('click', function(){
  let forms = n2GrammarArray.map(g => {
    return `<form class='grammar-form'>
        <p class='question1-text'>${g}</p>
        <input type='checkbox'>...</input>
        <input type='checkbox'>...</input>
        <input type='checkbox'>...</input>
        <input type='checkbox'>...</input>
    </form>
    `
  }).join('')
  formDiv.innerHTML = ""
  formDiv.innerHTML += forms
})

gb3.addEventListener('click', function(){
  let forms = n3GrammarArray.map(g => {
    return `<form class='grammar-form'>
        <p class='question1-text'>${g.question}</p>
        <input type='checkbox'>${g.answer[0]}</input>
        <input type='checkbox'>${g.answer[1]}</input>
        <input type='checkbox'>${g.answer[2]}</input>
        <input type='checkbox'>${g.answer[3]}</input>
    </form>
    `
  }).join('')
  formDiv.innerHTML += forms
})

gb4.addEventListener('click', function(){
  let forms = n4GrammarArray.map(g => {
    return `<form class='grammar-form'>
        <p class='question1-text'>${g}</p>
        <input type='checkbox'>...</input>
        <input type='checkbox'>...</input>
        <input type='checkbox'>...</input>
        <input type='checkbox'>...</input>
    </form>
    `
  }).join('')
  formDiv.innerHTML += forms
})

gb5.addEventListener('click', function(){
  let forms = n5GrammarArray.map(g => {
    return `<form class='grammar-form'>
        <p class='question1-text'>${g}</p>
        <input type='checkbox'>...</input>
        <input type='checkbox'>...</input>
        <input type='checkbox'>...</input>
        <input type='checkbox'>...</input>
    </form>
    `
  }).join('')
  formDiv.innerHTML += forms
})
