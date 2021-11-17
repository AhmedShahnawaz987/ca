import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Home/Header/Header';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Aboutus from './Components/Pages/Aboutus/Aboutus';
import Services from './Components/Pages/Services/Services';
import Blogs from './Components/Pages/Blogs/Blogs';
import Navbar from './Components/navbar/Navbar.jsx';
import Contactus from './Components/Pages/Contactus/Contactus';
import Error from "./Components/Error/Error";
import BlogsMore from './Components/Pages/Blogs/blogsMore/BlogsMore';
import Home from './Components/Home/Home';

// import Ourteam from './Components/Pages/Ourteam/Ourteam';



function App() {
    return ( 
    <Router>
        <div className = "head" >
          <Navbar />
            <Switch >
             <Route exact path = "/" > < Home /> </Route>   
             <Route path = "/about" > < Aboutus /> </Route>  
             <Route path = "/services" > < Services /> </Route>
              {/* <Route path = "/ourteam" > <Ourteam /> </Route>   */}
             <Route exact path = "/blogs"> < Blogs/> </Route>  
             <Route path="/blogs/:id" component={BlogsMore}/>
             <Route path = "/contactus" > < Contactus /> </Route> 
             < Route path = "*" component = {Error}/> 
            </Switch>  
          <Footer />    
        </div>       
    </Router>
);
}
export default App;