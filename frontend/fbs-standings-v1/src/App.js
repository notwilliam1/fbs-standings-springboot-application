import './App.css';
import api from './api/axiosConfig';
import { useState, useEffect, use } from 'react';
import Layout from './components/Layout';
import {Routes, Route} from 'react-router-dom';

function App() {

  const [teams, setTeams] = useState([]);

  const getTeams = async () => {
    try {
      const response =  await api.get("/api/v1/team");

      setTeams(response.data);

    } catch (error) {
      console.log("Error fetching teams:", error);
    }

  }

  useEffect(() => {
    getTeams();
  }, []);

  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={Layout}>
          

        </Route>
      </Routes>
    </div>
  );
}

export default App;
