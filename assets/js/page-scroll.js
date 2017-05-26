(function($){

    /*
     * jQuery page scroll
     */

    var topBtn  = $('#page-top'); // 先頭に戻るボタンの入るDOM
    var topHash = '#_top'; // 先頭に戻るボタンのhrefの中身
    var viewPos = 100; // 先頭に戻るボタンが表示され始める位置

    // jQuery 1.9 以降用のブラウザ判定
    var isHtmlScroll = (function() {
        var html = $('html'),
        top = html.scrollTop();
        var el = $('<div/>').height(10000).prependTo('body');
        html.scrollTop(10000);
        var rs = !!html.scrollTop();
        html.scrollTop(top);
        el.remove();
        return rs;
    })();

    // 先頭に戻るボタンの表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > viewPos ) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });

    $('a[href*=\\#]:not([href=\\#])').click( function() { // スムーズスクロール
        var href = this.hash;
        var $target = $(href == topHash || href == "" ? 'body' : href);
        if ( $target.length > 0 ) {
            var top = $target.offset().top;
            $(isHtmlScroll ? 'html' : 'body').animate({
                scrollTop: top
            }, 'slow', 'swing');
        }
        return false;
    });
})(jQuery);