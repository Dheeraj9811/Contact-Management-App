import express from'express';
import dotenv from 'dotenv/config';
import contactRoutes from './routes/contactRoutes.js';
import userRoutes from './routes/userRoutes.js';
import errorHandler from './middleware/errorHandler.js';
import connectDB from './config/dbConnection.js';


connectDB();
const app = express();
  
const port = process.env.PORT || 5000;

// middleware to parse json data
app.use(express.json());
// middle ware to route to the right place
app.use('/api/contacts', contactRoutes);
app.use('/api/users', userRoutes);
app.use(errorHandler);



app.post('/test', function (req, res) {
    // do something
    res.sendStatus(203);    
}
);

 
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});