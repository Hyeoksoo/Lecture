var 가로 = 4;
var 세로 = 3;
var 색깔들 = ['red', 'red', 'orange', 'orange', 'green', 'green', 'yellow', 'yellow', 'white', 'white', 'pink', 'pink'];
var 색깔후보 = 색깔들.slice(); //배열의 참조관계가 끊김
var 색깔 = [];
var 클릭플래그 = true;
var 클릭카드 = [];
var 완성카드 = []; //완성되면 클릭 못하도록
var 시작시간;


//피셔 예이츠 셔플
function 셔플(){
  for (var i = 0; 색깔후보.length > 0; i++) {
    색깔 = 색깔.concat(색깔후보.splice(Math.floor(Math.random() * 색깔후보.length), 1));
  }

}

function 카드세팅(가로, 세로) {
  //카드 세팅
  
  for (var i = 0; i < 가로 * 세로; i++) {
    클릭플래그 = false;
    var card = document.createElement('div');
    card.className = 'card';
    var cardInner = document.createElement('div');
    cardInner.className = 'card-inner';
    var cardFront = document.createElement('div');
    cardFront.className = 'card-front';
    var cardBack = document.createElement('div');
    cardBack.className = 'card-back';

    cardBack.style.backgroundColor = 색깔[i];
    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    card.appendChild(cardInner);

    //클로저 즉시실행함수로 이벤트리스너를 한번 감싸면
    //c라는 새로운 fucntion 스코프가 생기면서
    //card가 c로 매개변수로 복사가 된다.
    (function (c) {
      card.addEventListener('click', function () {
        if (클릭플래그 && !완성카드.includes(c)) {
          c.classList.toggle('flipped'); //flipped라는 클래스가 있으면 빼고 없으면 넣는 토글
          클릭카드.push(c);
          if(클릭카드.length === 2){

            //두 카드의 색깔이 같으면
            if(클릭카드[0].querySelector('.card-back').style.backgroundColor===클릭카드[1].querySelector('.card-back').style.backgroundColor){
              완성카드.push(클릭카드[0]);
              완성카드.push(클릭카드[1]);
              클릭카드 = [];
              //게임 초기화
              if(완성카드.length===가로*세로){
                var 끝시간 = new Date();

                alert('성공  '+ Math.floor((끝시간- 시작시간)/1000)+' 초 소모');
                document.querySelector('.wrapper').innerHTML='';
                색깔후보 = 색깔들.slice();
                색깔 = [];
                완성카드 = [];
                시작시간;
                셔플();
                console.log(색깔);
                카드세팅(가로,세로);
              }
            }else{  //두 카드의 색깔이 다르면
              클릭플래그 = false;
              setTimeout(() => {
                클릭카드[0].classList.remove('flipped');
                클릭카드[1].classList.remove('flipped');
                클릭플래그=true;
                클릭카드 = [];
              }, 1000);
            }
            
            
          }
        }
      });
    })(card);
    document.querySelector('.wrapper').appendChild(card);
  }

  //유저가 카드를 외울 시간을 줌
  document.querySelectorAll('.card').forEach(function (card, index) {
    setTimeout(() => {
      card.classList.add('flipped');

    }, 1000 + 100 * index);
  });

  setTimeout(() => {
    document.querySelectorAll('.card').forEach(function (card, index) {
      card.classList.remove('flipped');
    });
    클릭플래그 = true;
    시작시간 = new Date();
  }, 5000);

};
셔플();
카드세팅(가로, 세로);