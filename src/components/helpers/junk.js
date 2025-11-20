// const Home = () => {
//   const theme = useTheme();
//   const [isVisible, setIsVisible] = useState(false);
//   const [showTextbox1, setShowTextbox1] = useState(false); // about
//   const [showTextbox2, setShowTextbox2] = useState(false); // education
//   const [showTextbox3, setShowTextbox3] = useState(false); // about
//   const [showTextbox4, setShowTextbox4] = useState(false); // education
//   const [showTextbox5, setShowTextbox5] = useState(false); // about
//   const [showTextbox6, setShowTextbox6] = useState(false); // education
//   const [showTextbox7, setShowTextbox7] = useState(false); // apod

//   // event handling for z-index layering of the boxes for desktop style
//   const [topZIndex, setTopZIndex] = useState(2);
//   const [boxZIndices, setBoxZIndices] = useState({});

//   const bringToFront = (id) => {
//     setTopZIndex((prevTop) => {
//       const newTop = prevTop + 1;

//       setBoxZIndices((prevZIndices) => {
//         const updated = {
//           ...prevZIndices,
//           [id]: newTop,
//         };
//         console.log(`Box ${id} now has z-index ${newTop}`);
//         return updated;
//       });

//       return newTop;
//     });
//   };

//   // Apod scroll stuff maybe if it works
//   const apodRef = useRef(null);

//   const scrollToApod = () => {
//     if (apodRef.current) {
//       window.scrollTo({
//         top: apodRef.current.offsetTop,
//         behavior: 'smooth'
//       });
//     }
//   };

//   useEffect(() => {
//     // Set isVisible to true after a short delay to gradually reveal the intro text
//     const timeoutId = setTimeout(() => {
//       setIsVisible(true);
//     }, 700); // Adjust the delay as needed

//     // Clear the timeout on component unmount to prevent memory leaks
//     return () => clearTimeout(timeoutId);
//   }, []);

//   return (
    
//     <div style={{
//       background: 'linear-gradient(to bottom, #b3eeff, #ffffff)', position: 'relative'
//     }}>
//       {/* <StarsBackground /> */}
//       <div
//         style={{
//           display: 'flex',
//           justifyContent: 'center',  // horizontal center
//           alignItems: 'center',      // vertical center
//           position: 'relative',      // to contain absolute children if needed
//         }}
//       >
//       <Box sx={{ position: 'relative', display: 'inline-block', marginTop: '60px' }}>
//       {/* Header/Bezel */}
//       <Box
//         sx={{
//           position: 'absolute',
//           top: '75px',
//           left: '0px',
//           width: 'calc(100% + 0px)', // or a fixed width if needed
//           backgroundColor: 'black',
//           color: 'white',
//           padding: '4px 20px',
//           borderRadius: '17px 17px 0 0',
//           fontWeight: 500,
//           fontFamily: 'Courier',
//           fontSize: '0.875rem',
//           userSelect: 'none',
//           zIndex: 1,
//           display: 'flex',
//           justifyContent: 'flex-start',
//           alignItems: 'center',
//         }}
//       >
//         System.out.println("Home");
//       </Box> 
//       <Box sx={{ position: 'relative', marginTop: '75px', padding: '50px 75px', paddingBottom: '30px', backgroundColor: 'white', color: theme.palette.common.white, border: '3px solid black', borderRadius: '17px', borderColor: 'black', fontFamily: 'Nunito, sans-serif', fontWeight: 700 }}>
//           <Typography
//         variant="h2"
//         gutterBottom
//         sx={{
//           paddingTop: '10px',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           fontFamily: 'Nunito, sans-serif', fontWeight: 700 
//         }}
//         className="intro-text color-changing"
//       >
//         Hi! I'm Vea. It's nice to meet you!
//       </Typography>

      
//       </Box>
//       </Box>
      
//     </div>

//     <Tooltip title="Space!">
//         <button
//           onClick={() => setShowTextbox7(true)}
//           style={{
//             position: 'absolute',
//             top: '110px',
//             right: '210px',
//             width: '80px',
//             height: '80px',
//             borderRadius: '50%',
//             backgroundColor: 'transparent',
//             border: 'none',
//             color: 'white',
//             cursor: 'pointer',
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             fontWeight: 'bold',
//             fontSize: '100px',
//             transform: 'rotate(15deg)',
//             transition: 'transform 0.3s ease',
//             padding: 0,
//             zIndex: 2,
//           }}
//           aria-label="Open Space Info"
//           onMouseEnter={e => e.currentTarget.style.transform = 'rotate(35deg)'}
//           onMouseLeave={e => e.currentTarget.style.transform = 'rotate(15deg)'}
//         >
//           🪐
//         </button>
//       </Tooltip>

