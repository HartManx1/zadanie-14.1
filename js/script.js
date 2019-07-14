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
        description: 'Tree',
    },
    {
        image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/look-out.jpg',
        id: 'carousel-cell3',
        coords: {
            lat: 50.520650,
            lng: 4.760531
        },
        title: 'Picture 3',
        description: 'Tree',
    },
    {
        image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/one-world-trade.jpg',
        id: 'carousel-cell4',
        coords: {
            lat: 46.381,
            lng: 2.162
        },
        title: 'Picture 4',
        description: 'Tree',
    },
    {
        image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/drizzle.jpg',
        id: 'carousel-cell5',
        coords: {
            lat: 52.229070,
            lng: 21.012436
        },
        title: 'Picture 5',
        description: 'Tree',
    }
    ];

    (function(){
        // Initialize ad add the map
        var cords0;
        var coords1;
        var coords2;
        var coords3;
        var coords4;
        
        
        for (var i = 0; i < data.length; i++) {
            var coords0 = data[0].coords;
            var coords1 = data[1].coords;
            var coords2 = data[2].coords;
            var coords3 = data[3].coords;
            var coords4 = data[4].coords;
        }
        
        
        window.initMap = function () {
        
        
            var infos = document.getElementById('infos')
        
            var map = new google.maps.Map(
                document.getElementById('map'), { zoom: 4, center: coords1 });
    
        
            var markerOne = new google.maps.Marker({
                position: coords0,
                map: map
            });
            markerOne.addListener('click', function () {
                infos.innerHTML = 'You clicked markerOne';
            });
        
        
            var markerTwo = new google.maps.Marker({
                position: coords1,
                map: map
            });
            markerTwo.addListener('click', function () {
                infos.innerHTML = 'You clicked markerTwo';
            });
        
            var markerThree = new google.maps.Marker({
                position: coords2,
                map: map
            });
        
            markerThree.addListener('click', function () {
                infos.innerHTML = 'You clicked markerThree';
            });
        
            var markerFour = new google.maps.Marker({
                position: coords3,
                map: map
            });
        
            markerFour.addListener('click', function () {
                infos.innerHTML = 'You clicked markerFour';
            });
        
            var markerFive = new google.maps.Marker({
                position: coords4,
                map: map
            });
        
            markerFive.addListener('click', function () {
                infos.innerHTML = 'You clicked markerFive';
            });
        
        };
        
        })();

    Mustache.parse(object);

    for (let i = 0; i < data.length; i++) {
        //console.log(data);  opcjonalnie - pomocne
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







