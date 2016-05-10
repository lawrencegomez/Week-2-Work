// Need the function (+ - * /)
// add event listeners to things
// clicks will console log the value of what is clicked
//

var calc = {
    buttonsArr: document.querySelectorAll('.num'),
    operatorsArr: document.querySelectorAll('operator'),
    clear: document.querySelector('#clear'),
    calculation: [],
    operations: { add: function(a,b) { return a+b},
                  subtact: function(a,b) { return a-b},
                  multiply: function(a,b) {return a*b},
                  divide: function(a,b) {return a/b}
              },
    equals: document.querySelector('#equal'),
    init: function() {
              for(var i=0; i < calc.buttonsArr.length; i ++) {
                calc.buttonsArr[i].addEventListener('click', function() {
                  calc.calculation.push(this.innerHTML)
                  console.log(calc.calculation)
                    if (calc.calculation.length < 4 && calc.calculation[1] == calc.buttonsArr[12].innerHTML) {
                      return calc.operations.add(Number(calc.calculation[0]), (Number(calc.calculation[2])))
                    }
                })
              }
          },
  }




  calc.init()





























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
