import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen'
import Characters from './Screens/Characters'
import Header from './Components/Header'
import MovieDetails from './Screens/MovieDetails'
import CharacterDetails from './Screens/CharacterDetails'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/character/:id' element={<CharacterDetails />} />
        <Route path='/episode/:id' element={<MovieDetails />} />
        <Route path='/characters' element={<Characters />} />
        <Route path='/' element={<HomeScreen />} />
      </Routes>
    </Router>
  )
}

export default App
