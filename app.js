const express = require('express')

const app = express()

//__dirname ruta absoluta del archivo
//en public sirva los archivos que estan en storage/imgs
//fuera de la API no se sabe sual es la ubicación real
app.use('/public', express.static(`${__dirname}/storage/imgs`))

module.exports = app