import './App.scss';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import HomePage from './containers/HomePage/HomePage';
import LandingPage from './containers/LandingPage/LandingPage';
import Nav from './containers/Nav/Nav';
import NewProperty from './containers/NewProperty/NewProperty';
import { getDatabase, ref, onValue, } from "firebase/database";
import {  getAuth, onAuthStateChanged,  } from "firebase/auth";
import UserProfile from './containers/UserProfile/UserProfile';


function App() {
  const db = getDatabase();
  const auth = getAuth();

  const [properties, setProperties] = useState([])
  const [profile, setProfile] = useState({});

  
  
  onAuthStateChanged(auth, user => {
    
    if (user) {
    //getProperties();
    } else {
      
    }
  });


  const getProperties = () => {
      const propertiesRef = ref(db, "properties/");
      onValue(propertiesRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
    setProperties(data)
  })
  }

  // const setUpProperties = (data) => {
  //   setProperties(data);
  // };

  // const propertiesRef = ref(db, "properties/");
  //     onValue(propertiesRef, (snapshot) => {
  //       setUpProperties(snapshot.val)
  //     })


  useEffect(() => {
    getProperties();
  }, []);


  const nextIndex = properties.length


  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path='/home'
            element={<HomePage properties={properties}/>}>
          </Route>
          <Route path='#' 
            element={"#"}>
          </Route>
          <Route path='/upload' 
            element={<NewProperty nextIndex={nextIndex} />}>
          </Route>
          <Route path='/profile' 
            element={<UserProfile />}>
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
