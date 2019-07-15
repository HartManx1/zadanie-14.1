'use script';

(function () {

    var object = document.getElementById('pictures').innerHTML;
    var carousel = document.querySelector('.main-carousel');
    var copyHere = '';

    var data = [{
        image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg',
        id: 'carousel-cell1',
        coords: {
            lat: 51.020902,
            lng: 10.605257
        },
        title: 'Picture 1',
        description: 'Tree',
    },
    {
        image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/submerged.jpg',
        id: 'carousel-cell2',
        coords: {
            lat: 51.951658,
            lng: 5.868111
        },
        title: 'Picture 2',
        description: 'Water',
    },
    {
        image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/look-out.jpg',
        id: 'carousel-cell3',
        coords: {
            lat: 50.520650,
            lng: 4.760531
        },
        title: 'Picture 3',
        description: 'Sea',
    },
    {
        image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/one-world-trade.jpg',
        id: 'carousel-cell4',
        coords: {
            lat: 46.381,
            lng: 2.162
        },
        title: 'Picture 4',
        description: 'Tower',
    },
    {
        image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/drizzle.jpg',
        id: 'carousel-cell5',
        coords: {
            lat: 52.229070,
            lng: 21.012436
        },
        title: 'Picture 5',
        description: 'Rain',
    }
    ];

    window.initMap = function () {

        var map = new google.maps.Map(
            document.getElementById('map'), {
                zoom: 5,
                center: data[0].coords
            })

        var markers = [];

        for (var i = 0; i < data.length; i++) {

            markers[i] = new google.maps.Marker({
                position: data[i].coords,
                map: map
            });

            markers[i].addListener('click', function () {
                flkty.select(i);
            })


            flkty.on('change', function (i) {

                map.panTo(data[i].coords);

                map.setZoom(7);
            });
        };
    };

    Mustache.parse(object);

    for (let i = 0; i < data.length; i++) {
        copyHere += Mustache.render(object, data[i]);
    }

    carousel.insertAdjacentHTML('beforeend', copyHere);


})();







var flkty = new Flickity('.main-carousel', {
    cellAlign: "center",
    contain: true,
    pageDots: false,
    hash: true,
    wrapAround: true
});

var progressBar = document.querySelector('.progress-bar')


flkty.on('scroll', function (progress) {
    progress = Math.max(0, Math.min(1, progress));
    progressBar.style.width = progress * 100 + '%';
});


var flkty = new Flickity('.main-carousel');

var buttonGroup = document.querySelector('.button-group');
var buttons = buttonGroup.querySelectorAll('.button');
buttons = fizzyUIUtils.makeArray(buttons);

buttonGroup.addEventListener('click', function (event) {
    // filter for button clicks
    if (!matchesSelector(event.target, '.button')) {
        return;
    }
    var index = buttons.indexOf(event.target);
    flkty.select(index);
});







