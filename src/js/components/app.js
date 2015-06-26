// to depend on a bower installed component:
// define(['bower_components/componentName/file'])

// define(["jquery"], function($) {

//   var ui;

//   require(['ui'], function(Ui) {
//     ui = new  Ui();
//     ui.on('SHOWFLASHBOX', function(e) {
//       $('.box').css({'background': 'green'});
//     });
//   });



//   require(['dev']);


//   require(['search'], function (Search) {
//     Search.init();
//   });
// });
var $ = require('jQuery');
var APP = function() {
  return {
    init: function() {
      console.log('hey 2');

      // var s = Snap("#flag");
      var svgout = Snap("#svgout");

      // var p = Snap.parse( s );
      // console.log(p);
      // var g = svgout.group().append( p );

      var tux = Snap.load("images/uk_union_flag.svg", function ( loadedFragment2 ) {
        window.g = svgout.group();
        window.f = window.g.append( loadedFragment2 );
        window.g.transform('t-10,-50');


        window.yellowC = svgout.circle(59, 100, 70).attr({
          fill: '#ff0',
          stroke: '#f00'
          // mask: window.cg
        });
        window.f.attr({
          // mask: window.smallCircle
        })
        window.smallCircle = svgout.circle(101, 100, 70);
        window.smallCircle2 = svgout.circle(151, 100, 70);
        window.cg = svgout.group(window.smallCircle, window.smallCircle2);
        //console.log('f', flag);
        // var clone = g.clone();
        // clone.attr({
        //     fill: "#fff"
        // });
        // console.log('f', clone);
      });


      return this;

    },
    test: function(){
      var $test = $('#test').width(500).height(500).css('background', 'yellow');
      var flagW = 311,
          flagH = 204,
          flagX = ($test.width() - flagW) /2,
          flagY = ($test.height() - flagH) /2
      var s = Snap("#test");

      var move = function(dx,dy) {
        console.log(this.data('origTransform') + (this.data('origTransform') ? "T" : "t") + [dx, dy]);
        window.maskCircle.attr({
          transform: this.data('origTransform') + (this.data('origTransform') ? "T" : "t") + [dx, dy]
        });

      }


      var start = function() {
        this.data('origTransform', this.transform().local );
      }
      var stop = function() {
        console.log('finished dragging');
      }




      var tux = Snap.load("images/uk_union_flag.svg", function ( loadedFragment2 ) {

        window.flagGroup = s.group(s.rect(0,0,311,204).attr({
          fill: 'green'
        }));
        window.f = window.flagGroup.append(loadedFragment2);
        window.flagGroup.transform('t'+flagX+','+ flagY);

        var scaledClonedFlag = window.flagGroup.clone();
        scaledClonedFlag
          .transform('s2.5');
        // window.g.transform('t100,100');

        window.maskCircle = s.circle(200,200,15).attr({ fill: 'white' });

        // scaledClonedFlag.attr({ mask: window.maskCircle });
        scaledClonedFlag.drag(move, start, stop );

      });

      return this;
    },

    test2: function() {

      var s = Snap("#test");
      var $test = $('#test').width(500).height(500).css('background', 'yellow');
      window.clippedCircle = s.circle(200,200,15)
      var tux = Snap.load("images/uk_union_flag.svg", function ( loadedFragment2 ) {
        window.flagGroup = s.group(s.rect(0,0,311,204).attr({
          fill: 'white'
        }));
        window.f = window.flagGroup.append(loadedFragment2);

        window.copy = s.use(window.flagGroup)
        window.copy.attr({
          mask: window.clippedImage
        });
        window.clippedI = s.group(window.copy);
        var scaleFactor = 2;
        window.clippedI.transform('T246,249,s'+scaleFactor)


      
        //Cache Vairables
        var clippedImage;
        var cp;
        var mycircle;
        var greencircle;
        var gMouseDown = 0;

        //Start Up Event and get Ids
        
        clippedImage = window.clippedI;
        //cp = document.getElementById("clipgroup");
        mycircle =  window.clippedCircle;//document.getElementById("clipcircle");
        //greencircle = document.getElementById("greencircle");
        function mouseMove(dx,dy) {
          if (!gMouseDown) return;

          mycircle.attr({
            cx: dx,
            cy: dy
          });

          //greencircle.setAttributeNS(null, "cx", x);
          //greencircle.setAttributeNS(null, "cy", y);

          resizeImage(dx, dy);
        }

        // Mouse is down
        function mouseDown(evt) {
          gMouseDown = 1;
        }

        // Mouse is not down
        function mouseUp(evt) {
          gMouseDown = 0;
        }
        //clip-path="url(#clipgroup)"
        // Resize and transform the content
        function resizeImage(x, y) {
          var newx = x - scaleFactor * x;
          var newy = y - scaleFactor * y;

          // var tx = "translate(" + newx + "," + newy + ")";
          //,scale(" + scaleFactor + "," + scaleFactor + ")
          // clippedImage.attr({
          //   transform: tx
          // });
          // window.clippedI.transform('s'+scaleFactor)
          window.clippedI.transform('t'+newx+','+newy+'s'+scaleFactor)
        }
        window.clippedI.drag(mouseMove, mouseDown, mouseUp);
      ;

      });

    }




  , foo: 'bar'
  }
}
module.exports = APP;