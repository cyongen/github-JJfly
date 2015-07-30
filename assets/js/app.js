(function($) {
  'use strict';

  $(function() {
    var $fullText = $('.admin-fullText');
    $('#admin-fullscreen').on('click', function() {
      $.AMUI.fullscreen.toggle();
    });

    $(document).on($.AMUI.fullscreen.raw.fullscreenchange, function() {
      $fullText.text($.AMUI.fullscreen.isFullscreen ? '退出全屏' : '开启全屏');
    });
  });
    
    function newinit(){
        //alert(1);
        var tips   = '操作成功！',
            color  = 'blue',
            topbar = $('#topbar-collapse');
        topbar.append('<div class="modal_alert '+ color +'">'+ tips +'</div>');
        
        setTimeout(function(){
            $('.modal_alert').fadeOut(2000);
        },3000);
    }
    newinit();
    
})(jQuery);
