const express = require('express'); //모듈을 불러오는 구문 //const는 상수
const app = express(); // express 생성
const port = 8888; //서버를 열 때 사용되는 포트 정보.

app.use(express.json());

app.use('/auth', require('./auth'));


app.listen(port); //포트로 서버 열기
console.log('start serverwith 8888!');