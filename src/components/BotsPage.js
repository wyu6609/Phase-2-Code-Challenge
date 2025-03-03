import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //state of bot collections
  const [robots, setRobots] = useState([]);
  //state of your bot army collection
  const [yourRobots, setYourRobots] = useState([]);
  //UseEffect on Fetch api
  useEffect(() => {
    fetchAPI();
  }, []);
  const fetchAPI = () => {
    fetch("http://localhost:8002/bots")
      .then((resp) => resp.json())
      .then((data) => setRobots(data));
  };
  //add bot to YourBotArmy
  const onAddItem = (robotObj) => {
    if (yourRobots.includes(robotObj) === false) {
      setYourRobots([...yourRobots, robotObj]);
    }
  };
  //delete YOUR Robot
  const deleteYourRobot = (robotObj) => {
    setYourRobots(yourRobots.filter((el) => el.id !== robotObj.id));
  };

  //delete bot from collection
  const deleteMainBot = (robotObj) => {
    fetch(`http://localhost:8002/bots/${robotObj.id}`, {
      method: "DELETE",
    }).then(() => {
      setRobots(robots.filter((el) => el.id !== robotObj.id));
      setYourRobots(yourRobots.filter((el) => el.id !== robotObj.id));
    });
  };

  return (
    <div>
      <YourBotArmy
        yourRobots={yourRobots}
        deleteHandler={deleteYourRobot}
        clickHandler={() => {}}
      />
      <BotCollection
        robots={robots}
        clickHandler={onAddItem}
        deleteHandler={deleteMainBot}
      />
    </div>
  );
}

export default BotsPage;
