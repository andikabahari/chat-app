import express from 'express'

const app = express()
const port = process.env.PORT || 8080

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>')
})

app.listen(port, () => console.log(`Server running on port ${port}`))
