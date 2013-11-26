

Coder = require('./coder.coffee')
coder = new Coder()

console.log "No name is set, it outputs: #{coder.getName()}"
coder.setName('gihuber')
console.log "Name is set to: #{coder.getName()}"
console.log coder.canCommit
