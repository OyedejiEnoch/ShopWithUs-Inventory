import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

// Routes
import dashboardRoute from './routes/dashboardRoutes'
import productRoutes from './routes/productRoutes'
import userRoutes from './routes/userRoutes'
import expenseRoute from './routes/expenseRoutes'

// Configurations
dotenv.config();
const app = express();

app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({policy:'cross-origin'}))
app.use(morgan('comment'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors());


// Routes
app.use('/api/v1/dashboard', dashboardRoute)
app.use('/api/v1/products', productRoutes)
app.use('/api/v1/users', userRoutes)
app.use('/api/v1/expenses', expenseRoute)


// Server

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
