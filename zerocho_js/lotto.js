//Array함수 , fill() , map(), slice()
var lottoCandidate = Array(45).fill().map(function (element, index) {
  return index + 1;
});

console.log(lottoCandidate);

var shuffle = [];
while (lottoCandidate.length > 0) {

  //splice 0~44 까지의 자리수 중에서 1개를 뽑는다.
  var shuffled = lottoCandidate.splice(Math.floor(Math.random() * lottoCandidate.length), 1)[0];
  shuffle.push(shuffled);
}

console.log(shuffle);
var bonus = shuffle[shuffle.length - 1];
var winning = shuffle.slice(0, 6);

//sort()
//p는 이전 숫자, c는 현재 숫자
//p-c 결과가 0보다 크면 순서를 바꾼다.
console.log('당첨 숫자들 : ', winning.sort(function (p, c) {
  return p - c;
}),
  ' 보너스 숫자 : ', bonus);



//클래스는 여러개 생성이 가능하기때문에 인덱스를 표기해줘야한다.
//id는 한개 밖에 생성이 안되기 때문에 인덱스 표기가 필요하지 않음
var result = document.querySelector("#result");
function 공색칠하기(숫자, result) {
  var Ball = document.createElement('div');
  Ball.textContent = 숫자;
  //javascript로 css 조작
  Ball.style.display = "inline-block";
  Ball.style.border = "1px solid black";
  Ball.style.borderRadius = "20px";
  Ball.style.width = '30px';
  Ball.style.height = '30px';
  Ball.style.textAlign = 'center';
  Ball.style.alignItems = 'center';
  Ball.style.marginRight = '10px'
  Ball.style.fontSize = '20px'
  //javascript에서 class는 중요한 키워드라 className으로
  // 클래스 이름을 부여한다
  Ball.className='공아이디'+숫자;
  var 배경색;
  if (숫자 <= 10) {
    배경색 = 'red';
  } else if (숫자 <= 20) {
    배경색 = 'orange';
  } else if (숫자 <= 30) {

    배경색 = 'yellow';
  } else if (숫자 <= 40) {

    배경색 = 'blue';
  } else {

    배경색 = 'green';
  }

  Ball.style.background=배경색;
  result.appendChild(Ball);
}

setTimeout(function 비동기콜백함수() {

  공색칠하기(winning[0], result);
}, 1000); //1000ms는 1초
setTimeout(function 비동기콜백함수() {
  공색칠하기(winning[1], result);
}, 2000); //1000ms는 1초
setTimeout(function 비동기콜백함수() {
  공색칠하기(winning[2], result);
}, 3000); //1000ms는 1초
setTimeout(function 비동기콜백함수() {
  공색칠하기(winning[3], result);
}, 4000); //1000ms는 1초
setTimeout(function 비동기콜백함수() {
  공색칠하기(winning[4], result);
}, 5000); //1000ms는 1초
setTimeout(function 비동기콜백함수() {
  공색칠하기(winning[5], result);
}, 6000); //1000ms는 1초


setTimeout(function 비동기콜백함수() {
  var bonusBall = document.querySelector(".bonus")[0];
  공색칠하기(bonus, bonusBall);
}, 7000); //1000ms는 1초

//클로저문제가 뭐지?



//더 해봄직한거
//번호 직접 찍고 몇개 맞았나 비교해보고
//몇등인지까지 해보기
//나중에 멀티도 생각