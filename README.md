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

## Project Structure

```
fbs-standings/
├── backend/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── com/ncaafbs/fbs_standings/
│   │   │   │       ├── FbSstandingsApplication.java
│   │   │   │       └── team/
│   │   │   │           ├── Team.java
│   │   │   │           ├── TeamController.java
│   │   │   │           ├── TeamRepository.java
│   │   │   │           └── TeamService.java
│   │   │   └── resources/
│   │   │       └── application.properties
│   │   └── test/
│   └── pom.xml
│
├── frontend/
│   └── fbs-standings-v1/
│       ├── public/
│       ├── src/
│       │   ├── components/
│       │   │   ├── Layout.js
│       │   │   ├── Navigation.js
│       │   │   ├── standings/
│       │   │   │   ├── Standings.js
│       │   │   │   └── Standings.css
│       │   │   └── home/
│       │   │       └── Home.js
│       │   ├── api/
│       │   │   └── axiosConfig.js
│       │   ├── App.js
│       │   └── index.js
│       └── package.json
```

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

## Getting Started

### Prerequisites
- Java JDK 11 or higher
- Maven
- Node.js and npm
- PostgreSQL database

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Configure the database connection in `src/main/resources/application.properties`

3. Build and run the Spring Boot application:
   ```bash
   mvn clean install
   mvn spring-boot:run
   ```

The backend will start on `http://localhost:8080`

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend/fbs-standings-v1
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

The frontend will open at `http://localhost:3000`

## API Endpoints

The backend provides the following REST endpoints:

- `GET /api/v1/team` - Get all teams
- `GET /api/v1/team?conference=CONFERENCE_NAME` - Get teams by conference
- `GET /api/v1/team?name=TEAM_NAME` - Get teams by name
- `POST /api/v1/team` - Create a new team
- `PUT /api/v1/team` - Update an existing team
- `DELETE /api/v1/team/{teamName}` - Delete a team

## How to Use

1. Start both the backend and frontend applications
2. The homepage displays all FBS teams with their current standings
3. Use the Conference dropdown to filter teams by their conference
4. Use the Sort dropdown to arrange teams by different statistics
5. Click the Edit button on any team card to modify team information
6. The changes are saved to the database and reflected immediately

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

## Development Notes

The frontend communicates with the backend through Axios HTTP requests. CORS is configured to allow requests from localhost:3000 during development. The application uses React hooks for state management and follows component-based architecture principles.

The backend implements a service layer pattern, with the TeamService handling business logic and the TeamRepository managing database operations through Spring Data JPA.

## Future Enhancements

Improvements for future versions:
- User authentication and authorization
- Historical standings tracking
- Advanced statistical analysis and comparisons
- Team performance predictions
- Mobile application version
- Database search optimization
- Additional team metrics and analytics
