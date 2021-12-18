
$(document).ready(function () {
            $("#menuicon").click(function () {
                $(".menuitems").toggleClass("show", true)
            });
        });

$(document).ready(function () {
            $("#closeicon").click(function () {
                $(".menuitems").toggleClass("show", false)
            });
        });

$(document).ready(function () {
            $('.imageslider').slick({
                dots: false,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 2000
            })
        });

// $(document).ready(function () {
//             $('.cube').slick({
//                 dots: false,
//                 arrows: false,
//                 autoplay: true,
//                 slidesToShow: 5,
//                 slidesToScroll: 1,
//                 infinite: true,
//                 autoplaySpeed: 1000
//             })
//         });