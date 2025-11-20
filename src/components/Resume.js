import React from "react";
import { Container, Typography, Divider, List, ListItem, ListItemText, Button } from '@mui/material';
import SaturnButton from "./SaturnButton";

const Resume = () => {

  // to download my resume on click a button
  const onButtonClick = () => {
    // Path to the resume file in the public directory
    const fileURL = `${process.env.PUBLIC_URL}/Resume-Vaishnavi_Iyer.pdf`;

    // Create a new anchor element
    const alink = document.createElement("a");
    alink.href = fileURL;
    alink.download = "Resume-Vaishnavi_Iyer.pdf"; // The file name for the download
    alink.click();
  };


  return (
    <Container maxWidth="md" sx={{ mt: 8, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Vaishnavi Iyer
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Incoming Ph.D Student | PI: Dr. Alexandra Boltasseva
      </Typography>
      <Typography variant="body1" gutterBottom>
        Email: iyer94@purdue.edu | Smyrna, Georgia 30080
      </Typography>
      <Divider sx={{ mt: 4, mb: 2 }} /> 
      <Typography variant="h5" gutterBottom>
        Education
      </Typography>
      <Typography variant="h6">
        Purdue University
      </Typography>
      <List>
      <ListItem disablePadding>
          <ListItemText
            primary="Incoming Research Assistant: Elmore Family School of Electrical and Computer Engineering Direct Ph.D Program\n
            PI: Dr. Alexandra Boltasseva"
            secondary="2024 - Present"
          />
        </ListItem>
      <ListItem disablePadding>
          <ListItemText
            primary="Bachelor of Science: Computer Science, Specialization: Machine Intelligence"
            secondary="2020-2024"
          />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText
            primary="Bachelor of Arts: Political Science, Specialization: International Relations"
            secondary="2020-2024"
          />
        </ListItem>
      </List>
      <Typography variant="h6" gutterBottom>
        Skills
      </Typography>
      <Typography variant="body1" gutterBottom>
      Qiskit, Python, PyTorch, Java, JS, C/C++, React, Artificial Intelligence, TensorFlow, Neural Networks, Linear Algebra
      Public Speaking, Conference Organization, Outreach
      English, Hindi, Tamil, Chinese (Mandarin, HSK Level 3), French (Level IV Fluency), Japanese (upcoming: JLPT N5) 
      </Typography>
      <Divider sx={{ mt: 2, mb: 2 }} />
      <Typography variant="h5" gutterBottom>
        Experience
      </Typography>
      <List>
        <ListItem disablePadding>
          <ListItemText
            primary="IBM Quantum Software Engineering Intern"
            secondary="Yorktown Heights, New York | May 2023 - August 2023"
          />
        </ListItem>
        <ListItem disablePadding>
        <ListItemText
            primary={
                <div>
                - An IBM internship program where my team and I created a framework for making realistic experimental IBM Quantum backends by analyzing and sampling from the statistics of existing quantum computers.<br />
                - We introduced a framework into the existing Qiskit API, facilitating efficient transpiling and future two-level quantum system forecasting, allowing for 256+ qubit systems to be visualized and tested.
                </div>
            }
            />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText
            primary=" Purdue University Summer Undergraduate Research Fellowship: Quantum Machine Learning"
            secondary="West Lafayette, Indiana | May 2022 - August 2022"
          />
        </ListItem>
        <ListItem disablePadding>
        <ListItemText
            primary={
                <div>
                - A project analyzing the verification of single photon sources through latent variables of spectral broadening, using generative models written in Python, PyTorch and TensorFlow, which aims to improve the enforceability of indistinguishability in spectral diffusion and other properties of photons in current fabrication methods.<br />
                </div>
            }
            />
        </ListItem>
      </List>
      <Divider sx={{ mt: 2, mb: 2 }} />
      <Typography variant="h5" gutterBottom>
        Publications and Presentations
      </Typography>
      <List>
      <ListItem disablePadding>
        <ListItemText
            primary={
                <div>
                - Iyer, V; Bezick, M. Wilson, B; Boltasseva, A. Applications of Variational Neural Annealing for Machine Learning-Assisted Topological Optimization. Spring Undergraduate Research Conference (2024)<br />
                - Wilson, B., Iyer, V., Shalaev, V., Kildishev, A., Kais, S., Boltasseva, A. Learning Van der Waals Potentials in Surrogate Rydberg Hamiltonians. 3rd Annual Quantum Summer School (2023)<br />
                - Iyer, V., Bonilla Garay, B., Figueroa, M.. (2023, August 11). A General Framework for generating Realistic Quantum Backends. Quantum Science at Purdue Poster Session (2023).<br />
                - Iyer, V. Verification of Single Photon Sources through Latent Variables of Spectral Broadening. Summer Undergraduate Research Fellowship Quantum Technologies Symposium. (2022)<br />
                - Iyer, V., Wilson, B., Shalaev, V., Kildishev, A., Kais, S., Boltasseva, A. Measuring bVAE Reconstruction Loss Against Binary Latent Space Size. Elmore Center’s Quantum Research Poster Session (2022) and the Quantum Science Center’s Quantum Summer School (2022).<br />
                - Wilson, B., Dickey, E., Iyer, V, & Kais, S.. (2022, June 13). A Relative Church-Turing-Deutsch Thesis from Special Relativity and Undecidability. In arXiv (arXiv:2206.06419). https://arxiv.org/abs/2206.06419<br />
                </div>
            }
            />
        </ListItem>
      </List>
      <Divider sx={{ mt: 2, mb: 2 }} />
      <Typography variant="h5" gutterBottom>
        Leadership
      </Typography>
      <List>
      <ListItem disablePadding>
          <ListItemText
            primary="Lead Organizer: Qiskit Fall Fest at Purdue"
            secondary="West Lafayette, Indiana | September 2022 - November 2022"
          />
        </ListItem>
        <ListItem disablePadding>
        <ListItemText
            primary={
                <div>
                - Led the management and organization of the first Qiskit Fall Fest on Purdue West Lafayette’s campus, conducted in November 2023, with $3000 raised. Our attendees showed 93% increase in knowledge about quantum computing and Qiskit from a starting knowledge rate of about 7%. Speakers from IBM, SPEED2ZERO, Qubit X Qubit and QuEra attended our event, motivating 50% of our attendees to consider pursuing quantum computing in the future, or to pursue research.
<br />
                </div>
            }
            />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText
            primary="Vice President: Hack the Future"
            secondary="West Lafayette, Indiana | May 2023 - Present"
          />
        </ListItem>
        <ListItem disablePadding>
        <ListItemText
            primary={
                <div>
                - A university club where I facilitate the interaction between local non-profits and our club. Recruited 4 local non-profits, allowing our club size to increase by 25%. Our overall recruitment for the 2023-24 academic year increased by 100% since last year.<br />
                </div>
            }
            />
        </ListItem>
      </List>
      <Divider sx={{ mt: 2, mb: 2 }} />
      <Typography variant="h5" gutterBottom>
        Awards, Affiliations and Certifications
      </Typography>
      <List>
      <ListItem disablePadding>
        <ListItemText
            primary={
                <div>
                - IBM Certified Associate Qiskit Developer v0.2x, 2024<br />
                - Quantum Fundamentals: Q-CTRL, 2023<br />
                - Qubit X Qubit Early Quantum Career Immersion Alumnus: Summer 2023<br />
                - Purdue Political Science Research Collaboratory Pilot Alumnus 2021<br />
                - Undergraduate Researcher: Quantum Science Center (QSC)<br />
                - Affiliate: Elmore Family School of Electrical and Computer Engineering and Oakridge National Laboratories (QSC)<br />
                - Dean’s List and Semester Honours: Fall 2020, Spring 2021, Spring 2022, Fall 2023
                </div>
            }
            />
        </ListItem>
      </List>
      <Divider sx={{ mt: 2, mb: 2 }} />
      <div style={{ textAlign: 'right', marginTop: '20px' }}>
        <Button 
            onClick={onButtonClick}
            variant="contained"
            color="primary"
            sx={{ fontFamily: 'Montserrat, sans-serif' }}
        >
            Download Resume
        </Button>
      </div>
    </Container>
  );
};

export default Resume;

