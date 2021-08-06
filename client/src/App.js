import './App.css';
import Main from "./components/Main"
import Nav from './components/Nav';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
function App() {
  return (
    < Router>
    <div>
     <Nav/>
     <Switch>
       <Route exact path="/" component={Home}/>
       <Route exact path= "/saved" component={Saved}/>
       <Route/>
     </Switch>
    </div>
    </Router>
  );
}

export default App;
