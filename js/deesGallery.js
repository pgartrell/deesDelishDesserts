$(document).ready(function() {
    $('.fancybox').fancybox({
     beforeShow : function(){
      this.title =  $(this.element).data("caption");
     }
    });
   }); // ready