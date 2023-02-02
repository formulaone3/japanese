import {kanjiArrayn1, kanjiArrayn2, kanjiArrayn3, kanjiArrayn4, kanjiArrayn5} from './kanjiArrays.js'

let kanjiInput = document.getElementById('kanji-input')
let currentKanji = document.getElementById('kanji-text')
let wrongInput = document.getElementById('wrong-input')
let btn1 = document.getElementById('btn-1')
let btn2 = document.getElementById('btn-2')
let btn3 = document.getElementById('btn-3')
let btn4 = document.getElementById('btn-4')
let btn5 = document.getElementById('btn-5')

      

let activeArray = null

kanjiInput.addEventListener('keypress', () => {
  if (event.key === "Enter") {
    if (kanjiInput.value == currentKanji.textContent) {
      kanjiInput.value = ""
      wrongInput.textContent = ""
      currentKanji.textContent = activeArray[Math.floor(Math.random() * activeArray.length)]
    } else {
      wrongInput.textContent = "wrong"
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
