import logo from './logo.svg';
import './App.css';
import { Home } from './Home';
import { About } from './About';
import {Routes,Route} from 'react-router-dom'
function App() {
  return(<>
    <Routes>
      <Route path="/home" element={ <Home />} />
      <Route path="/" element={ <About />} />
      
    </Routes>
  
  </>)
}

export default App;
