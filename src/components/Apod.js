import React, { useState, useEffect } from 'react';
import { Typography, useTheme } from '@mui/material';
import './Apod.css';

const Apod = () => {
  const theme = useTheme();
  const [apodData, setApodData] = useState(null);
  const imageUrl = apodData?.url?.endsWith(".jpg") || apodData?.url?.endsWith(".png")
  ? apodData.url
  : apodData?.thumbnail_url;

const hasImage = !!imageUrl;
  useEffect(() => {
    const fetchApod = async () => {
      try {
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=REVuUplVdyUbW7fiJEPxmFLkfZvu50jkAGI3anje`);
        if (!response.ok) {
          throw new Error('Failed to fetch APOD data');
        }
        const data = await response.json();
        setApodData(data);
        
      } catch (error) {
        console.error(error);
      }
    };

    fetchApod();
  }, []);

  // useEffect(() => {
  //   if (apodData) {
  //     console.log("Explanation:", apodData.explanation);
  //     console.log("First 10 chars:", apodData.explanation.slice(0, 10));
  //     console.log("Char codes:", [...apodData.explanation.slice(0, 10)].map(c => c.charCodeAt(0)));
  //   }
  // }, [apodData]);

  return (
    // <div className="container">
    //   {apodData && (
    //     <div className="body">
    //       <Typography sx={{ marginTop: '30px',display: 'flex', justifyContent: 'center', alignItems: 'center', color: theme.palette.common.white }} variant="h4" gutterBottom style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
    //       NASA Astronomy Picture of the Day
    //       </Typography>
    //       <Typography sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px', color: theme.palette.common.white}} variant="h5" gutterBottom style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>{apodData.title}</Typography>
    //       <div>
    //         <img className="pic" src={apodData.hdurl} alt={apodData.title} />
    //       </div>
    //       <div>
    //         <Typography sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px', color: theme.palette.common.white}} variant="h6" gutterBottom style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 200 }}>{apodData.explanation}</Typography>
    //       </div>
    //     </div>
    //   )}
    // </div>

    <div>

      <h4 style={{ fontFamily: "Nunito, sans-serif", fontWeight: 800 }} >APOD Status</h4>
        <p style={{ fontFamily: "Nunito, sans-serif", fontWeight: 600, color: "green" }} >
          LIVE
        </p>
        {/* <p style={{ marginTop: "1em" }}>With love,</p>
        <p style={{ marginTop: "1em" }}>Vea 🛸</p> */}

      {apodData && (
        <>
          <div className="flex justify-between items-center">
            <h2
              className="text-lg"
              style={{ fontFamily: "Nunito, sans-serif", fontWeight: 700, marginTop: "10px" }}
            >
              {apodData.title}
            </h2>
            <h2
              className="text-lg text-right"
              style={{ fontFamily: "Nunito, sans-serif", fontWeight: 300, marginTop: "10px" }}
            >
              {apodData.date}
            </h2>
          </div>

          {apodData.url || apodData.thumbnail_url ? (
            <img
              src={apodData.url || apodData.thumbnail_url}
              alt={apodData.title || "APOD image"}
              className="rounded-lg mb-3"
            />
          ) : (
            <p>
              No image available today. (It's likely a video! Visit{" "}
              <a
                href="https://apod.nasa.gov"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                apod.nasa.gov
              </a>{" "}
              to learn more.)
            </p>
          )}

          <p style={{ fontFamily: "Nunito, sans-serif", fontWeight: 400 }}>
            {apodData.explanation}
          </p>
        </>
      )}

    </div>
  );
};

export default Apod;
