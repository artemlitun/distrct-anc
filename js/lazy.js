
jQuery(document).ready(function($){
    if($(".lazy").length > 0){        
        $(".lazy").Lazy({
            //visibleOnly: true,
            //delay:0,
            //effect: 'fadeIn',
            enableThrottle: true,
            throttle: 250,
            removeAttribute: true,
            afterLoad: function(element) {
                $(element).addClass('loaded')
            },
            onFinishedAll: function() {
                //$('.loading').toggleClass('loaded');
                //  runSecond();
                if( !this.config("autoDestroy") ){
                    this.destroy();
                }
            }
        })
    }
});
