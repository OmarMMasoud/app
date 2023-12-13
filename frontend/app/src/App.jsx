import React from 'react';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';

//components
import Sidebar from './components/Sidebar';

//pages
import Home from "./pages/Main";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Clints from "./pages/Client";




const App = () => {
 return (
    <Router>
      <div className="app">
       <Sidebar/>

       <div className="content">
        <Switch>
          <Route path="/Products" Component={Products} element={<Products/>}><Products/></Route>
          <Route path="/Orders" Component={Orders}><Orders/></Route>
          <Route path="/Clints" Component={Clints}><Clints/></Route>
          <Route extact path="/" Component={Home}><Home/></Route>
        </Switch>
       </div>
      </div>
    </Router>
 );
};

export default App;