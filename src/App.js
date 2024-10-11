//css styling
import './App.css'
//component
import { BrowserRouter as Routers, Route, Redirect, Link, Switch} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';


function App() {
  return (
    <div className="App">
      <Routers>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path="/Login" component={Login}/>
        <Route path="/Signup" component={Signup}/>
        <Route path="/*">
        <Redirect to="/" />
        </Route>
      </Switch>
      </Routers>
     

    </div>
  );
}

//export NODE_OPTIONS=--openssl-legacy-provider

export default App
