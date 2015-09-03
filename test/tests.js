describe('YScroll', function () {
  var html =
    '<div class="yscroll" style="width:300px">' +
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

  describe('refresh', function() {
    context('has content', function() {
      beforeEach(function() {
        y.refresh();
      });

      it('should reset values', function() {
        expect(y.curPoint).to.be(0);
        expect(y._maxPoint).to.be(2);
        expect(y._distance).to.be(100);
        expect(y._maxDist).to.be(-200);
      });
    });

    context('has no content', function() {
      beforeEach(function() {
        $yscroll.empty();
        y.refresh();
      });
      it('should reset values', function() {
        expect(y.curPoint).to.be(-1);
        expect(y._maxPoint).to.be(-1);
        expect(y._distance).to.be(0);
        expect(y._maxDist).to.be(0);
      });
    });
  });

  describe('maxPoint', function() {
    context('when set maxPoint to 0', function() {
      it('should set _maxPoint to 0', function() {
        var y = Yscroll($(html).get(0), { maxPoint: 0 });
        expect(y.maxPoint).to.be(0);
      });
    });

    context('when set maxPoint to 1', function() {
      it('should set _maxPoint to 1', function() {
        var y = Yscroll($(html).get(0), { maxPoint: 1 });
        expect(y.maxPoint).to.be(1);
      });
    });

    context('when dont set maxPoint', function() {
      it('should set _maxPoint to element length - 1', function() {
        var y = Yscroll($(html).get(0));
        expect(y.maxPoint).to.be(2);
      });
    });
  });

  describe('#moveToPoint', function() {
    context('when argument greater than maxPoint', function() {
      it('currentPoint should change to maxPoint', function() {
        y.moveToPoint(5);
        expect(y.curPoint).to.be(2);
      });

      it('should fire fspointmove event', function(done) {
        y.scroller.addEventListener('fspointmove', function() {
          expect(y.curPoint).to.be(2);
          done();
        });
        y.moveToPoint(5);
      });
    });

    context('when argument less than 0', function() {
      it('currentPoint should change to 0', function() {
        y.moveToPoint(1);
        y.moveToPoint(-1);
        expect(y.curPoint).to.be(0);
      });
    });

    context('when argument betoween 0 and maxPoint', function() {
      it('should change currentPoint', function() {
        y.moveToPoint(1);
        expect(y.curPoint).to.be(1);
      });
    });
  });
});
