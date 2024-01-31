import { Route, Routes } from 'react-router-dom'
import LandingPage from '../pages/landingPage'


const AppRoute = () => {

  return (
    <Routes>
        <Route path='/' index element={<LandingPage/>}/>
    </Routes>
  )
}

export default AppRoute
