const colors = [
   '#FFFFFF',
   '#2196F3',
   '#4CAF50',
   '#FF9800',
   '#009688',
   '#795548',
]
const refs = {
   targetToChange: document.querySelector('body'),
   startBtn: document.querySelector('[data-action="start"]'),
   stopBtn:  document.querySelector('[data-action="stop"]')
}
const randomIntegerFromInterval = (min, max) => {return Math.floor(Math.random() * (max - min + 1) + min)}
const { targetToChange, startBtn, stopBtn } = refs
let id // глобальна змінна для використання різними функціями
startBtn.addEventListener('click',changeColor)
startBtn.style.height = '200px'
startBtn.style.width = '300px'
startBtn.style.marginLeft = '500px'
startBtn.style.marginTop = '200px'
//console.log(stopBtn) //кнопка   старт підключена
stopBtn.addEventListener('click',stopChanging)
stopBtn.style.height = '200px'
stopBtn.style.width = '300px'
stopBtn.style.marginLeft = '50px'
//console.log(startBtn) // кнопка стоп підключена
//const timerId = setInterval(changeColor, 1000)
function changeColor() {
   startBtn.disabled=true
   console.log('START HYPNOSIS')
   id = setInterval(function () {
      targetToChange.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)]
      console.log(colors[randomIntegerFromInterval(0, 5)]) // випадковий  колір з  елементів масиву колор
   }, 1000)
}
function stopChanging() {
   clearInterval(id)
   startBtn.disabled=false
   console.log('STOP HYPNOSIS')
}


