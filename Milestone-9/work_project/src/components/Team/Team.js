import React from 'react';
import { Link } from 'react-router-dom';
import './Team.css'

const Team = (props) => {
    const { idTeam, strTeam, strTeamBadge, strStadium, strSport, strLeague, strCountry, strGender } = props.team;
    return (
        <div className="col-md-4">
            <div className="team-container">
                <div className="team-img">
                    <img src={strTeamBadge} alt="" />
                </div>
                <h5>Team Details</h5>
                <p>Name: {strTeam}</p>
                <p>Stadium: {strStadium}</p>
                <p>Sport: {strSport}</p>
                <p>League: {strLeague}</p>
                <p>Country: {strCountry}</p>
                <p>Gender: {strGender}</p>
                <Link to={`/details/${idTeam}`}>
                    <button className="btn btn-info">Details</button>
                </Link>
            </div>
        </div>
    );
};

export default Team;