import "./App.css";
import BannerSlider from "./components/BannerSlider/BannerSlider";
import CategorySlider from "./components/CategorySlider/CategorySlider";
import Services from "./components/HSS/Services"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route  path='/Category'>
            <CategorySlider />
          </Route>
          <Route exact path='/'>
            <BannerSlider />
          </Route>
          <Route path="/HSS">
            <Services />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
