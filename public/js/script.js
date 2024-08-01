// const socket = io();

// if(navigator.geolocation){
//     navigator.geolocation.watchPosition((position)=>{
//        const {latitude ,longitude} = position.coords; 
//        socket.emit("send-location",{latitude,longitude});
//     }, (error)=>{
//         console.error(error);
//     },

//     {
//         enableHighAccuracy : true,
//         timeout:5000,
//         maximumAge:0
//     }
//   );
// }

// const map = L.map("map").setView([0,0],50);

// L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{
//     attribution:"TVM Map Services"
// }).addTo(map);

// const markers = {};

// socket.on("receive-location",(data)=>{
//     const {id,latitude,longitude} = data;
//     map.setView([latitude,longitude],16);
//     if(markers[id]){
//         markers[id].steLatLng([latitude,longitude]).addTo(map);
//     }
//     else{
//         markers[id] = L.marker([latitude,longitude]).addTo(map);
//     }
// })

// socket.on("user-disconnected",(id)=>{
//     if(markers[id]){
//         map.removeLayer(markers[id]);
//         delete markers[id];
//     }
// })




// --------------------------------------------------------------------------------------
                            // @ ways 2

// if we need special location of coordinates
// const coordinates = [
//     [23.177201, 79.947818],
//     [23.1771087, 80.94790],
   
// ];


// const customIcon = L.icon({
//     iconUrl: 'http://pluspng.com/img-png/user-png-icon-young-user-icon-2400.png', // URL to your custom image
//     iconSize: [32, 32], // Size of the icon [width, height]
//     iconAnchor: [16, 32], // Anchor point of the icon [x, y]
//     popupAnchor: [0, -32] // Anchor point of the popup relative to the icon
// });

// const map = L.map("map").setView([0,0], 16);


// L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{
//     attribution: "TVM Map Services"
// }).addTo(map);


// for (let i = 0; i < coordinates.length; i++) {
//     const coord = coordinates[i];
//     L.marker([coord[0], coord[1]],{ icon: customIcon }).addTo(map);
// }

// L.Routing.control({
//     waypoints: coordinates.map(coord => L.latLng(coord[0], coord[1])),
//     routeWhileDragging: true
// }).addTo(map);





// ---------------------------------------------------------------------------------
                                // ways 3 


// const socket = io();

// if (navigator.geolocation) {
//     navigator.geolocation.watchPosition((position) => {
//         const { latitude, longitude } = position.coords;
//         socket.emit("send-location", { latitude, longitude });
//     }, (error) => {
//         console.error(error);
//     }, {
//         enableHighAccuracy: true,
//         timeout: 5000,
//         maximumAge: 0
//     });
// }

// const map = L.map("map").setView([0, 0], 10); // Adjust initial zoom level

// L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
//     attribution: "TVM Map Services"
// }).addTo(map);

// // Define a custom icon
// const customIcon = L.icon({
//     iconUrl: 'https://cdn1.vectorstock.com/i/1000x1000/36/00/delivery-man-icon-delivery-and-shipping-vector-9723600.jpg', // URL to your custom image
//     iconSize: [32, 32], // Size of the icon [width, height]
//     iconAnchor: [16, 32], // Anchor point of the icon [x, y]
//     popupAnchor: [0, -32] // Anchor point of the popup relative to the icon
// });

// const markers = {};

// socket.on("receive-location", (data) => {
//     const { id, latitude, longitude } = data;
//     map.setView([latitude, longitude], 16); // Center map on new location
//     if (markers[id]) {
//         // Update existing marker's position
//         markers[id].setLatLng([latitude, longitude]);
//     } else {
//         // Create and add new marker with custom icon
//         markers[id] = L.marker([latitude, longitude], { icon: customIcon }).addTo(map);
//     }
// });

// socket.on("user-disconnected", (id) => {
//     if (markers[id]) {
//         map.removeLayer(markers[id]);
//         delete markers[id];
//     }
// });

