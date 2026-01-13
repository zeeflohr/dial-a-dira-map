mapboxgl.accessToken = 'pk.eyJ1IjoiZmxvaHIiLCJhIjoiY21nbjVnM204MWhibDJycXF0a284NGV6NiJ9.3ZEJ3wOlf8qN2W9KgUh3VA';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v12',
  center: [-0.1276, 51.5072], // London center
  zoom: 12,
  pitch: 60,
  bearing: -17.6,
  antialias: true
});

map.on('load', () => {
  map.flyTo({
    center: [-0.0877, 51.5155], // Example target
    zoom: 15,
    speed: 0.8,
    curve: 1.5,
    easing: t => t
  });
});
