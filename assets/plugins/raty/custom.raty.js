(function($){"use strict";$.fn.raty.defaults.path='assets/plugins/raty/images/'
if($('.rating-default').length){$('.rating-default').raty();}
if($('.rating-score').length){$('.rating-score').raty({score:3,scoreName:'entity[1,2,3,4,5]'});}
if($('.rating-score-name').length){$('.rating-score-name').raty({scoreName:'Rating'});}
if($('.rating-number').length){$('.rating-number').raty({number:10});}
if($('.rating-number-max').length){$('.rating-number-max').raty({numberMax:5,number:10});}
if($('.rating-read-only').length){$('.rating-read-only').raty({readOnly:true});}
if($('.rating-read-only2').length){$('.rating-read-only2').raty({readOnly:true,score:3});}
if($('.rating-not-rated-msg').length){$('.rating-not-rated-msg').raty({readOnly:true,noRatedMsg:"Custom not rated message"});}
if($('.rating-half-enable').length){$('.rating-half-enable').raty({score:3.3});}
if($('.rating-half-disable').length){$('.rating-half-disable').raty({halfShow:false,score:3.3});}
if($('.rating-half').length){$('.rating-half').raty({half:true});}
if($('.rating-hint').length){$('.rating-hint').raty({hints:['a',null,'',undefined,'*_*']});}
if($('.rating-path').length){$('.rating-path').raty({path:'assets/images/rating/'});}
if($('.rating-cancel').length){$('.rating-cancel').raty({cancel:true});}
if($('.rating-custom-icon').length){$('.rating-custom-icon').raty({starHalf:'like-half.png',starOn:'like-on.png',starOff:'like-off.png',});}
if($('.rating-font').length){$('.rating-font').raty({starHalf:'zmdi zmdi-star-half',starOn:'zmdi zmdi-star',starOff:'zmdi zmdi-star-outline',starType:'i',half:true,});}
if($('.rating-icon-range').length){$('.rating-icon-range').raty({starType:'i',iconRange:[{range:1,on:'zmdi zmdi-star',off:'zmdi zmdi-star-outline'},{range:2,on:'zmdi zmdi-lock',off:'zmdi zmdi-lock-outline'},{range:3,on:'zmdi zmdi-favorite',off:'zmdi zmdi-favorite-outline'},{range:4,on:'zmdi zmdi-check-square',off:'zmdi zmdi-square-o'},{range:5,on:'zmdi zmdi-volume-up',off:'zmdi zmdi-volume-mute'}]});}})(jQuery);