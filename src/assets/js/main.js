(function($) {
  "use strict";
  $(window).on({
    load: function() {
      console.log("preloader");

      let preloader = new ctmPreloader();

      // preloader.init();
      console.log("preloader end");
    }
  });

  $(document).ready(function() {
    //do something
  });
})(jQuery);
