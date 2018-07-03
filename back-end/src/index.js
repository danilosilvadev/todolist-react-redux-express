const express = require('express')

const app = express()
const port = process.env.PORT || 5000

const todos = require('./todos.json')

app.get('/teste', (req,res) => {
  res.json(todos)
})

app.listen(port, () => console.log(`Ouvindo na porta ${port}`))