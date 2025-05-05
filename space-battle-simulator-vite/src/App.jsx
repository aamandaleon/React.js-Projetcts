import { useState } from 'react'
import './App.css'

function App({minDamage=0, maxDamage=50}) {

  const INITIAL_HEALTH = 100;
  const INITIAL_STATUS = "ongoing";


  const [playerHealth, setPlayerHealth] = useState(INITIAL_HEALTH);
  const [enemyHealth, setEnemyHealth] = useState(INITIAL_HEALTH);

  const [gameStatus, setGameStatus] = useState(INITIAL_STATUS); // Possible values: "ongoing", "won", "lost", "draw"

  function handleAttack () {
    const playerAttack = Math.floor(Math.random() * (maxDamage - minDamage + 1)) + minDamage;
		const enemyAttack = Math.floor(Math.random() * (maxDamage - minDamage + 1)) + minDamage;

    const newPlayerHealth = Math.max(playerHealth - enemyAttack, 0);
		const newEnemyHealth = Math.max(enemyHealth - playerAttack, 0);

    //update health
    setPlayerHealth(newPlayerHealth);
		setEnemyHealth(newEnemyHealth);

    //track game status 
    if (newPlayerHealth === 0 && newEnemyHealth === 0)
		{
			setGameStatus("draw");
		}
		else if (newEnemyHealth === 0)
		{
			setGameStatus("won");
		}
		else if (newPlayerHealth === 0)
		{
			setGameStatus("lost");
		}

  }

  function handleRestart ()
	{
		setPlayerHealth(INITIAL_HEALTH);
		setEnemyHealth(INITIAL_HEALTH);
		setGameStatus(INITIAL_STATUS);
	}

  function renderGameStatusMessage ()
	{
		switch (gameStatus)
		{
			case "won":
				return "Congratulations! You've successfully defended your spacecraft.";
			case "lost":
				return "Mission Failed. Your spacecraft has been defeated.";
			case "draw":
				return "It's a draw! Both spacecrafts have been neutralized.";
			default:
				return "Engage the enemy!";
		}
	}

  function renderHealth (health)
	{
		let emoji;

		if (health === INITIAL_HEALTH)
		{
			emoji = "❤️";
		}
		else if (health === 0)
		{
			emoji = "💀";
		}
		else
		{
			emoji = "❤️‍🩹";
		}

		return `${health} ${emoji}`;
	}


  return (
		<div className={"main-container"}>
			<div className={"title-container"}>
				<h1>Space Battle Simulator</h1>
			</div>

			<div className="game-container">
				<div className={"player"}>
					<p>Player Health: <span className={"score"}>{renderHealth(playerHealth)}</span></p>
				</div>

				{
					gameStatus === "ongoing"
					&&
					<div className={"attack"}>
						<button onClick={handleAttack}>Fire!</button>
					</div>
				}

				{
					gameStatus !== "ongoing"
					&&
					<div className={"restart"}>
						<button onClick={handleRestart}>Restart?</button>
					</div>
				}

				<div className={"enemy"}>
					<p>Enemy Health: <span className={"score"}>{renderHealth(enemyHealth)}</span></p>
				</div>
			</div>

			<div className={"message-container"}>
				<p>{renderGameStatusMessage()}</p>
			</div>
		</div>
	);
}

export default App
