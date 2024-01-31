import { Route, Routes } from 'react-router-dom'
import LandingPage from '../pages/landingPage'


const AppRoute = () => {

  return (
    <Routes>
        <Route path='/vanz-shopp/' index element={<LandingPage/>}/>
    </Routes>
  )
}

export default AppRoute
