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

$.fn.rowify = function(options) {
  // Create some defaults, extending them with any options that were provided
  var settings = $.extend( {
      'minHeight' : 0
      }, options);

  var $this = $(this); // Cache all related containers to variable

  $this.each(function() {
    var $columns = $(this).children(), // Select object containing children
        tallest = 0; // Initialize height variable

    if (settings.minHeight > 0 && settings.minHeight !== null) {
      tallest = settings.minHeight;
    }

    $columns.css({'min-height': 0 }); // Clear styles for window resizing

    $columns.each(function() {
    // For each column in the container, check the height. If it's the tallest then set 'tallest' to that height
      var $this = $(this); // Cache current column to variable

      if($this.outerHeight() > tallest) {
        tallest = $this.outerHeight();
      }
    });

    $columns.each(function() {
    // Set height for each column
      $(this).css({'min-height': tallest+'px'});
    });
  });

};