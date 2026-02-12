import { Typography, Box } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import './helpers/Slider.css';


const Affiliations = () => {
  const { ref: cardRef, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // When 10% of the element is visible
  });

  return (
    <Box
      id="affiliations"
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
        variant="h4"
        gutterBottom
        style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 600 }}
      >
        Community and Outreach
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
            title: "SPIE Purdue Student Chapter: Treasurer",
            description: <>January 2025 - Present</>,
            image: "spie.png",
            textStyle: {
              fontFamily: 'Nunito, sans-serif',
              fontWeight: 600,
              fontSize: '1.2rem',
            },
            mediaBackgroundColor: '#f5f5f5', // Default background for image area
            textColor: '#3f3f3f', // Default text color
            cardBackgroundColor: '#f7d9ff',
            desc: "I am serving as the Treasurer for the SPIE Purdue University Student Chapter, where I manage our organization's finances, acquire funding, and host distinguished faculty from institutes like NIST, Oxford, Max Planck, and Technion."
          },
          {
            title: "Qubit x Qubit and Southport High School: Lead Student Volunteer",
            description: <>April 2024</>,
            image: "southport.jpg",
            mediaBackgroundColor: '#f5f5f5', // Default background for image area
            textColor: '#3f3f3f', // Default text color
            cardBackgroundColor: '#f7d9ff',
            desc: "I was a lead student volunteer for a collaboration between the Purdue Quantum Science Engineering Institute and Qubit X Qubit, where we introduced quantum computing to high school students at Southport High School in Indianapolis, Indiana."
          },
          {
            title: "Qiskit Fall Fest at Purdue: Lead Organizer and Instructor",
            description: <>September 2023 - November 2023</>,
            image: "qff.png",
            mediaBackgroundColor: '#f5f5f5', // Default background for image area
            textColor: '#3f3f3f', // Default text color
            cardBackgroundColor: '#f7d9ff',
            desc: "I organized Purdue's first Qiskit Fall Fest in collaboration with IBM, Qiskit, and the Quantum Science Center. My team and I raised $3000 to bring quantum computing to undergraduates at Purdue. Our event also included speakers from IBM, SPEED2ZERO, QuEra, and Qubit X Qubit."
          },
          {
            title: "Hack the Future: Vice President",
            description: <>August 2020 - May 2024</>,
            image: "dino.png",
            mediaBackgroundColor: '#f5f5f5', // Default background for image area
            textColor: '#3f3f3f', // Default text color
            cardBackgroundColor: '#d9ffda',
            desc: "I served as the Vice President and one of the first members of Hack the Future, Purdue's biggest web development club. I built software solutions using the MERN stack for local non-profits in the city of Lafayette. "
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
              border: `4px solid ${index === 3 ? '#d9ffda' : '#f7d9ff'}`,
              backgroundColor: edu.cardBackgroundColor,
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
                variant="h5" 
                component="div" 
                sx={{ color: edu.textColor, fontFamily: 'Nunito, sans-serif', fontWeight: 700 }}
              >
                {edu.title}
              </Typography>
              <Typography 
                variant="body2"
                marginBottom="12px"
                sx={{ color: edu.textColor, fontFamily: 'Nunito, sans-serif', fontWeight: 700 }}
              >
                {edu.description}
              </Typography>
              <Typography
                variant="body2" 
                sx={{ color: edu.textColor, fontFamily: 'Nunito, sans-serif', fontWeight: 500 }}
              >
                {edu.desc}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
      <Typography
        sx={{
          marginTop: '20px',
          color: 'black',
        }}
        variant="h4"
        gutterBottom
        style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 600 }}
      >
        Affiliations
      </Typography>
    </Box>
  );
};

export default Affiliations;
