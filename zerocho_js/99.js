var num1 = Math.ceil(Math.random() * 9);
var num2 = Math.ceil(Math.random() * 9);
var result = num1 * num2;
var flag = true;

var body_ = document.body;
var voca = document.createElement('div');

voca.textContent = String(num1) + ' X ' + String(num2) + ' = ?';
document.body.append(voca);


var form = document.createElement('form');
document.body.append(form);
var input = document.createElement('input');
form.append(input);
var button = document.createElement('button');
button.textContent = '입력';
form.append(button);
var resultbar = document.createElement('div');
document.body.append(resultbar);

form.addEventListener('submit',function 콜백함수 (e){ //콜백함수
  e.preventDefault();
  console.log(result,input.value);

  if(result === Number(input.value)){
    resultbar.textContent = '딩동댕';
    
    num1 = Math.ceil(Math.random() * 9);
    num2 = Math.ceil(Math.random() * 9);
    result = num1 * num2;
    voca.textContent = String(num1) + ' X ' + String(num2) + ' = ?';

    input.value='';
    input.focus( );
  }else{
    resultbar.textContent = '땡';
    input.value='';
    input.focus( );


  }
})

  // while(flag){
  //   var answer = prompt(num1+' 곱하기 '+num2+' =?');
  //   if(result === Number(answer)){
  //     alert('딩동댕');
  //     flag=false;
  //  }else{
  //     alert('땡');
  //   }
  // }
