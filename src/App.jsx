import './App.scss';
import NewUserForm from './components/NewUserForm/NewUserForm';
import RatingDropdown from './components/RatingDropdown/RatingDropdown';
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

  const options = [
    {value: 1, label: "1"},
    {value: 2, label: "2"},
    {value: 3, label: "3"},
    {value: 4, label: "4"},
    {value: 5, label: "5"},
    {value: 6, label: "6"},
    {value: 7, label: "7"},
    {value: 8, label: "8"},
    {value: 9, label: "9"},
    {value: 10, label: "10"}
  ];

  return (
    <div className="App">
      <RatingDropdown onChange={(value) => console.log(value)} placeHolder="Select..." options={options}/>
    </div>
  );
}

export default App;
