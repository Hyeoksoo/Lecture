<?php
    $conn = mysqli_connect( //conn객체를 만들어서 mysql 접속 객체를 초기화 할 수 있음
        'docker-mysql-tutorial.czexnhk62mlh.ap-northeast-2.rds.amazonaws.com', #데이터베이스 ip
        'user', #데이터베이스 계정이 들어감
        'password', #계정의 비밀번호
        'TEST', #아마 데이터베이스 이름인가보다
        '3306' #포트번호
    );
    if(mysqli_connect_errno()){ #mysql 연결 함수 수행 과정에서 오류가 발생했는지 확인
        echo "Failed to connect to MySQL: ".mysqli_connect_error();
    }
    $sql = "SELECT VERSION()"; #mysql 버전을 출력하는 SELECT VERSION 구문
    $result = mysqli_query($conn,$sql); #그 결과가 result에 담기게 됨
    $row = mysqli_fetch_array($result); #출력된 결과열을 배열 형태로 담기게해줌
    print_r($row["VERSION()"]); #version() 이라는 COLUMN값을 출력
?>