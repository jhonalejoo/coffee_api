const express = require('express')
const dotenv = require('dotenv')

dotenv.config()

const app = express()
//Crear puerto
const port = process.env.PORT || 3000

//Importar rutas
const routerApi = require('./routes')


//Middleware json
app.use(express.json())

routerApi(app)
app.get('/', (req, res) => res.send('Api Coffee!'))
app.listen(port, () => console.log(`Port ==> ${port}!`))