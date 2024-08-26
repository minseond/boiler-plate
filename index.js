const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');

const config = require('./config/key');

const { User } = require("./models/User");

// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());



const mongoose = require('mongoose')
// react에 MongoDB 연결하는 코드
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(()=> console.log('MongoDB Connected...'))
  .catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World! 안녕하세요!!~~~')
})

app.post('/register', async (req, res) => {
  // 회원가입 할 때 필요한 정보들 Client에서 가져오면
  // 그것들을 데이터 베이스에 넣어줌

  const user = new User(req.body); // User 객체 생성

  try {
      await user.save();
      res.status(200).json({
          success: true,
      });
  } catch (err) {
      console.error(err);
      res.status(500).json({
          success: false,
          err: err,
      });
  }
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})