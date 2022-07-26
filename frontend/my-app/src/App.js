import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import TopMenuComponent from './component/TopMenuComponent';
import TimerComponent from "./time";
import ListComponent from "./component/List";
import { Route } from "react-router";

function App() {
  return (
    <div className="App">
      <div>
        <Route path ="/" component={ListComponent}/> 
        {/* Router 추가 */}
        <TopMenuComponent>

        </TopMenuComponent>
        <TimerComponent/>
      </div>
    </div>
  );
}

export default App;
