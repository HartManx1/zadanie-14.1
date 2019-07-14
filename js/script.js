'use script';

(function () {

    var object = document.getElementById('pictures').innerHTML;
    var carousel = document.querySelector('.main-carousel');
    var copyHere = '';

    var data = [{
        image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg',
        id: 'carousel-cell1',
        title: 'Picture 1',
        description: 'Tree',
    },
    {
        image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/submerged.jpg',
        id: 'carousel-cell2',
        title: 'Picture 2',
        description: 'Tree',
    },
    {
        image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/look-out.jpg',
        id: 'carousel-cell3',
        title: 'Picture 3',
        description: 'Tree',
    },
    {
        image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/one-world-trade.jpg',
        id: 'carousel-cell4',
        title: 'Picture 4',
        description: 'Tree',
    },
    {
        image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/drizzle.jpg',
        id: 'carousel-cell5',
        title: 'Picture 5',
        description: 'Tree',
    }
    ];

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

