# Docker 실전 연습 예제
### installation
<pre>
cd /root
git clone https://github.com/soohyeok8901/Lecture    -> 하위 디렉토리 clone하는 법 적용이 안돼서 수정
cd docker_tutorial
</pre>
### Run
<pre>
# Login For Private docker Repository
docker login
docker pull soohyeok8901/docker_tutorial
docker run -p 80:80 -v /root/Lecture/docker_tutorial/html:/var/www/html soohyeok8901/docker_tutorial
</pre>
