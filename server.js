const express = require('express');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware.js');
const connectDB = require('./connect/database.js');
const port = process.env.PORT || 5000;
const Cors = require('cors');
    
connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(Cors());

app.use('/api/tasks', require('./routes/taskRoutes.js'));
app.use('/api/users', require('./routes/userRoutes.js'));

app.use(errorHandler);
app.listen(port, () => console.log(`Server listening on ${port}`));