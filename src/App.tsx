import { Container } from "@mui/material"
import AppRoute from "./routes/AppRoute"


function App() {
  

  return ( 
      <Container maxWidth={false} disableGutters sx={{ display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"green"}}>
        <AppRoute/>
      </Container>
      
  )
}

export default App
