'use strict';
{
  const numbers = document.querySelectorAll('.number');
  const oerater = document.querySelectorAll('.operater');
  const result  = document.getElementById('result');
  const period  = document.getElementById('period');
  
  let count="";
  function numberPressed (event) {
    const text = event.currentTarget.textContent;
    
    if( count === "0" || count === "00"){
      count = text;
    }else{count+=text;}
    result.textContent = count;
  }
    function operaterPressed (event) {
    const text = event.currentTarget.textContent;
    period.disabled=false;
    if( text === "="){
     count = eval(count);
     count=count*10000000
     count= Math.round(count);
     count=count/10000000
    } else if( text === "AC"){
      count ="";
    } else if(result.textContent.slice(-1) === "+" ||
              result.textContent.slice(-1) === "-" ||
              result.textContent.slice(-1) === "*" ||
              result.textContent.slice(-1) === "/" ||
              result.textContent.slice(-1) === "." )
    {count = count;
    }else if(text === "."){
      count+=text;  period.disabled=true;
    }else{count+=text;}
    result.textContent = count;
  }
  
  numbers.forEach(number=> number.addEventListener('click',numberPressed));
  oerater.forEach(operater=> operater.addEventListener('click',operaterPressed));
}
