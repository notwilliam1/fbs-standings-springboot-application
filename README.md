# FBS Standings

A fullstack web application for viewing and managing NCAA Division I Football Bowl Subdivision (FBS) team standings, statistics, and records. The application provides an intuitive interface for browsing team performance metrics across different conferences.

## Project Overview

This project consists of a React-based frontend and a Spring Boot backend that work together to display comprehensive college football standings data. The application allows users to filter teams by conference, sort by various statistics, and view detailed team performance metrics.

## Technology Stack

### Backend
- Java with Spring Boot
- Spring Data JPA for database operations
- PostgreSQL for data persistence
- RESTful API architecture

### Frontend
- React 19
- React Router for navigation
- Axios for HTTP requests
- Material UI components
- Bootstrap for responsive design

## Features

### Backend Features
- RESTful API endpoints for team operations
- Filtering teams by conference or name
- Creating, reading, updating, and deleting team records
- Data persistence using PostgreSQL
- CORS configuration for frontend communication

### Frontend Features
- Responsive grid based display of team standings
- Filter teams by conference with dropdown selector
- Sort teams by multiple criteria:
  - Overall wins
  - Conference wins
  - Points scored
  - Points allowed
  - Home record
  - Away record
  - Team name (alphabetical)
- View detailed team statistics including:
  - Conference and overall records
  - Points for and against
  - Home and away records
  - Current winning/losing streak
- Modal based team editing interface

## Data Model

### Team Entity

The Team entity contains the following fields:

- `name` - Team name (Primary key)
- `conference` - Team's conference affiliation
- `conference_w` - Conference wins
- `conference_l` - Conference losses
- `overall_w` - Overall season wins
- `overall_l` - Overall season losses
- `overall_pf` - Points scored
- `overall_pa` - Points allowed
- `overall_home` - Home record (format: W-L)
- `overall_away` - Away record (format: W-L)
- `overall_streak` - Current winning or losing streak

## Future Enhancements

Improvements for future versions:
- User authentication and authorization
- Historical standings tracking
- Advanced statistical analysis and comparisons
- Team performance predictions
- Mobile application version
- Database search optimization
- Additional team metrics and analytics
