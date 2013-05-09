//////////////////////////////////////////////////////
// Rowify written by Austin Hinderer
// Equalizes column heights within a container
//
//  Usage:
//  Add the 'data-same-height' data attribute to
//  a container with columns you want to equalize.
//  Add the $(document).ready() and
//  $(window).resize() javascript after the site JS.
//
//  Example:
//  <div data-same-height>
//    <div class="column">Short</div>
//    <div class="column">Long column</div>
//    <div class="column">Short</div>
//  </div>
//
//  <script>
//    $(document).ready(function(){
//      $('[data-same-height]').rowify();
//    });
//
//    $(window).resize(function() {
//      $('[data-same-height]').rowify();
//    });
//  </script>
//
//////////////////////////////////////////////////////

$.fn.rowify = function(min) {
  var $this = $(this); // Cache all related containers to variable

  $this.each(function() {
    var $columns = $(this).children(), // Select object containing children
        tallest = 0; // Initialize height variable

    if (min > 0 && min !== null) {
      tallest = min;
    }

    $columns.removeAttr('style'); // Clear styles for window resizing

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