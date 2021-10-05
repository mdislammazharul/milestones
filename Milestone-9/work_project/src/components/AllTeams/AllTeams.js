import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import Team from '../Team/Team';
import './AllTeams.css'

const AllTeams = () => {

    const [teams, setTeams] = useState([])
    const [searchText, setSearchText] = useState("")
    console.log(teams)

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${searchText}`)
            .then(res => res.json())
            .then(data => setTeams(data.teams))
    }, [searchText])

    const handleOnChange = (searchTeam) => {
        setSearchText(searchTeam.target.value);
    }

    return (
        <div className="team-container">
            <h4>This is All Teams</h4>

            <div className="search-box">
                <input onChange={handleOnChange} type="text" placeholder="search your favourite team" />
                <button className="btn- btn-danger">search</button>
            </div>
            <div className="temas">
                <div className="row">
                    {
                        teams?.map(team =>
                            <Team key={team.idTeam} team={team}></Team>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default AllTeams;