import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';


import DB from './dataBase/db.js'

import postRoutes from './routes/posts.js';
import userRouter from "./routes/user.js";

const app = express()

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);
app.use("/user", userRouter);
// app.use(morgan('dev'))
// app.use(helmet())





app.get('/', (req,res) => {
res.send('welcome to homepage')})

DB()



const port = process.env.PORT || 5000;



app.listen(port, () => console.log(`Listening on port ${port}`));