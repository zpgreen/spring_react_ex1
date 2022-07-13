import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import TopMenuComponent from './component/TopMenuComponent';
import TimerComponent from "./time";

function App() {
  return (
    <div className="App">
      <div>
        <TopMenuComponent>

        </TopMenuComponent>
        <TimerComponent/>
      </div>
    </div>
  );
}

export default App;
