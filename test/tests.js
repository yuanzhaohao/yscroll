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
    console.log($yscroll)
    y = new YScroll($yscroll[0]);
  });
  afterEach(function() {
    $(y.scroller).remove();
  });

  describe('constructor', function() {
    context('when set dom element', function() {
      it('element should be set', function() {
        var div = document.createElement('div');
        var f = YScroll(div);
        expect(f.scroller).to.be(div);
      });
    });

    context('when set string(css seclector)', function() {
      context('when exist element', function() {
        it('element should be search by selector', function() {
          var $foo = $('<div id="foo">').appendTo('body');
          var f = YScroll('#foo');
          expect(f.scroller).to.be($foo.get(0));
          $foo.remove();
        });
      });

      context('when not exist element', function() {
        it('should throw error' ,function() {
          expect(function() {
            Yscroll('#foo');
          }).to.throwError(/element not found/);
        });
      });
    });
  });
});
