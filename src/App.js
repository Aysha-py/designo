import './App.css';
git st
import Header from './components/Header'

import {  Routes, Route, BrowserRouter} from 'react-router-dom'
import Location from './pages/Location'



function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
        <Routes>
          <Route path ='/' element ={<Header/>}></Route>
          <Route path ='location' element ={<Location/>}></Route>

        </Routes>
      
      </BrowserRouter>
     
    </div>
  );
}

export default App;
