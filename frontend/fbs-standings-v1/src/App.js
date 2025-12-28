import './App.css';
import api from './api/axiosConfig';
import { useState, useEffect, use } from 'react';

function App() {

  const [teams, setTeams] = useState([]);

  const getTeams = async () => {
    try {
      const response =  await api.get("/api/v1/team");

      console.log("Response data:", response.data);

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
      
    </div>
  );
}

export default App;
