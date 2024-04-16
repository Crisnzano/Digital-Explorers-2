const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('about')
})


app.get('/random.text', (req, res) => {
    res.send('random.text')
})

app.get(/.*fly$/, (req, res) => {
    res.send('/.*fly$/')
})

app.get('/flights/:from-:to', (req, res) => {
    res.send({ "from": "LAX", "to": "SFO" })

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})