// ????????????????????????????????????????????????????????????????????????????
 // task ---- Working  -  ponits and istance final
//  const coordinates = [
//     [23.176901, 79.946318],
//     [23.177201, 79.947818],
//     [23.1771087, 80.94790],
//     [23.178001, 79.948818]
// ];

// const customIcon = L.icon({
//     iconUrl: 'http://pluspng.com/img-png/user-png-icon-young-user-icon-2400.png', // URL to your custom image
//     iconSize: [32, 32], // Size of the icon [width, height]
//     iconAnchor: [16, 32], // Anchor point of the icon [x, y]
//     popupAnchor: [0, -32] // Anchor point of the popup relative to the icon
// });

// const map = L.map("map").setView([23.177201, 79.947818], 13);

// L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
//     attribution: "TVM Map Services"
// }).addTo(map);

// function calculateDistance(point1, point2) {
//     const latlng1 = L.latLng(point1[0], point1[1]);
//     const latlng2 = L.latLng(point2[0], point2[1]);
//     return latlng1.distanceTo(latlng2); // distance in meters
// }

// function findNearestNeighborPath(start, points) {
//     const path = [start];
//     let currentPoint = start;
//     let remainingPoints = points.slice();

//     while (remainingPoints.length > 0) {
//         let nearestPoint = null;
//         let nearestDistance = Infinity;

//         for (let i = 0; i < remainingPoints.length; i++) {
//             const distance = calculateDistance(currentPoint, remainingPoints[i]);
//             if (distance < nearestDistance) {
//                 nearestDistance = distance;
//                 nearestPoint = remainingPoints[i];
//             }
//         }

//         path.push(nearestPoint);
//         currentPoint = nearestPoint;
//         remainingPoints = remainingPoints.filter(point => point !== nearestPoint);
//     }

//     return path;
// }

// // Get the path including the starting point
// const nearestNeighborPath = findNearestNeighborPath(coordinates[0], coordinates.slice(1));

// // Create a map to store point numbers
// const pointNumberMap = {};
// nearestNeighborPath.forEach((coord, index) => {
//     pointNumberMap[coord.join(',')] = index + 1;
// });

// // Add markers to the map with numbered labels
// nearestNeighborPath.forEach(coord => {
//     const marker = L.marker([coord[0], coord[1]], { icon: customIcon }).addTo(map);
//     marker.bindPopup(`Point ${pointNumberMap[coord.join(',')]}`).openPopup();
// });

// // Add routing
// const routeControl = L.Routing.control({
//     waypoints: nearestNeighborPath.map(coord => L.latLng(coord[0], coord[1])),
//     routeWhileDragging: true,
//     createMarker: function() { return null; } // Disable default markers
// }).addTo(map);

// // Handle clicks on markers
// let lastClickedPoint = null;

// function onMarkerClick(e) {
//     const latlng = e.latlng;
//     const coordKey = [latlng.lat, latlng.lng].join(',');
//     const pointNumber = pointNumberMap[coordKey];

//     if (lastClickedPoint) {
//         const distance = calculateDistance(lastClickedPoint, [latlng.lat, latlng.lng]);
//         L.popup()
//             .setLatLng(latlng)
//             .setContent(`Distance from last point: ${(distance / 1000).toFixed(2)} km<br>Point number: ${pointNumber}`)
//             .openOn(map);
//     } else {
//         L.popup()
//             .setLatLng(latlng)
//             .setContent(`Point number: ${pointNumber}`)
//             .openOn(map);
//     }

//     lastClickedPoint = [latlng.lat, latlng.lng];
// }

// // Add event listener to each marker
// nearestNeighborPath.forEach(coord => {
//     const marker = L.marker([coord[0], coord[1]], { icon: customIcon }).addTo(map);
//     marker.on('click', onMarkerClick);
// });

/////////////////////////////////////////////////////////////////////////////////////

