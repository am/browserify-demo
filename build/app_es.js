;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Mod, mod;

Mod = require('./module.coffee');

mod = new Mod();

console.log(mod.name);

console.log(mod.when());


},{"./module.coffee":2}],2:[function(require,module,exports){
var Module;

Module = (function() {
  function Module() {}

  Module.prototype.name = 'module';

  Module.prototype.when = function() {
    return "" + this.name + " " + (new Date);
  };

  return Module;

})();

module.exports = Module;


},{}]},{},[1,2])
;