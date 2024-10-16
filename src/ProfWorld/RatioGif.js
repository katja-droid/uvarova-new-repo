// import React from 'react';
// import { Box } from '@mui/material';

// const RatioGif = ({ image, backgroundImage, aspectRatio = '66.95%' }) => {
//   return (
//     <Box
//       sx={{
//         position: 'relative',
//         width: '100%',
//         paddingTop: aspectRatio, // Set aspect ratio padding
//         backgroundColor: '#fff',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         overflow: 'hidden',
//         margin: '0 auto', // Center the entire block
        
//       }}
//     >
//       {/* Background Image */}
//       {backgroundImage && (
//         <Box
//           sx={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             width: '100%',
//             height: '100%',
//             backgroundImage: `url(${backgroundImage})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             backgroundRepeat: 'no-repeat',
//             zIndex: 1,
//           borderRadius: '4px'
//           }}
//         />
//       )}

//       {/* GIF Overlay */}
//       <Box
//         sx={{
//           position: 'absolute',
//           bottom: 0, // Align GIF at the bottom
//           left: '50%',
//           transform: 'translateX(-50%)', // Center horizontally
//           width: '100%',
//           height: '92%', // Adjust based on aspect ratio
//           zIndex: 2, // Place the GIF on top of the background
//            boxShadow: '0 2.11px 4.22px rgba(0, 0, 0, 0.08)'
//         }}
//       >
//         <img
//           src={image}
//           alt="Gif"
//           style={{
//             width: '100%', // Fill the container width
//             height: '100%', // Fill the container height
//             objectFit: 'contain', // Ensure the GIF fills and covers the area properly
//           }}
//           className='midShadow'
//         />
//       </Box>
//     </Box>
//   );
// };

// export default RatioGif;
import React from 'react'

const RatioGif = ({image}) => {
  return (
    <img src={image} width="100%"></img>
  )
}

export default RatioGif