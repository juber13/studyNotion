import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import cloudinary from 'cloudinary'
import dotenv from 'dotenv'

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended : true}))


app.listen(PORT , () => {
    console.log(`Server is running at ${PORT} ✅`)
})