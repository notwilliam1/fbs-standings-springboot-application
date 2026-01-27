import React, { useState } from 'react';
import api from '../../api/axiosConfig';
import './Standings.css';

const Standings = ({ teams }) => {
  const [selectedConference, setSelectedConference] = useState('All');
  const [sortBy, setSortBy] = useState('overall_w');
  const [showModal, setShowModal] = useState(false);
  const [editingTeam, setEditingTeam] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    conference: '',
    overall_w: 0,
    overall_l: 0,
    conference_w: 0,
    conference_l: 0,
    overall_pf: 0,
    overall_pa: 0,
    overall_home: '',
    overall_away: '',
    overall_streak: ''
  });

  const conferences = ['All', ...new Set(teams.map(team => team.conference).filter(Boolean))];

  const filteredTeams = selectedConference === 'All' 
    ? teams 
    : teams.filter(team => team.conference === selectedConference);

  const sortedTeams = [...filteredTeams].sort((a, b) => {
    if (sortBy === 'overall_w') {
      return b.overall_w - a.overall_w;
    } else if (sortBy === 'conference_w') {
      return b.conference_w - a.conference_w;
    } else if (sortBy === 'overall_pf') {
      return b.overall_pf - a.overall_pf;
    } else if (sortBy === 'overall_pa') {
      return a.overall_pa - b.overall_pa;
    } else if (sortBy === 'overall_home') {
      const parseRecord = (record) => {
        if (!record) return 0;
        const parts = record.split('-');
        return parseInt(parts[0]) || 0;
      };
      return parseRecord(b.overall_home) - parseRecord(a.overall_home);
    } else if (sortBy === 'overall_away') {
      const parseRecord = (record) => {
        if (!record) return 0;
        const parts = record.split('-');
        return parseInt(parts[0]) || 0;
      };
      return parseRecord(b.overall_away) - parseRecord(a.overall_away);
    } else if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    }
    return 0;
  });

  return (
    <div className="standings-container">
      <div className="standings-header">
        <h1>FBS Standings</h1>
        <p>College Football Season Standings</p>
      </div>

      <div className="controls">
        <div className="conference-filter">
          <label>Conference:</label>
          <select value={selectedConference} onChange={(e) => setSelectedConference(e.target.value)}>
            {conferences.map(conf => (
              <option key={conf} value={conf}>{conf}</option>
            ))}
          </select>
        </div>

        <div className="sort-filter">
          <label>Sort by:</label>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="overall_w">Overall Wins</option>
            <option value="conference_w">Conference Wins</option>
            <option value="overall_pf">Points For</option>
            <option value="overall_pa">Points Against</option>
            <option value="overall_home">Home Record</option>
            <option value="overall_away">Away Record</option>
            <option value="name">Team Name</option>
          </select>
        </div>
      </div>

      <div className="teams-grid">
        {sortedTeams.length > 0 ? (
          sortedTeams.map((team, index) => (
            <div key={team.name} className="team-card">
              <div className="team-header">
                <h3>{team.name}</h3>
                <span className="conference-badge">{team.conference || 'N/A'}</span>
              </div>

              <div className="team-stats">
                <div className="stat-row">
                  <div className="stat-item">
                    <span className="stat-label">Overall</span>
                    <span className="stat-value">{team.overall_w}-{team.overall_l}</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Conference</span>
                    <span className="stat-value">{team.conference_w}-{team.conference_l}</span>
                  </div>
                </div>

                <div className="stat-row">
                  <div className="stat-item">
                    <span className="stat-label">Points For</span>
                    <span className="stat-value">{team.overall_pf}</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Points Against</span>
                    <span className="stat-value">{team.overall_pa}</span>
                  </div>
                </div>

                <div className="stat-row">
                  <div className="stat-item">
                    <span className="stat-label">Home Record</span>
                    <span className="stat-value">{team.overall_home}</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Away Record</span>
                    <span className="stat-value">{team.overall_away}</span>
                  </div>
                </div>

                <div className="stat-row full-width">
                  <div className="stat-item">
                    <span className="stat-label">Current Streak</span>
                    <span className="stat-value streak">{team.overall_streak || 'N/A'}</span>
                  </div>
                </div>

                <div className="team-actions">
                  <button className="edit-btn" onClick={() => {
                    setEditingTeam(team);
                    setFormData(team);
                    setShowModal(true);
                  }}>Edit</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="no-data">No teams found</div>
        )}
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{editingTeam ? 'Edit Team' : 'Add New Team'}</h2>
              <button className="close-btn" onClick={() => setShowModal(false)}>×</button>
            </div>
            <form onSubmit={handleSubmitForm} className="team-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Team Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Conference</label>
                  <input
                    type="text"
                    value={formData.conference}
                    onChange={(e) => setFormData({...formData, conference: e.target.value})}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Overall W</label>
                  <input
                    type="number"
                    value={formData.overall_w}
                    onChange={(e) => setFormData({...formData, overall_w: parseInt(e.target.value)})}
                  />
                </div>
                <div className="form-group">
                  <label>Overall L</label>
                  <input
                    type="number"
                    value={formData.overall_l}
                    onChange={(e) => setFormData({...formData, overall_l: parseInt(e.target.value)})}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Conference W</label>
                  <input
                    type="number"
                    value={formData.conference_w}
                    onChange={(e) => setFormData({...formData, conference_w: parseInt(e.target.value)})}
                  />
                </div>
                <div className="form-group">
                  <label>Conference L</label>
                  <input
                    type="number"
                    value={formData.conference_l}
                    onChange={(e) => setFormData({...formData, conference_l: parseInt(e.target.value)})}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Points For</label>
                  <input
                    type="number"
                    value={formData.overall_pf}
                    onChange={(e) => setFormData({...formData, overall_pf: parseInt(e.target.value)})}
                  />
                </div>
                <div className="form-group">
                  <label>Points Against</label>
                  <input
                    type="number"
                    value={formData.overall_pa}
                    onChange={(e) => setFormData({...formData, overall_pa: parseInt(e.target.value)})}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Home Record</label>
                  <input
                    type="text"
                    value={formData.overall_home}
                    onChange={(e) => setFormData({...formData, overall_home: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label>Away Record</label>
                  <input
                    type="text"
                    value={formData.overall_away}
                    onChange={(e) => setFormData({...formData, overall_away: e.target.value})}
                  />
                </div>
              </div>

              <div className="form-group full-width">
                <label>Current Streak</label>
                <input
                  type="text"
                  value={formData.overall_streak}
                  onChange={(e) => setFormData({...formData, overall_streak: e.target.value})}
                />
              </div>

              <div className="form-actions">
                <button type="submit" className="submit-btn">
                  {editingTeam ? 'Update Team' : 'Add Team'}
                </button>
                <button type="button" className="cancel-btn" onClick={() => setShowModal(false)}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );

  async function handleSubmitForm(e) {
    e.preventDefault();
    try {
      if (editingTeam) {
        // Update team
        await api.put('/api/v1/team', formData);
      } else {
        // Create team
        await api.post('/api/v1/team', formData);
      }
      setShowModal(false);
      // Refresh teams
      window.location.reload();
    } catch (error) {
      console.error('Error saving team:', error);
      alert('Error saving team. Please try again.');
    }
  }

  async function handleDeleteTeam(teamName) {
    if (!window.confirm(`Are you sure you want to delete ${teamName}?`)) {
      return;
    }
    try {
      await api.delete(`/api/v1/team/${teamName}`);
      window.location.reload();
    } catch (error) {
      console.error('Error deleting team:', error);
      alert('Error deleting team. Please try again.');
    }
  }
};

export default Standings;
