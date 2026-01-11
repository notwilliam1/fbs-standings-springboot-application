import "./Hero.css";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";

const Hero = ({ teams }) => {
  return (
    <div>
        <Carousel>  
            {
                teams.map((team) =>{
                    return (
                        <Paper>
                            <div className = 'team-card-container'>
                                <div className = 'team-card'>
                                    <div className = 'team-details'>
                                        <div className = 'team-logo'>
                                            <img src={team.logoUrl} alt={team.name} />
                                        </div>
                                        <div className = 'team-name'>
                                            <h4>{team.name}</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Paper>
                    )
                })
            }
        </Carousel>
    </div>
  )
}

export default Hero;