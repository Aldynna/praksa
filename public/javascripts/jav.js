for(var i=0;i<4;++i)

{

    var point = new google.maps.LatLng(southWest.lat() + latSpan * Math.random(),southWest.lng() + lngSpan * Math.random());

    pointsrand.push(point);

}

for(var i=0;;++i)

{
    var position=pointsrand[i];
    addMarkerWithTimeout(position, i * 3000);

}

}

clearMarkers(num) {
    window.setTimeout(function() {
        for (var i = 0; i < markers.length; i++) {
            markers[num].setMap(null);
        }
        markers = [];
    }, 7000);
}
