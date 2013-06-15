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

$.fn.rowify = function (options) {
    "use strict";


    // Create some defaults, extending them with any options that were provided
    var settings = $.extend({
        minHeight: 0,
        useBoth: false,
        equalize: []
    }, options),
        rowSet = [], // Object gets selected for Rowify to work on
        container = $(this);

    // Object gets added to first entry in the array
    rowSet.push(container);

    // Check if rowify has been provided a list of classes to rowify, or if it should work on the current object.
    if (settings.equalize.length > 0) {

      // Go through the equalize array and add each entry to the rowSet array
      for (var i=0, j=settings.equalize.length; i<j; i++) {
        rowSet.push($(settings.equalize[i]));
      }

    }

    if (rowSet.length === 1) {
      // Set the height of the children of the original object to be equal
      container.setEqualHeights(settings, container.children());

    } else if (rowSet.length > 1) {

      // Go through the rowSet array and rowify each class
      for (var x=0, y=settings.equalize.length; x<y; x++) {
        container.setEqualHeights(settings, rowSet[x+1]);
      }

    }

};

$.fn.setEqualHeights = function(settings, targets) {
    var tallest = 0;

    // If we have a minimum height option passed into settings, update the tallest variable
    if (settings.minHeight > 0 && settings.minHeight !== null) {
      tallest = settings.minHeight;
    }

    // Clear inline minimum height
    targets.css({'min-height': 0 });

    // For each selected column, check the height. If it's the tallest then set 'tallest' to that height
    targets.each(function() {
      var $current = $(this); // Cache current column to variable

      if($current.outerHeight() > tallest) {
        tallest = $current.outerHeight();
      }
    });

    targets.each(function() {
    // Set height for each column
      $(this).css({'min-height': tallest+'px'});
    });
};