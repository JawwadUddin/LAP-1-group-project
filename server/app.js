const express = require('express')
const bodyparser = require('body-parser')
const app = express()

const cors = require('cors')

app.use(cors())
app.use(bodyparser.json());


app.get("/", (req, res) => {
    res.send("Hello there!")
});

const port = process.env.PORT || 3000; 
app.listen(port, () => console.log(`Server is listening on http://localhost:${port}/`));