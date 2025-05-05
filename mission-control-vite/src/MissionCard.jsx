import "./MissionCard.css"

function MissionCard ({name, status, crew}) {
    return (
        <>
            <h2 className="title">{name}</h2>
            <p className="detail">Status: {status}</p>
            <p className="detail">Crew: {crew.join(", ")}</p>

        </>
    );
}

export default MissionCard;