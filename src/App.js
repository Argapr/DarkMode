// src/index.js atau src/App.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from 'firebase/app';
import 'firebase/database'; // Import modul yang diperlukan (misalnya, Realtime Database)

const firebaseConfig = {
  // ... Isi dengan konfigurasi Firebase Anda ...
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

export default App;
