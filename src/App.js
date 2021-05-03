
import './App.css';
import Forex from "./Api"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="vrei.jpg"  alt=""/>
        <p>
        Szia Bazsi , ez mukodik ahogy latom :D ! Orulok ,hogy megnezted :D
         
        </p>
        Ez a szoveg egy rest API-bol szarmazik :D itt a link :"https://api.agify.io/?name=bella"
        <Forex/>
      </header>
     
    </div>
  );
}



export default App;
