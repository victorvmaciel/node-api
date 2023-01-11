const express = require('express')
const server = express();

server.get('/user', (request,response) => {
  return response.json({user:'Victor'})

});

server.listen(3000, () => {
  console.log("Server is running") 
  console.log("Check localhost:3000/user")

})