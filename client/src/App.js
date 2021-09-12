import "./App.css";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import LandingPg from './components/LandingPg'
import Home from "./components/Home";
import Creator from './components/Creator'
import Details from './components/Details'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Switch>
          <Route exact path="/" component={LandingPg} />
          <Route  exact path="/home" component={Home} />
          <Route  path="/creator" component={Creator} />
          <Route  path="/home/:id" component={Details} />

        </Switch>
       
      </div>
    </BrowserRouter>
  );
}
export default App;
