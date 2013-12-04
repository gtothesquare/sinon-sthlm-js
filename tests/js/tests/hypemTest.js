/**
 * Created by gtothesquare
 */

(function(window, undefined) {
    'use strict';

    var song = {
        mediaid: "20kyg",
        artist: "Passenger",
        title: "All The Little Lights (67th Hour Remix)",
        dateposted: 1385926529,
        siteid: 13736,
        sitename: "musigh",
        posturl: "http://musigh.com/2013/12/01/sunday-chillin-196/",
        postid: 2370052,
        loved_count: 1648,
        posted_count: 5,
        thumb_url: "http://static-ak.hypem.net/thumbs_new/4/2370052.jpg",
        thumb_url_medium: "http://static-ak.hypem.net/thumbs_new/4/2370052_120.jpg",
        thumb_url_large: "http://static-ak.hypem.net/thumbs_new/3a/2367034_320.jpg",
        thumb_url_artist: null,
        time: 258,
        description: "Photography: Li Hui Have a nice Sunday! Play all De Hofnar – De Nacht Petite Douceur - Loved By You Esta. - Paradise (ft. Alina Baraz) The Geek x Vrv – To Be Continued Passenger – All The Little Lights (67th Hour Remix) De Hofnar | Petite Douceur | Esta. ",
        dateloved: 1385644773,
        user_dateloved: 1385644773,
        itunes_link: "http://hypem.com/go/itunes_search/Passenger"
    };

    module("Hyepm Stub: ", {
        setup: function() {
            sinon.stub($, "ajax").yieldsTo("success", song);
        },
        teardown: function(){
            $.ajax.restore();
        }

    });

    asyncTest('should trigger a success call', function(){
        hypem.ajaxCall(function(data){
            start();
            equal(data, song);
        }, function(error){
            start();
            ok(false, "falied it should be yield to success");
        });
    });



})(this);