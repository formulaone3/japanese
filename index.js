const kanjiInput = document.getElementById('kanji-input')
const currentKanji = document.getElementById('kanji-text')
const wrongInput = document.getElementById('wrong-input')
const btn1 = document.getElementById('btn-1')
const btn2 = document.getElementById('btn-2')
const btn3 = document.getElementById('btn-3')
const btn4 = document.getElementById('btn-4')
const btn5 = document.getElementById('btn-5')

const kanjiArrayn5 = ["気", "目", "木", "花", "海", "人", "一つ", "一人", "二人", "三日", "五", "四", "六", "七", "八", "九", "十", "百", "万", "千", "日", "週", "月", "年", "時", "間", "分", "午後", "午前", "先","来る", "何", "半", "今", "男"]
const kanjiArrayn4 = ["会", "同", "事", "社", "初", "物", "地", "場", "員", "開", "明", "動", "", "東", "体", "通", "言う", "話", "題", "度", "生", "安", "家", "世", "多い", "思う", "以上", "心", "重い", "元","文字", "世界", "近い", "遠い", "売る"]

btn5.addEventListener('click', newKanji(kanjiArrayn5))
btn4.addEventListener('click', newKanji(kanjiArrayn4))

function newKanji(){
    currentKanji.textContent = array[Math.floor(Math.random() * array.length)]
    kanjiInput.addEventListener('keypress', ()=>{
        if (event.key === "Enter"){
            if(kanjiInput.value == currentKanji.textContent){
                kanjiInput.value = ""
                wrongInput.textContent = ""
                currentKanji.textContent = array[Math.floor(Math.random() * array.length)]
            } else if(kanjiInput.value !== currentKanji.textContent){
                wrongInput.textContent = "Wrong n"
            }
    } 
    
})
}


currentKanji.textContent = array[Math.floor(Math.random() * array.length)]


