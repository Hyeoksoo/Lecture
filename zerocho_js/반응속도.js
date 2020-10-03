// 우선 클릭을 해야한다
var 스크린 = document.querySelector('#screen');

//스크린의 상태를 딕셔너리로 사용할 수도 있기때문에 준비
var 상태 = {

};

//전역변수로 선언
var 시작시간;
var 끝시간;
var 기록 = [];
var 타임아웃;
var 반응속도;
var 평균=0;

스크린.addEventListener('click', function () {


  if (스크린.classList.contains('waiting')) {
    // 클래스를 지우고 새로 추가
    스크린.classList.remove('waiting');
    스크린.classList.add('ready');
    스크린.textContent = '초록색이 되면 클릭하세요';
    타임아웃 = setTimeout(function () {
      시작시간 = new Date();
      스크린.click();
    }, Math.floor(Math.random() * 1000) + 2000);//2000~3000 사이의 수 (2초 ~3초)

  } else if (스크린.classList.contains('ready')) {
    if (!시작시간) {//부정 클릭 undefined나 null이면 false
      clearTimeout(타임아웃);
      document.querySelector('.result1').textContent = '너무 빠름';
      스크린.classList.remove('ready');
      스크린.classList.add('waiting');
      스크린.textContent = '너무 빠름';
    } else {
      스크린.classList.remove('ready');
      스크린.classList.add('now');
      스크린.textContent = '클릭';
    }
  } else if (스크린.classList.contains('now')) {
    document.querySelector('.result1').textContent = '';
    끝시간 = new Date();

    // 그럴필요가 있을 지는 모르겠지만 시작시간 끝시간 초기화
    //시작시간 = null;
    //끝시간 = null;

    반응속도 = (끝시간 - 시작시간) / 1000;
    기록.push(반응속도);
    console.log('반응속도', 반응속도, ' 초'); //밀리초단위
    if(기록.length===3){
      
      function sum(value){//sum은 callback함수 그러니 value는 currentValue가 된다.
        평균 += value;
      }
      기록.forEach(sum); //배열 내 인자 수만큼 반복되어 인자가 value가 된다.
      평균 = 평균/3;
      console.log(평균, ' 초');
      document.querySelector('.result1').textContent ='반응속도 평균 '+평균+' 초';
      평균 = 0;
    }
    console.log(기록.length);

    스크린.classList.remove('now');
    스크린.classList.add('waiting');
    스크린.textContent = '클릭해서 시작하세요';

  }
});

