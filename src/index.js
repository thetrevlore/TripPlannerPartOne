const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker");

mapboxgl.accessToken = "pk.eyJ1IjoidHJldm9yc3RvcmV5IiwiYSI6ImNqOGJyeGZ1bjAxNnkyd2xiYXRlb2lpMTIifQ.nzn2Dwl1aPDs3EZCveHOpA";

const map = new mapboxgl.Map({
    container: "map",
    center: [-74.009, 40.705],
    zoom: 12,
    style: "mapbox://styles/mapbox/streets-v10"
});

const markerDomEl = document.createElement("div"); // Create a new, detached DIV
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

const marker = buildMarker("activity", [-74.009151, 40.705086]);
marker.addTo(map);