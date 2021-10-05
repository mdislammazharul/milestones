import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useState } from 'react/cjs/react.development';
import './TeamDetails.css'
import male from '../../images/male.png'
import female from '../../images/female.png'

const TeamDetails = () => {
    const { teamId } = useParams();
    console.log(teamId);

    const [details, setDetails] = useState({})

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`)
            .then(res => res.json())
            .then(data => setDetails(data.teams[0]))
    }, [])

    return (
        <div>
            <div className="team-container">
                <div className="male-female logo-img">
                    {details.strGender === "Male" ?
                        <img src={male} alt="" /> :
                        <img src={female} alt="" />
                    }
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="logo-img">
                            <img src={details.strTeamBadge} alt="" />
                        </div>
                        <p>{details.strLeague}</p>
                        <p>{details.strStadiumDescription}</p>
                    </div>
                    <div className="col-md-6">
                        <p>{details.strDescriptionEN}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamDetails;