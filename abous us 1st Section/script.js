$(document).ready(function () {
    $('.about-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
     navText: [
 `<div class="w-12 h-12 border border-gray-300 rounded-xl flex items-center justify-center">
      <i class="fa-solid fa-arrow-left text-xl"></i>
   </div>`,

  `<div class="w-12 h-12 border border-gray-300 rounded-xl flex items-center justify-center">
      <i class="fa-solid fa-arrow-right text-xl"></i>
   </div>`
    ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1025:{
            items:1
        }
    }
})
});