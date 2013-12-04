/**
 * Created by gtothesquare
 */

(function(window, undefined) {
    'use strict';

    module("Timer with fakes: ", {
        setup: function() {
            // we bend time, space and your minds in a breeze
            this.clock = sinon.useFakeTimers();
        },
        teardown: function(){
            // we restore the timers back reality
            this.clock.restore();
        }
    });

    asyncTest('should trigger in right away', function(){
        setTimeout(function(){
            start();
            ok(true);
            console.log('Timeout triggered');

        },4000);

        this.clock.tick(5000);
    });

    module("Timer no fakes: ", {
    });

    asyncTest('should wait 4 seconds before triggering', function(){
        setTimeout(function(){
            start();
            ok(true);
            console.log('Timeout triggered');

        },10000);
    });

})(this);
