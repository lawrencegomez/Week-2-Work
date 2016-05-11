
// Tried my best to use an object to store all of my data
// in lieu of having a bunch of difference variables and arrays to call separately.
// There are a few functions within it but its mainly just used like a dictionary.
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

// This function calls upon the calculation array and the input screen and erases
// the contents of each so that a fresh calc can be run.
function clear() {
  calc.calculation = []
  calc.screens.value = ''
  calc.screens.placeholder = 'hello'
}

// This initializes the click events for all of the buttons on the screen.
// The buttons are in a few difference arrays and objects so there are a few for loops
 // for the arrays and just a simple event for the other two
function init() {
  // For loop for the number buttons
    for(var i=0; i < calc.buttonsArr.length; i ++) {
      calc.buttonsArr[i].addEventListener('click', function() {
      calc.screens.value += this.innerHTML
      })
    }

    // For loop for the operator buttons.
    // This adds the event listener and then prints the value of the buttons that
    // are pressed onto the input screen. Then, the input screen value is taken and
    // thrown into an arry called "calculation"
    for(var x=0; x < calc.operatorsArr.length; x ++ ) {
      calc.operatorsArr[x].addEventListener('click', function() {
      calc.calculation.push(calc.screens.value)
      calc.calculation.push(this.innerHTML)
      calc.screens.value = ''
      calc.screens.placeholder = ''
      })
    }

    // added event listener for the clear button
    calc.clear.addEventListener('click', clear)

    // added event listener for the equals button that includes all of the if statements
    // to tell the computer what operator to use. It takes the numbers from the
    // calculation array and then performs one of the functions on them
    // and then clears the calculation array so new numbers can be entered
    calc.equals.addEventListener('click', function() {
      if (calc.calculation[1] == calc.operatorsArr[1].innerHTML) {
          calc.calculation.push(calc.screens.value)
          calc.screens.value = calc.operations.add(Number(calc.calculation[0]),Number(calc.calculation[2]))
          calc.calculation = []
      }
      else if (calc.calculation[1] == calc.operatorsArr[0].innerHTML) {
        calc.calculation.push(calc.screens.value)
        calc.screens.value = calc.operations.subtract(Number(calc.calculation[0]),Number(calc.calculation[2]))
        calc.calculation = []
      }
      else if (calc.calculation[1] == calc.operatorsArr[3].innerHTML) {
        calc.calculation.push(calc.screens.value)
        calc.screens.value = calc.operations.multiply(Number(calc.calculation[0]),Number(calc.calculation[2]))
        calc.calculation = []
      }
      else if (calc.calculation[1] == calc.operatorsArr[2].innerHTML) {
        calc.calculation.push(calc.screens.value)
        calc.screens.value = calc.operations.divide(Number(calc.calculation[0]),Number(calc.calculation[2]))
        calc.calculation = []
      }
    })
  }

init(); 
// Initialize the code so the buttons and code are all ready to go once the screen loads





























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
