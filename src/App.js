import "./App.css";
import BannerSlider from "./components/BannerSlider/BannerSlider";
import CategorySlider from "./components/CategorySlider/CategorySlider";
import ServicesSlider from "./components/HSS/ServicesSlider";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Router>
        <Link to='/Category'> Category Slider</Link>
        <Link to='/HSS'> HSS</Link>

        <Switch>
          <Route path='/Category'>
            <CategorySlider />
          </Route>
          <Route exact path='/'>
            <BannerSlider />
          </Route>
          <Route path='/HSS'>
            <ServicesSlider />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
