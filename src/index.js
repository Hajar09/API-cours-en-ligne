import express from "express"
const app = express()
import "dotenv/config"
import volleyball from "volleyball"
import mongoose from "mongoose"
import {courRouter} from "./routes/cours"
import path from "path"
import cors from "cors"
import favicon from "serve-favicon";

const {SERV_PORT, DBurl} = process.env

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())


mongoose.connect(DBurl)
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('connecté à mongodb')
});

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')


app.use(cors())
app.use(volleyball)


app.use('/', courRouter)

app.listen(SERV_PORT, ()=> {
    console.log(`[APP] marche sur le port: ${SERV_PORT}`)
})