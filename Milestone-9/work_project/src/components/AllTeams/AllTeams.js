import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './AllTeams.css'

const AllTeams = () => {

    const [teams, setTeams] = useState([]);
    const [searchText, setSearchText] = useState('')

    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=Arsenal')
            .then(res => res.json())
            .then(data => setTeams(data?.teams))
    }, [])
    console.log(teams)

    const handleOnChange = (e) => {
        setSearchText(e.target.value);
    }

    return (
        <div className="team-container">
            <h1>Hello All Teams</h1>
            <div className="search-box">
                <input onChange={handleOnChange} type="text" placeholder="Enter team name" />
                <button className="btn btn-danger">Search</button>
            </div>
            <div className="teams">
                <div className="row">
                    {
                        teams.map((team) => <div className="col-md-4">
                            <div className="cart">
                                <div className="logo-image">
                                    <img className="w-25" src={team.strTeamBadge} alt="" />
                                    <h1>{team.strTeam}</h1>
                                    <p>{team.strStadium}</p>
                                    <p>{team.strLeague}</p>
                                    {/* when we will click the Details Button, then we have to show the details of the particular team, that means the particular id for the team. so here is the dynamic routing is inserted */}
                                    <Link to={`/details/${team.idTeam}`}>
                                        <button className="btn btn-success">Details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllTeams;