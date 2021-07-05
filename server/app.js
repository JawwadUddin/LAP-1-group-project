const express = require('express')
const bodyparser = require('body-parser')
const { readdata, writedata } = require('../utilities/jsonreader')
const JournalEntry = require('journal_class')
const app = express()

const cors = require('cors')

app.use(cors())
app.use(bodyparser.json());


app.get("/", (req, res) => {
    res.send("Hello there!")
});

app.get("/journalentries", (req, res) => {
    const journalentries = 
})

const port = process.env.PORT || 3000; 
app.listen(port, () => console.log(`Server is listening on http://localhost:${port}/`));