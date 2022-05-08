const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // You can see your app's env variables in Kudu: https://<your app>.scm.azurewebsites.net/

app.get('/', (req, res) => res.send('Hello World!version1'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
