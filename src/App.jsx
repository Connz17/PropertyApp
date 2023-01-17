import './App.scss';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import HomePage from './containers/HomePage/HomePage';
import SearchBox from './components/SearchBox/SearchBox';
import SignInForm from './components/SignInForm/SignInForm';
import LandingPage from './containers/LandingPage/LandingPage';
import Nav from './containers/Nav/Nav';
import NewProperty from './containers/NewProperty/NewProperty';
import pic from "./images/logo.svg";
import { getDatabase, ref, set, onValue, DataSnapshot } from "firebase/database";
import UserProfile from './containers/UserProfile/UserProfile';

function App() {
  const db = getDatabase();

  const [profile, setProfile] = useState({
    userName: "JoeTheMan",
    email: "joe@example.com",
    password: "Password!",
    image: pic,
  });

  const propertiesRef = ref(db, "properties/");
  onValue(propertiesRef, (DataSnapshot) => {
    const data = DataSnapshot.val();
    console.log(data);
  })

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

  const writeDataToDb = () => {
    const reference = ref(db, "properties/");

    set(reference, 
      [{
      address: "",
      images: {
        main: "",
        dining: "",
        kitchen: "",
        bathroom: "",
        garden: "",
        bedrooms: {
          master: "",
          second: "",
          third: "",
          fourth: ""
        }
    },
      description: "",
      price: 0,
      rating: 0,
    },
    {
      address: "",
      images: {
        main: "",
        dining: "",
        kitchen: "",
        bathroom: "",
        garden: "",
        bedrooms: {
          master: "",
          second: "",
          third: "",
          fourth: ""
        }
      },
      description: "",
      price: 0,
      rating: 0,
    },
    {
      address: "",
      images: {
        main: "",
        dining: "",
        kitchen: "",
        bathroom: "",
        garden: "",
        bedrooms: {
          master: "",
          second: "",
          third: "",
          fourth: ""
        }
      },
      description: "",
      price: 0,
      rating: 0,
    }]);
  } 

  //writeDataToDb();

  return (
    <Router>
      <div className="App">
        <Nav profile={profile}/>
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
          <Route path='/profile' 
            element={<UserProfile profile={profile} setProfile={setProfile}/>}>
          </Route>
          <Route path='#' 
            element={"#"}>
          </Route>
          <Route path='/' 
            element={<LandingPage profile={profile} setProfile={setProfile}/>}>
          </Route>
        </Routes>      
      </div>
    </Router>
  );
}

export default App;
