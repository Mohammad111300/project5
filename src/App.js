import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar"
import LeftBar from "./components/leftBar/LeftBar"
import RightBar from "./components/rightBar/RightBar";
import './style.scss';
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext"


function App() {

  const {currentUser} = useContext(AuthContext);

  const { darkMode } = useContext(DarkModeContext);

  const Layout = () => {
    return(
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar/>
        <div style={{display: "flex"}}>
          <LeftBar/>
          <div style={{flex: 6}}>
            <Outlet/>
          </div >
          <RightBar/>
        </div>
      </div>
    )
  }

  const ProtectedRoute = ({children}) => {
    if(!currentUser){
      return <Navigate to='/login' />
    }
    else{
      return children
    }
  }


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProtectedRoute><Layout/></ProtectedRoute>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/profile/:id" element={<Profile/>}/>
        </Route>
        <Route path="/login" element={<Login/>}/>  
        <Route path="/register" element={<Register/>}/>  
      </Routes>  
    </div>
  );
}

export default App;
