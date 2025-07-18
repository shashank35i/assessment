const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

exports.getFirebaseConfig = functions.https.onRequest((req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  const firebaseConfig = {
    apiKey: process.env.APP_API_KEY,
    authDomain: process.env.APP_AUTH_DOMAIN,
    projectId: process.env.APP_PROJECT_ID,
    storageBucket: process.env.APP_STORAGE_BUCKET,
    messagingSenderId: process.env.APP_MESSAGING_SENDER_ID,
    appId: process.env.APP_APP_ID,
    measurementId: process.env.APP_MEASUREMENT_ID,
  };
  res.json(firebaseConfig);
});
