let $page = $('html, body');
$('a[href*="#"]').click(function () {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});

function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find('.burger-menu_button', '.burger-menu_lines');
    let links = menu.find('.nav__item');
    let net = menu.find('.nav__icon');
    let overlay = menu.find('.burger-menu_overlay');

    button.on('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });

    net.on('click', () => toggleMenu());

    links.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu());

    function toggleMenu() {
        menu.toggleClass('burger-menu_active');

        if (menu.hasClass('burger-menu_active')) {
            $('body').css('overlow', 'hidden');
        } else {
            $('body').css('overlow', 'visible');
        }
    }
}

burgerMenu('.burger-menu');


let swiper = new Swiper('.swiper-container-first', {
    direction: 'vertical',
    loop: true,
    pagination: {
        el: '.swiper-pagination-first',
        clickable: true,
    },
});
$(window).on("scroll", function () {
    if (window.pageYOffset > 600) {
        $('.nav').addClass('scroll');
    } else {
        $('.nav').removeClass('scroll');
    }
});

$(function () {
    $('.lazy').Lazy();
});

jQuery(function ($) {

    $('.news__slider .swiper-container-second').each(function (index, value) {

        var mySwiper = new Swiper(value, {
            // autoplay: {
            //     delay: 5000,
            // },
            navigation: {
                nextEl: value.nextElementSibling.nextElementSibling,
                prevEl: value.nextElementSibling,
            },
            pagination: {
                el: value.nextElementSibling.nextElementSibling.nextElementSibling,
                clickable: true,
            },
            slidesPerView: 3,
            spaceBetween: 30,
            loop: true,
            centeredSlides: true,
            // centeredSlidesBounds: true,

            breakpoints: {
                992: {
                    slidesPerView: 3,
                    spaceBetween: 30
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                200: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                }
            }
        });

    });
});

$('[data-fancybox="gallery"]').fancybox({
    // Options will go here
});

function initMap() {
    // The location of Uluru
    let uluru = {
        lat: 46.952503,
        lng: 31.966461
    };

    // The map, centered at Uluru
    let map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 12,
            center: uluru,
            disableDefaultUI: true
        });

    let icons = {
        marker: {
            icon: './img/marker.svg'
        }
    };
    let features = [{
        position: new google.maps.LatLng(46.952503, 31.966461),
        type: 'marker'
    }];

    // Create markers.
    for (let i = 0; i < features.length; i++) {
        let marker = new google.maps.Marker({
            position: features[i].position,
            icon: icons[features[i].type].icon,
            map: map
        });
    };

    // The marker, positioned at Uluru
    // let marker = new google.maps.Marker({
    //     position: uluru,
    //     map: map,
    // });

    let styles = [{
        "elementType": "geometry",
        "stylers": [{
            "color": "#f5f5f5"
        }]
    }, {
        "elementType": "labels.icon",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "elementType": "labels.text.fill",
        "stylers": [{
            "color": "#616161"
        }]
    }, {
        "elementType": "labels.text.stroke",
        "stylers": [{
            "color": "#f5f5f5"
        }]
    }, {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [{
            "color": "#bdbdbd"
        }]
    }, {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [{
            "color": "#eeeeee"
        }]
    }, {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [{
            "color": "#757575"
        }]
    }, {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [{
            "color": "#e5e5e5"
        }]
    }, {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [{
            "color": "#9e9e9e"
        }]
    }, {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [{
            "color": "#ffffff"
        }]
    }, {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [{
            "color": "#757575"
        }]
    }, {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [{
            "color": "#dadada"
        }]
    }, {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [{
            "color": "#616161"
        }]
    }, {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [{
            "color": "#9e9e9e"
        }]
    }, {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [{
            "color": "#e5e5e5"
        }]
    }, {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [{
            "color": "#eeeeee"
        }]
    }, {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{
            "color": "#c9c9c9"
        }]
    }, {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [{
            "color": "#9e9e9e"
        }]
    }]
    map.setOptions({
        styles: styles
    });
}