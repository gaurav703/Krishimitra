const express = require('express')
const bodyparser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')
require('dotenv/config')

const api = process.env.API_URL

// Step 2: Create the server
const app = express()

// middleware
app.use(bodyparser.json())
app.use(morgan('tiny'))
// app.use(authJwt())
// app.use('/public/uploads', express.static(__dirname + '/public/uploads'))
// app.use(errorHandler)

// Routers -----------------------------------------------------------------------------------
const categoriesRoutes = require('./routers/categories')
const productRouter = require('./routers/products')
// const usersRoutes = require('./routers/users')
const ordersRoutes = require('./routers/orders')

app.use(`${api}/categories`, categoriesRoutes)
app.use(`${api}/products`, productRouter)
// app.use(`${api}/users`, usersRoutes)
app.use(`${api}/orders`, ordersRoutes)

// Database -----------------------------------------------------------------------------------
mongoose
    .connect(process.env.CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: 'Farmer-shop',
    })
    .then(() => console.log('Database connection is ready'))
    .catch((err) => console.log(err))

// Step 5: Start the server
const port = process.env.PORT || 3000
app.listen(
    port,
    () =>
        console.log(api) +
        console.log(`Server running on port http://localhost:${port}`)
)
