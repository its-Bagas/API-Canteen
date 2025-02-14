import express from 'express';
import cors from 'cors'
import cookieParser from 'cookie-parser';
import path from "path";

import userRoute from './routes/user.route'
import stanRoute from './routes/stan.route'
import studentRoute from './routes/student.route'
import menuRoute from './routes/menu.route'
import diskonRoute from './routes/diskon.route'
import transaksiRoute from './routes/transaksi.route'
import authRoute from './routes/auth.route'


const app = express();
app.use(cors())
app.use(express.json());
app.use(cookieParser())

// Menggunakan route user
app.use('/auth/', authRoute );
app.use('/api/users', userRoute );
app.use('/api/stans', stanRoute );
app.use('/api/students', studentRoute );
app.use('/api/menus', menuRoute);
app.use('/api/diskon', diskonRoute);
app.use('/api/transaksi', transaksiRoute);
app.use("/uploads", express.static(path.join(__dirname, "../public/")));


export default app;
