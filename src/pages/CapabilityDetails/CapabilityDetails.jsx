import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
 import { marked } from 'marked'
 import { Box } from '@mui/material'

const CapabilityDetails = (props) => {
  const [capabilityDetails, setCapabilityDetails] = useState({})
  const location = useLocation()
  const [markdown, setMarkdown] = useState(location.state)

  const html = marked.parse(markdown.description)
 
  return (
    <>
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center',
      mt: '20%'
      }} dangerouslySetInnerHTML={{ __html: html }} />
   </>
  )
}

export default CapabilityDetails