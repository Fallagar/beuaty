    mapboxgl.accessToken = mapToken;
    const map = new mapboxgl.Map({
    container: "map", 
    style: "mapbox://styles/mapbox/streets-v11", 
    center: coordinates.geometry.coordinates, 
    zoom: 7
    });
const marker1 = new mapboxgl.Marker()
    .setLngLat(coordinates.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({ offset: 25 })
            .setHTML(
            `<h3>${coordinates.title}</h3><p>${coordinates.location}</p>`
        )
    )
    .addTo(map);
    
