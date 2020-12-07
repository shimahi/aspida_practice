import express from 'express'

const app = express()

const member = [
  {
    id: 1,
    name: 'shimahi',
    age: 25,
    part: 'guitar',
  },
  {
    id: 2,
    name: 'mochi',
    age: 17,
    part: 'vocal',
  },
  {
    id: 3,
    name: 'christophe',
    age: 28,
    part: 'keyboard',
  },
]

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.get('/', (req, res) => {
  res.json(member)
})

app.listen({ port: 4000 }, () => {
  console.log('Example app listening on http://localhost:4000')
})
