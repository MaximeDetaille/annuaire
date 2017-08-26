/**
 * Created by Maxime on 18/01/2017.
 */
$( document ).ready(function() {
        $(window).scroll(function() {
            if ($(document).scrollTop() > 200) {
                $('nav').addClass('shrink');
            } else {
                $('nav').removeClass('shrink');
            }
        });
});
