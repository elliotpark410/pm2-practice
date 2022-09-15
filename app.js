const express = require('express')
const app = express();

console.log('Server Started')


app.get('/', (req, res) => {
  res.send('Welcome to the testing api yoo. I am testing pm2 watch. holy it works')
  console.log('api was hit')
  console.log('api was hit again')

});

app.listen(3000)