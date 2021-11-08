import "./App.css";
import BannerSlider from "./components/BannerSlider/BannerSlider";
import ProductCategorySlider from "./components/CategorySlider/ProductCategorySlider";
import ServicesSlider from "./components/HSS/ServicesSlider";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//import BrandsSlider from "./components/Brands/BrandsSlider";
import BlogSlider from "./components/HealthBlog/BlogSlider";
import BlogMobileSlider from "./components/HealthBlog/BlogMobileSlider";
import DesktopSlider from "./components/HealthBlog/DesktopSlider";
import MegaManu from "./components/MegaManu/MegaManu";
import BannerGridSample from "./components/BannerSlider/BannerGridSample";
import NavBarMain from "./components/NavBar/NavBarMain";
import SlotSlider from "./components/SlotPikker/SlotSlider";
function App() {
  return (
    <div className='App'>
      <Router>
        <Link to='/Category'> Category Slider</Link>
        <Link to='/HSS'> HSS</Link>
        <Link to='/Brands'> Brands</Link>
        <Link to='/Blog'>Health-Blog</Link>
        <Link to='/BlogMobile'>BlogMobile</Link>
        <Link to='/Desktop'>Desktop</Link>
        <Link to='MegaManu'>MegaMenu</Link>
        <Link to='Gridsample'>BannerMainGrid</Link>
        <Link to='NavBar'>NavBar</Link>
        <Link to="SlotSlider">slot Slider</Link>

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
          {/* <Route path='/Brands'>
            <BrandsSlider />
          </Route> */}
          <Route path='/Blog'>
            <BlogSlider />
          </Route>
          <Route path='/BlogMobile'>
            <BlogMobileSlider />
          </Route>
          <Route path='/Desktop'>
            <DesktopSlider />
          </Route>
          <Route path='/MegaManu'>
            <MegaManu />
          </Route>
          <Route path='/Gridsample'>
            <BannerGridSample />
          </Route>
          <Route path='/NavBar'>
            <NavBarMain />
          </Route>
          <Route path='/SlotPikker'>
            <SlotSlider />
          </Route>
          ;
        </Switch>
      </Router>
    </div>
  );
}

export default App;
