import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import './assets/scss/App.scss';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import SkinCare from './Pages/Facials/SkinCare';
import Massage from './Pages/Massage/Massage';
import Nails from './Pages/Nails/Nails';
import Waxing from './Pages/Waxing/Waxing';
import Faq from './Pages/Faq/Faq';
import Privacy from './Pages/Privacy/Privacy';
import Specials from './Pages/Specials/Specials';
import data from './siteData.json';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home pageData={data.home} />
        </Route>
        <Route path="/contact" component={Contact} />
        <Route path="/skin-care">
          <SkinCare pageData={data.skinCare} />
        </Route>
        <Route path="/massage" >
          <Massage pageData={data.massage} />
        </Route>
        <Route path="/nails">
          <Nails pageData={data.nails} />
        </Route>
        <Route path="/waxing">
          <Waxing pageData={data.waxing} />
        </Route>
        <Route path="/faq">
          <Faq pageData={data.faqs} />
        </Route>
        <Route path="/privacy" component={Privacy} />
        <Route path="/specials">
          <Specials pageData={data.specials} />
        </Route>
      </Switch>
    </BrowserRouter>
  ); 
}

export default App;
