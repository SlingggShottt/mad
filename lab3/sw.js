if("serviceWorker" in navigator){ 
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("/serviceworker.js")
        .then((registration) => {
            console.log("Service Worker registered with scope : ", registeration.scope)
        })
        .catch((error) => {
            console.log("Service worker failed.", error)
        })
    })
}