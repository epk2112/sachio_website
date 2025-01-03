// Initialize the map
const map = L.map('map').setView([-6.3690, 34.8888], 6); // Centered on Tanzania

// Move the zoom control to the top-right
map.zoomControl.setPosition('topright');

// Add a base tile layer (you can use OpenStreetMap or other tile providers)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Load GeoJSON data for Tanzania regions and districts
fetch('tanzania-regions-districts.geojson') // Replace with the path to your GeoJSON file
  .then(response => response.json())
  .then(data => {
    // Add GeoJSON layer to the map
    L.geoJSON(data, {
      style: {
        color: '#333',
        weight: 1,
        fillColor: '#ff7800',
        fillOpacity: 0.5
      },
      onEachFeature: function (feature, layer) {
        // Add popup with region/district name
        layer.bindPopup(`<b>${feature.properties.name}</b>`);
      }
    }).addTo(map);
  })
  .catch(error => console.error('Error loading GeoJSON data:', error));

// Define a custom icon
const orangeCustomIcon = L.icon({
  iconUrl: 'assets/map_pointers/orange_map_pointer.png', 
  iconSize: [31, 41], 
  iconAnchor: [15, 41],
});

const redCustomIcon = L.icon({
  iconUrl: 'assets/map_pointers/red_map_pointer.png', 
  iconSize: [31, 41], 
  iconAnchor: [15, 41],
});

const pinkCustomIcon = L.icon({
  iconUrl: 'assets/map_pointers/pink_map_pointer.png', 
  iconSize: [31, 41], 
  iconAnchor: [15, 41],
});

// Add markers for cities
const darEsSalaam = L.marker([-6.7924, 39.2083], { icon: orangeCustomIcon }).addTo(map); // Dar es Salaam
const dodoma = L.marker([-6.1629, 35.7516], { icon: redCustomIcon }).addTo(map); // Dodoma
const arusha = L.marker([-3.3869, 36.6830], { icon: pinkCustomIcon }).addTo(map); // Arusha
const mikocheni = L.marker([-6.7833, 39.2667], { icon: pinkCustomIcon }).addTo(map); // Mikocheni
const mbagala = L.marker([-6.8667, 39.2667], { icon: redCustomIcon }).addTo(map); // Mbagala
const mwanza = L.marker([-2.5167, 32.9000], { icon: pinkCustomIcon }).addTo(map); // Mwanza

// Add popups to the markers
darEsSalaam.bindPopup('<b>Dar es Salaam</b><br>The largest city in Tanzania.');
dodoma.bindPopup('<b>Dodoma</b><br>The capital city of Tanzania.');
arusha.bindPopup('<b>Arusha</b><br>The gateway to Mount Kilimanjaro and Serengeti.');
mwanza.bindPopup('<b>Mwanza</b><br>A major port city on Lake Victoria.');
mikocheni.bindPopup('<b>Mikocheni</b><br>A suburban area in Dar es Salaam.');
mbagala.bindPopup('<b>Mbagala</b><br>A residential area in Dar es Salaam.');

// Add interactivity: Zoom to marker's location when clicked
darEsSalaam.on('click', function () {
  map.setView([-6.7924, 39.2083], 10); // Zoom to Dar es Salaam
});

dodoma.on('click', function () {
  map.setView([-6.1629, 35.7516], 10); // Zoom to Dodoma
});

arusha.on('click', function () {
  map.setView([-3.3869, 36.6830], 10); // Zoom to Arusha
});

mwanza.on('click', function () {
  map.setView([-2.5167, 32.9000], 10); // Zoom to Mwanza
});

mikocheni.on('click', function () {
  map.setView([-6.7833, 39.2667], 12); // Zoom to Mikocheni
});

mbagala.on('click', function () {
  map.setView([-6.8667, 39.2667], 12); // Zoom to Mbagala
});

// Style popups using CSS (add this to your HTML file or a separate CSS file)
const style = document.createElement('style');
style.innerHTML = `
  .leaflet-popup-content {
    font-family: Arial, sans-serif;
    font-size: 14px;
    color: #333;
  }
  .leaflet-popup-content b {
    color: #ff7800;
  }
`;
document.head.appendChild(style);