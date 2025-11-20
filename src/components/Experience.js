import React from 'react';
import { Typography, Box, Card, CardContent, CardMedia } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import './helpers/Slider.css'; // Import your custom CSS file for animations

const ExperienceCard = ({ experience }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Card
      ref={ref}
      className={inView ? 'slide-in' : ''}
      sx={{
        display: 'flex',
        maxWidth: '100%',
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0)' : 'translateX(-50px)',
        transition: 'all 0.6s ease-in-out',
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: 160, objectFit: 'contain', backgroundColor: '#f5f5f5' }}
        image={experience.image}
        alt={experience.company}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <CardContent>
          <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
            {experience.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {experience.company} - {experience.duration}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ marginTop: '10px' }}>
            {experience.description}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: "Lead Undergraduate Research Assistant",
      company: "NanoML@Purdue",
      description: "Investigated quantum machine learning, computational complexity, and topological optimization in metasurface design.",
      image: "image.png",
      duration: "October 2021 - Present",
    },
    {
      title: "Lead Organizer and Instructor",
      company: "Qiskit Fall Fest at Purdue",
      description: "Spearheading Purdue's first Qiskit Fall Fest, where we introduced quantum computing and Qiskit to the undergraduate community.",
      image: "qff.png",
      duration: "September 2023 - November 2023",
    },
    {
      title: "Quantum Software Engineering Intern",
      company: "IBM",
      description: "Created a framework for generating customized IBM Quantum backends to test transpiler efficiency and forecast future IBM Quantum devices.",
      image: "ibm.svg",
      duration: "May 2023 - August 2023",
    },
    {
      title: "Summer Undergraduate Research Fellow",
      company: "Engineering Undergraduate Research Office (EURO)",
      description: "Using generative modelling to investigate spectral broadening in the use of single photon sources as a method of authentication in communication channels.",
      image: "euro.jpg",
      duration: "May 2022 - August 2022",
    },
    {
      title: "Vice President",
      company: "Hack The Future",
      description: "Helped teams network with local non-profits to develop sustainable, smart solutions for the Purdue community.",
      image: "dino.png",
      duration: "August 2023 - May 2024",
    },
  ];

  return (
    <Box
      id="experience"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '40px',
      }}
    >
      <Typography
        sx={{
          marginBottom: '20px',
          color: 'cyan',
        }}
        variant="h3"
        gutterBottom
        style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
      >
        Experience
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px', // Adjust the gap between the cards
          width: '100%', // Adjust the width of the container
          maxWidth: '900px', // Maximum width for the card container
          padding: '0 20px', // Add some horizontal padding
        }}
      >
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </Box>
    </Box>
  );
};

export default Experience;
