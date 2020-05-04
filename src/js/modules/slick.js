export const carausel = () => {
    $('.carausel__inner_1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.fighter__profile-inner_1'
    });
    $('.fighter__profile-inner_1').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.carausel__inner_1',
        centerMode: true,
        centerPadding: '60px',
        focusOnSelect: true,
        responsive: [{
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }]
    });
    $('.carausel__inner_2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.fighter__profile-inner_2'
    });
    $('.fighter__profile-inner_2').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.carausel__inner_2',
        centerMode: true,
        centerPadding: '60px',
        focusOnSelect: true,
        responsive: [{
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }]
    });
    $('.carausel__inner_3').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.fighter__profile-inner_3'
    });
    $('.fighter__profile-inner_3').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.carausel__inner_3',
        centerMode: true,
        centerPadding: '60px',
        focusOnSelect: true,
        responsive: [{
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }]
    });
    $('.carausel__inner_4').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.fighter__profile-inner_4'
    });
    $('.fighter__profile-inner_4').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.carausel__inner_4',
        centerMode: true,
        centerPadding: '60px',
        focusOnSelect: true,
        responsive: [{
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }]
    });
}