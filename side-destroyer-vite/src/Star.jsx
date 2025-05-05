import { useRef, useEffect} from "react";
import "./Star.css";

function Star ({id, x, y, destroyStar}) {
    const starRef = useRef(null);
    
    // Focus the star on mount
    useEffect(() => {
        if (starRef.current) {
            //focus it after its mounted
            starRef.current.focus();
        }
    }, []);

    //calls function to remove star from Space.jsx
    function handleClick (event)
	{
		destroyStar(id);
	}

    return (
        <div
            ref={starRef}
            //focus div
            tabIndex="0"
            onClick={handleClick}
            style={{left: x, top: y}}
            className="star"
        >
            &#9733;
        </div>
    );

}

export default Star;