import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CreateBlog from './CreateBlog';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/create' component={CreateBlog} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;


