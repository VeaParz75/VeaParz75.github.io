import { Link } from "react-router-dom";
import { Box, Typography, Button, useTheme } from '@mui/material';
import english from "../assets/english.png";
import hindi from "../assets/hindi-tamil.png";
import french from "../assets/french.png";
import chinese from "../assets/chinese.png";
import japanese from "../assets/japanese.png";
import Pill from "./helpers/Pill";
import './Home.css';
import './About.css';
import me from "../assets/its_me_again.webp"

export default function AboutContent({ scrollToApod }) {

  const theme = useTheme();
  // const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="text-sm text-gray-800 leading-relaxed space-y-4">

        <Box sx={{ display: 'flex', gap: 3.5 }}>
            {/* Image with shadow */}
            <Box sx={{ position: 'relative', flexShrink: 0 }}>
                <Box
                sx={{
                    position: 'absolute',
                    top: 32,
                    left: -12,
                    width: 175,
                    height: 190,
                    borderRadius: '12px',
                    // marginTop: '20px',
                    marginLeft: '35px',
                    backgroundColor: '#bbf1ff',
                    zIndex: 0,
                }}
                />
                <Box
                component="img"
                src={me}
                alt="me"
                sx={{
                    width: 175,
                    height: 'auto',
                    borderRadius: '12px',
                    marginLeft: '35px',
                    marginTop: '10px',
                    position: 'relative',
                    zIndex: 1,
                    display: 'block',
                }}
                />
            </Box>

            {/* Text container that matches image height */}
            <Box sx={{ height: 240, width: 450, display: 'flex', textAlign: 'left', flexDirection: 'column' }}>
                <Box>
                <Typography
                    variant="h2"
                    sx={{
                    color: '#00a7cc',
                    fontFamily: 'Nunito',
                    marginBottom: '30px',
                    fontWeight: 700,
                    textAlign: 'left',
                    transform: 'translateY(15px)'
                    }}
                >
                    Vaishnavi Iyer
                </Typography>
                </Box>
                <Box sx={{ mt: 1 }}>
                <Typography
                    variant="h6"
                    sx={{
                    fontFamily: 'Nunito',
                    fontWeight: 500,
                    color: 'black',
                    marginBottom: '5px',
                    maxWidth: 450,
                    textAlign: 'left',
                    transform: 'translateY(-10px)',
                    }}
                >
                    PhD Student & Graduate Research Assistant
                </Typography>
                <Typography
                    variant="h6"
                    sx={{
                    fontFamily: 'Nunito',
                    fontWeight: 500,
                    color: 'gray',
                    maxWidth: 500,
                    textAlign: 'left',
                    transform: 'translateY(-10px)'
                    }}
                >
                    Purdue University, West Lafayette, Indiana
                </Typography>
                </Box>
            </Box>
            </Box>

    <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

    <Typography
        variant="body1"
        sx={{
        fontFamily: 'Nunito',
        fontSize: '14pt',
        fontWeight: 300,
        marginTop: '10px',
        maxWidth: 700,
        textAlign: 'left',
        transform: 'translateY(0px)',
        }}
    >
        Hi! My name is Vea (pronounced Vee-ya) and I'm a <bluetext>researcher, developer, and artist</bluetext> at Purdue University. <br></br>
    </Typography>

    <Typography
        variant="body1"
        sx={{
        fontFamily: 'Nunito',
        fontSize: '14pt',
        fontWeight: 300,
        color: 'black',
        maxWidth: 700,
        textAlign: 'left',
        transform: 'translateY(0px)',
        }}
    >
        My research sits at the intersection of machine learning, photonics, and quantum computing. I'm especially interested in building physics-aware and quantum-enabled methods that can speed up device design while keeping real fabrication constraints in mind. With a background in machine intelligence, I enjoy connecting the problem-solving culture of computer science with the practical insight of physics, and I see 
        my work as a way of helping emerging technologies grow from promising ideas into tools that can make a real impact.
    </Typography>

    <Typography
        variant="h5"
        gutterBottom
        sx={{
            fontFamily: 'Nunito',
            fontSize: '20pt',
            color: '#00a7cc',
            textAlign: 'center',
            fontWeight: 700,
            marginBottom: '20px' // Space between text and button
        }}
    >
        My Skills
    </Typography>

    <Typography
        variant="h5"
        gutterBottom
        sx={{
            color: theme.palette.common.black,
            fontFamily: 'Nunito',
            fontSize: '16pt',
            textAlign: 'center',
            fontWeight: 600,
            marginBottom: '50px' // Space between text and button
        }}
    >
        Technical
    </Typography>

    <div style={{ display: "flex", justifyContent: "center", gap: "6px", flexWrap: "wrap" }}>
        {/* <Pill text="Hello World" bgColor="#ffc4c4" textColor="#920000"/> */}
        <Pill text="Python" bgc="#ffc4c4" tc="#920000" />
        <Pill text="Qiskit" bgc="#ffcfc4" tc="#922c00" />
        <Pill text="PyTorch" bgc="#ffd9c4" tc="#923d00" />
        <Pill text="TensorFlow" bgc="#ffe2c4" tc="#925500" />
        <Pill text="Java" bgc="#ffecc4" tc="#925700" />
        <Pill text="JavaScript" bgc="#ffecc4" tc="#927800" />
        <Pill text="C/C++" bgc="#fff6c4" tc="#928300" />
        <Pill text="React" bgc="#feffc4" tc="#929100" />
        <Pill text="Tailwind" bgc="#f4ffc4" tc="#7a9200" />
        <Pill text="Deep Learning" bgc="#eaffc4" tc="#619200" />
        <Pill text="Random Variables" bgc="#e1ffc4" tc="#499200" />
        <Pill text="Stochastic Processes" bgc="#d7ffc4" tc="#319200" />
        <Pill text="Artifical Intelligence" bgc="#cdffc4" tc="#189200" />
        <Pill text="Statistical Mechanics" bgc="#c4ffc5" tc="#009200" />
        <Pill text="Git" bgc="#c4ffcf" tc="#009218" />
        <Pill text="Qt" bgc="#c4ffd9" tc="#009231" />
        <Pill text="Data Acquisition (DAQ)" bgc="#c4ffe2" tc="#009249" />
    </div>

    <Typography
        variant="h5"
        gutterBottom
        sx={{
            color: theme.palette.common.black,
            fontFamily: 'Nunito',
            fontSize: '16pt',
            textAlign: 'center',
            fontWeight: 600,
            marginBottom: '20px' // Space between text and button
        }}
    >
        Professional
    </Typography>

    <div style={{ display: "flex", justifyContent: "center", gap: "6px", flexWrap: "wrap" }}>
        {/* <Pill text="Hello World" bgColor="#ffc4c4" textColor="#920000"/> */}
        <Pill text="Conference Organization" bgc="#c4ffec" tc="#009261" />
        <Pill text="Leadership" bgc="#c4fff6" tc="#00927a" />
        <Pill text="Project Management" bgc="#c4feff" tc="#009292" />
        <Pill text="Outreach" bgc="#c4f4ff" tc="#007a92" />
        <Pill text="Public Speaking" bgc="#c4eaff" tc="#006192" />
        <Pill text="Scrum" bgc="#c4e1ff" tc="#004992" />
        <Pill text="Technical Writing" bgc="#c4d7ff" tc="#003192" />
        <Pill text="Technical Illustration" bgc="#c4cdff" tc="#001892" />
    </div>

    <Typography
        variant="h5"
        gutterBottom
        sx={{
            color: '#00a7cc',
            fontFamily: 'Nunito',
            fontSize: '16pt',
            textAlign: 'center',
            fontWeight: 700,
            paddingTop: '25px',
            marginBottom: '20px' // Space between text and button
        }}
    >
        Languages
    </Typography>

    <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

    <div
      style={{
        display: "flex",
        justifyContent: "center", // center horizontally
        gap: "30px",              // space between each flag
        flexWrap: "wrap",         // wrap if screen is small
        marginTop: "20px",
        fontFamily: 'Nunito, sans-serif'
      }}
    >
      <div style={{ textAlign: "center" }}>
        <img
          src={english}
          alt="English"
          style={{
            width: "80px",
            height: "auto",
            border: "2px solid black",
          }}
        />
        <div style={{ marginTop: "6px", fontWeight: 800 }}>English</div>
        <div style={{ fontWeight: 400, fontSize: "14px" }}>Native</div>
      </div>

      <div style={{ textAlign: "center" }}>
        <img
          src={hindi}
          alt="Hindi and Tamil"
          style={{
            width: "80px",
            height: "auto",
            border: "2px solid black",
          }}
        />
        <div style={{ marginTop: "6px", fontWeight: 800 }}>Hindi and Tamil</div>
        <div style={{ fontWeight: 400, fontSize: "14px" }}>Mother Tongue</div>
      </div>

      <div style={{ textAlign: "center" }}>
        <img
          src={french}
          alt="French"
          style={{
            width: "80px",
            height: "auto",
            border: "2px solid black",
          }}
        />
        <div style={{ marginTop: "6px", fontWeight: 800 }}>French</div>
        <div style={{ fontWeight: 400, fontSize: "14px" }}>Fluent</div>
        <div style={{ fontWeight: 400, fontSize: "14px" }}>DELF B1</div>
      </div>

      <div style={{ textAlign: "center" }}>
        <img
          src={chinese}
          alt="Chinese"
          style={{
            width: "80px",
            height: "auto",
            border: "2px solid black",
          }}
        />
        <div style={{ marginTop: "6px", fontWeight: 800 }}>Chinese: Mandarin</div>
        <div style={{ fontWeight: 400, fontSize: "14px" }}>Proficient</div>
        <div style={{ fontWeight: 400, fontSize: "14px" }}>HSK Level 3</div>
      </div>

      <div style={{ textAlign: "center" }}>
        <img
          src={japanese}
          alt="Japanese"
          style={{
            width: "80px",
            height: "auto",
            border: "2px solid black",
          }}
        />
        <div style={{ marginTop: "6px", fontWeight: 800 }}>Japanese</div>
        <div style={{ fontWeight: 400, fontSize: "14px" }}>Conversational</div>
      </div>
    </div>

    <Typography
        variant="h5"
        gutterBottom
        sx={{
            color: '#007da3',
            fontFamily: 'Nunito',
            fontSize: '13pt',
            textAlign: 'left',
            fontWeight: 500,
            marginBottom: '20px' // Space between text and button
        }}
    >
        Please feel free to click around my website to learn more about my research and hobbies!
        Have a great day :)
    </Typography>

      <div className="resume-section">
            <Typography
                variant="h5"
                gutterBottom
                sx={{
                    color: theme.palette.common.black,
                    fontFamily: 'Nunito, sans-serif',
                    fontWeight: 300,
                    fontSize: '35px',
                    marginBottom: '20px' // Space between text and button
                }}
            >
                Click below to check out my resume!
            </Typography>
            <Button
                component={Link}
                to="/resume"
                variant="contained" // Material-UI variant
                color="primary" // You can choose another color from theme if needed
                href={`${process.env.PUBLIC_URL}/resume`} // Replace with the actual path or URL
            >
                View Resume
            </Button>
        </div>

    </div>
  );
}

