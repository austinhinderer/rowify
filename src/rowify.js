/*////////////////////////////////////////////////////
//
// The MIT License (MIT)
//
// Copyright (c) 2013 Austin Hinderer
// V1.0.2
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

;(function($) {
  'use strict';

  /* http://youmightnotneedjquery.com/#extend */
  var extend = function(out) {
    out = out || {};

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

  var setEqualHeights = function(settings, targets) {
    var s = settings,
        tallest = 0,
        targetLength = targets.length;

    for (var i = 0; i < targetLength; i++) {
      targets[i].style.minHeight = s.minHeight + 'px';
    }

    for (i = 0; i < targetLength; i++) {
      if(targets[i].offsetHeight > tallest) {
        tallest = targets[i].offsetHeight;
      }
    }

    for (i = 0; i < targetLength; i++) {
      targets[i].style.minHeight = tallest + 'px';
    }

    return this;
  };

  var rowify = function(options) {
    var settings = extend({
          minHeight : 1,
          equalize : []
        }, options),
        rowSet = [],
        container = this,
        i = 0,
        len = settings.equalize.length;

    this.setEqualHeights = setEqualHeights;

    if (len > 0) {
      for (i=0; i<len; i++) {
        rowSet.push($(settings.equalize[i]));
      }

      for (i=0; i<len; i++) {
        container.setEqualHeights(settings, rowSet[i]);
      }
    } else {
      container.setEqualHeights(settings, container.children());
    }

    return this;
  };

  if (typeof $ === 'function') {
    $.fn.rowify = rowify;
  } else if (typeof jQuery === 'function') {
    jQuery.fn.rowify = rowify;
  } else {
    window.rowify = rowify;
  }
})(jQuery);
