import { Typography, Box } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import './helpers/Slider.css';


const Education = () => {
  const { ref: cardRef, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // When 10% of the element is visible
  });

  return (
    <Box
      id="education"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      <Typography
        sx={{
          marginBottom: '20px',
          color: 'black',
        }}
        variant="h3"
        gutterBottom
        style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 600 }}
      >
        Education
      </Typography>

      <Box
        sx={{
          display: 'flex',
          //flexDirection: { xs: 'column', md: 'row' }, // Responsive flex direction
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px', // Adjust the gap between the cards
          flexWrap: 'wrap', // Wrap cards in a new line on smaller screens
        }}
      >
        {[
          {
            title: "Purdue University: PhD in Electrical and Computer Engineering",
            description: <>Specialization: Fields and Optics<br />January 2025 – Present</>,
            image: "purduee.png",
            textStyle: {
              fontFamily: 'Nunito, sans-serif',
              fontWeight: 600,
              fontSize: '1.2rem',
            },
            mediaBackgroundColor: '#f5f5f5', // Default background for image area
            textColor: 'text.secondary' // Default text color
          },
          {
            title: "Purdue University: B.S. in Computer Science",
            description: <>Specialization: Machine Intelligence<br />August 2020 - May 2024</>,
            image: "purduee.png",
            mediaBackgroundColor: '#f5f5f5', // Default background for image area
            textColor: 'text.secondary' // Default text color
          },
          {
            title: "Purdue University: B.A. in Political Science",
            description: <>Specialization: International Relations<br />August 2020 - May 2024</>,
            image: "purduee.png",
            mediaBackgroundColor: '#f5f5f5', // Default background for image area
            textColor: 'text.secondary' // Default text color
          },
          {
            title: "Atlanta International School: High School Diploma",
            description: <>Studied computer science, math, physics, English, French, and economics.<br />June 2020</>,
            image: "ais.png",
            mediaBackgroundColor: '#0054a5', // Blue background for image area
            textColor: 'text.secondary' // Keep text color standard
          }
        ].map((edu, index) => (
          <Card 
            key={index}
            ref={cardRef}  
            sx={{ 
              maxWidth: 700,
              width: '100%', 
              //boxShadow: 0,
              borderRadius: '10px',
              display: 'flex',               // Make the card horizontal
              alignItems: 'center',          // Vertically center image + text
              overflow: 'hidden',             // Ensures rounded corners clip the image
              border: `4px solid ${index === 3 ? '#0054a5' : '#CFB991'}`
            }}
          >
            {/* Image on the left */}
            <CardMedia
              component="img"
              sx={{ 
                width: 160,                   // Fixed width for image
                height: '100%',
                objectFit: 'cover',
                margin: '12px',
                //backgroundColor: edu.mediaBackgroundColor
              }}
              image={edu.image}
              title={edu.title}
            />

            {/* Text on the right */}
            <CardContent sx={{ flex: 1 }}>
              <Typography 
                gutterBottom 
                variant="h5" 
                component="div" 
                sx={{ fontWeight: 'bold', color: edu.textColor }}
              >
                {edu.title}
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ color: edu.textColor }}
              >
                {edu.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Education;
