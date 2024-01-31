import { Container } from "@mui/material"
import Header from "../components/header"
import Footer from "../components/footer"
import Main_Board from "../components/main_board"

const LandingPage = () => {

  return (
    <Container maxWidth={false} disableGutters>
      <Header/>
      <Main_Board/>
      <Footer/>
    </Container>
  )
}

export default LandingPage
