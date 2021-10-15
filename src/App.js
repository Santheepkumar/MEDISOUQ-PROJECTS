import "./App.css";
import BannerSlider from "./components/BannerSlider/BannerSlider";
import ProductCategorySlider from "./components/CategorySlider/ProductCategorySlider";
import ServicesSlider from "./components/HSS/ServicesSlider";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BrandsSlider from "./components/Brands/BrandsSlider";

function App() {
  return (
    <div className='App'>
      <Router>
        <Link to='/Category'> Category Slider</Link>
        <Link to='/HSS'> HSS</Link>
        <Link to='/Brands'> Brands</Link>

        <Switch>
          <Route path='/Category'>
            <ProductCategorySlider />
          </Route>
          <Route exact path='/'>
            <BannerSlider />
          </Route>
          <Route path='/HSS'>
            <ServicesSlider />
          </Route>
          <Route path='/Brands'>
            <BrandsSlider />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
