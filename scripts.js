$(document).ready(function() {
    console.log("Document is ready!");

    $('#contact-us-button').on('click', function() {
        console.log("Contact us button clicked!");
        $('#contact-form-popup').fadeIn();
    });

    

    // Prevent the click event propagation inside the popup
    $('#contact-form-popup').on('click', function(event) {
        event.stopPropagation();
    });

    // Initialize Slick Slider
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        adaptiveHeight: true
    });



    // Change project image and highlight selected project
    $('.project-item').click(function() {
        console.log("Project item clicked!");
        $('.project-item').removeClass('project-selected');
        $(this).addClass('project-selected');
        var newImage = $(this).data('image');
        $('#project-image').attr('src', newImage);
    });
});

