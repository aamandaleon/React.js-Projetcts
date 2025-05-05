import "./MissionFilter.css"

function MissionFilter ({setFilter}) {
    const STATUSES = ["All", "Planned", "Active", "Completed"];

    return (
        <>
            //create a button for each status
            {STATUSES.map((status, index) => (
                <button 
                    key={index} 
                    onClick={() => setFilter(status)}
                    className="filterButton"
                >
                    {status}
                </button>
            ))
            }
        </>
    );
}

export default MissionFilter;