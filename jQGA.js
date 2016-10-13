(function($) {
    
    //Fetch the Google Analytics library and prepare the `ga` function.
    
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
    
    //Provide `tid` as a string in the format - 'UA-XXXXX-Y'
    //Steps to find your tracking ID: https://goo.gl/h7iBfI
    
    var defaultOptions = {
      pageview: true
    }
    
    $.extend({
        jQGA: function(tid,options) {
                var success = false;
                options = $.extend({},defaultOptions,options);
                ga('create', {
                  trackingId: tid,
                  cookieDomain: 'auto'
                });
                options.pageview && ga('send', {
                  hitType: 'pageview'
                });
              };
    });
})(jQuery);
