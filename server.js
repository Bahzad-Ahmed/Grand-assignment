const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser')
var cors = require('cors')

app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

let users = [];


app.get('/get-users', (req, res) => {
  res.send(users);
})

app.post('/post-user', (req, res) => {
  let data = req.body;
  console.log('req data',data);
  users.push(data);
  res.send({message:'success'});

})

app.post('/update-user',(req,res)=>{
  let data = req.body;
  users[data["id"]]["status"]=data["newStatus"]
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})