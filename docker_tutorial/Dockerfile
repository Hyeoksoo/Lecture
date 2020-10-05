FROM ubuntu:18.04
LABEL author = Soohyeok Kim 
LABEL email = soohyeok8901@gmail.com

# 사용자한테 설치환경등을 묻는 명령이 나오는 걸 방지하기 위해 (사용자 인터랙션)
# 환경변수 설정을 해주면 된다
ENV DEBIAN_FRONTEND=noninteractive


RUN apt-get update
RUN apt-get install -y apache2
RUN apt-get install -y software-properties-common
RUN add-apt-repository ppa:ondrej/php # php 최신버전을 설치하기 위함
RUN apt-get update
RUN apt-get install -y php5.6

# PHP와 mysql 연동시키기 php5.6-mysql패키지
RUN apt-get install -y php5.6-mysql

EXPOSE 80

CMD ["apachectl","-D","FOREGROUND"]
