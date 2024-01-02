const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/user');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/api/users', userRouter);

mongoose.connect('mongodb+srv://jyotirmoyroy649:383vWygb_zZDywJ@cluster0.7knkxkk.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  })