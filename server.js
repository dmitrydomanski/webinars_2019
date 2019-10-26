const express = require('express');
const app = express();
const port = 7000;
require('./routes')(app);
app.listen(port, () => console.log(`app is running at port ${port}`));