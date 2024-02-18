// Map.js
import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css'; // Ensure you import the CSS


const Map = () => {
 const mapContainer = useRef(null);


 useEffect(() => {
   mapboxgl.accessToken = 'pk.eyJ1Ijoibml0aHlhazA1IiwiYSI6ImNsc3FpdWVqbTEyYW0ya3BwOG15NzcwYjgifQ.YXEu2ZFbOSyVFv9JmWSHMg';


   const map = new mapboxgl.Map({
     container: mapContainer.current,
     style: 'mapbox://styles/nithyak05/clsqwives04lc01pb3o3w3s57',
     center: [-83.01485, 39.99925],
     zoom: 18.9,
   });


   // TABLE 1 FULL
   const t1cord = [
       [-83.015141,39.999038],
         [-83.015088,39.999044],
         [-83.015081,39.999009],
         [-83.015134,39.999002],
         [-83.015141,39.999038]
   ];


   map.on('load', () => {
     map.addLayer({
       id: 'table1',
       type: 'fill',
       source: {
         type: 'geojson',
         data: {
           type: 'Feature',
           geometry: {
             type: 'Polygon',
             coordinates: [t1cord],
           },
         },
       },
       layout: {},
       paint: {
         'fill-color': '#e01515',
         'fill-opacity': 1,
       },
     });
   });
   // TABLE 2 FULL
   const t2cord = [
       [-83.015155,39.999106],
         [-83.015103,39.999113],
         [-83.015096,39.999077],
         [-83.015148,39.999071],
         [-83.015155,39.999106]
   ];


   map.on('load', () => {
     map.addLayer({
       id: 'table2',
       type: 'fill',
       source: {
         type: 'geojson',
         data: {
           type: 'Feature',
           geometry: {
             type: 'Polygon',
             coordinates: [t2cord],
           },
         },
       },
       layout: {},
       paint: {
         'fill-color': '#e01515',
         'fill-opacity': 1,
       },
     });
   });




   // TABLE 3 FULL
   const t3cord = [
       [-83.015074,39.999046],
         [-83.015022,39.999052],
         [-83.015015,39.999017],
         [-83.015067,39.999011],
         [-83.015074,39.999046]
   ];


   map.on('load', () => {
     map.addLayer({
       id: 'table3',
       type: 'fill',
       source: {
         type: 'geojson',
         data: {
           type: 'Feature',
           geometry: {
             type: 'Polygon',
             coordinates: [t3cord],
           },
         },
       },
       layout: {},
       paint: {
         'fill-color': '#e01515',
         'fill-opacity': 1,
       },
     });
   });


   // TABLE 4 FULL
   const t4cord = [
       [-83.015089,39.999115],
         [-83.015036,39.999121],
         [-83.015029,39.999086],
         [-83.015081,39.999079],
         [-83.015089,39.999115]
   ];


   map.on('load', () => {
     map.addLayer({
       id: 'table4',
       type: 'fill',
       source: {
         type: 'geojson',
         data: {
           type: 'Feature',
           geometry: {
             type: 'Polygon',
             coordinates: [t4cord],
           },
         },
       },
       layout: {},
       paint: {
         'fill-color': '#e01515',
         'fill-opacity': 1,
       },
     });
   });




   // TABLE 5 FULL
   const t5cord = [
       [-83.015008,39.999054],
         [-83.014955,39.99906],
         [-83.014949,39.999025],
         [-83.015001,39.999018],
         [-83.015008,39.999054]
   ];


   map.on('load', () => {
     map.addLayer({
       id: 'table5',
       type: 'fill',
       source: {
         type: 'geojson',
         data: {
           type: 'Feature',
           geometry: {
             type: 'Polygon',
             coordinates: [t5cord],
           },
         },
       },
       layout: {},
       paint: {
         'fill-color': '#e01515',
         'fill-opacity': 1,
       },
     });
   });




   // TABLE 6 FULL
   const t6cord = [
       [-83.015023,39.999123],
         [-83.01497,39.999129],
         [-83.014964,39.999094],
         [-83.015016,39.999087],
         [-83.015023,39.999123]
   ];


   map.on('load', () => {
     map.addLayer({
       id: 'table6',
       type: 'fill',
       source: {
         type: 'geojson',
         data: {
           type: 'Feature',
           geometry: {
             type: 'Polygon',
             coordinates: [t6cord],
           },
         },
       },
       layout: {},
       paint: {
         'fill-color': '#e01515',
         'fill-opacity': 1,
       },
     });
   });


   // TABLE 7 FULL
   const t7cord = [
       [-83.014885,39.999033],
         [-83.014937,39.999027],
         [-83.014945,39.999062],
         [-83.014892,39.999068],
         [-83.014885,39.999033]
   ];


   map.on('load', () => {
     map.addLayer({
       id: 'table7',
       type: 'fill',
       source: {
         type: 'geojson',
         data: {
           type: 'Feature',
           geometry: {
             type: 'Polygon',
             coordinates: [t7cord],
           },
         },
       },
       layout: {},
       paint: {
         'fill-color': '#e01515',
         'fill-opacity': 1,
       },
     });
   });


   // TABLE 8 FULL
   const t8cord = [
       [-83.014959,39.999131],
         [-83.014906,39.999137],
         [-83.014899,39.999102],
         [-83.014952,39.999095],
         [-83.014959,39.999131]
   ];


   map.on('load', () => {
     map.addLayer({
       id: 'table8',
       type: 'fill',
       source: {
         type: 'geojson',
         data: {
           type: 'Feature',
           geometry: {
             type: 'Polygon',
             coordinates: [t8cord],
           },
         },
       },
       layout: {},
       paint: {
         'fill-color': '#e01515',
         'fill-opacity': 1,
       },
     });
   });




   // TABLE 9 FULL
   const t9cord = [
       [-83.01484,39.999111],
         [-83.014887,39.999105],
         [-83.014873,39.999034],
         [-83.014824,39.999039],
         [-83.01484, 39.999111]
   ];


   map.on('load', () => {
     map.addLayer({
       id: 'table9',
       type: 'fill',
       source: {
         type: 'geojson',
         data: {
           type: 'Feature',
           geometry: {
             type: 'Polygon',
             coordinates: [t9cord],
           },
         },
       },
       layout: {},
       paint: {
         'fill-color': '#e01515',
         'fill-opacity': 1,
       },
     });
   });


   // Cleanup function to remove the map when the component unmounts
   return () => map.remove();
 }, []); // Empty dependency array ensures this effect runs once


 return <div ref={mapContainer} style={{ width: '100%', height: '700px' }} />;
};


export default Map;
