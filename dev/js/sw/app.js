if ('serviceWorker' in navigator && 'PushManager' in window) {
// console.log('Service Worker and Push is supported');
  navigator.serviceWorker
    .register('./service-worker.js', { scope: './' })
    .then(registration => {
      // console.log("SW registered");
    })
    .catch(err => {
      // console.log("SW failed registration", err);
    })

} else {
  // console.warn('Push messaging is not supported');
  pushButton.textContent = 'Push Not Supported';
}
