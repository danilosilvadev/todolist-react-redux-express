const express = require('express')

const app = express()
const port = process.env.PORT || 5000

app.get('/test', (req,res) => {
  res.send({express: 'Express Funcionando'})
})

app.listen(port, () => console.log(`Ouvindo na porta ${port}`))