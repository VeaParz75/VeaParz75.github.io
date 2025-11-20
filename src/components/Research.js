import React from 'react';
import { Typography, Box, Card, CardContent } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import './helpers/Slider.css'; // Import your custom CSS file for animations
import { useState } from "react";
import PaperCard from "../components/helpers/PaperCard"; // Make sure to import the refactored component
import vanish from '../assets/learning_to_vanish.webp';
import full_design_process from '../assets/full_design_process.webp';
import main_fig from '../assets/i_hope_main_fig.webp';
import persp from '../assets/persp.png';
import Pill from "../components/helpers/Pill";

export default function Research() {
  const [openIndices, setOpenIndices] = useState([]); // tracks which card is open
  const papers = [
    {
      title: `Deep Learning in Photonic Device Development: Nuances and Opportunities<br>
              <b>Accepted for publication to <em>npj Nanophotonics</em></b><br>`,
      figure: persp,
      summary: `Can deep learning shift the paradigm of photonic device development? This perspective highlights the key caveats to using deep learning in designing photonic devices and sketches a realistic picture of where it could meaningfully contribute in the future.<br><br>
      <b>Key Contributions:</b><br>
      - First first-author publication.<br><br>
      - Led and developed the core narrative and identified the key caveats shaping the paper's central argument.<br><br>
      - Selected and analyzed case studies (PINNs, neural operators, etc.) used to support the perspective.<br><br>
      - Created all supporting visual materials. <br><br>
      - Coordinated revisions in response to internal feedback and reviewer comments. <br><br>
      - Managed the overall structure, storyline, and final polish of the manuscript.`,
      borderGradient: ['#0007c6ff', '#b600feff'],
      paperLink: "",
      skills: [
      { text: "Deep Learning", bgc: "#c4f4ff", tc: "#006d87" },
      { text: "Photonics", bgc: "#c4f4ff", tc: "#006d87" },
      { text: "Technical Writing", bgc: "#c4f4ff", tc: "#006d87" },
      { text: "Technical Illustration", bgc: "#c4f4ff", tc: "#006d87" },
      { text: "Leadership", bgc: "#c4f4ff", tc: "#006d87" },
      { text: "Project Management", bgc: "#c4f4ff", tc: "#006d87" },
    ]
    },
    {
      title: `Learning deeply to vanish light: intelligent metasurface design for next-generation antireflection<br>
              <b>Published in <em>Advanced Photonics</em></b><br>`,
      figure: vanish,
      summary: `A commentary published in Advanced Photonics describing recent work on antireflective coatings for solar cells. We investigate the combination of forward modeling and inverse optimization using machine learning: a significant step towards fabrication-informed device development.<br><br>
      <b>Key Contribution:</b><br>
      - Co-authored by conducting the initial literature survey and formatting the article outline.`,
      borderGradient: ['#ad006e', '#1100fe'],
      paperLink: "https://doi.org/10.1117/1.AP.7.4.040502",
      skills: [
      { text: "Deep Learning", bgc: "#c4f4ff", tc: "#006d87" },
      { text: "Photonics", bgc: "#c4f4ff", tc: "#006d87" },
    ]
    },
    {
      title: `Machine-learning-assisted photonic device development: a multiscale appraoch from theory to characterization<br>
              <b>Published in <em>Nanophotonics</em></b><br>`,
      figure: full_design_process,
      summary: `A collaborative review with Northeastern University and Georgia Tech examining how machine learning is shaping photonic device development. The paper traces progress across the design cycle and outlines future directions for building smarter, more efficient photonic systems.<br><br>
      <b>Key Contributions:</b><br>
      - Developed all main figures to clearly convey ideas and enhance scientific communication.<br><br>
      - Drafted the Quantum Generative Models section, highlighting the potential of quantum algorithms
      while situating them within their current stage of development to remain forward-looking yet grounded.`,
      borderGradient: ['#0049ad', '#00d9fe'],
      paperLink: "https://doi.org/10.1515/nanoph-2025-0049",
      skills: [
      { text: "Deep Learning", bgc: "#c4f4ff", tc: "#006d87" },
      { text: "Photonics", bgc: "#c4f4ff", tc: "#006d87" },
      { text: "Technical Writing", bgc: "#c4f4ff", tc: "#006d87" },
      { text: "Technical Illustration", bgc: "#c4f4ff", tc: "#006d87" },
    ]
    },
    {
      title: `PearSAN: a Machine Learning Method for Inverse Design using Pearson Correlated Surrogate Annealing<br>
              <b>Published on <em>arXiV</em></b><br>`,
      figure: main_fig,
      summary: `PearSAN is a generative modelling framework designed to identify how changes in device parameters affect the efficiency of thermophotovoltaic (TPV) cells. By learning correlations between QUBO energy functions and TPV performance metrics, it enables faster and more targeted design optimization.<br><br>
      <b>Key Contributions:</b><br>
      - Conducted initial experiments to establish the correlation framework between QUBO energy functions, leading to 96% efficiency in final device performance.<br><br>
      - Performed mathematical analysis and PCA-based post-processing of model outputs. <br><br>
      - Created all technical figures and contributed to writing and editing the manuscript.<br><br>
      - Presented the work at conferences, including the U.S. Quantum Information Science Summer School and SPIE Optics and Photonics.`,
      borderGradient: ['#eeef00', '#1dfe00'],
      paperLink: "https://arxiv.org/pdf/2412.19284",
      skills: [
      { text: "Deep Learning", bgc: "#c4f4ff", tc: "#006d87" },
      { text: "PyTorch", bgc: "#c4f4ff", tc: "#006d87" },
      { text: "Python", bgc: "#c4f4ff", tc: "#006d87" },
      { text: "Photonics", bgc: "#c4f4ff", tc: "#006d87" },
      { text: "Statistical Methods", bgc: "#c4f4ff", tc: "#006d87" },
      { text: "Technical Writing", bgc: "#c4f4ff", tc: "#006d87" },
      { text: "Technical Illustration", bgc: "#c4f4ff", tc: "#006d87" },
    ]
    },
    
    // more papers...
  ];


  const leftColumnPapers = [];
  const rightColumnPapers = [];

  // Go through your original `papers` list one by one.
  papers.forEach((paper, index) => {
    // If the item's index is even (0, 2, 4...), put it in the left column.
    if (index % 2 === 0) {
      leftColumnPapers.push(paper);
    } else { // If the item's index is odd (1, 3, 5...), put it in the right column.
      rightColumnPapers.push(paper);
    }
  });

  const handleToggle = (index) => {
    // Check if the card is already open
    if (openIndices.includes(index)) {
      // If it's open, remove it from the array to close it
      setOpenIndices(openIndices.filter(i => i !== index));
    } else {
      // If it's closed, add it to the array to open it
      setOpenIndices([...openIndices, index]);
    }
  };

return (
  <div className="max-w-6xl mx-auto p-4">
    {/* 1. This is the main container. It uses Flexbox to put the columns next to each other. */}
    <div className="flex flex-col sm:flex-row sm:gap-4">

      {/* 2. This is the Left Column. It takes up half the width on small screens and up. */}
      <div className="w-full sm:w-1/2 flex flex-col gap-4">
        {leftColumnPapers.map(paper => (
          <PaperCard
            key={paper.title}
            {...paper}
            isOpen={openIndices.includes(papers.findIndex(p => p.title === paper.title))}
            onToggle={() => handleToggle(papers.findIndex(p => p.title === paper.title))}
          />
        ))}
      </div>

      {/* 3. This is the Right Column. It also takes up half the width. */}
      <div className="w-full sm:w-1/2 flex flex-col gap-6">
        {rightColumnPapers.map(paper => (
          <PaperCard
            key={paper.title}
            {...paper}
            isOpen={openIndices.includes(papers.findIndex(p => p.title === paper.title))}
            onToggle={() => handleToggle(papers.findIndex(p => p.title === paper.title))}
          />
        ))}
      </div>
      
    </div>
  </div>
);
}