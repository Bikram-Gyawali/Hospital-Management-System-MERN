// self.addEventListener("push", (event) => {
//   const data = event.data.json();
//   console.log("New notification", data);
//   const options = {
//     body: data.body,
//   };
//   event.waitUntil(self.registration.showNotification(data.title, options));
// });

console.log("Service worker loaded");

self.addEventListener("push", (e) => {
  const data = e.data.json();
  console.log("Push received");
  self.registration.showNotification(data.title, {
    body: "Deloitte Digital",
    icon:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Fnotification-icon-bell-alarm-alert-vector-25357494&psig=AOvVaw2TDI9_9uJ7wdFOf-_7wDnM&ust=1582674929550000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIDh99ux6-cCFQAAAAAdAAAAABAD",
  });
});
