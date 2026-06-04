$(document).ready(function(){

 $('.case-studies-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,          
    dots: false,        
    // Swapped 'fa-chevron' for 'fa-arrow-left-long' (or just 'fa-arrow-left')
    navText: [
        '<i class="fa-solid fa-arrow-left-long"></i>', 
        '<i class="fa-solid fa-arrow-right-long"></i>'
    ],                  
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: { items: 1 },
        600: { items: 2 },
        1000: { items: 3 }
    }
});
    // 2. Testimonials Carousel Layout Loop Tracker (2 items visible)
    $('#testimonials-carousel').owlCarousel({
        loop: true,
        margin: 25,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            992: {
                items: 2
            }
        }
    });

    // 3. Team Carousel Layout Loop Tracker (4 items visible)
    $('#team-carousel').owlCarousel({
        loop: true,
        margin: 25,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3500,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });
});