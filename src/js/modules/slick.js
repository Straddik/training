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
    $('.list-of-fighters__inner').slick({
        responsive: [{
                breakpoint: 1900,
                settings: 'unslick'
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    arrows: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    arrows: true,
                }
            },
            {
                breakpoint: 510,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: true,
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                }
            }
        ]
    });
}