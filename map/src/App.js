// App.js
import React from 'react';
import Map from './Map';
import styles from "./App.css";


const App = () => {
 return (
   <div>
     <h1 className = {styles.title}> Thompson Library - Floor 3</h1>
     <Map />
   </div>
 );
};


export default App;
