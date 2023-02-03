import {kanjiArrayn1, kanjiArrayn2, kanjiArrayn3, kanjiArrayn4, kanjiArrayn5} from './kanjiArrays.js'
import {n2GrammarArray, n1GrammarArray} from './grammar.js'

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
let gb1 = document.getElementById('g-btn-1')
let gb2 = document.getElementById('g-btn-2')
let gb3 = document.getElementById('g-btn-3')
let gb4 = document.getElementById('g-btn-4')
let gb5 = document.getElementById('g-btn-5')
let formDiv = document.getElementById('form-container')



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
