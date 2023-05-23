const express = require("express");
const app = express();
const admin = require("firebase-admin");
const dataRoutes = require("./routes/dataRoutes");

// Initialize Firebase Admin SDK
const serviceAccount = require("./embedded-swa-firebase-adminsdk-thxm8-14050ccf70.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://embedded-swa-default-rtdb.firebaseio.com", // Replace with your Firebase project's URL
});

// Start the server
const port = 3000; // Replace with your desired port number
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Server run correctly.");
});

app.use("/data", dataRoutes);
