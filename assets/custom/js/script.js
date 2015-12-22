jQuery(document).ready(function () {
    'use strict';


    /* Progress Tracker */
    jQuery('body').progressTracker({

        // Allows for navigating between content sections
        linking: true,

        // "constant" = always visiable
        // "hover" = shows on mouse hover
        tooltip: "hover",

        // The number specified is added to the default value at which the tracker changes to the next section.
        positiveTolerance: 0,

        // The number specified is subtracted from the default value at which the tracker changes to the next section.
        negativeTolerance: 0,

        // Only displays the progress tracker when the user is between the top of the first section and the bottom of the last;
        // It is only shown when the tracker sections are in view.
        // Specify false if you want the tracker to always show.
        displayWhenActive: false,

        // Specify the value (in pixels) that you wish the progress tracker to be hidden when it is below that.
        disableBelow: 0,

        // Specifies what the plugin takes into account when deciding when to switch to the next section.
        // "tracker" or "viewport"
        tracking: "viewport"

    });



    /* Soft Scroll */
    jQuery(function() {
        jQuery('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = jQuery(this.hash);
                target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    jQuery('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });



    /* Magnific Popup */

    jQuery('.gallery-item').magnificPopup({
        type: 'image',
        gallery:{
            enabled:true
        }
    });




    jQuery(window).load(function () {


        /* Sticky Header */
        jQuery(".sticky-header").sticky({topSpacing: 0});



    });


    /* Isotope Portfolio */

    var $grid = jQuery('.grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
            // use outer width of grid-sizer for columnWidth
            columnWidth: '.grid-sizer'
        }
    });

    $grid.imagesLoaded(function(){
        $grid.isotope();
    });


    $grid.isotope({ filter: '*' });

    // filter items on button click
    jQuery('#isotope-filters').on( 'click', 'a', function() {
      var filterValue = jQuery(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });




    /* Stellar Parallax */

    jQuery(document).ready(function() {
        react_to_window();
    });

    var stellarActivated = false;

    jQuery(window).resize(function() {
        react_to_window();
    });

    function react_to_window() {
        if (jQuery(window).width() <= 1024) {
            if (stellarActivated == true) {
                jQuery(window).data('plugin_stellar').destroy();
                stellarActivated = false;
            }
        } else {
            if (stellarActivated == false) {

                jQuery.stellar({
                    horizontalScrolling: false,
                    responsive: true,
                    horizontalOffset: 0,
                    verticalOffset: 0,
                    scrollProperty: 'scroll',
                    parallaxBackgrounds: true
                });

                jQuery(window).data('plugin_stellar').init();
                stellarActivated = true;
            }
        }
    }


    //jQuery.stellar({
    //    responsive: true,
    //    horizontalOffset: 0,
    //    verticalOffset: 0,
    //    horizontalScrolling: false,
    //    scrollProperty: 'scroll',
    //    parallaxBackgrounds: true
    //});





    /* Slider Revolution */

    jQuery("#slider1").revolution({
        sliderType:"standard",
        sliderLayout:"fullscreen",
        autoHeight:"on",
        delay:9000,
        navigation: {
            keyboardNavigation:"on",
            keyboard_direction:"horizontal",
            mouseScrollNavigation:"off",
            onHoverStop:"on",
            touch:{
                touchenabled:"on",
                swipe_treshold : 75,
                swipe_min_touches : 1,
                drag_block_vertical:false,
                swipe_direction:"horizontal"
            },
            arrows:{
                style: "hades",
                enable: true,
                hide_onmobile: true,
                hide_onleave: true,
                tmp: '',
                left: {
                    h_align: "left",
                    v_align: "center",
                    h_offset: 10,
                    v_offset: 0
                },
                right: {
                    h_align: "right",
                    v_align: "center",
                    h_offset: 10,
                    v_offset: 0
                }
            },
            bullets: {
                style:"",
                enable:true,
                hide_onmobile:false,
                hide_onleave:true,
                hide_delay:200,
                hide_delay_mobile:1200,
                hide_under:0,
                hide_over:9999,
                direction:"horizontal",
                h_align:"center",
                v_align:"bottom",
                space:7,
                h_offset:20,
                v_offset:40,
                tmp:'<span class="tp-bullet-image"></span><span class="tp-bullet-title"></span>'
            }
        },

        lazyType: "smart",
        disableProgressBar: "off",
        responsiveLevels:[4096,1024,778,480],
        gridwidth:[1140,800,750,480],
        gridheight:[600,600,980,700]
    });





    /* Back to top */

    jQuery("#back-top").hide();

    jQuery(window).scroll(function () {
         if ($(this).scrollTop() > 100) {
             $('#back-top').fadeIn();
         } else {
             $('#back-top').fadeOut();
         }
    });

    jQuery('#back-top a').click(function () {
         $('body,html').animate({
             scrollTop: 0
         }, 600);
         return false;
    });



    /* Animated Counter */

    jQuery('.count-container span').counterUp({
        delay: 10, // the delay time in ms
        time: 3000 // the speed time in ms
    });


});

