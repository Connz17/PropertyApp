import './App.scss';
import NewUserForm from './components/NewUserForm/NewUserForm';
import SearchBox from './components/SearchBox/SearchBox';
import SignInForm from './components/SignInForm/SignInForm';
import LandingPage from './containers/LandingPage/LandingPage';
import Nav from './containers/Nav/Nav';

function App() {

  // const [user, setUser] = useState({
  //   userName: "",
  //   email: "",
  //   password: "",
  //   image:""
  // });

  return (
    <div className="App">
      <LandingPage/>
    </div>
  );
}

export default App;
