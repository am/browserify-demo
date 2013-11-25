class Module

  name: 'module'

  when: ->
    "#{@name} #{new Date}"


module.exports = Module
