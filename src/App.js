
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import './App.css';
import Home from "./pages/home";
import Register from './pages/Register';



function App() {
  return (
    <div>
    <Router>
        <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/reg" element={<Register />}></Route>    
        </Routes>
    </Router>

    </div>
  );
}

export default App;
