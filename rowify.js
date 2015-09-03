/*////////////////////////////////////////////////////
//
// The MIT License (MIT)
//
// Copyright (c) 2015 Austin Hinderer
// V1.1.0
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
//
////////////////////////////////////////////////////*/

;(function() {
  'use strict';

  function Rowify(options) {
    this.settings = this.extend({}, {
      minHeight : 1,
      equalize : []
    }, options);

    var len = this.settings.equalize.length;

    if (len > 0) {
      for (var i = 0; i < len; i++) {
        this.setEqualHeights($(this.settings.equalize[i]));
      }
    } else {
      this.setEqualHeights(this.settings.target.children());
    }

    return this;
  }

  Rowify.prototype.setEqualHeights = function(targets) {
    var tallest = this.settings.minHeight,
        targetLength = targets.length;

    for (var i = 0; i < targetLength; i++) {
      targets[i].style.minHeight = this.settings.minHeight + 'px';

      if (targets[i].offsetHeight > tallest) {
        tallest = targets[i].offsetHeight;
      }
    }

    for (var j = 0; j < targetLength; j++) {
      targets[j].style.minHeight = tallest + 'px';
    }

    return this;
  };

  Rowify.prototype.extend = function(out) {
    out = out;

    for (var i = 1; i < arguments.length; i++) {
      if (!arguments[i]) {
        continue;
      }

      for (var key in arguments[i]) {
        if (arguments[i].hasOwnProperty(key)) {
          out[key] = arguments[i][key];
        }
      }
    }

    return out;
  };

  if (typeof define === 'function' && define.amd) {
    define(function() {
      return Rowify;
    });
  } else {
    window.Rowify = Rowify;
  }

})();
