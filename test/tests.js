describe('YScroll', function () {
  var html =
    '<div class="flipsnap" style="width:300px">' +
    '  <div style="width:100px">item1</div>' +
    '  <div style="width:100px">item2</div>' +
    '  <div style="width:100px">item3</div>' +
    '</div>';

  var $yscroll, y;
  beforeEach(function () {
    $yscroll = $(html).appendTo('#test');
    y = new YScroll($yscroll[0]);
  });
});
