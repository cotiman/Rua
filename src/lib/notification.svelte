
<script>
import { onMount } from "svelte";
const PublicKey = 'BEEzgTtA-_x6AYisDhdhywoFOqRaS3HhQ8r82f3eZcWgbqHoD55ivSb4tRzknhConEsE6veFUpdtGf-72qteBiM'

onMount(()=>{
    if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/service-worker.js')
                .then((registration) => {
                    console.log('Service Worker registrado con éxito:', registration);
                })
                .catch((error) => {
                    console.error('Error al registrar el Service Worker:', error);
                });
        }

        Notification.requestPermission().then((permission) => {
            if (permission === 'granted') {
                console.log('Permiso de notificaciones concedido');
            } else {
                console.log('Permiso de notificaciones denegado');
            }
        });
})

function subscribeUser() {

    

        navigator.serviceWorker.ready.then((registration) => {
            const options = {
                userVisibleOnly: true,
                applicationServerKey: urlBase64ToUint8Array(PublicKey)
            };
    
            registration.pushManager.subscribe(options).then((subscription) => {
                console.log('Suscripción a Push realizada con éxito:', subscription);

                // Enviar la suscripción al servidor
                fetch('/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(subscription)
                }).then(response => {
                    if (!response.ok) {
                        throw new Error('Error en la respuesta del servidor');
                    }
                    return response.json();
                }).then(data => {
                    console.log('Respuesta del servidor:', data);
                }).catch((error) => {
                    console.error('Error al enviar la suscripción al servidor:', error);
                });
            }).catch((error) => {
                console.error('Error al suscribirse a Push:', error);
            });
        })
    }

    // @ts-ignore
    function urlBase64ToUint8Array(base64String) {
        const padding = '='.repeat((4 - base64String.length % 4) % 4);
        const base64 = (base64String + padding)
            .replace(/\-/g, '+')
            .replace(/_/g, '/');

        const rawData = window.atob(base64);
        const outputArray = new Uint8Array(rawData.length);

        for (let i = 0; i < rawData.length; ++i) {
            outputArray[i] = rawData.charCodeAt(i);
        }

        return outputArray;
    }


</script>

<button on:click={subscribeUser} on:touchstart ={subscribeUser}>Send Notification</button>