//       {showTextbox7 && (
//             <DraggableTB>
//             <div className="relative w-[900px] h-[600px]"
//             style={{ zIndex: boxZIndices["box7"] || 1, position: "absolute" }}
//             onMouseDown={() => bringToFront("box7")}>
//               {/* Header Bezel */}
//               <div className="absolute top-0 left-0 w-full bg-gray-800 text-white pl-4 pr-4 py-3 rounded-t-xl font-mono text-sm z-10 flex justify-between items-center drag-handle cursor-move">
//                 <div>cout{'<<'}"NASA Astronomy Picture of the Day"{'<<'}endl;</div>
//                 <button
//                   onClick={() => setShowTextbox7(false)}
//                   className="text-red-500 font-bold hover:text-red-700 transition text-xl"
//                   aria-label="Close"
//                 >
//                   X
//                 </button>
//               </div>

//               {/* Main Box */}
//               <div className="bg-white border-2 border-gray-800 shadow-lg rounded-xl p-6 h-full flex flex-col">
//                 <div className="overflow-y-auto flex-grow">
//                   <Apod />
//                 </div>
//               </div>
//             </div>
//             </DraggableTB>
//           )}

//       <Typography sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '40px', marginBottom: '10px', color: '#003046'}} variant="h4" gutterBottom className={isVisible ? 'fade-in intro-text' : 'intro-text'} style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 600 }}>
//          I'm passionate about:
//       </Typography>

//       <TextRotator
//         texts={['Quantum Computing', 'Machine Learning', 'Algorithm Design', 'Web Development']}
//         interval={3000}
//         className="intro-text other-color-changing"
//       />

//       <div className="flex justify-center gap-8 p-8">
//         {/*About button*/}
//         <button
//             onClick={() => setShowTextbox1(true)}
//             className="px-4 py-2 bg-blue-600 text-white rounded"
//           >
//             About
//         </button>

//         {/*About button*/}
//         <button
//             onClick={() => setShowTextbox2(true)}
//             className="px-4 py-2 bg-blue-600 text-white rounded"
//           >
//             Education
//         </button>

//         {/*About button*/}
//         <button
//             onClick={() => setShowTextbox1(true)}
//             className="px-4 py-2 bg-blue-600 text-white rounded"
//           >
//             Experience
//         </button>

//         {/*About button*/}
//         <button
//             onClick={() => setShowTextbox1(true)}
//             className="px-4 py-2 bg-blue-600 text-white rounded"
//           >
//             Research
//         </button>
        
//         {/*About button*/}
//         <button
//             onClick={() => setShowTextbox1(true)}
//             className="px-4 py-2 bg-blue-600 text-white rounded"
//           >
//             Affiliations
//         </button>
//         {/*About button*/}
//         <button
//             onClick={() => setShowTextbox1(true)}
//             className="px-4 py-2 bg-blue-600 text-white rounded"
//           >
//             Hobbies
//         </button>
//       </div>

//       {showTextbox1 && (
//         <DraggableTB>
//         <div className="relative w-[800px] h-[570px]"
//         style={{ zIndex: boxZIndices["box1"] || 1, position: "absolute" }}
//         onMouseDown={() => bringToFront("box1")}
//         >
//           {/* Header Bezel */}
//           <div className="absolute -top-0 left-0 w-full bg-gray-800 text-white pl-4 py-3 rounded-t-xl font-mono text-sm z-10 flex justify-start items-center drag-handle cursor-move">
//             printf("About\n");
//           </div>

//           {/* Main Box */}
//           <div className="bg-white border-2 border-gray-800 shadow-lg rounded-xl p-6 h-full">
//             <div className="flex justify-between items-center mb-4">
//               <button
//                 onClick={() => setShowTextbox1(false)}
//                 className="absolute top-12 right-9 text-red-500 font-bold hover:text-red-700 transition"
//                 aria-label="Close"
//               >
//                 X
//               </button>
//             </div>
//             <About scrollToApod={scrollToApod} />
//           </div>
//         </div>
//         </DraggableTB>
//       )}

//       {showTextbox2 && (
//         <DraggableTB>
//         <div className="relative w-[800px] h-[570px]"
//         style={{ zIndex: boxZIndices["box2"] || 1, position: "absolute" }}
//         onMouseDown={() => bringToFront("box2")}
//         >
//           {/* Header Bezel */}
//           <div className="absolute -top-0 left-0 w-full bg-gray-800 text-white pl-4 py-3 rounded-t-xl font-mono text-sm z-10 flex justify-start items-center drag-handle cursor-move">
//             print("Education")
//           </div>

//           {/* Main Box */}
//           <div className="bg-white border-2 border-gray-800 shadow-lg rounded-xl p-6 h-full">
//             <div className="flex justify-between items-center mb-4">
//               <button
//                 onClick={() => setShowTextbox2(false)}
//                 className="absolute top-12 right-9 text-red-500 font-bold hover:text-red-700 transition"
//                 aria-label="Close"
//               >
//                 X
//               </button>
//             </div>

//           </div>
//         </div>
//         </DraggableTB>
//       )}



//       <div className="flex justify-center gap-8 p-8">

//         {/* Experience */}
//         <div className="relative inline-block">
//           <button
//             onClick={() => setShowTextbox3(true)}
//             className="px-4 py-2 bg-blue-600 text-white rounded"
//           >
//             Experience
//           </button>

