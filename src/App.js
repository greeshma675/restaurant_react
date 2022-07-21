import './App.css';
import Home from './components/Home';
import Navfooter from './components/Navfooter';
import NavHeader from './components/NavHeader';
import RestaurantDet from './components/RestaurantDet';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
function App() {
  return (
    // <div className="App">
    //       <NavHeader/>
    //       <Navfooter/>
    //       <Home/>
    // </div>
    <Router>
      <NavHeader/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/details/:id' element={<RestaurantDet/>}/>
      </Routes>
      <Navfooter/>
    </Router>
  );
  
}

export default App;
