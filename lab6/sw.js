if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("serviceworker.js")
        .then((reg) => console.log("Service Worker Registered!", reg))
        .catch((err) => console.log("Service Worker registration failed:", err)
        );
    });
}

fetch("data.json")
    .then((res) => res.json())
    .then((stock) => {
        let table = `<table border="black">
                <tr>
                    <th>Company</th>
                    <th>Description</th>
                    <th>Initial Price</th>
                    <th>Price in 2007</th>
                    <th>Symbol</th>
                </tr>`;

        stock.forEach((item) => {
          table += `<tr>
                      <td>${item.company}</td>
                      <td>${item.description}</td>
                      <td>$${item.initial_price}</td>
                      <td>$${item.price_2007}</td>
                      <td>${item.symbol}</td>
                  </tr>`;
        });

      table += "</table>";
      document.getElementById("stock").innerHTML = table;
    })
    .catch((err) => {
        document.getElementById("stock").innerHTML = "Failed to load data. You might be offline without a cached version.";
        console.error(err);
    }
);