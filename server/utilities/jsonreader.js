const fs = require('fs')
const path = '../data.json'

function readdata() {
    const data = fs.readFileSync(path)
    return JSON.parse(data)
}

