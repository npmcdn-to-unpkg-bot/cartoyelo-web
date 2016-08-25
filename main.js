/*jslint browser: true */
/*globals L, jQuery */

(function ($) {
    'use strict';

    var map;

    map = L.map('map').setView([46.160329, -1.151139], 13);

    // Awesome: https://leaflet-extras.github.io/leaflet-providers/preview/
    L.tileLayer('http://korona.geog.uni-heidelberg.de/tiles/roads/x={x}&y={y}&z={z}', {
        maxZoom: 20,
        attribution: 'Imagery from ' +
            '<a href="http://giscience.uni-hd.de/">' +
            'GIScience Research Group @ University of Heidelberg' +
            '</a> &mdash; Map data &copy; ' +
            '<a href="http://www.openstreetmap.org/copyright">' +
            'OpenStreetMap' +
            '</a>'
    }).addTo(map);
}(jQuery));
