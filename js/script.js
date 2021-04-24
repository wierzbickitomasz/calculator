let calculationsMath = ''
let resultMath = ''
let lastKeyPressed = ''
let lastButtonPressed = ''
let calculations = document.querySelector("#calculations_text");
let result = document.querySelector("#result_text");
let x = ""

document.addEventListener('keydown', logKey);

let buttons = document.querySelectorAll(".button");
for(let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function(event) {
        handleClick(i)
  })
}

function addChar(char) {
  calculationsMath = calculationsMath + "" + char
  updateCalculations()
}
function updateCalculations() {
  calculations.textContent = calculationsMath
  lastKeyPressed = ''
}

function makeCalculations() {
  if((lastButtonPressed != "%") && (calculationsMath[0] != "*") && (calculationsMath[0] != "/") && (calculationsMath[0] != "%") && (calculationsMath[0] != ".")) {
    resultMath = eval(calculationsMath)
    cutResult()
  }
   
  else if (lastButtonPressed == "%") {
    calculationsMath = calculationsMath.slice(0, -1)
    if((calculationsMath[0] != "*") && (calculationsMath[0] != "/") && (calculationsMath[0] != "%") && (calculationsMath[0] != ".")) {
      resultMath = eval(calculationsMath)
      resultMath = resultMath/100
      cutResult()
    }
    else {
      calculationsMath = calculationsMath.substring(1)
      resultMath = eval(calculationsMath)
      resultMath = resultMath/100
      cutResult()
    }
  }
  else if ((calculationsMath[0] == "*") || (calculationsMath[0] == "/") || (calculationsMath[0] == "%") || (calculationsMath[0] == ".")) {
    calculationsMath = calculationsMath.substring(1)
    resultMath = eval(calculationsMath)
    cutResult()
  }
}
function updateResult(char) {
  x =calculationsMath.length 
  result.textContent = resultMath
  if(resultMath == "Infinity") {
    resultMath = "Nie można dzielić przez zero"
  }
  

  else if(x == 0) {
    addChar(char)
  }
  else if ( (x > 0) && (char != "") ){
    
        if(((calculationsMath[x-1])=="*") || ((calculationsMath[x-1])=="/")  || ((calculationsMath[x-1])=="+") || ((calculationsMath[x-1])=="-") || ((calculationsMath[x-1])=="%")){
          if(((char)=="*") || ((char)=="/")  || ((char)=="+") || ((char)=="-") || ((char)=="%")){

          }
          else {
            addChar(char)
          }
        } else {
          addChar(char)
        }
        
    }

}


function resetCalculationsMath() {
  calculationsMath = ''
}

function resetResult() {
  resultMath = ''
  updateResult()
}
function resetResultMath() {
  resultMath = ''
}

function plusMinus() {
  if(calculationsMath[0] != "-")
    calculationsMath = "-".concat(calculationsMath)
  else {
    calculationsMath = calculationsMath.substring(1)
  }
}
function cutResult() {
  resultMath = (resultMath.toString()).slice(0, 7)
}




function logKey(e) {
  switch(` ${e.code}`) {
    case ' ShiftRight':
      lastKeyPressed = 'Shift'
      break;
    case ' ShiftLeft':
      lastKeyPressed = 'Shift'
      break;    
    case ' Digit0':
      updateResult("0")  
      break;
    case ' Digit1':
      updateResult("1")  
      break;
    case ' Digit2':
      updateResult("2")  
      break;
    case ' Digit3':
      updateResult("3")  
      break;
    case ' Digit4':
      updateResult("4")  
      break;
    case ' Digit5':
      if(lastKeyPressed == 'Shift') {
      updateResult("%")
      lastButtonPressed = "%"
      }
      else {
      updateResult("5")  
      }
      break;
    case ' Digit6':
      updateResult("6")  
      break;
    case ' Digit7':
      updateResult("7")
      break;  
    case ' Digit8':
    if(lastKeyPressed == 'Shift') {
      updateResult("*")
      }
      else {
      updateResult("8")
      }
      break;
    case ' Digit9':
      updateResult("9")
      break;
    case ' Minus':
      updateResult("-")
      break;    
    case ' Equal':
    if(lastKeyPressed == 'Shift') {
      updateResult("+")
      }
      else {
      makeCalculations()
      updateResult("")
      resetCalculationsMath()
      resetResultMath()
      lastButtonPressed = "="
      }
      break;
    case ' NumpadAdd':
      updateResult("+")
      break;
    case ' NumpadSubtract':
      updateResult("-")
      break;
    case ' NumpadMultiply':
      updateResult("*")
      break;
    case ' NumpadDivide':
      updateResult("/")
      break;
    case ' Numpad0':
      updateResult("0")
      break;
    case ' Numpad1':
      updateResult("1")
      break;
    case ' Numpad2':
      updateResult("2")
      break;
    case ' Numpad3':
      updateResult("3")
      break;
    case ' Numpad4':
      updateResult("4")
      break;
    case ' Numpad5':
      updateResult("5")
      break;
    case ' Numpad6':
      updateResult("6")
      break;
    case ' Numpad7':
      updateResult("7")
      break;
    case ' Numpad8':
      updateResult("8")
      break;
    case ' Numpad9':
      updateResult("9")
      break;
    case ' NumpadEnter':
      makeCalculations()
      updateResult("")
      resetCalculationsMath()
      resetResultMath()
      lastButtonPressed = "="
      break;
    case ' Enter':
      makeCalculations()
      updateResult("")
      resetCalculationsMath()
      resetResultMath()
      lastButtonPressed = "="
      break;
    case ' Slash':
      updateResult("/")
      break; 
    case ' Period':
      updateResult(".")
      break;
    case ' Comma':
      updateResult(".")
      break;
    case ' Escape':
      resetCalculationsMath()
      updateCalculations("")
      updateResult("")
      break;
    default:
        
  } 
 
  
}



function handleClick(i) {
  switch(true) {
    case (i==0):
      updateResult("%")
      lastButtonPressed = "%"
      break;
    case (i==1):
      plusMinus()
      updateCalculations()
      break;
    case (i==2):
      resetCalculationsMath()
      updateCalculations("")
      updateResult("")
      break;
    case (i==3):
      updateResult("/")
      break;
    case (i==4):
      updateResult("7")
      break;
    case (i==5):
      updateResult("8")
      break;
    case (i==6):
      updateResult("9")
      break;
    case (i==7):
      updateResult("*")
      break;
    case (i==8):
      updateResult("4")
      break;
    case (i==9):
      updateResult("5")
      break;
    case (i==10):
      updateResult("6")
      break;
    case (i==11):
      updateResult("-")
      break;
    case (i==12):
      updateResult("1")
      break;
    case (i==13):
      updateResult("2")
      break;
    case (i==14):
      updateResult("3")
      break;
    case (i==15):
      updateResult("+")
      break;
    case (i==16):
      updateResult("0")
      break;
    case (i==17):
      updateResult(".")
      break;
    case (i==18):
      makeCalculations()
      updateResult("")
      resetCalculationsMath()
      lastButtonPressed = "="
      resetResultMath()
      break;
    default:
  }
}

