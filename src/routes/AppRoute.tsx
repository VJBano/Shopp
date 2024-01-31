import { Route, Routes } from 'react-router-dom'
import LandingPage from '../pages/landingPage'


const AppRoute = () => {

  return (
    <Routes>
        <Route path='/Shopp' index element={<LandingPage/>}/>
    </Routes>
  )
}

export default AppRoute
