import React from "react"
import Standings from '../standings/Standings';

const Home = ({teams}) => {
  return (
    <Standings teams={teams} />
  )
}

export default Home