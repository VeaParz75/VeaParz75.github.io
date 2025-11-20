import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import landscapeData from './helpers/landscape.json';
import portraitData from './helpers/portrait.json';
import squareData from './helpers/square.json';
import crochetData from './helpers/crochet.json';
import './Portfolio.css'; 
import { Typography } from '@mui/material';

// adjusting portoflio/hobbies because there's a lot to convert to webp
// top 10 images from each section so its only 30
// landscape: tree thing, watercolour, eye, she's back, to lanayru, hobie, starry night, violet, waiting for something to happen, angry gumi
// portrait: macarons, okarun, kirbcake, hachimitsu, mori, crossing but where animal, ghibli, clonk, power, grimm, unohana
// square: garden, book room, cake, cafe, kyo and sen, kirbottle, jinwoo, aki
// sketches: angy goj, toji cosplayer, i got bored at work 


const importAll = (r) => {
  let images = {};
  r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const landscapeImages = importAll(require.context('../assets/art/landscape-webp', false, /\.(png|jpe?g|svg|webp)$/));
const portraitImages = importAll(require.context('../assets/art/portrait-webp', false, /\.(png|jpe?g|svg|webp)$/));
const squareImages = importAll(require.context('../assets/art/square-webp', false, /\.(png|jpe?g|svg|webp)$/));
const crochetImages = importAll(require.context('../assets/art/crochet-webp', false, /\.(png|jpe?g|svg|webp)$/));

const Portfolio = () => {

  // const location = useLocation();

  // useEffect(() => {
  //   document.title = "Portfolio"; // Optional: Change the page title
  //   const header = document.querySelector('header'); // Select the header element
  //   header.style.backgroundColor = 'violet'; // Set the background color for the header

  //   return () => {
  //     header.style.backgroundColor = 'transparent'; // Reset color on unmount
  //   };
  // }, [location]);

  return (
    <div className="portfolio-container">
      <Typography 
        sx={{ marginBottom: '20px', color: "black" }} 
        variant="h5" 
        gutterBottom 
        style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 700, textAlign: 'center', color: '#050505' }}>
        Vea's Hobby Drawer
      </Typography>

      {/* Portrait Section */}
      <div className="category-section">
        <Typography variant="h6" sx={{ textAlign: 'center', marginBottom: '20px', fontFamily: 'Nunito, sans-serif', fontWeight: 600 }}>Portrait Artworks</Typography>
        <div className="gallery">
          {portraitData.map((artwork, index) => (
            <div key={index} className="image-container">
              <img src={portraitImages[artwork.imageName]} className="image" alt={artwork.title} />
              <Typography 
                variant="body2" 
                sx={{ color: "gray", textAlign: "center", marginTop: '5px' }} 
                style={{ fontFamily: 'Nunito, sans-serif' }}>
                {artwork.title} - {artwork.source}
              </Typography>
            </div>
          ))}
        </div>
      </div>

      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      
      {/* Landscape Section */}
      <div className="category-section">
        <Typography variant="h6" sx={{ textAlign: 'center', marginTop: '10px', marginBottom: '20px', fontFamily: 'Nunito, sans-serif', fontWeight: 600 }}>Landscape Artworks</Typography>
        <div className="gallery">
          {landscapeData.map((artwork, index) => (
            <div key={index} className="image-container">
              <img src={landscapeImages[artwork.imageName]} className="image" alt={artwork.title} />
              <Typography 
                variant="body2" 
                sx={{ color: "gray", textAlign: "center", marginTop: '5px' }} 
                style={{ fontFamily: 'Nunito, sans-serif' }}>
                {artwork.title} - {artwork.source}
              </Typography>
            </div>
          ))}
        </div>
      </div>

      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

      {/* Square Section */}
      <div className="category-section">
        <Typography variant="h6" sx={{ textAlign: 'center', marginBottom: '20px', fontFamily: 'Nunito, sans-serif', fontWeight: 600 }}>Square Artworks</Typography>
        <div className="gallery">
          {squareData.map((artwork, index) => (
            <div key={index} className="image-container">
              <img src={squareImages[artwork.imageName]} className="image" alt={artwork.title} />
              <Typography 
                variant="body2" 
                sx={{ color: "gray", textAlign: "center", marginTop: '5px' }} 
                style={{ fontFamily: 'Nunito, sans-serif' }}>
                {artwork.title} - {artwork.source}
              </Typography>
            </div>
          ))}
        </div>
      </div>

      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

      {/* Square Section */}
      <div className="category-section">
        <Typography variant="h6" sx={{ textAlign: 'center', marginBottom: '20px', fontFamily: 'Nunito, sans-serif', fontWeight: 600 }}>Crochet</Typography>
        <div className="gallery">
          {crochetData.map((artwork, index) => (
            <div key={index} className="image-container">
              <img src={crochetImages[artwork.imageName]} className="image" alt={artwork.title} />
              <Typography 
                variant="body2" 
                sx={{ color: "gray", textAlign: "center", marginTop: '5px' }} 
                style={{ fontFamily: 'Nunito, sans-serif' }}>
                {artwork.title}
              </Typography>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Portfolio;
