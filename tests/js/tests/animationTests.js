/**
 * Created by gtothesquare
 */

(function(window, undefined) {
   'use strict';

   module("Pikachu ", {
        setup: function() {
            $('#pikachu').css('left','150px');
            // we bend time, space and your minds in a breeze
            sinon.clock = sinon.useFakeTimers();
        },
        teardown: function(){
            // we restore the timers back reality
            sinon.clock.restore();
        }
    });

    asyncTest('should run for 500px', function(){
        pikachu.run();
        //fast foward
        sinon.clock.tick(4000);
        start();
        equal('650px',$("#pikachu").css('left'))
    });

    module("Pikachu ", {
        setup: function() {
            $('#pikachu').css('left','150px');
            // we bend time, space and your minds in a breeze
            sinon.clock = sinon.useFakeTimers();
            // spy on stop()
            sinon.spy(pikachu, 'stop');
        },
        teardown: function(){
            // we restore the timers back reality
            sinon.clock.restore();
            // in a very stealthy way we restory stop
            pikachu.stop.restore();

        }
    });

    asyncTest('should call stop', function(){
        pikachu.run();
        sinon.clock.tick(4000);
        start();
        //verified that stop was called once
        ok(pikachu.stop.calledOnce);
    });

    module("Pikachu ", {
        setup: function() {
            $('#pikachu').css('left','150px');
            // we bend time, space and your minds in a breeze
            sinon.clock = sinon.useFakeTimers();
            // spy on stop()
            sinon.spy(console, 'log');
        },
        teardown: function(){
            // we restore the timers back reality
            sinon.clock.restore();
            // in a very stealthy way we restory stop
            console.log.restore();

        }
    });

    asyncTest('PLEASE REMOVE YOUR CONSOLE LOGS!!!!!', function(){
        pikachu.run();
        sinon.clock.tick(4000);
        start();
        //verified that stop was called once
        ok(console.log.threw());
    });



})(this);