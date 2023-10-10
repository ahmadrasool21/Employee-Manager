import logo from "./logo.svg";
// import "./App.css";
import Api from "./components/Api";
import Post from "./components/Post";
import EmployeesData from "./components/EmployeesData";
import UserProvider from "./components/UserProvider";

function App() {
  return (
    <div className="App">
      {/* <Api /> */}
      {/* <Post /> */}
      {/* <EmployeesData /> */}
      <UserProvider />
    </div>
  );
}

export default App;
