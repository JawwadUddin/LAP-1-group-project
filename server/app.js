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

app.post("/journalentries", (req, res) => {
    const data = req.body
    const journalentries = readdata()
    const entry = new JournalEntry({id: journalentries.length, 
                                    entry: data, 
                                    date: new Date().toLocaleDateString(), 
                                    time: new Date().toLocaleTimeString(),
                                    comment: [],
                                    reactions: [0,0,0]})
    journalentries.push(entry)
    writedata(journalentries)
    res.status(201).send('Added.')    
});

app.get("/journalentries", (req, res) => {
    const journalentries = readdata()
    res.status(201).send('Acquired journal entries.')
})

app.patch('/journalentries/:id', (req, res) => {
    let id = req.params.id
    const data = req.body
    const journalentries = readdata()
    const commented_entry = journalentries.filter(entry => entry.id == ParseInt(id))
    commented_entry.comment.push(data)
    writedata(journalentries)
    res.status(201).send('Commented.')
})
const port = process.env.PORT || 3000; 
app.listen(port, () => console.log(`Server is listening on http://localhost:${port}/`));