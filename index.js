const express = require('express')
const app = express()
const port = 3000
const catsRouter = require('./cats.router');

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
// new cats feature

// Middleware to parse JSON bodies
app.use(express.json());

// Endpoint for the home page
app.get('/', (req, res) => {
  res.send('Welcome to the Cat API!');
});

// Endpoint for handling cat-related requests
app.use('/cats', catsRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})