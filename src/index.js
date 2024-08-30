import express from 'express';
import firstname from '../src/routes/firstname.js';
import lastname from '../src/routes/lastname.js';
import age from '../src/routes/age.js';
import schoolemail from '../src/routes/schoolemail.js';
import mydata from '../src/routes/mydata.js';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Welcome to my server.');
});

app.use(firstname);
app.use(lastname);
app.use(age);
app.use(schoolemail);
app.use(mydata);

// const PORT = 3333;
const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});