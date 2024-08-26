const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
// react에 MongoDB 연결하는 코드
mongoose.connect('mongodb+srv://minseond:minseon1023@boiler-plate.mac60.mongodb.net/?retryWrites=true&w=majority&appName=boiler-plate', {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(()=> console.log('MongoDB Connected...'))
  .catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World! 안녕하세요!!~~~~~')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})