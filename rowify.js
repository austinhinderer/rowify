//////////////////////////////////////////////////////
// The MIT License (MIT)
//
// Copyright (c) 2013 Austin Hinderer
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
//////////////////////////////////////////////////////

// http://youmightnotneedjquery.com/#extend
(function() {
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

    if (s.minHeight > 0 && s.minHeight !== null) {
      tallest = s.minHeight;
    }

    for(var i = 0; i < targetLength; i++) {
      targets[i].style.minHeight = '0px';
    }

    for(var j = 0; j < targetLength; j++) {
      if(targets[j].offsetHeight > tallest) {
        tallest = targets[j].offsetHeight;
      }
    }

    for(var k = 0; k < targetLength; k++) {
      targets[k].style.minHeight = tallest+'px';
    }

    return this;
  };

  var rowify = function (options) {
    var settings = extend({
          version  : '1.0.1',
          minHeight: 0,
          useBoth  : false,
          equalize : []
        }, options),
        rowSet = [],
        container = this;
    this.setEqualHeights = setEqualHeights;

    rowSet.push(container);

    if (settings.equalize.length > 0) {
      for (var i=0, j=settings.equalize.length; i<j; i++) {
        // jQuery
        rowSet.push($(settings.equalize[i]));
      }
    }

    if (rowSet.length === 1) {
      // jQuery
      container.setEqualHeights(settings, container.children());
    } else if (rowSet.length > 1) {
      for (var x=0, y=settings.equalize.length; x<y; x++) {
        // jQuery
        container.setEqualHeights(settings, rowSet[x+1]);
      }
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
})();
