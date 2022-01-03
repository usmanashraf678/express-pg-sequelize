const express =  require('express')
const app = express()

// process.env.PORT || 3000
const port = 3000

// middlewares
app.use(express.json())

//routers
const routers = require('./routes/customerRouter.js')
app.use('/customers', routers)


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
