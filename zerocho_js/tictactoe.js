//forEach, 2차원 배열, 테이블, 이벤트.target

var table = document.createElement('table');
var cells = [];
var lines = [];
var turn = 'X'


var callback = function (e) {

  var whatLine = lines.indexOf(e.target.parentNode);
  console.log('몇줄', whatLine);
  var whatCell = cells[whatLine].indexOf(e.target);
  console.log('몇칸', whatCell);

  if (cells[whatLine][whatCell].textContent !== '') { //칸이 이미 채워져있는가?
    console.log('빈칸 아님');
  } else { //빈칸이면 칸에 X를 표시한다.
    console.log('빈칸 입니다.')
    cells[whatLine][whatCell].textContent = turn;

    //세칸이 다 채워졌는가?
    var isFull = false;
    //가로줄 검사
    if (
      cells[whatLine][0].textContent === turn &&
      cells[whatLine][1].textContent === turn &&
      cells[whatLine][2].textContent === turn) {
      console.log('가로줄 일치');
      isFull = true;
    }
    //세로줄 검사
    if (
      cells[0][whatCell].textContent === turn &&
      cells[1][whatCell].textContent === turn &&
      cells[2][whatCell].textContent === turn) {
      console.log('세로줄 일치');
      isFull = true;
    }

    //대각선 검사
    if (whatLine - whatCell === 0 || Math.abs(whatCell - whatLine) === 2) { //대각선 검사가 필요한 경우
      if (
        cells[0][0].textContent === turn &&
        cells[1][1].textContent === turn &&
        cells[2][2].textContent === turn) {
        console.log('\\모양 일치');
        isFull = true;
      }
      if (
        cells[0][2].textContent === turn &&
        cells[1][1].textContent === turn &&
        cells[2][0].textContent === turn) {
        console.log('/모양 일치');
        isFull = true;
      }
    }


    //다찼으면
    if (isFull) {
      var result = document.createElement('h1');
      document.body.append(result);
      console.log(turn, result);
      result.textContent = turn + ' 승';

      //게임 초기화
      turn = 'X';
      cells.forEach(function (line) {
        line.forEach(function (cell) {
          cell.textContent = '';
        })
      });

    } else { //다 안찼으면
      if (turn === 'X') {
        turn = 'O'
      } else {
        turn = 'X'
      }
    }
  }
};

for (var i = 1; i <= 3; i++) {
  var line = document.createElement('tr');
  lines.push(line);
  cells.push([]);
  for (var j = 1; j <= 3; j++) {
    var cell = document.createElement('td');
    cell.addEventListener('click', callback);
    cells[i - 1].push(cell);
    line.appendChild(cell);
  }
  table.appendChild(line);

}

document.body.appendChild(table);

console.log('줄들', lines, '칸들', cells);