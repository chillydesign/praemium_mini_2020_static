var locations = [
    [46.2043028, 6.1502206, 'a title here'],
    [46.205305, 6.1341243, 'a title here'],
    [46.198869, 6.1482608, 'a title here'],
]

var map_container = document.getElementById('map_container');

var map = new google.maps.Map(map_container, {
    zoom: 14,
    scrollwheel: false
});

var marker, i;
//location is set in php in template-home.php
var bounds = new google.maps.LatLngBounds();
var infowindow = new google.maps.InfoWindow({ content: '...' });


for (i = 0; i < locations.length; i++) {
    var loc = locations[i];

    var latlng = new google.maps.LatLng(loc[0], loc[1]);
    var marker = new google.maps.Marker({
        position: latlng,
        map: map,
        title: loc[2]
    });

    marker.addListener('click', function () {
        infowindow.setContent(this.title);
        infowindow.open(map, this);
    });
    bounds.extend(latlng);

    if (locations.length == 1) {
        map.setZoom(13);
        map.setCenter(latlng);
    }


}

if (locations.length > 1) {
    map.fitBounds(bounds);
}

$(document).ready(function () {
    // $(".slider").slick({
    //     infinite: true,
    //     slidesToShow: 3,
    // });
});