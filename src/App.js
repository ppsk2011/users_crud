import logo from './logo.svg';
import './App.css';
import MoviesDashboard from './components/MoviesDashboard'
import AddMovie from './components/AddMovie'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Users from './components/UsersComponent'
function App() {
  return (
    <Router>
    <div className="App">
     {/* <MoviesDashboard>
     <div>Test , this is a div passed as a child to an app element </div>
     <div>Test1 , this is a div passed as a child to an app element </div>
     </MoviesDashboard> */}
<Users/>
      <Switch>
          <Route path="/addmovie" component={AddMovie} />
          <Route exact path="/dashboard" component={MoviesDashboard} />
          {/* <Route exact path="/" component={MoviesDashboard} /> */}
          {/* <Route path="/category" component={Category} /> */}
          {/* <Route path="/products" component={Products} /> */}
        </Switch>
      
    </div>
    </Router>
  );
}

export default App;
