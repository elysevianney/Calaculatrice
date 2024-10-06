let buffer = '';
let outPut='';
const screen = document.querySelector('.screen');

function buttonClick(value) {
    if (isNaN(value)) { 
        gererSymbol(value);
    } else {
        buffer = value
        outPut += buffer;
        screen.innerText = outPut;
    }

    if (value.length ) {
        
    }
}


function gererSymbol(symbol){
    
    switch (symbol) {
       case 'C':
        screen.innerText = '0';
        buffer ='';
            outPut = '';
           break;
       case '=':
            screen.innerText = eval(screen.innerText);
            buffer ='';
            outPut = '';
            break;    
       
       case '←':
           if(screen.innerText.length === 1){
            screen.innerText = '0';
           }else{
            outPut = outPut.substring(0, outPut.length - 1);
            screen.innerText = outPut;
           }
           break; 
       case 'x':
        buffer = '*';
        outPut += buffer;
        screen.innerText = outPut;
        break; 
       case '/':
        buffer = '/';
        outPut += buffer;
    screen.innerText = outPut;
           break; 
           
       case '+':
        buffer = '+';
        outPut += buffer;
    screen.innerText = outPut;
           break; 
       case '-':
        buffer = '-';
        outPut += buffer;
    screen.innerText = outPut;
            break;            
       default:
           break;
    }   
}

function init() {
    document.querySelector('.calc-btns').addEventListener('click', function(event){
        //alert(event.target.innerText);
        buttonClick(event.target.innerText);
    })
}
init();

