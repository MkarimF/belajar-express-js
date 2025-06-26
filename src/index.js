const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');

const app = express();
const port = 3000;

const postRoutes = require('./routes/postRoutes.js');

app.use(bodyParser.json());

app.use("/api", postRoutes);

app.get("/",(req, res) => {
  res.send("testing 123!");
});

app.get("/about", (req, res) => {
    res.send("About Page");
});
app.get("/contact", (req, res) => {
    res.send("Contact Page");
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    });



const swaggerDocument = require('./swagger.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));