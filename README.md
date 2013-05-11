rowify
======

Rowify is a jQuery based plugin for assisting with responsive column height problems. It works by selecting the container of the elements you would like to equalize, finding the height of its tallest child element, then setting the minimum height of all children to the tallest height. 

To rowify a group of elements, simply select the container wrapping the elements.

You can now select several groups of containers and equalize them against similar classed containers.

I've added a simple example html file to the repo to better illustrate what's going on.

Example:
```
<div data-same-height>
    <div class="column">Short</div>
    <div class="column">Long column</div>
    <div class="column">Short</div>
</div>

<script>
  $(document).ready(function(){
      $('[data-same-height]').rowify();
  });
</script>
```


Easily keep columns even sized even in liquid layouts by running rowify on window resize.
```
<script>
  $(window).resize(function () {
      $('[data-same-height]').rowify();
  });
</script>
```

You can specify a minimum height.
```
<script>
  $(document).ready(function(){
      $('[data-same-height]').rowify({
        minHeight: 100
      });
  });
</script>
```

Equalize multiple containers against their like classes
```
<div data-same-height>
  <div>
    <div class="smallBox"></div>
    <div class="tallBox"></div>
  </div>
  <div>
    <div class="smallBox"></div>
    <div class="tallBox"></div>
  </div>
  <div>
    <div class="smallBox"></div>
    <div class="tallBox"></div>
  </div>
</div>

<script>
  $(document).ready(function(){
      $('[data-same-height]').rowify({
        equalize: ['smallBox', 'tallBox']
      });
  });
</script>
```