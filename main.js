mapboxgl.accessToken = 'pk.eyJ1IjoiZmxvaHIiLCJhIjoiY21nbjVnM204MWhibDJycXF0a284NGV6NiJ9.3ZEJ3wOlf8qN2W9KgUh3VA';

// Limit worker threads (prevents tile overload)
mapboxgl.workerCount = 2;

// Create the map – London only
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v11',
    center: [-0.1276, 51.5074], // London
    zoom: 10.5,
    pitch: 45,
    bearing: -17,
    antialias: true
});

// Optional: lock map to Greater London (prevents drifting)
const londonBounds = [
    [-0.55, 51.28], // Southwest
    [0.30, 51.72]   // Northeast
];

map.setMaxBounds(londonBounds);

// Add controls
map.addControl(new mapboxgl.NavigationControl(), 'top-right');

// When map loads
map.on('load', () => {

    // Smooth intro zoom (no flying)
    map.easeTo({
        zoom: 12,
        duration: 2500,
        easing: t => t
    });

    // Add 3D buildings (London only)
    map.addLayer({
        id: '3d-buildings',
        source: 'composite',
        'source-layer': 'building',
        filter: ['==', 'extrude', 'true'],
        type: 'fill-extrusion',
        minzoom: 11,
        paint: {
            'fill-extrusion-color': '#b0b0b0',
            'fill-extrusion-height': ['get', 'height'],
            'fill-extrusion-base': ['get', 'min_height'],
            'fill-extrusion-opacity': 0.6
        }
    });
});

// Optional: disable excessive zoom (keeps performance smooth)
map.setMinZoom(9);
map.setMaxZoom(15);
