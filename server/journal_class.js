class JournalEntry {
    constructor(id,entry,date,time,comment, reactions) {
        this.id = id 
        this.entry = entry
        this.date = date  
        this.time = time 
        this.comment = comment
        this.reactions = reactions
    }
}

module.exports = {JournalEntry}