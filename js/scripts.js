var map_controls = document.getElementsByClassName('map_control');
var layers = document.getElementsByClassName('layer');
for (let i = 0; i < map_controls.length; i++) {
    const map_control = map_controls[i];
    map_control.addEventListener('click', function (e) {
        e.preventDefault();
        const target = e.target;
        const layerid = (target.dataset.layer);
        if (layerid) {
            const layer = document.getElementById(layerid);
            for (let l = 0; l < layers.length; l++) {
                if (layers[l] === layer) {
                    layers[l].classList.remove('invisible');
                } else {
                    layers[l].classList.add('invisible');
                }
            }
            for (let m = 0; m < map_controls.length; m++) {
                if (map_controls[m] === target) {
                    map_controls[m].classList.add('toggled');
                } else {
                    map_controls[m].classList.remove('toggled');
                }
            }


        }
    })

}

// var locations = [
//     [46.2043028, 6.1502206, 'a title here'],
//     [46.205305, 6.1341243, 'a title here'],
//     [46.198869, 6.1482608, 'a title here'],
// ]

// var map_container = document.getElementById('map_container');

// var map = new google.maps.Map(map_container, {
//     zoom: 14,
//     scrollwheel: false
// });

// var marker, i;
// //location is set in php in template-home.php
// var bounds = new google.maps.LatLngBounds();
// var infowindow = new google.maps.InfoWindow({ content: '...' });


// for (i = 0; i < locations.length; i++) {
//     var loc = locations[i];

//     var latlng = new google.maps.LatLng(loc[0], loc[1]);
//     var marker = new google.maps.Marker({
//         position: latlng,
//         map: map,
//         title: loc[2]
//     });

//     marker.addListener('click', function () {
//         infowindow.setContent(this.title);
//         infowindow.open(map, this);
//     });
//     bounds.extend(latlng);

//     if (locations.length == 1) {
//         map.setZoom(13);
//         map.setCenter(latlng);
//     }


// }

// if (locations.length > 1) {
//     map.fitBounds(bounds);
// }

// $(document).ready(function () {
//     // $(".slider").slick({
//     //     infinite: true,
//     //     slidesToShow: 3,
//     // });
// });