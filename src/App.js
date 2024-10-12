//css styling
import './App.css'
//component
import { BrowserRouter as Routers, Route, Switch, Redirect} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import { useAuthContext } from './Hooks/useAuthContext';



function App() {
  const { authIsReady, user } = useAuthContext()
  return (
    <div className="App">
      {authIsReady && (
      <Routers>
      <Navbar/>
      <Switch>
        <Route exact path='/' >
          {!user && <Redirect to="/Login" />}
          {user &&  <Home />}
        </Route>
        <Route path="/Login">
        {!user &&  <Login /> }
        {user && <Redirect to="/"/>}
        </Route>
        <Route path="/Signup" >    
        {!user &&  <Signup /> }   
        {user && <Redirect to="/"/>}
        </Route>
      </Switch>
      </Routers>
      )}
    </div>
    
  );
}

//export NODE_OPTIONS=--openssl-legacy-provider
export default App
