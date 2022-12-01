const map = L.map('map', {
    center: [-29.50, 145],
    zoom: 3.5
  });
  
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' }).addTo(map);
  
  


  const basemaps = {
    StreetView: L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',   {attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}),
    Topography: L.tileLayer.wms('http://ows.mundialis.de/services/service?',   {layers: 'TOPO-WMS'}),
    Places: L.tileLayer.wms('http://ows.mundialis.de/services/service?', {layers: 'OSM-Overlay-WMS'})
  };

  L.control.layers(basemaps).addTo(map);
  basemaps.Topography.addTo(map);

  const basicBeachIcon = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/shacheeswadia/leaflet-map/main/beach-icon-chair.svg',
    iconSize: [40, 40],
  });
  $sapangbuho_latlong = [15.5756, 121.1076];
  $sapangbuho_marker = L.marker($sapangbuho_latlong).addTo(map)

  $norway_latlong = [69.3312, 17.4930];
  $norway_marker = L.marker($norway_latlong).addTo(map)

$japan_latlong = [34.9861909, 135.7600629];
$japan_marker = L.marker($japan_latlong).addTo(map)

$maldives_latlong = [2.91134, 72.86611];
$maldives_marker = L.marker($maldives_latlong).addTo(map)

$singapore_latlong = [1.2809, 103.8649];
$singapore_marker = L.marker($singapore_latlong).addTo(map)

$amsterdam_latlong = [52.3547, 4.9040];
$amsterdam_marker = L.marker($amsterdam_latlong).addTo(map)

$dubai_latlong = [25.1151, 55.1373];
$dubai_marker = L.marker($dubai_latlong).addTo(map)

$brazil_latlong = [2-22.9145,-43.4477];
$brazil_marker = L.marker($brazil_latlong).addTo(map)

$indonesia_latlong = [46.21887, 6.13901];
$indonesia_marker = L.marker($indonesia_latlong).addTo(map)

$hawaii_latlong = [22.0506, -159.5401];
$hawaii_marker = L.marker($indonesia_latlong).addTo(map)

$canada_latlong = [45.2504,-75.8011];
$canada_marker = L.marker($canada_latlong).addTo(map)

var latlngs = [
    [45.2504, -75.8011],
    [69.3312, 17.4930],
    [46.21887, 6.13901],
    [25.1151, 55.1373],
    [2-22.9145, -43.4477]
];

var polyline = L.polyline(latlngs, {color: 'red'}).addTo(map);

L.circle([1.2809, 103.8649], {radius: 800}).addTo(map);

var latlngs = [[52.3547, 4.9040],[69.3312, 17.4930],[34.9861909, 135.7600629],[1.2809, 103.8649]];

var polygon = L.polygon(latlngs, {color: 'blue'}).addTo(map);

// zoom the map to the polygon
map.fitBounds(polygon.getBounds());

var latlngs = [[25.1151, 55.1373],[2.91134, 72.86611],[15.5756, 121.1076]];

var polygon = L.polygon(latlngs, {color: 'green'}).addTo(map);

// zoom the map to the polygon
map.fitBounds(polygon.getBounds());
