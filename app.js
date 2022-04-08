if('serviceWorker' in navigator){
    navigator.serviceWorker.register('https://kartik11-dotcom.github.io/JB/sw.js')
    .then((reg) => console.log('service worker registered', reg))
    .catch((err) => console.log('service worker not registered', err))
}
