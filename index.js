import express from 'express';
import userRoute from './routes/user.js'; 
import commentsRoute 

const app = express();
app.use('/api/user' ,userRoute); 


app.listen(5500, () => {
  console.log('Express server initialized');
});

