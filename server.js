import express from "express";
import bodyParser from "body-parser"
import cors from "cors"

import DB from './dataBase/db.js'

import postRoutes from './routes/posts.routes.js';

const app = express()

app.use(cors())
app.use(bodyParser.json({extended: true}))
app.use(bodyParser.urlencoded({extended: true}))

app.use('/posts', postRoutes )
// app.use(morgan('dev'))
// app.use(helmet())





app.get('/', (req,res) => {
res.send('welcome to homepage')})

DB()



const port = process.env.PORT || 5000;



app.listen(port, () => console.log(`Listening on port ${port}`));