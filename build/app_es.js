;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Coder, Human, _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Human = require('./human.coffee');

Coder = (function(_super) {
  __extends(Coder, _super);

  function Coder() {
    _ref = Coder.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  Coder.prototype.canCommit = true;

  Coder.prototype.setFavoriteLanguage = function(_language) {
    var language;
    return language = _language;
  };

  Coder.prototype.getFavoriteLanguage = function() {
    return language;
  };

  return Coder;

})(Human);

module.exports = Coder;


},{"./human.coffee":2}],2:[function(require,module,exports){
var Human;

Human = (function() {
  function Human() {}

  Human.prototype.setName = function(_name) {
    return this.name = _name;
  };

  Human.prototype.getName = function() {
    return this.name;
  };

  return Human;

})();

module.exports = Human;


},{}],3:[function(require,module,exports){
var Coder, coder;

Coder = require('./coder.coffee');

coder = new Coder();

console.log("No name is set, it outputs: " + (coder.getName()));

coder.setName('gihuber');

console.log("Name is set to: " + (coder.getName()));

console.log(coder.canCommit);


},{"./coder.coffee":1}]},{},[1,2,3])
;