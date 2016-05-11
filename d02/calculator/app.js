// Need the function (+ - * /)
// add event listeners to things
// clicks will console log the value of what is clicked
//

var calc = {
    buttonsArr: document.querySelectorAll('.num'),
    operatorsArr: document.querySelectorAll('.operator'),
    clear: document.querySelector('#clear'),
    calculation: [],
    operations: { add: function(a,b) { return a+b},
                  subtract: function(a,b) { return a-b},
                  multiply: function(a,b) {return a*b},
                  divide: function(a,b) {return a/b}
              },
    equals: document.querySelector('#equal'),
    screens: document.querySelector('input')
}

function clear() {
  calc.calculation = []
  calc.screens.value = ''
  console.log('cleared it')
}

function init() {
  // For loop for the number buttons
    for(var i=0; i < calc.buttonsArr.length; i ++) {
      calc.buttonsArr[i].addEventListener('click', function() {
      calc.screens.value += this.innerHTML
      })
    }
    // For loop for the operator buttons
    for(var x=0; x < calc.operatorsArr.length; x ++ ) {
      calc.operatorsArr[x].addEventListener('click', function() {
      calc.calculation.push(calc.screens.value)
      calc.calculation.push(this.innerHTML)
      calc.screens.value = ''
      console.log(calc.calculation)
      })
    }
    // added event listener for the clear button
    calc.clear.addEventListener('click', clear)

    // added event listener for the equals button
    calc.equals.addEventListener('click', function() {
      if (calc.calculation[1] == calc.operatorsArr[1].innerHTML) {
          calc.calculation.push(calc.screens.value)
          calc.screens.value = calc.operations.add(Number(calc.calculation[0]),Number(calc.calculation[2]))
        console.log(calc.operations.add(Number(calc.calculation[0]),Number(calc.calculation[2])))
      }
      else if (calc.calculation[1] == calc.operatorsArr[0].innerHTML) {
        calc.calculation.push(calc.screens.value)
        calc.screens.value = calc.operations.subtract(Number(calc.calculation[0]),Number(calc.calculation[2]))
        console.log(calc.operations.subtract(Number(calc.calculation[0]),Number(calc.calculation[2])))
      }
      else if (calc.calculation[1] == calc.operatorsArr[3].innerHTML) {
        calc.calculation.push(calc.screens.value)
        calc.screens.value = calc.operations.multiply(Number(calc.calculation[0]),Number(calc.calculation[2]))
        console.log(calc.operations.multiply(Number(calc.calculation[0]),Number(calc.calculation[2])))
      }
      else if (calc.calculation[1] == calc.operatorsArr[2].innerHTML) {
        calc.calculation.push(calc.screens.value)
        calc.screens.value = calc.operations.divide(Number(calc.calculation[0]),Number(calc.calculation[2]))
        console.log(calc.operations.divide(Number(calc.calculation[0]),Number(calc.calculation[2])))
      }
    })
  }

init();





























// one: document.querySelector('#uno').innerHTML,
// two: document.querySelector('#dos').innerHTML,
// three: document.querySelector('#tres').innerHTML,
// four: document.querySelector('#quattro').innerHTML,
// five: document.querySelector('#cinco').innerHTML,
// six: document.querySelector('#seis').innerHTML,
// seven: document.querySelector('#siete').innerHTML,
// eight: document.querySelector('#ocho').innerHTML,
// nine: document.querySelector('#nueve').innerHTML,
// zero: document.querySelector('#zero').innerHTML,
// minus: document.querySelector('#subtraction').innerHTML,
// add: document.querySelector('#addition').innerHTML,
// divide: document.querySelector('#division').innerHTML,
// multiply: document.querySelector('#multiplication').innerHTML,
// clear: document.querySelector('#clear').innerHTML
