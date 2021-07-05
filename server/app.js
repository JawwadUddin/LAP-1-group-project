const express = require('express')
const app = express()

const cors = require('cors')

app.use(cors())

app.get("/", (req, res) => {
    res.send("Hello there!")
});

const port = process.env.PORT || 3000; 
app.listen(port, () => console.log(`Server is listening on http://localhost:${port}/`));