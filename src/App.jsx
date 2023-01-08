import './App.scss';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './containers/HomePage/HomePage';
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

  const properties = [{
    address: "",
    images: {
      "main room": "",
      "dining room": "",
      kitchen: "",
      bathroom: "",
      garden: "",
      bedrooms: {
        "master bedroom": "",
        "second bedroom": "",
        "third bedroom": ""
      }
    },
    price: 0,
    rating: 0,
  }]



  return (
    <Router>
      <div className="App">
        <Nav/>
        <Routes>
          <Route path='/home'
            element={<HomePage properties={properties}/>}>
          </Route>
          <Route path='#' 
            element={"#"}>
          </Route>
          <Route path='/upload' 
            element={<NewProperty properties={properties}/>}>
          </Route>
          <Route path='#' 
            element={"#"}>
          </Route>
          <Route path='#' 
            element={"#"}>
          </Route>
          <Route path='/' 
            element={<LandingPage/>}>
          </Route>
        </Routes>      
      </div>
    </Router>
  );
}

export default App;
