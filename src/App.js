//import logo from './logo.svg';
import './App.css';
import Home from './pages/clientpages/homepage/home';
import Clienthome from './pages/clientpages/clientpage/clienthome';
import { Routes,Route} from "react-router-dom";
import Login from './pages/Login/Login';
import About from './pages/about/about';
import Clientindex from './pages/clientpages/clienthomepage/clientindex';
import Clientprofile from './pages/clientpages/clientprofilepage/clientprofile';
import Clientbookinghistory from './pages/clientpages/clienthistoryofbooking/clientbookinghistory';
import Register from './pages/Registraation page/Register';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route index element={<About/>} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="/clienthome" element={<Clienthome/>} > 
        <Route index element={<Clientindex/>} />
        <Route path="profile" element={<Clientprofile/>} />
        <Route path="bookinhistory" element={<Clientbookinghistory />} />
        </Route>
      </Routes>
     
    </div>
  );
}

export default App;
