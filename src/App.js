import React from 'react';
import BaseLayout from "./components/BaseLayout";
import {BrowserRouter} from "react-router-dom";
import './App.module.scss';

function App() {
   return (
      <div>
         <BrowserRouter>
            <BaseLayout/>
         </BrowserRouter>
      </div>
   );
}


export default App;
