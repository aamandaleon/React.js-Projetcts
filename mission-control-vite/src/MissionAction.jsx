import "./MissionAction.css"

function MissionAction ({missionId, onUpdateMissionStatus}) {
 return (
    <>
        <button className="actionButton"
        onClick={() => onUpdateMissionStatus(missionId, "Active")}>Launch
        </button>

        <button className="actionButton"
        onClick={() => onUpdateMissionStatus(missionId, "Completed")}>Complete
        </button>
    </>
 );
}

export default MissionAction;