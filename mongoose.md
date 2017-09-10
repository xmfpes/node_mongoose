## **Node.js Mongoose ODM 사용**

Mongoose는 MongoDB 기반 ODM(Object Data Mapping) Node.js 라이브러리

Mongoose는 MongoDB 객체 모델링 도구, ODM은 데이터베이스와 객체지향 프로그래밍 언어 사이 호환되지 않는 데이터를 변환하는 프로그래밍 기법, 즉 MongoDB 에 있는 데이터를 Application에서 JavaScript 객체로 사용 할 수 있도록 해줌

## STEP 1. Mongoose 패키지 다운로드

    npm install --save mongodb mongoose

## STEP 2. app.js에 Db Connection 코드 작성

```javascript
    var mongoose = require('mongoose');
    var autoIncrement = require('mongoose-auto-increment');

    var db = mongoose.connection;
    db.on('error', console.error);
    db.once('open', function(){
        console.log("mongo db Connection");
    });

    var connect = mongoose.connect('mongodb://127.0.0.1:27017/myDbName', { useMongoClient: true });
    autoIncrement.initialize(connect);
```

## STEP 3. Model 작성

최상위 디렉토리에서 models 폴더 생성
models 하부에 ProductsModel.js 생성

```javascript
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');

//Schema Create
var ProductsSchema = new Schema({
    name : String,
    price : Number,
    description : String,
    create_at : {
        type : Date,
        default : Date.now()
    }
});

//1씩 증가하는 Primary Key
//model 생성할 document 이름
//field : primary key, startAt 1 부터 시작
ProductsSchema.plugin(autoIncrement.plugin, {model : 'products', filed : 'id', startAt : 1});
mongoose.model('products', ProductsSchema);
});
```
