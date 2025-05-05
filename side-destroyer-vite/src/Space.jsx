import {useState, useEffect} from "react";
import Star from "./Star.jsx";
import "./Space.css";


function Space () {

    const STAR_SIZE = 40;

    //keep track of stars 
    const [stars, setStars] = useState([]);

    function getRandomPosition (STAR_SIZE) {
        const xPos = Math.random() * (window.innerWidth - STAR_SIZE);
        const yPos = Math.random() * (window.innerHeight - STAR_SIZE);
    
        return {x: xPos, y: yPos};
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            const {x, y} = getRandomPosition(STAR_SIZE);

            const newStar = {
                id: `${Date.now()}-${Math.floor(Math.random() * 1000)}`,
                x: x,
                y: y
            };
            
            //add new star with previous ones 
            setStars(prevStars => [...prevStars, newStar]);
        }, 2500); //add star every 2.5 seconds 

        //cleanup function
        return () => clearInterval(intervalId);
    }, []);

    function destroyStar(idToRemove) {
        setStars(prevStars =>
            //only keep stars whose id !== the one you want to remove 
            prevStars.filter(star => star.id !== idToRemove)
        );
    }
      

    return (
        <div className="space">    
            {stars.map(({id, x, y}) => (
                <Star
                key={id}
                id={id}
                x={x}
                y={y}
                destroyStar={destroyStar}
                />
            ))}
        </div>
    );
}

export default Space;