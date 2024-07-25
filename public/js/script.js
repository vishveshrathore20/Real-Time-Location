const socket = io();

if(navigator.geolocation){
    navigator.geolocation.watchPosition((position)=>{
       const {latitude ,longitude} = position.coords; 
       socket.emit("send-location",{latitude,longitude});
    }, (error)=>{
        console.error(error);
    },

    {
        enableHighAccuracy : true,
        timeout:5000,
        maximumAge:0
    }
  );
}

const map = L.map("map").setView([0,0],50);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{
    attribution:"TVM Map Services"
}).addTo(map);

const markers = {};

socket.on("receive-location",(data)=>{
    const {id,latitude,longitude} = data;
    map.setView([latitude,longitude],16);
    if(markers[id]){
        markers[id].steLatLng([latitude,longitude]).addTo(map);
    }
    else{
        markers[id] = L.marker([latitude,longitude]).addTo(map);
    }
})

socket.on("user-disconnected",(id)=>{
    if(markers[id]){
        map.removeLayer(markers[id]);
        delete markers[id];
    }
})




// --------------------------------------------------------------------------------------
                            // @ ways 2

// if we need special location of coordinates
// const coordinates = [
//     [23.177201, 79.947818],
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

// const map = L.map("map").setView([0,0], 16);


// L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{
//     attribution: "TVM Map Services"
// }).addTo(map);


// for (let i = 0; i < coordinates.length; i++) {
//     const coord = coordinates[i];
//     L.marker([coord[0], coord[1]],{ icon: customIcon }).addTo(map);
// }







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