//           {showTextbox3 && (
//             <DraggableTB>
//             <div className="relative w-[800px] h-[570px]">
//               {/* Header Bezel */}
//               <div className="absolute -top-0 left-0 w-full bg-gray-800 text-white pl-4 py-3 rounded-t-xl font-mono text-sm z-10 flex justify-start items-center drag-handle cursor-move">
//                 console.log("Experience")
//               </div>

//               {/* Main Box */}
//               <div className="bg-white border-2 border-gray-800 shadow-lg rounded-xl p-6 h-full">
//                 <div className="flex justify-between items-center mb-4">
//                   <button
//                     onClick={() => setShowTextbox3(false)}
//                     className="absolute top-12 right-9 text-red-500 font-bold hover:text-red-700 transition"
//                     aria-label="Close"
//                   >
//                     X
//                   </button>
//                 </div>

//               </div>
//             </div>
//             </DraggableTB>
//           )}
//         </div>

//         {/* Research */}
//         <div className="relative inline-block">
//           <button
//             onClick={() => setShowTextbox4(true)}
//             className="px-4 py-2 bg-blue-600 text-white rounded"
//           >
//             Research
//           </button>

//           {showTextbox4 && (
//             <DraggableTB>
//             <div className="relative w-[800px] h-[570px]">
//               {/* Header Bezel */}
//               <div className="absolute -top-0 left-0 w-full bg-gray-800 text-white pl-4 py-3 rounded-t-xl font-mono text-sm z-10 flex justify-start items-center drag-handle cursor-move">
//                 julia{'>'} Research
//               </div>

//               {/* Main Box */}
//               <div className="bg-white border-2 border-gray-800 shadow-lg rounded-xl p-6 h-full">
//                 <div className="flex justify-between items-center mb-4">
//                   <button
//                     onClick={() => setShowTextbox4(false)}
//                     className="absolute top-12 right-9 text-red-500 font-bold hover:text-red-700 transition"
//                     aria-label="Close"
//                   >
//                     X
//                   </button>
//                 </div>

//               </div>
//             </div>
//             </DraggableTB>
//           )}
//         </div>

//         {/* Affiliations */}
//         <div className="relative inline-block">
//           <button
//             onClick={() => setShowTextbox5(true)}
//             className="px-4 py-2 bg-blue-600 text-white rounded"
//           >
//             Affiliations
//           </button>

//           {showTextbox5 && (
//             <DraggableTB>
//             <div className="relative w-[800px] h-[570px]">
//               {/* Header Bezel */}
//               <div className="absolute -top-0 left-0 w-full bg-gray-800 text-white pl-4 py-3 rounded-t-xl font-mono text-sm z-10 flex justify-start items-center drag-handle cursor-move">
//                 from qiskit.circuit import Affiliations
//               </div>

//               {/* Main Box */}
//               <div className="bg-white border-2 border-gray-800 shadow-lg rounded-xl p-6 h-full">
//                 <div className="flex justify-between items-center mb-4">
//                   <button
//                     onClick={() => setShowTextbox5(false)}
//                     className="absolute top-12 right-9 text-red-500 font-bold hover:text-red-700 transition"
//                     aria-label="Close"
//                   >
//                     X
//                   </button>
//                 </div>

//               </div>
//             </div>
//             </DraggableTB>
//           )}
//         </div>

//         {/* Hobbies */}
//         <div className="relative inline-block">
//           <button
//             onClick={() => setShowTextbox6(true)}
//             className="px-4 py-2 bg-blue-600 text-white rounded"
//           >
//             Hobbies
//           </button>

//           {showTextbox6 && (
//             <DraggableTB>
//             <div className="relative w-[800px] h-[570px]">
//               {/* Header Bezel */}
//               <div className="absolute -top-0 left-0 w-full bg-gray-800 text-white pl-4 py-3 rounded-t-xl font-mono text-sm z-10 flex justify-start items-center drag-handle cursor-move">
//                 cout print idk it might lead to a different page
//               </div>

//               {/* Main Box */}
//               <div className="bg-white border-2 border-gray-800 shadow-lg rounded-xl p-6 h-full">
//                 <div className="flex justify-between items-center mb-4">
//                   <button
//                     onClick={() => setShowTextbox6(false)}
//                     className="absolute top-12 right-9 text-red-500 font-bold hover:text-red-700 transition"
//                     aria-label="Close"
//                   >
//                     X
//                   </button>
//                 </div>

//               </div>
//             </div>
//             </DraggableTB>
//           )}
//         </div>
//       </div>

//       {/* <About scrollToApod={scrollToApod}/> */}
//       {/* <Education />
//       <Experience />
//       <Research /> */}

//       <Typography sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '30px', marginBottom: '10px', color: theme.palette.common.white}} variant="h6" gutterBottom className={isVisible ? 'fade-in intro-text' : 'intro-text'} style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 200 }}>
//          You can reach out to me via LinkedIn or email, or check out my GitHub:
//       </Typography>
      
//       <Contact />
      
//     </div>

//   );
// };

// export default Home;