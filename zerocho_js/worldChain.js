var body = document.body;
var voca = document.createElement('div');
voca.textContent = '대나무';
document.body.append(voca);
var form = document.createElement('form');
document.body.append(form);

var input = document.createElement('input');
form.append(input);
var button = document.createElement('button');
button.textContent = '입력';
form.append(button);
var result = document.createElement('div');
document.body.append(result);

form.addEventListener('submit',function 콜백함수 (e){ //콜백함수
  e.preventDefault();
  if(voca.textContent[voca.textContent.length -1] === input.value[0]){
    result.textContent = '딩동댕';
    voca.textContent = input.value;
    input.value='';
    input.focus( );
  }else{
    result.textContent = '땡';
    input.value='';
    input.focus( );


  }
});
