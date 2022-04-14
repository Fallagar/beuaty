    mapboxgl.accessToken = mapToken;
    const map = new mapboxgl.Map({
    container: "map", 
    style: "mapbox://styles/mapbox/dark-v10", 
    center: coordinates.geometry.coordinates, 
    zoom: 3
    });
    map.addControl(new mapboxgl.NavigationControl());
const marker1 = new mapboxgl.Marker()
    .setLngLat(coordinates.geometry.coordinates)
    .addTo(map);
    
{/* <img src="${coordinates.images[0].url}" style="padding: 0;" height="101px" width="180px" alt=""></img> */}