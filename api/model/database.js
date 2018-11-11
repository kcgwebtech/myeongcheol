const Sequelize = require('sequelize');

const database = new Sequelize(
    'account', // 테이블명
    'smc', // 아이디
    'smc1', // 비밀번호
    {
        host: 'localhost',
        dialect: 'mysql',
    }
);

module.exports =  database ;