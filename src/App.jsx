import React from "react";
import './App.css';
import Logo from "./components/Logo";
import Fuertes from "./components/Fuertes";
import Extras from "./components/Extras";
//import Total from "./components/Total";
import { Provider } from "./Context";
import { fuertes, sides, drinks } from "./data";


function App() {
  return (
    <Provider>
        <div className="menu">
      <Logo />
      <Extras type="ENTRADAS" items={sides} />
      
      <aside className="aside">
          <Extras type="DEL HUERTO" items={sides} />
          <Extras type="SOPAS Y ARROCES" items={drinks} />
      </aside>
      <Fuertes meals={fuertes} />
     
      </div>
    </Provider>
  );
}

export default App;
