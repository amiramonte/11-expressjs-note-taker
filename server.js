const express = require('express');
const htmlRoutes = require('./routes/htmlroutes');

const apiRoutes = require('./routes/apiroutes');

const PORT = process.env.port || 3005;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use('/api', apiRoutes)

app.use('/', htmlRoutes)



app.listen(PORT, () =>
  console.log(`You are now listening to the smooth sounds of http://localhost:${PORT} 🚀`)
);

