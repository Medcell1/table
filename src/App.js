import { Route, BrowserRouter  as Router, Routes, } from 'react-router-dom';
import './App.css';
import Timetable from './table';
import LoginPage from './loginpage';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<LoginPage/>}/>
          <Route path='/table' element={<Timetable/>}/>

          
        </Routes>
      </Router>
      <Timetable/>
    </div>
  );
}

export default App;
