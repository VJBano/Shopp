import { Container } from "@mui/material"

import LandingPage from "./pages/landingPage"


function App() {
  

  return ( 
      <Container maxWidth={false} disableGutters sx={{ display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"green"}}>
        <LandingPage/>
      </Container>
      
  )
}

export default App
