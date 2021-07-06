class JournalEntry {
    constructor(id,entry,date,time,comment) {
        this.id = id 
        this.entry = entry
        this.date = date  
        this.time = time 
        this.tag = tag
        this.comment = comment
    }
}

module.exports = {JournalEntry}