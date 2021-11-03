import './App.css';
import Addmember  from './components/Addmember'
import {BrowserRouter as Router,Route} from 'react-router-dom';



function App() {
  return (
    <Router>
    <div >
      
      <div id="all">
      <Route path="/add" exact component={Addmember} />  
      </div> 
     
    </div>
    </Router>
  );
}

export default App;
