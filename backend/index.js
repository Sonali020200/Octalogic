const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const vehicleRoutes = require('./routes/vehicleRoutes');
const sequelize = require('./config/db');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api', vehicleRoutes);

sequelize.sync().then(() => {
  app.listen(4000, () => {
    console.log('Server is running on port 4000');
  });
});
