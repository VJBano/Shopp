import { Container } from "@mui/material"

import { Outlet } from "react-router-dom"


function App() {
  

  return ( 
      <Container maxWidth={false} disableGutters sx={{ display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"green"}}>
        <Outlet/>
      </Container>
      
  )
}

export default App
