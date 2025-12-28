package com.ncaafbs.fbs_standings.team;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api/v1/team")
@CrossOrigin(origins = "http://localhost:3000")
public class TeamController {
    private final TeamService teamService;

    @Autowired
    public TeamController(TeamService teamService) {
        this.teamService = teamService;
    }

    @GetMapping
    public List<Team> getTeams(
            @RequestParam(required = false) String conference,
            @RequestParam(required = false) String name) {

        if (conference != null) {
            return teamService.getTeamsFromConference(conference);
        }
        else if (name != null) {
            return teamService.getTeamsByName(name);
        } else {
            return teamService.getTeams();
        }
    }

    @PostMapping
    public ResponseEntity<Team> createTeam(@RequestBody Team team) {
        Team createdTeam = teamService.createTeam(team);
        return new ResponseEntity<>(createdTeam, HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity<Team> updateTeam(@RequestBody Team team) {
        Team updatedTeam = teamService.updateTeam(team);
        if (updatedTeam != null) {
            return new ResponseEntity<>(updatedTeam, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{teamName}")
    public ResponseEntity<String> deleteTeam(@PathVariable String teamName) {
        teamService.deleteTeam(teamName);
        return new ResponseEntity<>("Player deleted successfully", HttpStatus.OK);
    }
}
