//화면에 추가함과 동시에 데이터관리도 중요하다
var 상대방 = {
  영웅: document.getElementById('rival-hero'),
  덱: document.getElementById('rival-deck'),
  필드: document.getElementById('rival-cards'),
  코스트: document.getElementById('rival-cost'),
  덱data: [],
  영웅data: [],
  필드data: [],
  선택카드: null,
  선택카드data: null,
};

var 나 = {
  영웅: document.getElementById('my-hero'),
  덱: document.getElementById('my-deck'),
  필드: document.getElementById('my-cards'),
  코스트: document.getElementById('my-cost'),
  덱data: [],
  영웅data: [],
  필드data: [],
  선택카드: null,
  선택카드data: null,
}

var 턴버튼 = document.getElementById('turn-btn');
var 턴 = true;

function 초기세팅() {
  
  상대덱생성(5);
  내덱생성(5);
  상대영웅생성();
  내영웅생성();
  화면다시그리기(true);
  화면다시그리기(false);
  
  
}

//팩토리 패턴
function 카드공장(영웅, 내카드) {

  return new Card(영웅, 내카드);

}
//생성자
function Card(영웅, 내카드) {
  if (영웅) {
    this.atk = Math.ceil(Math.random() * 2);
    this.hp = Math.ceil(Math.random() * 5) + 25;
    this.hero = true;
    this.field = true;
    //var 코스트 = document.getElementById("cost");
    //코스트.style.display="none";
  } else {
    this.atk = Math.ceil(Math.random() * 5);
    this.hp = Math.ceil(Math.random() * 5);
    this.cost = Math.floor((this.atk + this.hp) / 2);
  }
  if (내카드) {
    this.mine = true;
  }
}

function 상대덱생성(개수) {
  for (var i = 0; i < 개수; i++) {
    상대방.덱data.push(카드공장(false, false));
  }
  //화면과 데이터는 분리하는게 좋고 
  //화면과 데이터를 일치시키는 함수도 있으면 좋다.
  //지금 이건 화면에 출력하기 위한 forEach문
  
  화면다시그리기(상대방);
}
function 내덱생성(개수) {
  for (var i = 0; i < 개수; i++) {
    나.덱data.push(카드공장(false, true));

  }
  화면다시그리기(나);

}
function 상대영웅생성() {
  상대방.영웅data = 카드공장(true);
  카드돔연결(상대방.영웅data, 상대방.영웅, true);

}
function 내영웅생성() {
  나.영웅data = 카드공장(true, true);
  카드돔연결(나.영웅data, 나.영웅, true);
}

//삼항연산자 리팩토링
function 덱to필드(데이터, 내턴) {
  var 객체 = 내턴 ? 나 : 상대방;
  var 현재코스트 = Number(객체.코스트.textContent); //문자열 10이기 때문
  if (현재코스트 < 데이터.cost) {
    return 'end';
  }
  var idx = 객체.덱data.indexOf(데이터);
  객체.덱data.splice(idx, 1);
  객체.필드data.push(데이터);
  
  

  필드다시그리기(객체);
  덱다시그리기(객체);

  데이터.field = true;
  객체.코스트.textContent = 현재코스트 - 데이터.cost;
}

function 필드다시그리기(객체){
  객체.필드.innerHTML = '';
  객체.필드data.forEach(function (data) {
    카드돔연결(data, 객체.필드);
  });
}
function 덱다시그리기(객체){
  객체.덱.innerHTML = '';
  객체.덱data.forEach(function (data) {
    카드돔연결(data, 객체.덱);
  });
}
function 영웅다시그리기(객체){
  객체.영웅.innerHTML = '';
  카드돔연결(객체.영웅data, 객체.영웅, true);
}

function 화면다시그리기(내화면) {
  var 객체 = 내화면 ? 나 : 상대방;
  필드다시그리기(객체);
  덱다시그리기(객체);
  영웅다시그리기(객체);
}







function 턴액션수행(카드, 데이터, 내턴) { //스코프체인 벗어난 매개변수 이어줌
  var 아군 = 내턴 ? 나 : 상대방;
  var 적군 = 내턴 ? 상대방 : 나;
  if (카드.classList.contains('card-turnover')) {
    return;
  }

  //클릭한게 상대카드고 내 카드가 선택돼있으면 공격
  var 적군카드 = 내턴 ? !데이터.mine : 데이터.mine;
  if (적군카드 && 아군.선택카드) {
    console.log('클릭됐니');
    데이터.hp = 데이터.hp - 아군.선택카드data.atk;
    if (데이터.hp <= 0) { //카드가 공격당해 체력이 0이하가 되어 죽었을 때.
      //카드 화면에서 제거해야하고 데이터셋에서도 삭제해야 함
      //상대방.필드data 일거고 상대방.필드
      //화면은 어차피 알아서 다시 그리니까 데이터만 해주면 됨

      var 인덱스 = 적군.필드data.indexOf(데이터); //데이터가 몇번 째 인덱스냐 (피0인거)
      if (인덱스 > -1) { //쫄병이 죽었을 때
        적군.필드data.splice(인덱스, 1);
      } else { //영웅이 죽었을 때
        alert('승리');
        초기세팅();
        
      }
    }
    화면다시그리기(!내턴);
    아군.선택카드.classList.remove('card-selected');
    아군.선택카드.classList.add('card-turnover');
    아군.선택카드 = null;
    아군.선택카드data = null;
    return;
  } else if (적군카드) { //클릭한게 상대카드면
    return;
  }

  if (데이터.field) { //데이터(카드)가 필드에 있으면
    카드.parentNode.querySelectorAll('.card').forEach(function (card) {
      card.classList.remove('card-selected');
    });
    카드.classList.add('card-selected');
    아군.선택카드 = 카드;
    아군.선택카드data = 데이터;
  } else {//데이터가 필드에 없으면
    if (덱to필드(데이터, 내턴) !== 'end') {
      내턴 ? 내덱생성(1) : 상대덱생성(1);
    }
  }
}

//중복되는 부분을 함수로 빼서 중복 제거
function 카드돔연결(데이터, 돔, 영웅) {
  var 카드 = document.querySelector('.card-hidden .card').cloneNode(true);
  카드.querySelector('.card-cost').textContent = 데이터.cost;
  카드.querySelector('.card-atk').textContent = 데이터.atk;
  카드.querySelector('.card-hp').textContent = 데이터.hp;

  if (영웅) {
    카드.querySelector('.card-cost').style.display = 'none';
    var 이름 = document.createElement('div');
    이름.textContent = '영웅';
    카드.appendChild(이름);
  }


  //왜 여기다가 이벤트 리스너달지?
  카드.addEventListener('click', function (card) {
    턴액션수행(카드, 데이터, 턴);
  });
  돔.appendChild(카드);
}

턴버튼.addEventListener('click', function () {
  var 객체 = 턴 ? 나 : 상대방;
  document.getElementById('rival').classList.toggle('turn');
  document.getElementById('my').classList.toggle('turn');
  필드다시그리기(객체);
  영웅다시그리기(객체);
  턴 = !턴;
  if (턴) {
    나.코스트.textContent = 10;
  } else {
    상대방.코스트.textContent = 10;
  }

})


초기세팅();