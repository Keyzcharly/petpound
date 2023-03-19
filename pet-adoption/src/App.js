import React, {useState} from 'react';
import './App.css';
import BottomNav from '../src/components/BottomNav';
import {
  Routes,
  Route,
} from "react-router-dom";
import PetList from '../src/components/PetList';
import CreatePetEntry from '../src/components/CreatePetEntry';
import EditPetEntry from './components/EditPetEntry';


function App() {

  return (
    <div className="App">
      <h1>Pet Adoption</h1>
      <div>
          <Routes>
            <Route exact path="/" element={ <PetList /> } />
            <Route exact path="/addpet" element={ <CreatePetEntry /> } />
            <Route exact path="/editpet/:id" element={ <EditPetEntry /> } />
          </Routes>
      </div>
      <BottomNav />
    </div>
  );
}

export default App;
