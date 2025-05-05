import {useState} from "react";

import "./MissionControl.css";
import MissionCard from "./MissionCard";
import MissionAction from "./MissionAction";
import MissionFilter from "./MissionFilter";

function MissionControl ({initialMissions}) {

    //to change the list of missions call setMissions
    const [missions, setMissions] = useState(initialMissions); //starts at beg of array 
    //to change value of filter call setFilter
    const [filter, setFilter] = useState("All"); //starts as all

    //function to update the status of a mission
    function updateMissionStatus(id, newStatus) {
        setMissions(prevMissions => 
            prevMissions.map(mission =>
                //if id matches create new mission object with updated status 
                mission.id === id ?{...mission, status: newStatus} : mission
            )
        );
    }

    //new array that only includes missions that match filter 
    const filteredMissions = missions.filter (mission => {
        //is user selected All return every mission 
        //otherwise only include missions where the status === filter
        return filter ==="All" || mission.status === filter;
    });

    return (
        
        <div className="missionControl">
            <h1>Space Mission Control</h1>

            <div className="filterContainer">
                <MissionFilter setFilter={setFilter}/>
            </div>

            {
                filteredMissions.map(mission => {
                    const {id, name, status, crew} = mission;
                    return (
                        <div key={id}
                            className="missionContainer">
                            <div>
                                <MissionCard 
                                    name={name}
                                    status={status}
                                    crew={crew}
                                />
                            </div>

                            <div>
                                <MissionAction
                                missionId={id}
                                /* pass callback funtion*/
                                onUpdateMissionStatus={updateMissionStatus}
                                />
                            </div>

                        </div>
                
                        );
                })
            }
        </div>
    )
}

export default MissionControl;