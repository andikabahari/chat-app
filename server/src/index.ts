import express from 'express'
import path from 'path'

const app = express()
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/../public/index.html'))
})

app.listen(port, () => console.log(`Server running on port ${port}`))
