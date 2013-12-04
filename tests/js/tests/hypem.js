
/**
 * Created by gtothesquare
 */

var hypem = {

    url : 'http://hypem.com/playlist/loved/gtothesquare/json/1/data.js',

    ajaxCall : function(successHandler,errorHandler){
        var self = this;
        $.ajax({
            url:self.url,
            dataType:'json',
            success:successHandler,
            error:errorHandler
        });
    }
};
