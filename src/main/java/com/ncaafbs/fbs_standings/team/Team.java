package com.ncaafbs.fbs_standings.team;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "fbs_standings_from_scraper")
public class Team {
    @Id
    @Column(name = "School", unique = true)
    private String name;
    private int conference_w;
    private int conference_l;
    private int overall_w;
    private int overall_l;
    private int overall_pf;
    private int overall_pa;
    private String overall_home;
    private String overall_away;
    private String overall_streak;
    private String conference;

    public Team() {
    }

    public Team(String name, int conference_w, int conference_l, int overall_w, int overall_l, int overall_pf, int overall_pa, String overall_home, String overall_away, String overall_streak, String conference) {
        this.name = name;
        this.conference_w = conference_w;
        this.conference_l = conference_l;
        this.overall_w = overall_w;
        this.overall_l = overall_l;
        this.overall_pf = overall_pf;
        this.overall_pa = overall_pa;
        this.overall_home = overall_home;
        this.overall_away = overall_away;
        this.overall_streak = overall_streak;
        this.conference = conference;
    }

    public Team(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getConference_w() {
        return conference_w;
    }

    public void setConference_w(int conference_w) {
        this.conference_w = conference_w;
    }

    public int getConference_l() {
        return conference_l;
    }

    public void setConference_l(int conference_l) {
        this.conference_l = conference_l;
    }

    public int getOverall_w() {
        return overall_w;
    }

    public void setOverall_w(int overall_w) {
        this.overall_w = overall_w;
    }

    public int getOverall_l() {
        return overall_l;
    }

    public void setOverall_l(int overall_l) {
        this.overall_l = overall_l;
    }

    public int getOverall_pf() {
        return overall_pf;
    }

    public void setOverall_pf(int overall_pf) {
        this.overall_pf = overall_pf;
    }

    public int getOverall_pa() {
        return overall_pa;
    }

    public void setOverall_pa(int overall_pa) {
        this.overall_pa = overall_pa;
    }

    public String getOverall_home() {
        return overall_home;
    }

    public void setOverall_home(String overall_home) {
        this.overall_home = overall_home;
    }

    public String getOverall_away() {
        return overall_away;
    }

    public void setOverall_away(String overall_away) {
        this.overall_away = overall_away;
    }

    public String getOverall_streak() {
        return overall_streak;
    }

    public void setOverall_streak(String overall_streak) {
        this.overall_streak = overall_streak;
    }

    public String getConference() {
        return conference;
    }

    public void setConference(String conference) {
        this.conference = conference;
    }
}
