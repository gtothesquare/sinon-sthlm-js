/**
 * Created by gtothesquare
 */

var pikachu = {

    run: function(){
        $('#pikachu').attr('src','img/running-pika.gif');
        $('#pikachu').animate({ "left": "+=500px" }, 3000, function(){
            pikachu.stop();
            console.log("pika stoped!!!")
        });
    },

    stop: function(){
        $('#pikachu').attr('src','img/standing-pika.png');
    },

    init: function() {

        $('#run').bind('click',function(e){
            pikachu.run();
        });

    }
};



