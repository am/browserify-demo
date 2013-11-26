Human = require('./human.coffee')

class Coder extends Human 

  canCommit: true

  setFavoriteLanguage: (_language)->
    language = _language

  getFavoriteLanguage: ->
    language


module.exports = Coder
