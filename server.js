const express = require('express');
const app = express();



const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://youngjun:dudwns2807!@boilerplate.ad9bp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected..'))
.catch(err => console.log(err))


app.listen(8080, function(){
    console.log('listening on 8080')
}); 

//누군가가 /pet 으로 방문을 하면.. 
//pet관련된 안내문을 띄워주자

app.get('/beauty', function(요청, 응답){
    응답.send('뷰티용품 쇼핑 페이지입니다.');
});

app.get('/', function(요청, 응답){
    응답.sendFile(__dirname + '/index.html');
}); // '/' 는 homepage라는 뜻