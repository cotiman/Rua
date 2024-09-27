self.addEventListener('push', function(event) {

    let data =  event.data.json()

 

    const options = {
        body: data.message,
       // icon: '/icon.png',
       // badge: '/badge.png'
    };

    event.waitUntil(
        self.registration.showNotification(data.title, options)
    );
});

self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(
        clients.openWindow('/')
    );
});