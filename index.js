import express from 'express';
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js';
//initialize express application
const app = express();
const PORT = 5000;
//initialize bodyparser middleware
app.use(bodyParser.json())

app.use('/users', usersRoutes)
//home route ---making getrequest to localhost-home
app.get('/', (req, res) => res.send('Hello boke'));

app.listen(PORT, () => console.log(`server is running on the port: http://localhost:${PORT}`))