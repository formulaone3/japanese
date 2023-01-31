import {kanjiArray} from 'kanji.js'
alert(kanjiArray)
const root = document.getElementById('root')
const kanjiInput = document.getElementById('kanji-input')
const submitBtn = document.getElementById('submit-button')
const currentKanji = document.getElementById('kanji-text')

//const kanjiArray = ["気", "目", "木", "花", "海", "人", "一つ", "一人", "二人", "三日", "五", "四", "六", "七", "八", "九", "十", "百", "万", "千", "日", "週", "月", "年", "時", "間", "分", "午後", "午前", "先","来る", "何", "半", "今", "男"]


currentKanji.innerHTML = kanjiArray[0]


function updateKanji(){
    if(kanjiInput.value == currentKanji.innerHTML){
        currentKanji.innerHTML = kanjiArray[Math.floor(Math.random() * kanjiArray.length)]
        kanjiInput.value = ""
    }
    
}

submitBtn.addEventListener('click', updateKanji)
