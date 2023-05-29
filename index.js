// Universal module definition
(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        // CommonJS
        module.exports = factory();
    } else {
        // Browser
        root.jsClone = factory();
    }
})(this, function() {
    'use strict';

    function clone(src) {
        var result = Object.prototype.toString.call(src).match(/\s([a-zA-Z]+)/)[1].toLowerCase() === "array" ? [] : {}, value;
      
        for (var key in src) {
          value = src[key];
          if (typeof(value) === "object" && value !== null) {
            result[key] = clone(value);
          } else {
            result[key] = value;
          }
        }
        
        return result;
    }
      

    return {
        exec: clone
    }
});