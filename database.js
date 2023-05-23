const firebaseConfig = {
    apiKey: "AIzaSyD8H9sbEWTTK0ziVUIA4cjaWKBojxAuEDk",
    authDomain: "coolabah-insurance-b9d98.firebaseapp.com",
    databaseURL: "https://coolabah-insurance-b9d98-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "coolabah-insurance-b9d98",
    storageBucket: "coolabah-insurance-b9d98.appspot.com",
    messagingSenderId: "661469477742",
    appId: "1:661469477742:web:80b7357894e61cbd135f7f"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// reference my database
const coolabahDB = firebase.database().ref('answers')

