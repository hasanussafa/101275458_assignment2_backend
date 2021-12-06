//Kazi Hasanus Safa
//Id: 101275458
const express = require('express');
const mongoose = require('mongoose');
const employeeRouter = require('./routes/EmployeeRoutes.js');
var cors = require('cors')
const app = express();
app.use(express.json());
app.use(cors())
mongoose.connect('mongodb+srv://admin:Home123@@comp3123.ksc4r.mongodb.net/101275458_assignment2?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });

app.use(employeeRouter);
const port = process.env.PORT || 9090
app.listen(port, () => { console.log('Server is running http://localhost:9090/') })