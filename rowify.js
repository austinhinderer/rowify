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

  function Rowify() {
    this.minHeight = 1;
    this.rowifyTargets = document.querySelectorAll('.rowify');

    for (var i = 0, len = this.rowifyTargets.length; i < len; i++) {
      var $target = $(this.rowifyTargets[i]);

      if ($target.data('rowify-equalize')) {
        var equalizeTargets = $target.data('rowify-equalize').split(',');

        for (var j = 0, len2 = equalizeTargets.length; j < len2; j++) {
          this.setEqualHeights($(equalizeTargets[j]));
        }        
      } else {
        this.setEqualHeights($target.children());
      }
    }

    return this;
  }

  Rowify.prototype.setEqualHeights = function(targets) {
    var tallest = this.minHeight,
        targetLength = targets.length;

    for (var i = 0; i < targetLength; i++) {
      targets[i].style.minHeight = this.minHeight + 'px';
    }

    for (var j = 0; j < targetLength; j++) {
      if (targets[j].offsetHeight > tallest) {
        tallest = targets[j].offsetHeight;
      }
    }

    for (var k = 0; k < targetLength; k++) {
      targets[k].style.minHeight = tallest + 'px';
    }

    return this;
  };

  if (typeof define === 'function' && define.amd) {
    define(function() {
      return Rowify;
    });
  } else {
    window.Rowify = Rowify;
  }

})();
