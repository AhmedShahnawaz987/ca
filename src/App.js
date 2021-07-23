import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Aboutus from './Components/Pages/Aboutus';
import Services from './Components/Pages/Services';
import Blogs from './Components/Pages/Blogs';
import Navbar from './Components/Header/Navbar.jsx';
import Contactus from './Components/Pages/Contactus';



function App() {
  return (
    <Router>
    <div className="head">
      
      <Navbar/>
      <Switch>
        <Route exact path="/"> <Header/></Route> 
        <Route  path="/about" ><Aboutus/></Route>
        <Route  path="/services" ><Services/></Route>
        <Route path="/blogs" ><Blogs/></Route>
        <Route path="/contactus" ><Contactus/></Route>
      </Switch>
      <Footer />
      
    
     
     
     
      
      </div>     
      </Router>
  );
}
export default App;
