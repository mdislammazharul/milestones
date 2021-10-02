import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useState } from 'react/cjs/react.development';
import './TeamDetails.css'

const TeamDetails = (props) => {
    const { teamId } = useParams();

    const [details, setDetails] = useState([])

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`)
            .then(res => res.json())
            .then(data => setDetails(data.teams[0]))
    }, [])

    return (
        <div className="details">
            <h1>Hello I'm team details</h1>
            <div className="team-details">
                <div className="male-female">
                    {
                        details.strGender == "Male" ? <h5>male Player</h5> : <h5>Female player</h5>
                    }
                </div>
                <div className="row">
                    <div className="cold-md-4">
                        <img className="w-25" src={details.strTeamBadge} alt="" />
                    </div>
                    <div className="cold-md-4">
                        <p>{details.strDescriptionEN}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamDetails;