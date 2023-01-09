import About from "./Components/About";
import Experience from "./Components/Experience";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Portfolio from "./Components/Portfolio";
import SocialLinks from "./Components/SocialLinks";


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Portfolio/>
      <Experience/>
      
      <SocialLinks/>
    </div>
  );
}

export default App;
