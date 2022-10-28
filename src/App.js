import './App.css';
import Home from "./component/Home.js"
import Navigation from "./component/navbar.js"
import "bootstrap/dist/css/bootstrap.min.css"
import Projects from "./component/Projects.js"
import About from "./component/About.js"
import Contact from "./component/Contact.js"
//import BG from "./component/res/bg.js"
function App() {
  return (
    <div className="App" style={{backgroundColor : "#fff"}}>
      <Navigation />
      <Home id = "home" /> 
      <Projects />
      <About />
      <Contact id = "contactus" />
    </div>
  );
}

export default App;