// const coordinates = [
//     // [23.177201, 79.947818],
//     [23.1773992, 79.9493355],
//     [23.1767065, 79.947574],
//     [23.1771087, 79.94763],
//     [23.1774369, 79.9494952],
//     [23.1773983, 79.9484039],
//     [23.1776301, 79.9498281],
//     [23.1773682, 79.9491036],
//     [23.1773767, 79.9490966],
//     [23.1777116, 79.9502423],
//     [23.1769085, 79.9490672]
// ];

// const customIcon = L.icon({
//     iconUrl: 'http://pluspng.com/img-png/user-png-icon-young-user-icon-2400.png', // URL to your custom image
//     iconSize: [32, 32], // Size of the icon [width, height]
//     iconAnchor: [16, 32], // Anchor point of the icon [x, y]
//     popupAnchor: [0, -32] // Anchor point of the popup relative to the icon
// });

// const map = L.map("map").setView([23.177201, 79.947818], 13);

// L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
//     attribution: "TVM Map Services"
// }).addTo(map);

// function calculateDistance(point1, point2) {
//     const latlng1 = L.latLng(point1[0], point1[1]);
//     const latlng2 = L.latLng(point2[0], point2[1]);
//     return latlng1.distanceTo(latlng2); // distance in meters
// }

// function findNearestNeighborPath(start, points) {
//     const path = [start];
//     let currentPoint = start;
//     let remainingPoints = points.slice();

//     while (remainingPoints.length > 0) {
//         let nearestPoint = null;
//         let nearestDistance = Infinity;

//         for (let i = 0; i < remainingPoints.length; i++) {
//             const distance = calculateDistance(currentPoint, remainingPoints[i]);
//             if (distance < nearestDistance) {
//                 nearestDistance = distance;
//                 nearestPoint = remainingPoints[i];
//             }
//         }

//         path.push(nearestPoint);
//         currentPoint = nearestPoint;
//         remainingPoints = remainingPoints.filter(point => point !== nearestPoint);
//     }

//     return path;
// }

// // Get the path including the starting point
// const nearestNeighborPath = findNearestNeighborPath(coordinates[0], coordinates.slice(1));

// // Create a map to store point numbers
// const pointNumberMap = {};
// nearestNeighborPath.forEach((coord, index) => {
//     pointNumberMap[coord.join(',')] = index + 1;
// });

// // Add markers to the map with numbered labels and distances
// nearestNeighborPath.forEach((coord, index) => {
//     const marker = L.marker([coord[0], coord[1]], { icon: customIcon }).addTo(map);
//     const pointNumber = pointNumberMap[coord.join(',')];
//     let popupContent = `Point ${pointNumber}`;

//     // Add distance info if it's not the first point
//     if (index > 0) {
//         const previousCoord = nearestNeighborPath[index - 1];
//         const distance = calculateDistance(previousCoord, coord) / 1000; // distance in kilometers
//         popupContent += `<br>Distance from previous point: ${distance.toFixed(2)} km`;
//     }

//     marker.bindPopup(popupContent).openPopup();
// });

// // Add routing
// const routeControl = L.Routing.control({
//     waypoints: nearestNeighborPath.map(coord => L.latLng(coord[0], coord[1])),
//     routeWhileDragging: true,
//     createMarker: function() { return null; } // Disable default markers
// }).addTo(map);


///////////////////////////////////////////////////////////////////////

const coordinates = [
    [23.176901, 79.946318],
    [23.177201, 79.947818],
    [23.1771087, 80.94790],
    [23.178001, 79.948818]
];

const customIcon = L.icon({
    iconUrl: 'http://pluspng.com/img-png/user-png-icon-young-user-icon-2400.png', // URL to your custom image
    iconSize: [32, 32], // Size of the icon [width, height]
    iconAnchor: [16, 32], // Anchor point of the icon [x, y]
    popupAnchor: [0, -32] // Anchor point of the popup relative to the icon
});

