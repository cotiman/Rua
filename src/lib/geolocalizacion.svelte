<script>
  import { onMount  } from "svelte";
  import { updatePositionStore,updatePositionTargetStore,updatePathStore } from "../store/functions";

  // @ts-ignore
  let map;
  // @ts-ignore
  let mapContainer;
  // @ts-ignore
  let marker;
  // @ts-ignore
  let markerTarget;
    // @ts-ignore
  let directionsService;
  // @ts-ignore
  let bluePolyline;


  onMount(async () => {
    if (typeof window !== "undefined") {
      const { Loader } = await import("@googlemaps/js-api-loader");

      const loader = new Loader({
        apiKey: "AIzaSyDWMDkziMCr0A4eZ5nNVn55JpT8lzU7sRo", // Reemplaza con tu clave API
        version: "weekly", // Versión de la API
        //  libraries: ['places'], // Bibliotecas adicionales (opcional)
        // language: 'es', // Idioma (opcional)
        // region: 'US' // Región (opcional)
      });

      loader.load().then(() => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
              const location = { lat: latitude, lng:longitude};
              initializeMap(location);
            },
            () => {
              console.error("Error al obtener la geolocalización.");
            }
          );
        } else {
          console.error("Geolocalización no es soportada por este navegador.");
        }
      });
    }
  });

  // @ts-ignore
  function initializeMap(location) {
    
    const icon = {
      url: "/truck.svg", // Reemplaza con la URL de tu imagen
      // @ts-ignore
      scaledSize: new google.maps.Size(30, 30), // Ajusta el tamaño de la imagen
      // @ts-ignore
     // origin: new google.maps.Point(0, 0), // El origen de la imagen (opcional)
      // @ts-ignore
     // anchor: new google.maps.Point(25, 25) // El punto de anclaje de la imagen (opcional)
    };
    
    // @ts-ignore
    map = new google.maps.Map(mapContainer, {
      center: location,
      zoom: 12,
    });
    // @ts-ignore
    marker = new google.maps.Marker({
      position: location,
      map: map,
      icon: icon,
    });
    // @ts-ignore
    markerTarget = new google.maps.Marker({
      position: location,
      map: map,
    });
// @ts-ignore
    directionsService = new google.maps.DirectionsService();

     // @ts-ignore
    bluePolyline = new google.maps.Polyline({
       // @ts-ignore
   //   path: [currentPosition],
      geodesic: true,
      strokeColor: '#0000FF',
      strokeOpacity: 1.0,
      strokeWeight: 2,
      map: map
    });

  }

  // @ts-ignore
  export function updatePosition(lat, lng) {

     // @ts-ignore
    if (map && marker) {
    const startPosition = marker.getPosition();
     // @ts-ignore
      const endPosition = new google.maps.LatLng(lat, lng);
       // @ts-ignore
      animateMarker(startPosition, endPosition, 1000); // Duración de 1 segundo
    }

  }
 // @ts-ignore
  export function updatePositionTarget(lat, lng){
    // @ts-ignore
    if (map && markerTarget) {
       // @ts-ignore
      markerTarget.setPosition({lat,lng});
    }
  }

// @ts-ignore
  function animateMarker(startPosition, endPosition, duration) {
    const start = performance.now();

    function animate() {
      const now = performance.now();
      const progress = (now - start) / duration;
      if (progress < 1) {
        const lat = startPosition.lat() + (endPosition.lat() - startPosition.lat()) * progress;
        const lng = startPosition.lng() + (endPosition.lng() - startPosition.lng()) * progress;
        // @ts-ignore
        const position = new google.maps.LatLng(lat, lng);
        // @ts-ignore
        marker.setPosition(position);
        // @ts-ignore
        map.setCenter(position);
        requestAnimationFrame(animate);
      } else {
        // @ts-ignore
        marker.setPosition(endPosition);
        // @ts-ignore
        map.setCenter(endPosition);
        // @ts-ignore
       // updatePolylines(endPosition)
      }
    }
    requestAnimationFrame(animate);
  }
// @ts-ignore
  function updatePath(endPosition) {
  // @ts-ignore
    if(directionsService && marker){
      // @ts-ignore
      const newRequest = {
         // @ts-ignore
        origin:marker.getPosition(),
        destination:endPosition,
         // @ts-ignore
        travelMode: google.maps.TravelMode.DRIVING,
      }
       // @ts-ignore
      directionsService.route(newRequest, (result, status) => {
         // @ts-ignore
        if (status === google.maps.DirectionsStatus.OK) {
          const bluePath  = result.routes[0].overview_path;
           // @ts-ignore
           bluePolyline.setPath(bluePath);
        }
      });

    }
  }

   // @ts-ignore
  updatePositionStore.set(updatePosition);
    // @ts-ignore
  updatePositionTargetStore.set(updatePositionTarget);
// @ts-ignore
  updatePathStore.set(updatePath)
</script>

<div bind:this={mapContainer} class="map"></div>

<style>
  .map {
    width: 800px;
    height: 600px;
  }
</style>
