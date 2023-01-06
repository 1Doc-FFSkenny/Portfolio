import About from "./Components/About";
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

      <SocialLinks/>
    </div>
  );
}

export default App;
