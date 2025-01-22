import express from 'express';

import userRoute from './routes/user.route'
import stanRoute from './routes/stan.route'
import studentRoute from './routes/student.route'
import menuRoute from './routes/menu.route'
import diskonRoute from './routes/diskon.route'
import transaksiRoute from './routes/transaksi.route'
import authRoute from './routes/auth.route'


const app = express();
app.use(express.json());

// Menggunakan route user

app.use('/auth/', authRoute );
app.use('/api/users', userRoute );
app.use('/api/stans', stanRoute );
app.use('/api/students', studentRoute );
app.use('/api/menus', menuRoute);
app.use('/api/diskon', diskonRoute);
app.use('/api/transaksi', transaksiRoute);





export default app;
