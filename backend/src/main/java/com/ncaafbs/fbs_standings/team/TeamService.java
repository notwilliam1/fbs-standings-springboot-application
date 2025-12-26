package com.ncaafbs.fbs_standings.team;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Component
public class TeamService {
    private final TeamRepository teamRepository;

    @Autowired
    public TeamService(TeamRepository teamRepository) {
        this.teamRepository = teamRepository;
    }

    public List<Team> getTeams() {
        return teamRepository.findAll();
    }

    public List<Team> getTeamsFromConference(String conference) {
        return teamRepository.findAll().stream()
                .filter(team -> conference.equals(team.getConference()))
                .collect(Collectors.toList());
    }

    public List<Team> getTeamsByName(String searchText) {
        return teamRepository.findAll().stream()
                .filter(team -> team.getName().toLowerCase().contains(searchText.toLowerCase()))
                .collect(Collectors.toList());
    }

    public Team createTeam(Team team) {
        teamRepository.save(team);
        return team;
    }

    public Team updateTeam(Team updatedTeam) {
        Optional<Team> existingTeam = teamRepository.findByName(updatedTeam.getName());

        if (existingTeam.isPresent()) {
            Team teamToUpdate = existingTeam.get();
            teamToUpdate.setName(updatedTeam.getName());
            teamToUpdate.setConference(updatedTeam.getConference());

            teamRepository.save(teamToUpdate);
            return teamToUpdate;
        }
        return null;
    }

    @Transactional
    public void deleteTeam(String teamName) {
        teamRepository.deleteByName(teamName);
    }
}
