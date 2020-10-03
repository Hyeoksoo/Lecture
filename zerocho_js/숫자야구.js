var 숫자후보;
var 숫자배열;

function 숫자뽑기() {
  숫자후보 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  숫자배열 = [];
  for (var i = 0; i < 4; i++) {

    //splice는 배열로 리턴함 그래서 0번째 요소를 저장
    var 뽑은것 = 숫자후보.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    숫자배열.push(뽑은것);
    
  }
}


숫자뽑기();
console.log(숫자배열.join(''));


var 결과 = document.createElement('h1');
document.body.append(결과);

var 폼 = document.createElement('form');
document.body.append(폼);

var 입력창 = document.createElement('input');
폼.append(입력창);
입력창.type = 'text';
입력창.maxLength = 4;

var 버튼 = document.createElement('button');
버튼.textContent = '입력!';
폼.append(버튼);


var 틀린횟수 = 0;
폼.addEventListener('submit', function (e) {
  e.preventDefault();
  var 답 = 입력창.value;
  console.log(숫자배열.join(''),답);

  if(입력창.value===''){
    결과.textContent='답을 적어주세요 ㅜ';
    
  }

  else if (답 === 숫자배열.join('')) { // 답이 맞으면
    결과.textContent = '홈런';
    입력창.value = '';
    입력창.focus();


    숫자뽑기();
    틀린횟수 = 0;
    //문자열.join(구분자) -> 배열
    //배열.split(구분자)-> 문자열
    //배열.indexOf(값) -> 값의 위치를 알 수 있다 없으면 -1 리턴
  } else { //답이 틀리면
    var 답배열 = 답.split('');
    var 스트라이크 = 0;
    var 볼 = 0;

    틀린횟수++;
    console.log(틀린횟수+'틀린횟수');
    if (틀린횟수 > 10) {
      결과.textContent = '10번 넘게 틀림 실패 답은 ' + 숫자배열.join(',');
      입력창.value = '';
      입력창.focus();
      숫자뽑기();
      틀린횟수 = 0;

      
    } else {
      for (var i = 0; i < 4; i++) {
        if (Number(답배열[i]) === 숫자배열[i]) {
          console.log('같은자리?');
          스트라이크++;
        } else if (숫자배열.indexOf(Number(답배열[i]))>-1) {
          console.log('곂치는 숫자?');
          볼++;
        }


      }
      결과.textContent = 스트라이크 + ' 스트라이크 ' + 볼 + ' 볼 ';
      입력창.value='';
      입력창.focus();
    }

  }
  
}); 