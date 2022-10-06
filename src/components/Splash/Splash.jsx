import { Box, Button, Paper, Typography } from '@mui/material'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import React from 'react'
import styles from './Splash.module.css'

const Splash = () => {
  return (
    <>
      <Box sx={{width: "90%", pb: 5}}>
        {/* <Paper sx={{pb: 5, px: 3}}> */}
          <Box  direction='row' sx={{display: "flex"}} justifyContent="space-between">
            <Box sx={{width: "50%", zIndex: "2"}}>
              <Typography variant="h1" sx={{my: 4, lineHeight: 0.9}}>Manufacturing on Demand</Typography>
              <Typography variant="body1" sx={{my: 4, lineHeight: 2}}>from prototyping to production, our facility has the machines, technology, and expertise for all of your metal or plastic manufacturing projects</Typography>
              <Button variant="contained" sx={{width: '15rem', color: '#E9EDDE'}}><CloudUploadIcon sx={{mr: 2}}/>Start Your Quote</Button>
            </Box>
            <Box sx={{ width: "35%", overflow: "hidden"}}>
              <img src="./lathe.svg" style={{height: "100%", width: "auto"}} className="mobile-hide"/>
            </Box>
          </Box>
        {/* </Paper> */}
      </Box>
    </>
  )
}

export default Splash