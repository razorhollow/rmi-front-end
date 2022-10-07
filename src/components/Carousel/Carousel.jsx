import { useState, useEffect } from 'react'
import { Box } from '@mui/material'
import capabilities from './capabilities'
import CarouselCard from './CarouselCard'

const Carousel = () => {
  const [capabilityData, setCapabilityData] = useState(capabilities)

  return ( 
    <>
      <Box sx={{ width: "100%", py: "5rem", display: "flex", justifyContent: "space-around", flexWrap: "wrap",  }}>
        {capabilityData.map(capability => 
          <CarouselCard capability={capability} key={capability.index} />
        )}
      </Box>
    </>
  )
}

export default Carousel