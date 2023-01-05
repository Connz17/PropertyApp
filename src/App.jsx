import './App.scss';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import NewUserForm from './components/NewUserForm/NewUserForm';
import SearchBox from './components/SearchBox/SearchBox';
import SignInForm from './components/SignInForm/SignInForm';
import LandingPage from './containers/LandingPage/LandingPage';
import Nav from './containers/Nav/Nav';
import NewProperty from './containers/NewProperty/NewProperty';

function App() {

  // const [user, setUser] = useState({
  //   userName: "",
  //   email: "",
  //   password: "",
  //   image:""
  // });



  return (
    <Router>
      <div className="App">
        <Nav/>
        <Routes>
          <Route>
            
          </Route>
          <Route path='#' 
            element={"#"}>
          </Route>
          <Route path='/upload' 
            element={<NewProperty/>}>
          </Route>
          <Route path='#' 
            element={"#"}>
          </Route>
          <Route path='#' 
            element={"#"}>
          </Route>
          <Route path='#' 
            element={"#"}>
          </Route>
        </Routes>      
      </div>
    </Router>
  );
}

export default App;
