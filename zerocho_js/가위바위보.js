var 이미지좌표 = '0';
var 가위바위보 = {
  바위: '0',
  가위: '-142px',
  보: '-284px'
};


// 이거 이해못하겠다
function 컴퓨터의선택(이미지좌표) {
  return Object.entries(가위바위보).find(function (y) {
    return y[1] === 이미지좌표;
  })[0];
}

//setTimeout()은 한번 실행하고 땡인데
//setInterval()은 계속 실행한다 설정한 초마다.
//인터벌 멈추는법 = 변수에 넣어서 변수를 나중에 clearInterval(인터벌)해줌
var 인터벌;
function 인터벌메이커(){
   인터벌 = setInterval(function () {
    if (이미지좌표 === 가위바위보.바위) {
      이미지좌표 = 가위바위보.가위;
    } else if (이미지좌표 === 가위바위보.가위) {
      이미지좌표 = 가위바위보.보;
    } else {
      이미지좌표 = 가위바위보.바위;
    }
    document.querySelector('#computer').style.background =
      'url(https://en.pimg.jp/023/182/267/1/23182267.jpg)' + 이미지좌표 + ' 0';
  
  }, 100);
}

인터벌메이커();

var 점수표 = {
  가위:1,
  바위:0,
  보:-1
};

document.querySelectorAll('.btn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    clearInterval(인터벌);
    //다시 게임을 시작해야하기때문
    setTimeout(function(){
      인터벌메이커();
    },1000)

    var 나의선택 = this.textContent;
    var 나의점수 = 점수표[나의선택];
    var 컴퓨터점수 = 점수표[컴퓨터의선택(이미지좌표)];
    var 점수차 = 나의점수-컴퓨터점수;
    
    //가위바위보 승패 비교
    if(점수차===0){ // 비겼을 때
      console.log('비겼습니다.');
    }else if([-1,2].includes(점수차)){ //이겼을 때
      console.log('이겼습니다.');
    }else{
      console.log('졌습니다.');
    }
  });
});



