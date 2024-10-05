/* eslint-disable react/no-unknown-property */
import "./App.css";
import NavBar from './components/NavBar';
import Header from './components/Header';
import About from './components/About';
//import Gellery from './components/Gellery';
import Footer from './components/Footer';
import Skill from './components/Skill';
import Projects from "./components/Projects";
import Contact from './components/Contact'

function App() {
  function load() {
    console.log('App is Working Perfectly');
  }
  return (
    <>
    <div className="bg-[#020202] text-slate-50 box-border font-['Lato'] font-[500] " id='all' onLoad={load}>
       <NavBar/>
       <Header/>
       <About/>
      {/*<Gellery/> */}
       <Skill/>
       <Projects/>
       <Contact/>
       <Footer/>
    </div>
    </>
  );
}

export default App;
