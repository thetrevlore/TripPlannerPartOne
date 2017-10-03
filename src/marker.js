const mapboxgl = require("mapbox-gl");

//click listener where we grab the coordinates of where the user clicked on the map.

function getMarkerImg(markerType) {
    if (markerType === 'activity') return "url(http://i.imgur.com/WbMOfMl.png)";
    if (markerType === 'hotel') return "url(http://i.imgur.com/D9574Cu.png)";
    if (markerType === 'restaurant') return "url(http://i.imgur.com/cqR6pUI.png)";
}

function buildMarker(markerType, coords) {
    const markerDomEl = document.createElement("div"); // Create a new, detached DIV
    markerDomEl.style.width = "32px";
    markerDomEl.style.height = "39px";
    markerDomEl.style.backgroundImage = getMarkerImg(markerType);
    
    return new mapboxgl.Marker(markerDomEl).setLngLat(coords);
}


module.exports = buildMarker;