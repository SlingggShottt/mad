if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('serviceworker.js')
        .then((reg) => console.log("Service Worker Registered!", reg))
        .catch((err) => console.log("Service Worker Registration Failed:", err));
} else {
    console.log('No service worker support in this browser');
}