'use strict'

var nums = []
// var numbers = levelCheck()
// console.log(numbers)

function init() {
  levelCheck()
}

function levelCheck(elbtn) {
  nums = []
  var elRestart = document.querySelector('.restart')

  var numsLength = elbtn.value
  for (var i = 1; i <= numsLength; i++) {
    nums.push(i)
  }
  // console.log(nums)
  elRestart.style.display = 'none'
  renderTable()
  return nums
}



function renderTable() {

  var elTable = document.querySelector('.tableBd')
  var strHTML = ''
  var length = Math.sqrt(nums[nums.length - 1])
  for (var i = 0; i < length; i++) {
    shuffle(nums)
    if(i%2===0){
      strHTML += `<tr>`
    }
    else{
      strHTML += `<tr class='evenline'>`
    }
    for (var j = 0; j < length; j++) {
      var randomNum = drawNum()
      // var cellData = 'data-i="' + i + '" data-j="' + j + '"'
      strHTML += `<td onclick="cellClicked(this,${length})" >${randomNum}</td>`
    }
    strHTML += `</tr>`
  }
  elTable.innerHTML = strHTML
  // countdown();
}

function restart() {
  var elTds = document.querySelectorAll('td')
  for (var i = 0; i < elTds.length; i++) {
    var currTd = elTds[i]
    currTd.classList.remove('rightClass')
  }
  prevNum = 0
}


var prevNum = 0
function cellClicked(elTd, lastNum) {
  var elRestart = document.querySelector('.restart')
  var userInput = +elTd.innerText
  if (prevNum + 1 === userInput) {
    // console.log('good')
    prevNum = userInput
    elTd.classList.add('rightClass')
  }
  else alert('Think again!')

  if (prevNum === Math.pow(lastNum, 2)) {
    alert('Wow!')
    elRestart.style.display = 'block'
  }
}







function shuffle(items) {
  var randIdx, keep, i;
  for (i = items.length - 1; i > 0; i--) {
    randIdx = getRandomInt(0, items.length - 1);

    keep = items[i];
    items[i] = items[randIdx];
    items[randIdx] = keep;
  }
  return items;
}
function drawNum() {
  return nums.pop()
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is inclusive and the minimum is inclusive 
}

// function countdown() {
//   var seconds = 61;
//   var counter = document.getElementById("counter");
//   function tick() {
//     seconds--;
//     counter.innerHTML =
//       "0:" + (seconds < 10 ? "0" : "") + String(seconds);
//     if (seconds > 0) {
//       setTimeout(tick, 1000);
//     }
//   }
//   tick();
// }
