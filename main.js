let button = document.querySelectorAll('button')
let btn1 = document.querySelector('.btn-1');
let btn2 = document.querySelector('.btn-2')
let btn3 = document.querySelector('.btn-3')
let btn4 = document.querySelector('.btn-4')
let btn5 = document.querySelector('.btn-5')
let btn6 = document.querySelector('.btn-6')
let btn7 = document.querySelector('.btn-7')
let btn8 = document.querySelector('.btn-8')
let btn9 = document.querySelector('.btn-9')
let x = 0;
let y = 0;
let scorex = document.querySelector('.score-x');
let scorey = document.querySelector('.score-y');
scorex.innerHTML = localStorage.getItem('x');
scorey.innerHTML = localStorage.getItem('y');
function start(e){
  let check = confirm(` ${e.toUpperCase()} wins \n Do you want to continue?`);
  let scorex = document.querySelector('.score-x');
  let scorey = document.querySelector('.score-y');
  if(check == true || check == false){
  if(e == 'x'){
    if(localStorage.getItem('x') == null){
      x = 0;
      x++;
      scorex.innerHTML = x;
      localStorage.setItem('x', x)
      window.location = 'index.html'
    }
  
    else{
      x = localStorage.getItem('x');
      x++;
      scorex.innerHTML = x;
       localStorage.removeItem('x');
       localStorage.setItem("x", x);
       window.location = 'index.html'
  }
  }
  if(e == '0'){
    if (localStorage.getItem('y') == null) {
      y = 0;
      y++;
      scorey.innerHTML = y;
      localStorage.setItem('y', y);
      window.location = 'index.html'
    }
    else {
      y = localStorage.getItem('y');
      y++;
      scorex.innerHTML = x;
      localStorage.removeItem('y');
      localStorage.setItem("y", y)
      window.location = 'index.html'
    }
  }
}
}
const array = [];
button.forEach((e,f,g) => {
  e.classList.add('btn');
  e.addEventListener('click', () => {
    if(e.innerHTML != 'x' && e.innerHTML != '0'){
    if(array == ''){
      array.push('x')
      e.innerHTML = 'x'
    }
    else if(array.length == 1){
      array.push('0');
      e.innerHTML = '0'
    }
    else if (array.length == 2) {
      array.push('x');
      e.innerHTML = 'x';
      
    }  
    
    else if (array.length == 3) {
          array.push('0');
          e.innerHTML = '0';
        }    
    else if (array.length == 4) {
              array.push('x');
              e.innerHTML = 'x';
if (btn1.textContent == 'x' && btn2.textContent == 'x' && btn3.textContent == 'x') {
  btn1.style.backgroundColor = 'green';
  btn3.style.backgroundColor = 'green';
  btn2.style.backgroundColor = 'green';
  start('x');
     }
else if (btn3.textContent == 'x' && btn5.textContent == 'x' && btn7.textContent == 'x') {
  btn3.style.backgroundColor = 'green';
  btn5.style.backgroundColor = 'green';
  btn7.style.backgroundColor = 'green';
  start('x');
}
else if (btn1.textContent == 'x' && btn4.textContent == 'x' && btn7.textContent == 'x') {
  btn1.style.backgroundColor = 'green';
  btn4.style.backgroundColor = 'green';
  btn7.style.backgroundColor = 'green';
  start('x');

}
else if (btn1.textContent == 'x' && btn5.textContent == 'x' && btn9.textContent == 'x') {
  btn1.style.backgroundColor = 'green';
  btn5.style.backgroundColor = 'green';
  btn9.style.backgroundColor = 'green';
  start('x');

}
else if (btn2.textContent == 'x' && btn5.textContent == 'x' && btn8.textContent == 'x') {
  btn2.style.backgroundColor = 'green';
  btn5.style.backgroundColor = 'green';
  btn8.style.backgroundColor = 'green';
  start('x');

}
else if (btn3.textContent == 'x' && btn6.textContent == 'x' && btn9.textContent == 'x') {
  btn3.style.backgroundColor = 'green';
  btn6.style.backgroundColor = 'green';
  btn9.style.backgroundColor = 'green';
  start('x');
}
else if (btn4.textContent == 'x' && btn5.textContent == 'x' && btn6.textContent == 'x') {
  btn4.style.backgroundColor = 'green';
  btn5.style.backgroundColor = 'green';
  btn6.style.backgroundColor = 'green';
  start('x');
}
if (btn7.textContent == 'x' && btn8.textContent == 'x' && btn9.textContent == 'x') {
  btn7.style.backgroundColor = 'green';
  btn8.style.backgroundColor = 'green';
  btn9.style.backgroundColor = 'green';
  start('x');
}
            }
    else if (array.length == 5) {
      array.push('0');
      e.innerHTML = '0';
if (btn1.textContent == '0' && btn2.textContent == '0' && btn3.textContent == '0') {
  btn1.style.backgroundColor = 'green';
  btn3.style.backgroundColor = 'green';
  btn2.style.backgroundColor = 'green';
  start('0');
}
else if (btn3.textContent == '0' && btn5.textContent == '0' && btn7.textContent == '0') {
  btn3.style.backgroundColor = 'green';
  btn5.style.backgroundColor = 'green';
  btn7.style.backgroundColor = 'green';
  start('0')
}
else if (btn1.textContent == '0' && btn4.textContent == '0' && btn7.textContent == '0') {
  btn1.style.backgroundColor = 'green';
  btn4.style.backgroundColor = 'green';
  btn7.style.backgroundColor = 'green';
  start('0');
}
else if (btn1.textContent == '0' && btn5.textContent == '0' && btn9.textContent == '0') {
  btn1.style.backgroundColor = 'green';
  btn5.style.backgroundColor = 'green';
  btn9.style.backgroundColor = 'green';
  start('0');
}
else if (btn2.textContent == '0' && btn5.textContent == '0' && btn8.textContent == '0') {
  btn2.style.backgroundColor = 'green';
  btn5.style.backgroundColor = 'green';
  btn8.style.backgroundColor = 'green';
  start('0');
}
else if (btn3.textContent == '0' && btn6.textContent == '0' && btn9.textContent == '0') {
  btn3.style.backgroundColor = 'green';
  btn6.style.backgroundColor = 'green';
  btn9.style.backgroundColor = 'green';
  start('0');
}
else if (btn4.textContent == '0' && btn5.textContent == '0' && btn6.textContent == '0') {
  btn4.style.backgroundColor = 'green';
  btn5.style.backgroundColor = 'green';
  btn6.style.backgroundColor = 'green';
  start('0');
}
if (btn7.textContent == '0' && btn8.textContent == '0' && btn9.textContent == '0') {
  btn7.style.backgroundColor = 'green';
  btn8.style.backgroundColor = 'green';
  btn9.style.backgroundColor = 'green';
  start('0');
}
    }
    else if (array.length == 6) {
      array.push('x');
      e.innerHTML = 'x';
if (btn1.textContent == 'x' && btn2.textContent == 'x' && btn3.textContent == 'x') {
  btn1.style.backgroundColor = 'green';
  btn3.style.backgroundColor = 'green';
  btn2.style.backgroundColor = 'green';
  start('x');
}
else if (btn3.textContent == 'x' && btn5.textContent == 'x' && btn7.textContent == 'x') {
  btn3.style.backgroundColor = 'green';
  btn5.style.backgroundColor = 'green';
  btn7.style.backgroundColor = 'green';
  start('x');
}
else if (btn1.textContent == 'x' && btn4.textContent == 'x' && btn7.textContent == 'x') {
  btn1.style.backgroundColor = 'green';
  btn4.style.backgroundColor = 'green';
  btn7.style.backgroundColor = 'green';
  start('x');
}
else if (btn1.textContent == 'x' && btn5.textContent == 'x' && btn9.textContent == 'x') {
  btn1.style.backgroundColor = 'green';
  btn5.style.backgroundColor = 'green';
  btn9.style.backgroundColor = 'green';
  start('x');
}
else if (btn2.textContent == 'x' && btn5.textContent == 'x' && btn8.textContent == 'x') {
  btn2.style.backgroundColor = 'green';
  btn5.style.backgroundColor = 'green';
  btn8.style.backgroundColor = 'green';
  start('x');
}
else if (btn3.textContent == 'x' && btn6.textContent == 'x' && btn9.textContent == 'x') {
  btn3.style.backgroundColor = 'green';
  btn6.style.backgroundColor = 'green';
  btn9.style.backgroundColor = 'green';
  start('x');
}
else if (btn4.textContent == 'x' && btn5.textContent == 'x' && btn6.textContent == 'x') {
  btn4.style.backgroundColor = 'green';
  btn5.style.backgroundColor = 'green';
  btn6.style.backgroundColor = 'green';
  start('x');
}
if (btn7.textContent == 'x' && btn8.textContent == 'x' && btn9.textContent == 'x') {
  btn7.style.backgroundColor = 'green';
  btn8.style.backgroundColor = 'green';
  btn9.style.backgroundColor = 'green';
  start('x');
}
    }
    else if (array.length == 7) {
      array.push('0');
      e.innerHTML = '0';
      
if (btn1.textContent == '0' && btn2.textContent == '0' && btn3.textContent == '0') {
  btn1.style.backgroundColor = 'green';
  btn3.style.backgroundColor = 'green';
  btn2.style.backgroundColor = 'green';
  start('0')
}
else if (btn3.textContent == '0' && btn5.textContent == '0' && btn7.textContent == '0') {
  btn3.style.backgroundColor = 'green';
  btn5.style.backgroundColor = 'green';
  btn7.style.backgroundColor = 'green';
  start('0')
}
else if (btn1.textContent == '0' && btn4.textContent == '0' && btn7.textContent == '0') {
  btn1.style.backgroundColor = 'green';
  btn4.style.backgroundColor = 'green';
  btn7.style.backgroundColor = 'green';
  start('0')
}
else if (btn1.textContent == '0' && btn5.textContent == '0' && btn9.textContent == '0') {
  btn1.style.backgroundColor = 'green';
  btn5.style.backgroundColor = 'green';
  btn9.style.backgroundColor = 'green';
  start('0')
}
else if (btn2.textContent == '0' && btn5.textContent == '0' && btn8.textContent == '0') {
  btn2.style.backgroundColor = 'green';
  btn5.style.backgroundColor = 'green';
  btn8.style.backgroundColor = 'green';
  start('0')
}
else if (btn3.textContent == '0' && btn6.textContent == '0' && btn9.textContent == '0') {
  btn3.style.backgroundColor = 'green';
  btn6.style.backgroundColor = 'green';
  btn9.style.backgroundColor = 'green';
  start('0')
}
else if (btn4.textContent == '0' && btn5.textContent == '0' && btn6.textContent == '0') {
  btn4.style.backgroundColor = 'green';
  btn5.style.backgroundColor = 'green';
  btn6.style.backgroundColor = 'green';
  start('0')
}
if (btn7.textContent == '0' && btn8.textContent == '0' && btn9.textContent == '0') {
  btn7.style.backgroundColor = 'green';
  btn8.style.backgroundColor = 'green';
  btn9.style.backgroundColor = 'green';
  start('0')
}

    }
    else if (array.length == 8) {
      array.push('x');
      e.innerHTML = 'x';
if (btn1.textContent == 'x' && btn2.textContent == 'x' && btn3.textContent == 'x') {
  btn1.style.backgroundColor = 'green';
  btn3.style.backgroundColor = 'green';
  btn2.style.backgroundColor = 'green';
  start('x')
}
else if (btn3.textContent == 'x' && btn5.textContent == 'x' && btn7.textContent == 'x') {
  btn3.style.backgroundColor = 'green';
  btn5.style.backgroundColor = 'green';
  btn7.style.backgroundColor = 'green';
  start('x')
}
else if (btn1.textContent == 'x' && btn4.textContent == 'x' && btn7.textContent == 'x') {
  btn1.style.backgroundColor = 'green';
  btn4.style.backgroundColor = 'green';
  btn7.style.backgroundColor = 'green';
  start('x')
}
else if (btn1.textContent == 'x' && btn5.textContent == 'x' && btn9.textContent == 'x') {
  btn1.style.backgroundColor = 'green';
  btn5.style.backgroundColor = 'green';
  btn9.style.backgroundColor = 'green';
  start('x')
}
else if (btn2.textContent == 'x' && btn5.textContent == 'x' && btn8.textContent == 'x') {
  btn2.style.backgroundColor = 'green';
  btn5.style.backgroundColor = 'green';
  btn8.style.backgroundColor = 'green';
  start('x')
}
else if (btn3.textContent == 'x' && btn6.textContent == 'x' && btn9.textContent == 'x') {
  btn3.style.backgroundColor = 'green';
  btn6.style.backgroundColor = 'green';
  btn9.style.backgroundColor = 'green';
  start('x')
}
else if (btn4.textContent == 'x' && btn5.textContent == 'x' && btn6.textContent == 'x') {
  btn4.style.backgroundColor = 'green';
  btn5.style.backgroundColor = 'green';
  btn6.style.backgroundColor = 'green';
  start('x')
}
else if (btn7.textContent == 'x' && btn8.textContent == 'x' && btn9.textContent == 'x') {
  btn7.style.backgroundColor = 'green';
  btn8.style.backgroundColor = 'green';
  btn9.style.backgroundColor = 'green';
  start('x')
}
    
    else{
      window.location = 'index.html'
    }
    }
    }
  })
  })