const map = L.map("map").setView([23.177201, 79.947818], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "TVM Map Services"
}).addTo(map);

function calculateDistance(point1, point2) {
    const latlng1 = L.latLng(point1[0], point1[1]);
    const latlng2 = L.latLng(point2[0], point2[1]);
    return latlng1.distanceTo(latlng2); // distance in meters
}

function findNearestNeighborPath(start, points) {
    const path = [start];
    let currentPoint = start;
    let remainingPoints = points.slice();

    while (remainingPoints.length > 0) {
        let nearestPoint = null;
        let nearestDistance = Infinity;

        for (let i = 0; i < remainingPoints.length; i++) {
            const distance = calculateDistance(currentPoint, remainingPoints[i]);
            if (distance < nearestDistance) {
                nearestDistance = distance;
                nearestPoint = remainingPoints[i];
            }
        }

        path.push(nearestPoint);
        currentPoint = nearestPoint;
        remainingPoints = remainingPoints.filter(point => point !== nearestPoint);
    }

    return path;
}

function onLocationFound(e) {
    const currentLocation = [e.latlng.lat, e.latlng.lng];

    // Debug: Log current location to console
    console.log("Current Location: ", currentLocation);

    // Add a marker for the current location
    const currentLocationMarker = L.marker(currentLocation, { icon: customIcon }).addTo(map)
        .bindPopup('You are here!')
        .openPopup();

    // Get the path including the starting point (current location)
    const nearestNeighborPath = findNearestNeighborPath(currentLocation, coordinates);

    // Create a map to store point numbers
    const pointNumberMap = {};
    nearestNeighborPath.forEach((coord, index) => {
        pointNumberMap[coord.join(',')] = index + 1;
    });

    // Add markers to the map with numbered labels
    const markers = nearestNeighborPath.map(coord => {
        const marker = L.marker([coord[0], coord[1]], { icon: customIcon }).addTo(map);
        marker.bindPopup(`Point ${pointNumberMap[coord.join(',')]}`).openPopup();
        return marker;
    });

    // Add routing
    const routeControl = L.Routing.control({
        waypoints: nearestNeighborPath.map(coord => L.latLng(coord[0], coord[1])),
        routeWhileDragging: true,
        createMarker: function() { return null; } // Disable default markers
    }).addTo(map);

    // Handle clicks on markers
    let lastClickedPoint = null;

    function onMarkerClick(e) {
        const latlng = e.latlng;
        const coordKey = [latlng.lat, latlng.lng].join(',');
        const pointNumber = pointNumberMap[coordKey];

        if (lastClickedPoint) {
            const distance = calculateDistance(lastClickedPoint, [latlng.lat, latlng.lng]);
            L.popup()
                .setLatLng(latlng)
                .setContent(`Distance from last point: ${(distance / 1000).toFixed(2)} km<br>Point number: ${pointNumber}`)
                .openOn(map);
        } else {
            L.popup()
                .setLatLng(latlng)
                .setContent(`Point number: ${pointNumber}`)
                .openOn(map);
        }

        lastClickedPoint = [latlng.lat, latlng.lng];
    }

    // Add event listener to each marker
    markers.forEach(marker => {
        marker.on('click', onMarkerClick);
    });

    // Fit the map view to the bounds of all markers
    const bounds = L.latLngBounds(nearestNeighborPath.map(coord => L.latLng(coord[0], coord[1])));
    bounds.extend(currentLocation); // Include current location in the bounds
    map.fitBounds(bounds);
}

function onLocationError(e) {
    alert(`Error: ${e.message}. Please ensure location services are enabled and permission is granted.`);
}

// Geolocation API to get current position
map.on('locationfound', onLocationFound);
map.on('locationerror', onLocationError);

// Request location with high accuracy
map.locate({ setView: true, maxZoom: 16, enableHighAccuracy: true });
