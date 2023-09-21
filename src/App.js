//import logo from './logo.svg';
import './App.css';
import Home from './pages/homepage/home';
import Clienthome from './pages/clientpage/clienthome';
import { Routes,Route} from "react-router-dom";
import Login from './pages/Login/Login';
import About from './pages/about/about';
import Clientindex from './pages/clienthomepage/clientindex';
import Clientprofile from './pages/clientprofilepage/clientprofile';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route index element={<About/>} />
          <Route path="login" element={<Login />} />
          
        </Route>
        <Route path="/clienthome" element={<Clienthome/>} > 
        <Route index element={<Clientindex/>} />
        <Route path="profile" element={<Clientprofile/>} />
        </Route>
      </Routes>
     
    </div>
  );
}

export default App;
